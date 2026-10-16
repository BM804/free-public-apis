import java.net.URI
import java.net.http.HttpClient
import java.net.http.HttpRequest
import java.net.http.HttpResponse
import java.time.Duration

fun main() {
    val uri = URI.create(
        "https://api.open-meteo.com/v1/forecast" +
            "?latitude=40.71&longitude=-74.01&current=temperature_2m"
    )
    val client = HttpClient.newBuilder()
        .connectTimeout(Duration.ofSeconds(15))
        .build()
    val request = HttpRequest.newBuilder(uri)
        .timeout(Duration.ofSeconds(15))
        .GET()
        .build()
    try {
        val response = client.send(request, HttpResponse.BodyHandlers.ofString())
        check(response.statusCode() in 200..299) { "HTTP " + response.statusCode() }
        println(response.body())
    } catch (error: Exception) {
        System.err.println("Weather request failed: " + error.message)
        kotlin.system.exitProcess(1)
    }
}
