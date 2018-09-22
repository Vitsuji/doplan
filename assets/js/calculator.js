function staff (sum) {
  const add = (a, b) => a + b
  const sumWorkers = sum.reduce(add)

  return Math.round(sumWorkers / 0.86)
}

function staffTax (staff) {
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

// function incomeTax (grossIncome, staff, tech, materials, ads, housing) {
//   let incomeTax = (grossIncome - (staff - (staff * 0.34) - (staff * 0.06) - (((tech / 6) * 5) / 60) - (materials / 6 * 5) - (ads / 6 * 5) - (housing / 6 * 5))) * 0.18

//   return Math.round(incomeTax)
// }

module.exports = {
  staff, staffTax, realDeal, grossIncome, vat
}
