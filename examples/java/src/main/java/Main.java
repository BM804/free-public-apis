import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;

public class Main {
    public static void main(String[] args) throws Exception {
        URI uri = URI.create(
            "https://api.open-meteo.com/v1/forecast"
                + "?latitude=40.71&longitude=-74.01&current=temperature_2m"
        );
        HttpClient client = HttpClient.newBuilder()
            .connectTimeout(Duration.ofSeconds(15))
            .build();
        HttpRequest request = HttpRequest.newBuilder(uri)
            .timeout(Duration.ofSeconds(15))
            .GET()
            .build();
        HttpResponse<String> response =
            client.send(request, HttpResponse.BodyHandlers.ofString());
        if (response.statusCode() < 200 || response.statusCode() >= 300) {
            throw new IllegalStateException("HTTP " + response.statusCode());
        }
        JsonNode root = new ObjectMapper().readTree(response.body());
        double temperature = root.path("current").path("temperature_2m").asDouble();
        System.out.printf("Temperature: %.1f °C%n", temperature);
    }
}
