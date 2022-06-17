# React- Weather Finder 

![readmeweatherfinder2](https://user-images.githubusercontent.com/73714951/174257792-3b5d605e-0c7d-4573-bea2-de0db638dc1c.png)<p align='center'>**Weather Web App made in React**</p>

<img src='images/pin.png' alt='not found' width='25px' height='25px'/>**DESCRIPTION**
____________
In this app, one can find the temperature and weather conditions of a location. The location should be a city name. When a user enters a city name and hits enter or clicks on search, it displays the country where the city is located, along with the city name, the temperature in Celsius, and the weather condition in that particular city. While one can see the current date all the time.
I have used axios library to make the HTTP request to external service. In this case, the external service is OpenWeatherMap API. Here the device's location: lattitude and longitude. This data: device location is sent to the API via the the API key. The API key is used to authenticate our application. The API key is unique here. The API will then return us the required data: temperature, location of the city and weather in JSON format. So, the API collects the data and returns the data whenever user enters city name to find the weather. This weather API gives the data in easy to understand form.
Functional components of React have been used here. The useState hook here allows the addition/use of state in functional components. The usestate makes the use of different values of data from these array, object, number, boolean and string. In this app, useState hook makes the use of state of the object: data and string: city. 

![readmeweatherfinder1](https://user-images.githubusercontent.com/73714951/174257518-ff28204a-27f5-4c5e-9d12-0399314eb0bc.png)  





<img src='images/pinv.png' alt='not found' width='25px' height='25px'/>**LIVE LINK**  
**https://cityweatherfinder.herokuapp.com/**

<p align="center">THANK YOU!</p>
