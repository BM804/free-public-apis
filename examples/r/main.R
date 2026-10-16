if (!requireNamespace("jsonlite", quietly = TRUE)) {
  stop("Install the dependency once with install.packages('jsonlite')")
}

options(timeout = 15)
endpoint <- paste0(
  "https://api.open-meteo.com/v1/forecast",
  "?latitude=40.71&longitude=-74.01&current=temperature_2m"
)
connection <- url(endpoint, open = "rb")
body <- paste(readLines(connection, warn = FALSE), collapse = "\n")
close(connection)
payload <- jsonlite::fromJSON(body)
cat("Temperature:", payload$current$temperature_2m, "°C\n")
