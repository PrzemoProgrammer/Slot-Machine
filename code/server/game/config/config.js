const SERVER_PORT = 8081;
const ROWS = 4;
const COLUMNS = 5;
const SYMBOL_TEXTURE_COUNT = 11;
const REEL_POSITIONS = [0, 130, 260, 390, 520];
const BALANCE = 1000000;
const SYMBOLS_MULTIPLIER = [3, 4, 5];
const BET_STEPS = [
  "0.25",
  "0.50",
  "0.75",
  "1.00",
  "1.50",
  "2.00",
  "2.50",
  "5.00",
  "7.50",
  "10.00",
  "15.00",
  "20.00",
  "25.00",
  "50.00",
  "75.00",
  "100.00",
  "150.00",
  "200.00",
  "250.00",
];

module.exports = {
  SERVER_PORT,
  ROWS,
  COLUMNS,
  SYMBOL_TEXTURE_COUNT,
  REEL_POSITIONS,
  BALANCE,
  BET_STEPS,
  SYMBOLS_MULTIPLIER,
};
