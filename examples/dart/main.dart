import 'dart:convert';
import 'dart:io';

Future<void> main() async {
  final uri = Uri.https('api.open-meteo.com', '/v1/forecast', {
    'latitude': '40.71',
    'longitude': '-74.01',
    'current': 'temperature_2m',
  });
  final client = HttpClient()..connectionTimeout = const Duration(seconds: 15);
  try {
    final request = await client.getUrl(uri).timeout(const Duration(seconds: 15));
    final response = await request.close().timeout(const Duration(seconds: 15));
    if (response.statusCode < 200 || response.statusCode >= 300) {
      throw HttpException('HTTP ' + response.statusCode.toString());
    }
    final body = await utf8.decoder.bind(response).join();
    final data = jsonDecode(body) as Map<String, dynamic>;
    final current = data['current'] as Map<String, dynamic>;
    print('Temperature: ' + current['temperature_2m'].toString() + ' °C');
  } catch (error) {
    stderr.writeln('Weather request failed: $error');
    exitCode = 1;
  } finally {
    client.close();
  }
}
