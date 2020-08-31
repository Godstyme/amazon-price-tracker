const nightMare = require('nightmare')
const cheerio = require('cheerio')
const nightmare = nightMare({ show: true })

async function checkPrice () {
  const priceStr = await nightmare.goto('https://www.amazon.com/Roam-Universal-Premium-Phone-Motorcycle/dp/B01LWDCSIZ')
    .wait('#priceblock_saleprice')
    .evaluate(() => document.getElementById("priceblock_saleprice").innerText)
    // .on('page', function(type="alert", message))
    .end()
  const priceNum = parseFloat(priceStr.replace('$', ''))
  
  // const targetPrice = document.getElementById('targetPrice').innerText = 20
  let targetPrice = 20
  console.log(priceNum)
  // if (priceNum <= targetPrice) {
  //   console.log('It is cheap')
  // } else {
  //   console.log('It is expensive')
  // }
}
checkPrice()
