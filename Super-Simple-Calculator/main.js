print = console.log.bind(console);

let calculatorInput = document.querySelector('.calculator-input');
let calculatorOutput = document.querySelector('.calculator-output');

const operatorsRegex = /[+\-*\/]|\d+/g;

calculatorInput.addEventListener('keyup', e => {
  let inputArray = e.target.value.match(operatorsRegex);
  if (!inputArray) return;

  inputArray = inputArray.map(val => Number(val) || val);

  print({ inputArray });

  let resultArray = [];
  let previousOperator = null;

  for (let item of inputArray) {
    if (typeof item === 'number' || item !== previousOperator) {
      resultArray.push(item);
    }
    previousOperator = typeof item === 'number' ? null : item;
  }

  print({ resultArray });
});
