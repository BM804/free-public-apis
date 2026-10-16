"""Search the local Free Public APIs catalog without installing dependencies."""

from __future__ import annotations

import argparse
import json
from pathlib import Path


CATALOG = Path(__file__).resolve().parents[1] / "data" / "apis.json"


def load_catalog() -> list[dict[str, str]]:
    """Load API entries from the repository's JSON catalog."""
    with CATALOG.open(encoding="utf-8") as catalog_file:
        payload = json.load(catalog_file)
    return payload["apis"]


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("query", nargs="?", default="", help="name, category, or keyword")
    parser.add_argument("--no-key", action="store_true", help="show APIs marked as requiring no key")
    args = parser.parse_args()

    query = args.query.casefold()
    matches = [
        api for api in load_catalog()
        if query in " ".join((api["name"], api["category"], api["description"])).casefold()
        and (not args.no_key or api["authentication"] == "No")
    ]
    if not matches:
        print("No matching APIs found.")
        return
    for api in sorted(matches, key=lambda item: (item["category"], item["name"])):
        print("{} [{}] — key: {}".format(api["name"], api["category"], api["authentication"]))
        print("  Docs: {}".format(api["docs_url"]))
        print("  Limits: {}".format(api["pricing_or_limits_url"]))


if __name__ == "__main__":
    main()
