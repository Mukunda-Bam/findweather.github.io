import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './assets/countryside.jpg';
import './App.css';

function App() {

const apiKey = "2a498271d697734c4364455cc67533cb"
const [inputCity, setInputCity] = useState('') // 
const [data, setData] = useState({})    //usestatehook is used for state change

const getWeatherDetails = (cityName) => {
  if(!cityName) return
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey;
axios.get(apiUrl).then((result)=>{
  setData(result.data) // sets or saves
  console.log('output', result) 
}).catch((error)=>{
  console.log("err", error)
})
}

const handleChangeInput = (e)=>{
  setInputCity(e.target.value)
}
const handleSearch =() =>{       
  getWeatherDetails(inputCity)
  }
// useEffect(()=>{getWeatherDetails("paris")}, [])



const dateBuilder =(d) =>{
  let months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();
 return `${day} - ${month} ${date}, ${year}`
}
  return (
    <div className = "container">
      <main>
           <div className ='input-button-container'>
             <div className="input-container1">
             <input type ="text" className = "input-container2"  value={inputCity} onKeyPress = {handleSearch} onChange={handleChangeInput} placeholder="Enter location" />
               </div>
             {/* <input type ="text" value={inputCity} onchange={event=>setInputCity(event.target.value)}      */}             <div className= 'btn-container1'>
               <div className= 'btn-container2'>
                 <button className = 'btn-container3'onClick={handleSearch} >Search</button>
               </div>
             </div>
           </div>

        {typeof data.main === "undefined" ? (
        
           <div className ="date">{dateBuilder(new Date())}</div>
           
        ) : (
          <div>
           <div className ="locationDate-container">
             <div className ='location'>{data?.name}, {data.sys.country} </div>
             <div className ="date">{dateBuilder(new Date())}</div>
             
            </div>

            <div className ="temperatureWeather-container">
              <div className = "temperature"><span >{Math.round((data?.main?.temp)-273.15)}°c</span></div>
              <div className = 'weather'>{(data?.weather?.[0].description).toUpperCase()}</div> 
            </div>          
           </div>

        )}
     </main>
    </div>
  );
}

export default App;
