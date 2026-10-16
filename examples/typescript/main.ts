interface Forecast {
  current: { temperature_2m: number };
}

async function main(): Promise<void> {
  const url = new URL("https://api.open-meteo.com/v1/forecast");
  url.search = new URLSearchParams({
    latitude: "40.71",
    longitude: "-74.01",
    current: "temperature_2m",
  });
  try {
    const response = await fetch(url, { signal: AbortSignal.timeout(15_000) });
    if (!response.ok) throw new Error("HTTP " + response.status);
    const data = (await response.json()) as Forecast;
    console.log("Temperature: " + data.current.temperature_2m + " °C");
  } catch (error) {
    console.error("Weather request failed:", error);
    process.exitCode = 1;
  }
}

main();
