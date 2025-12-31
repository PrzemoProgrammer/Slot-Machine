export function unformatNumber(text) {
  const numberWithoutDots = parseFloat(text.replace(/,/g, ""));
  return parseFloat(numberWithoutDots);
}
