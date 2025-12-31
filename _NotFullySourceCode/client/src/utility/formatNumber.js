export function formatNumber(text) {
  const textToNumber = parseInt(text);
  const formattedText = textToNumber.toLocaleString("en", {
    useGrouping: true,
  });

  // return formattedText.replace(",", ".");
  return formattedText;
}
