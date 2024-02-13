document.addEventListener("DOMContentLoaded", function () {
    const celciusInput = document.getElementById('celciusInput');
    const fahrenheitInput = document.getElementById('fahrenheitInput');
    const convertButton = document.getElementById('convertButton');
    const revertButton = document.getElementById('revertButton');
    const cara = document.getElementById('cara');
    const resetButton = document.getElementById('resetButton');

    convertButton.addEventListener('click', function (event) {
        event.preventDefault(); 
        const celciusValue = parseFloat(celciusInput.value);
        if (!isNaN(celciusValue)) {
            const fahrenheitValue = (celciusValue * 9 / 5) + 32;
            fahrenheitInput.textContent = fahrenheitValue.toFixed(2);
            cara.textContent = `°F = (9/5 x ${celciusValue}) + 32`;
        } else {
            alert('Silakan masukkan angka yang valid untuk suhu Celcius.');
        }
    });

    revertButton.addEventListener('click', function (event) {
        event.preventDefault();
        const fahrenheitValue = parseFloat(fahrenheitInput.value);
        if (!isNaN(fahrenheitValue)) {
            const celciusValue = (fahrenheitValue - 32) * 5 / 9;
            celciusInput.textContent = celciusValue.toFixed(2);
            cara.textContent = `°C = (5/9 x (${fahrenheitValue} - 32))`;
        } else {
            alert('Please enter a valid number for Fahrenheit temperature.');
        }
    });
    
    resetButton.addEventListener('click', function (event) {
        celciusInput.value = '';
        fahrenheitInput.textContent = '';
        celciusInput.textContent = '';
        fahrenheitInput.value = '';
        cara.textContent = '';
    });
});
