# Weather Data Processor 🌤️

A lightweight utility for processing weather data from multiple APIs.

## Features
- Multi-provider weather aggregation
- 7-day forecast analysis
- Temperature trend detection
- CSV export

## Installation

```bash
pip install weather-processor
```

## Usage

```python
from weather_processor import WeatherAggregator

agg = WeatherAggregator(api_keys=["openweather", "weatherapi"])
forecast = agg.get_forecast("Madrid", days=7)
print(forecast.summary())
```

## Contributing

Pull requests welcome. See CONTRIBUTING.md for guidelines.

## License

MIT
