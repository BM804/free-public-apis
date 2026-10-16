<?php
declare(strict_types=1);

$url = 'https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.01&current=temperature_2m';
$handle = curl_init($url);
curl_setopt_array($handle, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CONNECTTIMEOUT => 10,
    CURLOPT_TIMEOUT => 15,
]);

$body = curl_exec($handle);
$status = curl_getinfo($handle, CURLINFO_RESPONSE_CODE);
$error = curl_error($handle);
curl_close($handle);

if ($body === false || $status < 200 || $status >= 300) {
    fwrite(STDERR, "Weather request failed: " . ($error ?: "HTTP " . $status) . PHP_EOL);
    exit(1);
}

$data = json_decode($body, true, flags: JSON_THROW_ON_ERROR);
echo "Temperature: " . $data['current']['temperature_2m'] . " °C" . PHP_EOL;
