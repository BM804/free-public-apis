"""Fetch current temperature from the no-key Open-Meteo Forecast API."""

import json
from urllib.error import HTTPError, URLError
from urllib.parse import urlencode
from urllib.request import urlopen

params = urlencode({"latitude": 40.71, "longitude": -74.01, "current": "temperature_2m"})
url = "https://api.open-meteo.com/v1/forecast?" + params

try:
    with urlopen(url, timeout=15) as response:
        current = json.load(response)["current"]
    print("Temperature: {} °C".format(current["temperature_2m"]))
except (HTTPError, URLError, TimeoutError, json.JSONDecodeError, KeyError) as error:
    raise SystemExit("Weather request failed: {}".format(error)) from error
