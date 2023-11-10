export default function CalculateClipPath(wordLength) {
  if (wordLength < 20) {
    return "inset(0px 200px 0px 154px)";
  } else if (wordLength < 40) {
    return "inset(0px 250px 0px 100px)";
  } else {
    return "inset(0px 298px 0px 0px)";
  }
}
