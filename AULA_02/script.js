// Seleção dos elementos necessários
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".calculatorButtons");

let currentInput = ""; // Valor atual no display
let operator = ""; // Operador selecionado
let firstOperand = ""; // Primeiro número da operação

// Função para limpar o display
function clearDisplay() {
    currentInput = "";
    operator = "";
    firstOperand = "";
    display.value = "";
}

// Função para apagar o último dígito
function deleteLastDigit() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
}

// Função para calcular o resultado
function calculate() {
    if (firstOperand && operator && currentInput) {
        const result = eval(`${firstOperand} ${operator} ${currentInput}`);
        display.value = result;
        currentInput = result;
        operator = "";
        firstOperand = "";
    }
}

// Função para lidar com a entrada de botões
function handleInput(value) {
    if (!isNaN(value) || value === ".") {
        // Entrada de número ou ponto decimal
        if (value === "." && currentInput.includes(".")) return; // Evitar múltiplos pontos
        currentInput += value;
        display.value = currentInput;
    } else if (["+", "-", "*", "/"].includes(value)) {
        // Entrada de operador
        if (currentInput) {
            firstOperand = currentInput;
            operator = value;
            currentInput = "";
        }
    } else if (value === "=") {
        // Calcular resultado
        calculate();
    } else if (value === "C") {
        // Limpar display
        clearDisplay();
    } else if (value === "CE") {
        // Apagar último dígito
        deleteLastDigit();
    }
}

// Adicionar eventos aos botões
buttons.forEach(button => {
    button.addEventListener("click", () => handleInput(button.value));
});
