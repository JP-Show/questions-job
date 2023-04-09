export function porcentualState() {
  let totalProfit = 0
  const profitStates = [
    { state: 'sp', profit: 67836.43, porcentual: 0 },
    { state: 'rj', profit: 36678.66, porcentual: 0 },
    { state: 'mg', profit: 29229.88, porcentual: 0 },
    { state: 'es', profit: 27165.48, porcentual: 0 },
    { state: 'other', profit: 19849.53, porcentual: 0 }
  ]
  for (let states of profitStates) {
    totalProfit += states.profit
  }
  for (let states of profitStates) {
    states.porcentual = (states.profit / totalProfit) * 100
  }
  return profitStates
}
