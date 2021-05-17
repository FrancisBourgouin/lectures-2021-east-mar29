export default function Weather(props) {
  const { city, weatherData } = props
  return (
    <section>
      {!city && <h1>No valid data at the moment, please select a city</h1>}
      {city && !weatherData && <h1>City seems to be invalid, please try with another city</h1>}
      {city && weatherData &&
        <>
          <h1>Weather for: {city}</h1>
          <p>Temperature is:</p>
          <p data-testid="condition">Sunny</p>
        </>
      }
    </section>
  )
}