const grid = document.querySelector("#api-grid");
const search = document.querySelector("#search");
const category = document.querySelector("#category");
const auth = document.querySelector("#auth");
const catalog = document.querySelector("#catalog");
const count = document.querySelector("#result-count");
const showMore = document.querySelector("#show-more");
let apis = [];
let visibleLimit = 100;

const categoryIcons = {
  "AI & LLM": "🤖", Animals: "🐾", Books: "📚", Climate: "🌍", Culture: "🏛️",
  Design: "🎨", "Developer Tools": "🧰", Economics: "📈", Entertainment: "🎭",
  Environment: "🌿", Finance: "💹", Food: "🍋", Games: "🎮", Geocoding: "📍",
  Geography: "🌐", Knowledge: "💡", Maps: "🗺️", Media: "📷", Music: "🎵",
  Nature: "🌱", Networking: "🔗", News: "📰", "Open Data": "📊", Research: "🔬",
  Science: "🧪", Space: "🪐", Technology: "⚙️", Testing: "🧩", Utilities: "✨",
  Weather: "🌦️",
};

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[char]);
}

function render() {
  const term = search.value.trim().toLowerCase();
  const selectedCategory = category.value;
  const selectedAuth = auth.value;
  const selectedCatalog = catalog.value;
  const results = apis.filter((api) => {
    const haystack = [api.name, api.category, api.description].join(" ").toLowerCase();
    return (!term || haystack.includes(term))
      && (!selectedCategory || api.category === selectedCategory)
      && (!selectedAuth || api.auth_filter === selectedAuth)
      && (!selectedCatalog || api.catalog === selectedCatalog);
  });
  const visible = results.slice(0, visibleLimit);
  count.textContent = results.length > visible.length
    ? "Showing " + visible.length + " of " + results.length + " API listings"
    : results.length + (results.length === 1 ? " API found" : " APIs found");
  showMore.hidden = visible.length >= results.length;
  grid.innerHTML = visible.map((api) =>
    '<article class="api-card"><div class="card-top"><span class="category-icon" aria-hidden="true">'
    + (categoryIcons[api.category] || "✦") + '</span><span class="tag">' + escapeHtml(api.category) + '</span></div>'
    + '<h3>' + escapeHtml(api.name) + '</h3><p>' + escapeHtml(api.description) + '</p>'
    + '<p class="key-tag"><span class="key-status key-status-' + escapeHtml(api.auth_filter.toLowerCase()) + '">'
    + 'Auth: ' + escapeHtml(api.authentication) + '</span><span>' + escapeHtml(api.catalog_label) + '</span></p>'
    + '<div class="card-links"><a href="'
    + escapeHtml(api.docs_url) + '" target="_blank" rel="noopener noreferrer">Official docs ↗</a>'
    + '<a href="' + escapeHtml(api.pricing_or_limits_url)
    + '" target="_blank" rel="noopener noreferrer">'
    + (api.catalog === "community" ? "Provider page ↗" : "Pricing &amp; limits ↗")
    + '</a></div></article>'
  ).join("");
}

async function start() {
  try {
    const response = await fetch("data/apis.json");
    if (!response.ok) throw new Error("Catalog request failed: " + response.status);
    const [payload, community] = await Promise.all([
      response.json(),
      fetch("data/community-apis.json").then((res) => {
        if (!res.ok) throw new Error("Community catalog request failed: " + res.status);
        return res.json();
      }),
    ]);
    const curatedApis = payload.apis.map((api) => ({
      ...api,
      catalog: "curated",
      catalog_label: "Curated by BM804",
      auth_filter: api.authentication,
    }));
    const communityApis = community.apis.map((api) => ({
      ...api,
      docs_url: api.url,
      pricing_or_limits_url: api.url,
      checked_on: community.snapshot_date,
      catalog: "community",
      catalog_label: "public-apis community",
      auth_filter: api.authentication === "No" ? "No" : "Yes",
    }));
    apis = [...curatedApis, ...communityApis];
    const categories = [...new Set(apis.map((api) => api.category))].sort();
    category.insertAdjacentHTML("beforeend", categories.map((item) =>
      '<option value="' + escapeHtml(item) + '">' + escapeHtml(item) + '</option>'
    ).join(""));
    document.querySelector("#total-count").textContent = apis.length;
    document.querySelector("#directory-total").textContent = apis.length;
    document.querySelector("#category-count").textContent = categories.length;
    render();
  } catch {
    count.textContent = "The catalogs could not load. Please open the JSON catalogs on GitHub.";
    grid.innerHTML = '<a href="https://github.com/BM804/free-public-apis/tree/main/docs/data">Open the catalog data</a>';
  }
}

function resetAndRender() {
  visibleLimit = 100;
  render();
}
search.addEventListener("input", resetAndRender);
category.addEventListener("change", resetAndRender);
auth.addEventListener("change", resetAndRender);
catalog.addEventListener("change", resetAndRender);
showMore.addEventListener("click", () => {
  visibleLimit += 100;
  render();
});
document.querySelectorAll(".hero-topics [data-category]").forEach((button) => {
  button.addEventListener("click", () => {
    category.value = button.dataset.category;
    resetAndRender();
    document.querySelector("#directory").scrollIntoView({ behavior: "smooth" });
  });
});
start();

