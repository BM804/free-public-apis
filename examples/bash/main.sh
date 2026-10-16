#!/usr/bin/env bash
set -euo pipefail

curl --fail --silent --show-error --max-time 15 --get \
  'https://api.open-meteo.com/v1/forecast' \
  --data-urlencode 'latitude=40.71' \
  --data-urlencode 'longitude=-74.01' \
  --data-urlencode 'current=temperature_2m' \
  | jq -r '"Temperature: \(.current.temperature_2m) °C"'
