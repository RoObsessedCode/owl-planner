import React from 'react'
import ReactWeather  from 'react-open-weather'

const Weather = () => {
  return (
    <div>
      <ReactWeather
        forecast="today"
        apikey="3abb29ddd29045d0ac8165309180102"
        type="city"
        city="Manhattan"
      />
    </div>
  )
}

export default Weather

/*
API Key
42563abc944d896963ce5e118cd746e4
*/
