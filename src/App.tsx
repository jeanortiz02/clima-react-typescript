
import styles from "./App.module.css"
import Alert from "./components/alert/Alert"
import Form from "./components/form/Form"
import Spinner from "./components/Spinner/Spinner"
import WeatherDetail from "./components/WeatherDetail/WeatherDetail"
import useWeather from "./hooks/useWeather"

function App() {

  const { weather, loading, notFound, fetchWeather, hasWeatherData} = useWeather()

  return (
    <>
      <h1 className={styles.title}>Buscador de clima</h1>

      <div className={styles.container}>
        
        <Form fetchWeather={fetchWeather} />

      {loading && <Spinner/>}

        { hasWeatherData && <WeatherDetail weather={weather} /> }

        { notFound && <Alert>Ciudad no Encontrada</Alert>}

      </div>
    </>
  )
}

export default App
