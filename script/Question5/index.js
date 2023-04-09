export function inverseString(str) {
  console.log(str.length)
  let newStr = ''
  for (let num = str.length - 1; num >= 0; num--) {
    newStr = newStr.concat(String(str.charAt(num)))
  }
  return newStr
}
