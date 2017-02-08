var getNames = require('./getNames.js');


  getData = function () {
    var _this = this
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/users',
      method: 'Get'
    }).done(getNames.getNames.UpdateNames.bind(this.getNames))
  }

module.exports = {
    getData: getData,
}