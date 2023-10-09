let resultDisplay = document.getElementById('result');

function appendCharacter(character) {
  resultDisplay.value += character;
}

function clearDisplay() {
  resultDisplay.value = '';
}

function deleteLastChar() {
  resultDisplay.value = resultDisplay.value.slice(0, -1);
}

function calculateResult() {
  try {
    resultDisplay.value = eval(resultDisplay.value);
  } catch (error) {
    resultDisplay.value = 'Error';
  }
}
