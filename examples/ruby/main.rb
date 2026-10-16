require "json"
require "net/http"
require "uri"

begin
  uri = URI("https://api.open-meteo.com/v1/forecast")
  uri.query = URI.encode_www_form(
    latitude: 40.71,
    longitude: -74.01,
    current: "temperature_2m"
  )
  http = Net::HTTP.new(uri.host, uri.port)
  http.use_ssl = true
  http.open_timeout = 15
  http.read_timeout = 15
  response = http.get(uri.request_uri)
  abort("HTTP #{response.code}: #{response.message}") unless response.is_a?(Net::HTTPSuccess)

  data = JSON.parse(response.body)
  puts "Temperature: #{data.fetch('current').fetch('temperature_2m')} °C"
rescue JSON::ParserError, Net::OpenTimeout, Net::ReadTimeout, SocketError => error
  warn "Weather request failed: #{error.message}"
  exit 1
end
