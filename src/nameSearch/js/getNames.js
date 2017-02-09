var showNames = require('./showNames');


module.exports = {
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
        this.usersName.push(userInfo)
      }
      showNames.showNamesEvent(this.usersName);
    },
    updateText: function () {
      var nameInput = document.getElementById(this._namesHiddenInput)
      nameInput.value = this.usersName
    }
  }