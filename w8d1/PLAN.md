# Weather App!

## Pitch

Show the current weather of a city, have a search field to search the city. Create buttons for previously searched cities

## Structure

div
  section
    h1 city name
    p temperature
    p condition
  section
    form
      input (city name)
      button submit
  section
    buttons ?

## Data structure

weatherData: {...} -> API (Weather)
currentCity: "" -> User input
cities: ["",""] -> App
formData: "" -> CityForm

## Components

App (state: currentCity, cities)
  Weather (state: weatherData)
  CityForm (state: formData)
  CityButtons
    CityButton

## Helper functions?

Fetch the weather (axios)
convert kelvin to celsius


## Testing!

### Unit

Mostly helpers, conversion, fetchWeather

### Feature

Type city in input, see weather
Type bad city in input, don't see weather