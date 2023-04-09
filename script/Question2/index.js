export function isSequencial(sequecialNumber) {
  if (sequecialNumber === null || sequecialNumber == undefined) {
    return 'digite um número'
  }
  const number = Number(sequecialNumber)
  if (number === 0) {
    return '0 pertece a sequência'
  }

  let fibonacchi = [0, 1]

  while (fibonacchi[fibonacchi.length - 1] < sequecialNumber) {
    fibonacchi.push(
      Number(
        fibonacchi[fibonacchi.length - 2] + fibonacchi[fibonacchi.length - 1]
      )
    )
  }
  return fibonacchi[fibonacchi.length - 1] === sequecialNumber
    ? `${sequecialNumber} pertece a sequência`
    : `${sequecialNumber} não pertece a sequência`
}
