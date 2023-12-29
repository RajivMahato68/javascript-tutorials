

    const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const celsius = document.querySelector('#celsius').value;
    const result = document.querySelector('#result');

    if (celsius === '' || celsius < 0 || isNaN(celsius)) {
        result.innerHTML = 'Please give a valid temperature.';
    } else {
        const fahrenheit = ((celsius * 9/5) + 32).toFixed(2);
        // Show the result
        result.innerHTML = `<span>${fahrenheit}</span>`;
    }
});
