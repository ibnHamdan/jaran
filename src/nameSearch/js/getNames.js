//var showNames = require('./showNames.js');


getNames = {
    _namesHiddenInput: 'namesHiddenInput',
    usersName: [],
    
    UpdateNames: function (data) {
      var list = data
      for (var val of list) {
        var userInfo = {
          name: val.name,
          email: val.email,
          username: val.username,
          city: val.address.city
        }
        getNames.usersName.push(userInfo)
      }
      getNames.updateText();
      //showNames.showNames.showNamesEvent();
      //showNames.showNames.showNamesEvent(this.usersName);
    },
    updateText: function () {
      var nameInput = document.getElementById(getNames._namesHiddenInput)
      nameInput.value = getNames.usersName
    }
  }


  module.exports = {
      getNames: getNames
  }