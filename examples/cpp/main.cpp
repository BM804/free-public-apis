#include <curl/curl.h>
#include <iostream>
#include <string>

static size_t write_response(char *data, size_t size, size_t count, void *output) {
    static_cast<std::string *>(output)->append(data, size * count);
    return size * count;
}

int main() {
    CURL *curl = curl_easy_init();
    if (curl == nullptr) {
        std::cerr << "Could not initialize libcurl\n";
        return 1;
    }
    std::string body;
    curl_easy_setopt(curl, CURLOPT_URL,
        "https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.01&current=temperature_2m");
    curl_easy_setopt(curl, CURLOPT_FOLLOWLOCATION, 1L);
    curl_easy_setopt(curl, CURLOPT_TIMEOUT, 15L);
    curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, write_response);
    curl_easy_setopt(curl, CURLOPT_WRITEDATA, &body);

    CURLcode result = curl_easy_perform(curl);
    long status = 0;
    curl_easy_getinfo(curl, CURLINFO_RESPONSE_CODE, &status);
    curl_easy_cleanup(curl);
    if (result != CURLE_OK || status < 200 || status >= 300) {
        std::cerr << "Weather request failed: " << curl_easy_strerror(result)
                  << " (HTTP " << status << ")\n";
        return 1;
    }
    std::cout << body << '\n';
}
