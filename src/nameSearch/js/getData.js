var getNames = require('./getNames')

module.exports = function () {
  var _this = this
  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/users',
    method: 'Get'
  }).done(getNames.UpdateNames.bind(getNames))
}