export default function modifyFourArray(arr, modifierFn) {
  for (let i = 0; i < arr.length; i += 4) {
    const modified = modifierFn(arr.slice(i, i + 4));
    arr.splice(i, 4, ...modified);
  }
  return arr;
}