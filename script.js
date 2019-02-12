
var xcmValue

function init () {
  xcmValue = document.querySelector('.xcm-price-value')
  requestData()
}

window.addEventListener('load', init)

function requestData () {
  var request
  request = new XMLHttpRequest()
  request.open('GET', 'https://jsonp.afeld.me/?url=https://exchange.coinmetro.com/prices', true)
  request.send(null)

  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      showInformation(request.responseText)
    }
  }
}

function showInformation (response) {
  response = JSON.parse(response)
  xcmValue.textContent = response.latestPrices[0].price + '€'

  console.log(response)
}
