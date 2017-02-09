var showNames = require('./showNames')

module.exports = {
    _customNameInput: '#customNameInput',
    _customEmailInput: '#customEmailInput',
    _customUsernameInput: '#customUsernameInput',
    _customAddBtn: '#customAddBtn',
    customNames: [],

    _addCustomeName: function () {
      
      var _this = this;

      $(this._customAddBtn).on('click', function () {

        var customName = $(_this._customNameInput).val()
        var customEmail = $(_this._customEmailInput).val()
        var customUserName = $(_this._customUsernameInput).val()
        var customData = {
          name: customName,
          email: customEmail,
          userName: customUserName
        }
        _this.customNames.push(customData)
        showNames.showNamesEvent(_this.customNames)
      })
    }

  }