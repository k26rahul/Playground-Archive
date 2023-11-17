const mathSymbols = [
  '\\+',
  '\\-',
  '\\*',
  '/',
  '\\^',
  '%',
  '!',
  '\\(',
  '\\)',
  'π',
  'e',
];

const tokenRegex = new RegExp(
  `(?:${mathSymbols.join('|')})|([0-9]*\\.?[0-9]+(?:[e][-+]?[0-9]+)?)|([a-z]+)`,
  'gi'
);

function tokenize(expressionString) {
  const tokens = expressionString.match(tokenRegex) || [];
  return tokens.filter(token => token.trim() !== ''); // Remove any empty tokens
}

const expressionString = '1e+1e';
const tokens = tokenize(expressionString);

console.log(tokens);
