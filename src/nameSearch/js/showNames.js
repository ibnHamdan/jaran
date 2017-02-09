var getNames = require('./getNames')

module.exports = {
  _showNamesBtn: '#showNamesBtn',
  _namesTable: '#namesTable',

  showNamesEvent: function (names) {
    $(this._showNamesBtn).on('click', function () {
      for (var val of names) {
        var cardContainer = document.getElementById('cards-container')
        var card = $('<div class="card"></div>')
        var classCol = $('<div class="small-2 columns"></div>')
        var Name = $('<div class="card-divider" id="Name"><span>' + val.name + '</span></div>')
        var Img = $('<div class="card-section" id="Img"><img src="http://placehold.it/200?text=' + val.name + '"/></div>')
        var email = $('<div class="card-section" id="Email"><span>' + val.email + '</span>')
        var username = $('<div class="card-section" id="userName"><h5>' + val.username + '</h5>')
        // var userImg = $('<div class="card-section" id="userImg"><img src="https://unsplash.it/200/200/?random"/></div>')
        // var userImg = $('<div class="card-section" id="userImg"><img src="http://lorempixel.com/200/200/people/'+ val + '"/></div>')
        $(card).append(Img)
        $(card).append(Name)
        $(card).append(email)
        $(card).append(username)
        classCol.append(card)
        $('#cards-container').append(classCol)
      }
    })
  }
}
