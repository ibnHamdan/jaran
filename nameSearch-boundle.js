System.registerDynamic('getData.js', ['./getNames.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  var getNames = $__require('./getNames.js');

  module.exports = function () {
    var _this = this;
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/users',
      method: 'Get'
    }).done(getNames.UpdateNames.bind(getNames));
  };
});
System.registerDynamic('getNames.js', ['./showNames.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  var showNames = $__require('./showNames.js');

  module.exports = {
    _namesHiddenInput: 'namesHiddenInput',
    usersName: [],

    UpdateNames: function (data) {

      var list = data;
      for (var val of list) {
        var userInfo = {
          name: val.name,
          email: val.email,
          username: val.username,
          city: val.address.city
        };
        this.usersName.push(userInfo);
      }
      showNames.showNamesEvent(this.usersName);
    },
    updateText: function () {
      var nameInput = document.getElementById(this._namesHiddenInput);
      nameInput.value = this.usersName;
    }
  };
});
System.registerDynamic('showNames.js', ['./getNames.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  var getNames = $__require('./getNames.js');

  module.exports = {
    _showNamesBtn: '#showNamesBtn',
    _namesTable: '#namesTable',

    showNamesEvent: function (names) {
      $(this._showNamesBtn).on('click', function () {
        for (var val of names) {
          var cardContainer = document.getElementById('cards-container');
          var card = $('<div class="card"></div>');
          var classCol = $('<div class="small-2 columns"></div>');
          var Name = $('<div class="card-divider" id="Name"><span>' + val.name + '</span></div>');
          var Img = $('<div class="card-section" id="Img"><img src="http://placehold.it/200?text=' + val.name + '"/></div>');
          var email = $('<div class="card-section" id="Email"><span>' + val.email + '</span>');
          var username = $('<div class="card-section" id="userName"><h5>' + val.username + '</h5>');
          // var userImg = $('<div class="card-section" id="userImg"><img src="https://unsplash.it/200/200/?random"/></div>')
          // var userImg = $('<div class="card-section" id="userImg"><img src="http://lorempixel.com/200/200/people/'+ val + '"/></div>')
          $(card).append(Img);
          $(card).append(Name);
          $(card).append(email);
          $(card).append(username);
          classCol.append(card);
          $('#cards-container').append(classCol);
        }
      });
    }
  };
});
System.registerDynamic('getCustomeName.js', ['./showNames.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  var showNames = $__require('./showNames.js');

  module.exports = {
    _customNameInput: '#customNameInput',
    _customEmailInput: '#customEmailInput',
    _customUsernameInput: '#customUsernameInput',
    _customAddBtn: '#customAddBtn',
    customNames: [],

    _addCustomeName: function () {

      var _this = this;

      $(this._customAddBtn).on('click', function () {

        var customName = $(_this._customNameInput).val();
        var customEmail = $(_this._customEmailInput).val();
        var customUserName = $(_this._customUsernameInput).val();
        var customData = {
          name: customName,
          email: customEmail,
          userName: customUserName
        };
        _this.customNames.push(customData);
        showNames.showNamesEvent(_this.customNames);
      });
    }

  };
});
System.registerDynamic('app.js', ['./getData.js', './getCustomeName.js'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  var getData = $__require('./getData.js');
  var getCustomeName = $__require('./getCustomeName.js');

  $(document).ready(function () {
    getData();
    getCustomeName._addCustomeName();
  });
});