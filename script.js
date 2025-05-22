let buttons = document.querySelectorAll('input[type="button"]');
let display = document.querySelector('input[name="display"]');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.value === '=') {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = 'Error';
            }
        } else if (button.value === 'AC') {
            display.value = '';
        } else if (button.value === 'DE') {
            display.value = display.value.slice(0, -1);
        } else {
            display.value += button.value;
        }
    });
});
