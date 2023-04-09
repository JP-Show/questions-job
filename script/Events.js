export async function Events({
  TextFibo,
  isSequencial,
  btFibo,
  inpNumFibo,
  textQuestion3,
  Profit,
  Textquestion4,
  porcentualState,
  btInverse,
  inpStr,
  textQuestion5,
  inverseString
}) {
  const ResultProfit = await new Profit().pushValue()
  let numFibo
  let str

  inpStr.addEventListener('change', e => {
    str = String(e.target.value)
  })

  const profitState = porcentualState()
  inpNumFibo.addEventListener('change', e => {
    numFibo = Number(e.target.value)
  })

  btFibo.addEventListener('click', () => {
    TextFibo.innerHTML = isSequencial(numFibo)
  })
  textQuestion3.innerHTML = ResultProfit

  Textquestion4.innerHTML = `
    <p>${profitState[0].state.toUpperCase()} -- %${profitState[0].porcentual}
    <p>${profitState[1].state.toUpperCase()} -- %${profitState[1].porcentual}
    <p>${profitState[2].state.toUpperCase()} -- %${profitState[2].porcentual}
    <p>${profitState[3].state.toUpperCase()} -- %${profitState[3].porcentual}
    <p>${profitState[4].state.toUpperCase()} -- %${profitState[4].porcentual}
    `
  btInverse.addEventListener('click', () => {
    if (str === '') {
      return alert('coloque algo no input')
    }
    textQuestion5.innerHTML = inverseString(str)
  })
}
