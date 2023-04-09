const pathDailyBilling = '/script/Question3/dailyBilling.json'
export class Profit {
  async pushDate() {
    let billing = {}
    await fetch(pathDailyBilling)
      .then(res => res.json())
      .then(data => {
        billing = data
      })
      .catch(err => console.error(err))
    return billing
  }

  async pushValue() {
    const billing = await this.pushDate()
    let profitMonth = billing.billing2023.april
    let lowestValue = {
      value: 0,
      dayMonth: 0
    }
    let BiggestValue = {
      value: 0,
      dayMonth: 0
    }
    let position = 0
    let sumProfit = 0
    let daysWithProfit = 0
    for (let value of billing.billing2023.april) {
      position++
      Number(value) === 0 ? daysWithProfit : daysWithProfit++
      sumProfit += Number(value)

      if (Number(value) >= BiggestValue.value) {
        BiggestValue.dayMonth = position
        BiggestValue.value = Number(value)
      }
      if (Number(value) <= lowestValue.value || lowestValue.value === 0) {
        lowestValue.dayMonth = position
        lowestValue.value = Number(value)
      }
    }

    const averageProfig = sumProfit / daysWithProfit
    return `<p>
    O maior lucro foi ${BiggestValue.value} no dia ${
      BiggestValue.dayMonth
    } do mês </br>
    O menor lucro foi ${lowestValue.value} no dia ${
      lowestValue.dayMonth
    } do mês </br>
    E a media foi ${averageProfig.toFixed()}
    <p>`
  }
}
