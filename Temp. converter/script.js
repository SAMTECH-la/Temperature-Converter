function convert() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
    let outputValue;

    if (isNaN(inputValue)) {
        alert('Please enter a valid number');
        return;
    }

    // Convert input value to Celsius
    let tempInCelsius;
    if (inputUnit === 'celsius') {
        tempInCelsius = inputValue;
    } else if (inputUnit === 'fahrenheit') {
        tempInCelsius = (inputValue - 32) * 5/9;
    } else if (inputUnit === 'kelvin') {
        tempInCelsius = inputValue - 273.15;
    }

    // Convert Celsius to output unit
    if (outputUnit === 'celsius') {
        outputValue = tempInCelsius;
    } else if (outputUnit === 'fahrenheit') {
        outputValue = (tempInCelsius * 9/5) + 32;
    } else if (outputUnit === 'kelvin') {
        outputValue = tempInCelsius + 273.15;
    }

    // Display output value
    document.getElementById('outputValue').value = outputValue.toFixed(2);
}
