export default function getFontScale() {
  try {
    return parseFloat(window.getComputedStyle(document.body).fontSize.replace('px',''))/10;
  } catch (err) {
    return 1.5;
  }
}