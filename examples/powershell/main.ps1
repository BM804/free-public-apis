$ErrorActionPreference = "Stop"
$uri = "https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.01&current=temperature_2m"

try {
    $forecast = Invoke-RestMethod -Uri $uri -TimeoutSec 15
    "Temperature: $($forecast.current.temperature_2m) °C"
}
catch {
    Write-Error "Weather request failed: $($_.Exception.Message)"
    exit 1
}
