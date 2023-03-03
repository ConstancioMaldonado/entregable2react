import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [coords,setCoords] = useState()
  const [weather, setWeather] = useState()
  
  useEffect(() => {
    const success = pos => {
      const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }

      setCoords(obj)
    }
    navigator.geolocation.getCurrentPosition(success)
  },[])
  
  useEffect(() => {
    if(coords){
      const APIKey = '2e02337f172f81a5e1bdc1878700fc67'
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${APIKey}`
    }
  }, [coords])

  console.log(coords)

  return (
    <div className="App">
      <h1>Weather App</h1>
    </div>
  )
}

export default App
