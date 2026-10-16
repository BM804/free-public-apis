#include <curl/curl.h>
#include <stdio.h>
#include <stdlib.h>

static size_t write_response(char *data, size_t size, size_t count, void *output) {
    return fwrite(data, 1, size * count, (FILE *)output);
}

int main(void) {
    CURL *curl = curl_easy_init();
    if (curl == NULL) {
        fprintf(stderr, "Could not initialize libcurl\n");
        return EXIT_FAILURE;
    }

    curl_easy_setopt(curl, CURLOPT_URL,
        "https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.01&current=temperature_2m");
    curl_easy_setopt(curl, CURLOPT_FOLLOWLOCATION, 1L);
    curl_easy_setopt(curl, CURLOPT_TIMEOUT, 15L);
    curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, write_response);
    curl_easy_setopt(curl, CURLOPT_WRITEDATA, stdout);

    CURLcode result = curl_easy_perform(curl);
    long status = 0;
    curl_easy_getinfo(curl, CURLINFO_RESPONSE_CODE, &status);
    curl_easy_cleanup(curl);
    if (result != CURLE_OK || status < 200 || status >= 300) {
        fprintf(stderr, "Weather request failed: %s (HTTP %ld)\n",
                curl_easy_strerror(result), status);
        return EXIT_FAILURE;
    }
    putchar('\n');
    return EXIT_SUCCESS;
}
