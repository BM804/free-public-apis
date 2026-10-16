const grid = document.querySelector("#api-grid");
const search = document.querySelector("#search");
const category = document.querySelector("#category");
const auth = document.querySelector("#auth");
const count = document.querySelector("#result-count");
let apis = [];

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
    '<article class="api-card"><span class="tag">' + escapeHtml(api.category) + '</span>'
    + '<h3>' + escapeHtml(api.name) + '</h3><p>' + escapeHtml(api.description) + '</p>'
    + '<p class="key-tag">API key: ' + escapeHtml(api.authentication) + ' · Checked '
    + escapeHtml(api.checked_on) + '</p><div class="card-links"><a href="'
    + escapeHtml(api.docs_url) + '" target="_blank" rel="noopener noreferrer">Official docs ↗</a>'
    + '<a href="' + escapeHtml(api.pricing_or_limits_url)
    + '" target="_blank" rel="noopener noreferrer">Pricing &amp; limits ↗</a></div></article>'
  ).join("");
}

async function start() {
  try {
    const response = await fetch("../data/apis.json");
    if (!response.ok) throw new Error("Catalog request failed: " + response.status);
    const payload = await response.json();
    apis = payload.apis;
    const categories = [...new Set(apis.map((api) => api.category))].sort();
    category.insertAdjacentHTML("beforeend", categories.map((item) =>
      '<option value="' + escapeHtml(item) + '">' + escapeHtml(item) + '</option>'
    ).join(""));
    document.querySelector("#total-count").textContent = apis.length;
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
start();
