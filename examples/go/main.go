package main

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"net/url"
	"time"
)

func main() {
	endpoint, err := url.Parse("https://api.open-meteo.com/v1/forecast")
	if err != nil {
		panic(err)
	}
	query := endpoint.Query()
	query.Set("latitude", "40.71")
	query.Set("longitude", "-74.01")
	query.Set("current", "temperature_2m")
	endpoint.RawQuery = query.Encode()

	ctx, cancel := context.WithTimeout(context.Background(), 15*time.Second)
	defer cancel()
	request, err := http.NewRequestWithContext(ctx, http.MethodGet, endpoint.String(), nil)
	if err != nil {
		panic(err)
	}
	response, err := http.DefaultClient.Do(request)
	if err != nil {
		panic(err)
	}
	defer response.Body.Close()
	if response.StatusCode < 200 || response.StatusCode >= 300 {
		panic("unexpected HTTP status: " + response.Status)
	}

	var payload map[string]any
	if err := json.NewDecoder(response.Body).Decode(&payload); err != nil {
		panic(err)
	}
	current := payload["current"].(map[string]any)
	fmt.Printf("Temperature: %.1f °C\n", current["temperature_2m"])
}
