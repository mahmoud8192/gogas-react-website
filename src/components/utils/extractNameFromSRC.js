export default function extractNameFromSRC(src) {
  const extractedName = src.substring(
    src.lastIndexOf("/") + 1,
    src.lastIndexOf(".")
  );

  return extractedName;
}
