document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.calculatorButtons');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.value;

            if (value === 'C') {
                display.value = '';
            } else if (value === 'CE') {
                display.value = display.value.slice(0, -1);
            } else if (value === '=') {
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = 'Erro';
                }
            } else {
                display.value += value;
            }
        });
    });
});