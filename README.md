# React- Weather Finder 

![readmeweatherfinder2](https://user-images.githubusercontent.com/73714951/174257792-3b5d605e-0c7d-4573-bea2-de0db638dc1c.png)<p align='center'>**Weather Web App made in React**</p>

<img src='images/pin.png' alt='not found' width='25px' height='25px'/>**DESCRIPTION**
____________
In this app, one can find the temperature and weather conditions of a location. The location should be a city name. When a user enters a city name and hits enter or clicks on search, it displays the country where the city is located, along with the city name, the temperature in Celsius, and the weather condition in that particular city. While one can see the current date all the time.
To work with the API, first we need to register on the site/service that is providing us with the API. Thus, by doing this, we will get a unique API key to make the request to the service every time we need the data from them. Don't forget, there might be a limit to the number of API calls you make in a day. While we are making only one API call in the entire app to get the data.

I have used the axios library to make the HTTP request to an external service. In this case, the external service is the OpenWeatherMap API. Here is the device's location: city name is sent to the API via the API key. The API key is used to authenticate our application and is unique here. The API will then return us the required data: temperature, location of the city and weather in JSON format: temperature, location of the city and weather. So, the API collects the data and returns the data whenever a user enters the city name to find the weather. This weather API gives the data in an easy-to-understand form.


Then I accessed each part of the returned JSON data from API response and used it to display the temperature and weather on the screen.

Functional components of React have been used here. The useState hook here allows the addition/use of state in functional components. The usestate makes use of different values of data from arrays, objects, numbers, booleans, strings, etc. I used get request using get keyword to get the data from API and then method to handle the asynchronous API calls. Then I used the setData hook to store our result in data object. In this app, the useState hook makes use of the state of the object: data and string: city. While the error boundary catches any error that appears during this process.


To work with the APi
### Library used: JSON, axios



![readmeweatherfinder1](https://user-images.githubusercontent.com/73714951/174257518-ff28204a-27f5-4c5e-9d12-0399314eb0bc.png)  





<img src='images/pinv.png' alt='not found' width='25px' height='25px'/>**LIVE LINK**  
**https://cityweatherfinder.herokuapp.com/**

<p align="center">THANK YOU!</p>
