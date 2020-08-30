const nightMare = require('nightmare')
const nightmare = nightMare({ show: true })

async function checkPrice () {
  const priceStr = await nightmare.goto('https://www.amazon.com/Roam-Universal-Premium-Phone-Motorcycle/dp/B01LWDCSIZ')
    .wait('#priceblock_saleprice')
    .evaluate(() => document.getElementById("priceblock_saleprice").innerText)
    .end()
  const priceNum = parseFloat(priceStr.replace('$', ''))
  // const targetPrice = 100
  if (priceNum <= 18) {
    console.log('It is cheap')
  } else {
    console.log('It is expensive')
  }
}
checkPrice()
