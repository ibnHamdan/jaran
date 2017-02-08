var getData = require('./getData.js')
var getNames = require('./getNames.js')
var showNames = require('./showNames.js')
var getCustomName = require('./getCustomeName.js')

$(document).ready(function () {
                getData.getData();
                showNames.showNames.showNamesEvent();
                getCustomName.getCustomName._addCustomeName();

            });
