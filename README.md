# Free Public APIs Directory

> Find free APIs for weather, maps, books, research, finance, testing, open data, and more—with direct documentation and honest notes about keys, quotas, and terms.

[![API catalog](https://img.shields.io/badge/catalog-69%20APIs-2563eb)](docs/data/apis.json)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](CONTRIBUTING.md)

**Looking for free APIs to use in a project?** This human-curated directory helps developers find public APIs that offer no-cost access, an open-data endpoint, or a clearly identified free tier. Each entry links to provider documentation and a page describing pricing, quotas, or usage policy when available.

**Browse:** [API directory website](https://bm804.github.io/free-public-apis/) · [Machine-readable JSON catalog](docs/data/apis.json) · [Python search tool](scripts/search_apis.py)

**Code examples:** [Use a public API locally in 18 programming languages](examples/README.md). Each language folder contains a runnable example and the guide lists setup requirements and run commands.

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

## Browse by category

The catalog currently includes **69 entries across 29 categories**. The directory website can filter by name, category, or whether a key is needed.

| Category | APIs |
|---|---|
| Animals | Dog CEO API, The Cat API |
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


For the full searchable list and exact provider links, see [docs/data/apis.json](docs/data/apis.json) or visit the [directory site](https://bm804.github.io/free-public-apis/).

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

`docs/data/apis.json` is the source of truth. It contains a version, review date, caution notice, and entries with `name`, `category`, `description`, `authentication`, `docs_url`, `pricing_or_limits_url`, and `checked_on`. You can reuse the catalog in scripts and prototypes; follow the terms and attribution requirements of each API provider.

## SEO and discovery

This project uses a descriptive title, plain-language summaries, a categorized directory, stable URLs, and links to primary documentation to help people and search engines understand the content. Search engines decide whether and where to show a page; **no repository can guarantee a first-place Google result**. See [Google’s SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) and [people-first content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).

## Contribute

Found a free API or spotted a pricing change? See [CONTRIBUTING.md](CONTRIBUTING.md). Entries should be useful, accurately described, and supported by the provider’s own docs or pricing policy. Please do not add referral links, scraped data, unsupported “unlimited free” claims, or APIs whose free access cannot be verified.

## License

The catalog text and code in this repository are available under the [MIT License](LICENSE). API names, data, terms, and trademarks remain with their respective providers; check each provider’s license and attribution rules.
