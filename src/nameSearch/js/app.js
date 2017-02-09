var getData = require('./getData')
var getCustomeName = require('./getCustomeName')

$(document).ready(function () {
  getData()
  getCustomeName._addCustomeName()
})
