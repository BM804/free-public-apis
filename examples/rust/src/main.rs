use serde::Deserialize;
use std::time::Duration;

#[derive(Deserialize)]
struct Forecast {
    current: Current,
}

#[derive(Deserialize)]
struct Current {
    temperature_2m: f64,
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = reqwest::Client::builder()
        .timeout(Duration::from_secs(15))
        .build()?;
    let response = client
        .get("https://api.open-meteo.com/v1/forecast")
        .query(&[
            ("latitude", "40.71"),
            ("longitude", "-74.01"),
            ("current", "temperature_2m"),
        ])
        .send()
        .await?
        .error_for_status()?;
    let forecast: Forecast = response.json().await?;
    println!("Temperature: {:.1} °C", forecast.current.temperature_2m);
    Ok(())
}
