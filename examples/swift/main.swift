import Foundation
#if canImport(FoundationNetworking)
import FoundationNetworking
#endif

struct Forecast: Decodable {
    struct Current: Decodable {
        let temperature_2m: Double
    }
    let current: Current
}

@main
struct Example {
    static func main() async throws {
        var components = URLComponents(string: "https://api.open-meteo.com/v1/forecast")!
        components.queryItems = [
            URLQueryItem(name: "latitude", value: "40.71"),
            URLQueryItem(name: "longitude", value: "-74.01"),
            URLQueryItem(name: "current", value: "temperature_2m"),
        ]
        var request = URLRequest(url: components.url!)
        request.timeoutInterval = 15
        let (data, response) = try await URLSession.shared.data(for: request)
        guard let http = response as? HTTPURLResponse,
              (200..<300).contains(http.statusCode) else {
            throw URLError(.badServerResponse)
        }
        let forecast = try JSONDecoder().decode(Forecast.self, from: data)
        print("Temperature:", forecast.current.temperature_2m, "°C")
    }
}
