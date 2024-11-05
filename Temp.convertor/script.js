function convertTemperature() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const unitInput = document.getElementById('unitInput').value;
    const result = document.getElementById('result');

    if (isNaN(temperatureInput) || temperatureInput === "") {
        result.textContent = "Please enter a valid number";
        return;
    }

    const temperature = parseFloat(temperatureInput);
    let convertedTemperature;
    let convertedUnit;

    switch (unitInput) {
        case 'Celsius':
            convertedTemperature = (temperature * 9/5) + 32;
            convertedUnit = 'Fahrenheit';
            result.textContent = `${temperature} °C is equal to ${convertedTemperature.toFixed(2)} °F`;
            break;
        case 'Fahrenheit':
            convertedTemperature = (temperature - 32) * 5/9;
            convertedUnit = 'Celsius';
            result.textContent = `${temperature} °F is equal to ${convertedTemperature.toFixed(2)} °C`;
            break;
        case 'Kelvin':
            convertedTemperatureC = temperature - 273.15;
            convertedTemperatureF = (temperature - 273.15) * 9/5 + 32;
            result.textContent = `${temperature} K is equal to ${convertedTemperatureC.toFixed(2)} °C or ${convertedTemperatureF.toFixed(2)} °F`;
            break;
        default:
            result.textContent = "Please select a valid unit";
    }
}
