function isNumber(str) {
  return !isNaN(str);
}

function isAlphabet(char) {
  const code = char.charCodeAt(0);
  return (65 <= code && code <= 90) || (97 <= code && code <= 122);
}

const mathSymbols = [
  // Binary operators
  '+',
  '-',
  '*',
  '/',
  '^',

  // Unary operators
  '%',
  '!',

  // Parenthesis
  '(',
  ')',

  // Constant symbols
  'π',
  'e',
];

export default function tokenize(expressionString) {
  const tokens = [];
  let currentToken = '';

  for (const char of expressionString) {
    if (char === ' ') {
      continue;
    }

    if (isNumber(char) || char === '.') {
      currentToken += char;
      continue;
    }

    if (
      (char === '+' || char === '-') &&
      currentToken.length >= 2 &&
      currentToken[currentToken.length - 1] === 'e' &&
      isNumber(currentToken[currentToken.length - 2])
    ) {
      currentToken += char;
      continue;
    }

    if (
      char === 'e' &&
      currentToken.length > 0 &&
      /^[0-9]*$/.test(currentToken)
    ) {
      currentToken += char;
      continue;
    }

    if (isAlphabet(char) && char !== 'e') {
      currentToken += char;
      continue;
    }

    if (mathSymbols.includes(char)) {
      if (currentToken !== '') {
        tokens.push(currentToken);
        currentToken = '';
      }
      tokens.push(char);
      continue;
    }

    throw new Error('tokenize: invalid char: ' + char);
  }

  if (currentToken !== '') tokens.push(currentToken);

  return tokens;
}

const expressionString = '1e+1e';
const tokens = tokenize(expressionString);
console.log(tokens);
