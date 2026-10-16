# Free Public APIs Directory

<p align="center">
  <a href="https://bm804.github.io/free-public-apis/">
    <img src="docs/assets/api-network-hero.png" alt="A connected map of public data, APIs, books, weather, science, finance, and AI" width="100%">
  </a>
</p>

> Find free APIs for weather, maps, books, research, finance, testing, open data, and more—with direct documentation and honest notes about keys, quotas, and terms.

[![Curated APIs](https://img.shields.io/badge/BM804%20curated-76%20APIs-2563eb)](docs/data/apis.json)
[![Community snapshot](https://img.shields.io/badge/community%20snapshot-2%2C135%20listings-8b5cf6)](docs/data/community-apis.json)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Community catalog](https://img.shields.io/badge/explore-community%20API%20list-8b5cf6?logo=github)](https://github.com/public-apis/public-apis)

**Looking for free APIs to use in a project?** This human-curated directory helps developers find public APIs that offer no-cost access, an open-data endpoint, or a clearly identified free tier. Each entry links to provider documentation and a page describing pricing, quotas, or usage policy when available.

**Browse:** [API directory website](https://bm804.github.io/free-public-apis/) · [BM804 curated JSON](docs/data/apis.json) · [Imported community catalog JSON](docs/data/community-apis.json) · [Python search tool](scripts/search_apis.py)

<p align="center"><strong>Need an even wider list?</strong> Explore the community-maintained <a href="https://github.com/public-apis/public-apis">public-apis/public-apis</a> directory too.</p>

**Code examples:** [Full setup and run guide for 18 programming languages](examples/README.md). Use the direct links below to open each example on GitHub.

## Quick start

1. Pick an API and read its official documentation and current terms.
2. Check whether a key is needed, what the free quota is, and whether your use case is allowed.
3. Make a small request and cache responses where the provider recommends it.

```python
import requests

url = "https://api.open-meteo.com/v1/forecast"
params = {"latitude": 40.71, "longitude": -74.01, "current": "temperature_2m"}
response = requests.get(url, params=params, timeout=15)
response.raise_for_status()
print(response.json()["current"])
```

## Programming language examples

Each link opens the source file in GitHub. See the [examples guide](examples/README.md) for prerequisites and local run commands.

| Language | Example |
|---|---|
| Bash | [main.sh](examples/bash/main.sh) |
| C | [main.c](examples/c/main.c) |
| C++ | [main.cpp](examples/cpp/main.cpp) |
| C# | [Program.cs](examples/csharp/Program.cs) |
| Dart | [main.dart](examples/dart/main.dart) |
| Go | [main.go](examples/go/main.go) |
| Java | [Main.java](examples/java/src/main/java/Main.java) |
| JavaScript | [main.mjs](examples/javascript/main.mjs) |
| Kotlin | [Main.kt](examples/kotlin/Main.kt) |
| Perl | [main.pl](examples/perl/main.pl) |
| PHP | [main.php](examples/php/main.php) |
| PowerShell | [main.ps1](examples/powershell/main.ps1) |
| Python | [main.py](examples/python/main.py) |
| R | [main.R](examples/r/main.R) |
| Ruby | [main.rb](examples/ruby/main.rb) |
| Rust | [main.rs](examples/rust/src/main.rs) |
| Swift | [main.swift](examples/swift/main.swift) |
| TypeScript | [main.ts](examples/typescript/main.ts) |

## Free AI and LLM APIs

These providers currently document a no-cost tier, trial access, or credits. Limits and eligibility differ, so check each provider’s current terms before building on it.

| Provider | API docs | Free access details |
|---|---|---|
| Google Gemini | [Gemini API docs](https://ai.google.dev/gemini-api/docs) | [Free-tier pricing and model quotas](https://ai.google.dev/gemini-api/docs/pricing) |
| GroqCloud | [Quickstart](https://console.groq.com/docs/quickstart) | [Free plan rate limits](https://console.groq.com/docs/rate-limits) |
| OpenRouter | [Quickstart](https://openrouter.ai/docs/quickstart) | [Pricing and free models](https://openrouter.ai/pricing/) |
| Cloudflare Workers AI | [Workers AI docs](https://developers.cloudflare.com/workers-ai/) | [Free daily allowance and pricing](https://developers.cloudflare.com/workers-ai/platform/pricing/) |
| Cohere | [API overview](https://docs.cohere.com/reference/about) | [Trial API rate limits](https://docs.cohere.com/v2/docs/rate-limits) |
| Hugging Face | [Inference Providers guide](https://huggingface.co/docs/inference-providers/index) | [Credits and pricing](https://huggingface.co/docs/inference-providers/en/pricing) |
| Mistral | [First API request](https://docs.mistral.ai/getting-started/quickstarts/developer/first-api-request) | [API key and free experimentation access](https://docs.mistral.ai/getting-started/quickstarts/studio/activate-and-generate-api-key) |

## Browse by category

The BM804 curated catalog includes **76 entries across 30 categories**. The imported community snapshot adds **2,135 listings across 51 categories** from the upstream README. The website searches both catalogs and can filter by name, category, authentication, and source.

| Category | APIs |
|---|---|
| Animals | Dog CEO API, The Cat API |
| AI & LLM | Google Gemini API, GroqCloud, OpenRouter Free Models, Cloudflare Workers AI, Cohere Trial API, Hugging Face Inference Providers, Mistral API |
| Books | Google Books, Google Books Volumes, Gutendex, Open Library, Open Library Covers API, Open Library Search |
| Climate | NOAA Climate Data Online, Open-Meteo Climate |
| Culture | Europeana, Internet Archive |
| Design | Google Fonts Developer API |
| Developer Tools | GitHub REST API, GitLab REST API, Stack Exchange API |
| Economics | World Bank Indicators |
| Entertainment | JokeAPI |
| Environment | Open-Meteo Air Quality, OpenAQ, USGS Water Services |
| Finance | CoinGecko Demo API, ExchangeRate API (open.er-api), Frankfurter, FRED |
| Food | Open Brewery DB, Open Food Facts, USDA FoodData Central |
| Games | Open Trivia DB, PokéAPI, Star Wars API (SWAPI) |
| Geocoding | Nominatim, OpenStreetMap Nominatim alternative: Photon |
| Geography | Open-Meteo Geocoding, REST Countries |
| Knowledge | MediaWiki Action API, Wikidata Query Service |
| Maps | OpenStreetMap, Overpass API |
| Media | Pexels, Unsplash |
| Music | iTunes Search, MusicBrainz |
| Nature | GBIF |
| Networking | ipify, Public Suffix List |
| News | GDELT |
| Open Data | Common Crawl Index, US Census Data API, US Data.gov |
| Research | arXiv, arXiv Atom API, Crossref, OpenAlex, OpenAlex Topics API |
| Science | USGS Earthquake Hazards |
| Space | NASA APIs, NASA EONET |
| Technology | Hacker News |
| Testing | DummyJSON, httpbin, JSONPlaceholder, ReqRes |
| Utilities | QRServer |
| Weather | National Weather Service, NOAA Weather API, Open-Meteo, Open-Meteo Forecast, Open-Meteo Marine |

## Free dataset sources — coming soon

I’m preparing a separate directory of free public dataset sources, with source links and notes about licensing, attribution, and access. Follow the [website’s dataset section](https://bm804.github.io/free-public-apis/#datasets) for updates.


For the BM804-curated entries, see [docs/data/apis.json](docs/data/apis.json). For the imported community snapshot, see [docs/data/community-apis.json](docs/data/community-apis.json), or search both catalogs on the [directory site](https://bm804.github.io/free-public-apis/).

## Imported community API catalog

This repository includes a dated, machine-readable snapshot of the API category tables from [`public-apis/public-apis`](https://github.com/public-apis/public-apis), a community-maintained directory. The snapshot contains **2,135 entries in 51 categories** and powers the community filter on the [directory website](https://bm804.github.io/free-public-apis/#directory). Open [the imported JSON](docs/data/community-apis.json) to browse or reuse the data. It records each listing's name, category, description, source URL, authentication label, HTTPS and CORS fields.

Browse the upstream project directly by topic:

<table>
  <tr>
    <td align="center"><strong>🐾 Animals</strong><br><a href="https://github.com/public-apis/public-apis#animals">Explore APIs ↗</a></td>
    <td align="center"><strong>📚 Books</strong><br><a href="https://github.com/public-apis/public-apis#books">Explore APIs ↗</a></td>
    <td align="center"><strong>📍 Geocoding</strong><br><a href="https://github.com/public-apis/public-apis#geocoding">Explore APIs ↗</a></td>
    <td align="center"><strong>🏛️ Government</strong><br><a href="https://github.com/public-apis/public-apis#government">Explore APIs ↗</a></td>
  </tr>
  <tr>
    <td align="center"><strong>🤖 Machine Learning</strong><br><a href="https://github.com/public-apis/public-apis#machine-learning">Explore APIs ↗</a></td>
    <td align="center"><strong>💹 Finance</strong><br><a href="https://github.com/public-apis/public-apis#finance">Explore APIs ↗</a></td>
    <td align="center"><strong>📊 Open Data</strong><br><a href="https://github.com/public-apis/public-apis#open-data">Explore APIs ↗</a></td>
    <td align="center"><strong>🧪 Science &amp; Math</strong><br><a href="https://github.com/public-apis/public-apis#science--math">Explore APIs ↗</a></td>
  </tr>
</table>

<p align="center"><a href="https://github.com/public-apis/public-apis/blob/master/LICENSE">Upstream license: MIT</a> · <a href="https://github.com/public-apis/public-apis/blob/master/CONTRIBUTING.md">Contribute to the community list</a></p>

The snapshot was imported on **2026-10-16** from the upstream README. See [`LICENSES/public-apis-MIT.txt`](LICENSES/public-apis-MIT.txt) for its license notice. The upstream catalog includes APIs with different access models; inclusion here does **not** mean an API is free, available, secure, or suitable for commercial use. Verify the provider's current documentation, pricing, terms, and licenses before use. For no-cost access notes reviewed for this project, use the separate [BM804 curated catalog](docs/data/apis.json).

## What “free” means here

“Free” is not one universal license. Some APIs need no key; others offer a free tier that needs registration, applies rate limits, restricts commercial use, or can change its terms. Open data may have attribution or reuse conditions. **No entry is a promise of unlimited, permanent, or commercial access.** Check the provider’s live pricing and policy pages before shipping an integration.

The catalog records the access model and review date so readers can assess entries. A listed service can change or go offline between reviews. Please open a small, focused issue or pull request when you find a change.

## Search locally

Requires Python 3.9 or newer; no third-party packages are needed.

```sh
python scripts/search_apis.py weather
python scripts/search_apis.py books --no-key
```

## Data format

`docs/data/apis.json` is the BM804 curated catalog. `docs/data/community-apis.json` is the attributed community snapshot and contains its source URL, MIT license, snapshot date, caution notice, and API listing fields. The website loads both files. Follow the terms and attribution requirements of the upstream project and each API provider when reusing data.

## SEO and discovery

This project uses a descriptive title, plain-language summaries, a categorized directory, stable URLs, and links to primary documentation to help people and search engines understand the content. Search engines decide whether and where to show a page; **no repository can guarantee a first-place Google result**. See [Google’s SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) and [people-first content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).

## Contribute

Found a free API or spotted a pricing change? See [CONTRIBUTING.md](CONTRIBUTING.md). Entries should be useful, accurately described, and supported by the provider’s own docs or pricing policy. Please do not add referral links, scraped data, unsupported “unlimited free” claims, or APIs whose free access cannot be verified.

## License

The catalog text and code in this repository are available under the [MIT License](LICENSE). API names, data, terms, and trademarks remain with their respective providers; check each provider’s license and attribution rules.

