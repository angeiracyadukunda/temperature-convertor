


// Write a function that converts a temperature from Celsius to Fahrenheit
// ### Formula:
//     tFahrenheit = (tCelcius°C × 9/5) + 32
    
//     Where 
//         tFahrenheit: Temperature in Fahrenheit
//         tCelcius: Temperature in Celcius 

function celsiusToFahrenheit(celsius) {
   
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  
 
  const celsiusTemperature = 25;
  const convertedTemperature = celsiusToFahrenheit(celsiusTemperature);
  
  console.log(`${celsiusTemperature} degrees Celsius is ${convertedTemperature} degrees Fahrenheit.`);


