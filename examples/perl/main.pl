use strict;
use warnings;
use HTTP::Tiny;
use JSON::PP qw(decode_json);

my $url = "https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.01&current=temperature_2m";
my $response = HTTP::Tiny->new(timeout => 15)->get($url);
die "Weather request failed: $response->{status} $response->{reason}\n"
    unless $response->{success};

my $data = decode_json($response->{content});
print "Temperature: $data->{current}{temperature_2m} °C\n";
