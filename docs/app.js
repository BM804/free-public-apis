const grid = document.querySelector("#api-grid");
const search = document.querySelector("#search");
const category = document.querySelector("#category");
const auth = document.querySelector("#auth");
const count = document.querySelector("#result-count");
let apis = [];

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
  const results = apis.filter((api) => {
    const haystack = [api.name, api.category, api.description].join(" ").toLowerCase();
    return (!term || haystack.includes(term))
      && (!selectedCategory || api.category === selectedCategory)
      && (!selectedAuth || api.authentication === selectedAuth);
  });
  count.textContent = results.length + (results.length === 1 ? " API found" : " APIs found");
  grid.innerHTML = results.map((api) =>
    '<article class="api-card"><div class="card-top"><span class="category-icon" aria-hidden="true">'
    + (categoryIcons[api.category] || "✦") + '</span><span class="tag">' + escapeHtml(api.category) + '</span></div>'
    + '<h3>' + escapeHtml(api.name) + '</h3><p>' + escapeHtml(api.description) + '</p>'
    + '<p class="key-tag"><span class="key-status key-status-' + escapeHtml(api.authentication.toLowerCase()) + '">'
    + escapeHtml(api.authentication) + ' key</span><span>Checked ' + escapeHtml(api.checked_on) + '</span></p>'
    + '<div class="card-links"><a href="'
    + escapeHtml(api.docs_url) + '" target="_blank" rel="noopener noreferrer">Official docs ↗</a>'
    + '<a href="' + escapeHtml(api.pricing_or_limits_url)
    + '" target="_blank" rel="noopener noreferrer">Pricing &amp; limits ↗</a></div></article>'
  ).join("");
}

async function start() {
  try {
    const response = await fetch("data/apis.json");
    if (!response.ok) throw new Error("Catalog request failed: " + response.status);
    const payload = await response.json();
    apis = payload.apis;
    const categories = [...new Set(apis.map((api) => api.category))].sort();
    category.insertAdjacentHTML("beforeend", categories.map((item) =>
      '<option value="' + escapeHtml(item) + '">' + escapeHtml(item) + '</option>'
    ).join(""));
    document.querySelector("#total-count").textContent = apis.length;
    document.querySelector("#directory-total").textContent = apis.length;
    document.querySelector("#category-count").textContent = categories.length;
    render();
  } catch {
    count.textContent = "The catalog could not load. Please open the JSON catalog from GitHub.";
    grid.innerHTML = '<a href="https://github.com/BM804/free-public-apis/blob/main/data/apis.json">Open the catalog JSON</a>';
  }
}

search.addEventListener("input", render);
category.addEventListener("change", render);
auth.addEventListener("change", render);
document.querySelectorAll(".hero-topics [data-category]").forEach((button) => {
  button.addEventListener("click", () => {
    category.value = button.dataset.category;
    render();
    document.querySelector("#directory").scrollIntoView({ behavior: "smooth" });
  });
});
start();
