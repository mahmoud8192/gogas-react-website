export default function textToValidID(text) {
  const validID = text.toLowerCase().replace(/ /g, "-");
  return validID;
}
