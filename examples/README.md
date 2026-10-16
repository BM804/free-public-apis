# API examples in 18 programming languages

Each example calls the same Open-Meteo Forecast API endpoint and prints the current temperature for New York City. This endpoint offers standard no-key access. Read the provider's current [API documentation](https://open-meteo.com/en/docs) and [pricing and usage terms](https://open-meteo.com/en/pricing) before building on it.

Change the latitude and longitude query values in an example to request another location. The examples demonstrate making an HTTP GET request, checking for an error response, setting a timeout where supported, and reading JSON.

## Run locally

Install the language runtime and dependencies shown here. Run the command from the repository root:

| Programming language | Requirements | Run command |
|---|---|---|
| Bash | curl and jq | bash examples/bash/main.sh |
| C | C compiler and libcurl development files | cc examples/c/main.c -lcurl -o weather && ./weather |
| C++ | C++17 compiler and libcurl development files | c++ -std=c++17 examples/cpp/main.cpp -lcurl -o weather && ./weather |
| C# | .NET 8 SDK | dotnet run --project examples/csharp |
| Dart | Dart SDK | dart run examples/dart/main.dart |
| Go | Go 1.20+ | go run examples/go/main.go |
| Java | JDK 17 and Maven | mvn -f examples/java/pom.xml compile exec:java |
| JavaScript | Node.js 18+ | node examples/javascript/main.mjs |
| Kotlin | Kotlin compiler and JDK 11+ | kotlinc examples/kotlin/Main.kt -include-runtime -d examples/kotlin/weather.jar && java -jar examples/kotlin/weather.jar |
| Perl | Perl 5 | perl examples/perl/main.pl |
| PHP | PHP 8 with the cURL extension | php examples/php/main.php |
| PowerShell | PowerShell 7 | pwsh -File examples/powershell/main.ps1 |
| Python | Python 3.9+; standard library only | python examples/python/main.py |
| R | R and the jsonlite package | Rscript examples/r/main.R |
| Ruby | Ruby 3+ | ruby examples/ruby/main.rb |
| Rust | Rust stable and Cargo | cargo run --manifest-path examples/rust/Cargo.toml |
| Swift | Swift 5.7+ | swiftc examples/swift/main.swift -o weather && ./weather |
| TypeScript | Node.js 18+ and tsx | npx tsx examples/typescript/main.ts |

Dependencies: install jsonlite in R with install.packages("jsonlite"). Install tsx for TypeScript with npm install --global tsx. Rust downloads crates during its first build. Maven fetches Jackson for the Java example. C and C++ require libcurl; C, C++, and Kotlin print the JSON response as received. The other examples use standard libraries or built-in platform APIs.

On Windows, compile the C and C++ examples with a compiler such as MinGW-w64, then run the resulting executable as .\weather.exe in PowerShell. The Bash example requires a Bash environment such as Git Bash or WSL.

## Official API links

- [Open-Meteo Forecast API documentation](https://open-meteo.com/en/docs)
- [Open-Meteo pricing and usage terms](https://open-meteo.com/en/pricing)
- [Catalog entry and access notes](../docs/data/apis.json)

No example needs an API key. No-cost access can still have quotas, restrictions, or terms that change. Always check the provider's current rules and cache responses where allowed.

## Contribute another language

Create a language-named subfolder, include a small runnable example and its exact run command and dependencies here, handle HTTP failures and timeouts, and link to the provider documentation. See the repository's [contribution guide](../CONTRIBUTING.md).
