function staff (sum) {
  const sumWorkers = sum.reduce((a, b) => a + b)

  return Math.round(sumWorkers)
}

function staffTax (staff) {
  staff /= 0.86
  let staffTax = (staff * 0.35) + (staff * 0.13) + (staff * 0.06)

  return Math.round(staffTax)
}

function realDeal (buying, percent) {
  let realDeal = ((buying / 6 * 5) + (buying / 6 * 5 * (percent / 100))) * 1.2

  return Math.round(realDeal)
}

function grossIncome (buying, realDeal) {
  let grossIncome = (realDeal / 6 * 5) - (buying / 6 * 5)
  return Math.round(grossIncome)
}

function vat (tech, materials, housing, buying, realDeal) {
  let vat = (realDeal / 6) - (tech / 6) - (materials / 6) - (housing / 6) - (buying / 6)

  return Math.round(vat)
}

function incomeTax (grossIncome, staff, tech, materials, ads, housing) {
  staff /= 0.86
  let incomeTax = (grossIncome - staff - staff * 0.34 - staff * 0.06 - tech / 6 * 5 / 60 - materials / 6 * 5 - ads / 6 * 5 - housing / 6 * 5) * 0.18
  console.log(`staff - ${staff}`)
  return Math.round(incomeTax)
}

function moneySpent (...data) {
  console.log(`data = ${data}`)
  return data.reduce((a, b) => a + b)
}

module.exports = {
  staff, staffTax, realDeal, grossIncome, vat, incomeTax, moneySpent
}
