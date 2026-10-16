using System.Text.Json;

using var client = new HttpClient { Timeout = TimeSpan.FromSeconds(15) };
var url = "https://api.open-meteo.com/v1/forecast"
    + "?latitude=40.71&longitude=-74.01&current=temperature_2m";

try
{
    using var response = await client.GetAsync(url);
    response.EnsureSuccessStatusCode();
    await using var stream = await response.Content.ReadAsStreamAsync();
    using var json = await JsonDocument.ParseAsync(stream);
    var temperature = json.RootElement.GetProperty("current")
        .GetProperty("temperature_2m").GetDouble();
    Console.WriteLine("Temperature: " + temperature.ToString("F1") + " °C");
}
catch (Exception error)
{
    Console.Error.WriteLine("Weather request failed: " + error.Message);
    Environment.ExitCode = 1;
}
