var nameSearch = nameSearch || {};

(function (nameSearch) {
    nameSearch.init = function () {
        this.getData();
    };
})(nameSearch);

(function (nameSearch) {
    nameSearch.getData = function () {
        var _this = this;
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/users',
            method: 'Get'
        }).done(this.getNames.getNames.bind(this.getNames));
    };
})(nameSearch);

(function (nameSearch) {
    nameSearch.getCustomName = {
        _customNameInput: '#customNameInput',
        _customEmailInput: '#customEmailInput',
        _customUsernameInput: '#customUsernameInput',
        _customAddBtn: '#customAddBtn',


        _addCustomeName: function () {
            var _this = this;
            $(this._customAddBtn).on('click', function () {
                
            });
        },

    }
})(nameSearch);


(function (nameSearch) {
    nameSearch.getNames = {
        _namesHiddenInput: 'namesHiddenInput',
        usersName: [],
        getNames: function (data) {
            var list = data;
            for (var val of list) {
                var userInfo = {
                    name : val.name,
                    email : val.email,
                    username: val.username,
                    city: val.address.city,
                };
                this.usersName.push(userInfo);
            }
            this.updateText();
            nameSearch.showNames.showNamesEvent();
        },
        updateText: function () {
            var nameInput = document.getElementById(this._namesHiddenInput);
            nameInput.value = nameSearch.getNames.usersName;
        }
    };
})(nameSearch);

// (function (nameSearch){
//     nameSearch.search = function(){

//     }
// });

(function (nameSearch) {
    nameSearch.showNames = {
        _showNamesBtn: '#showNamesBtn',
        _namesTable: '#namesTable',
        showNamesEvent: function () {
            $(this._showNamesBtn).on('click', function () {
                var names = nameSearch.getNames.usersName;
                for (var val of names) {
                    var cardContainer = document.getElementById('cards-container');
                    var card = $('<div class="card"></div>');
                    var classCol = $('<div class="small-2 columns"></div>');
                    var Name = $('<div class="card-divider" id="Name"><span>'+ val.name + '</span></div>');
                    var Img = $('<div class="card-section" id="Img"><img src="http://placehold.it/200?text='+ val.name + '"/></div>');
                    var email = $('<div class="card-section" id="Email"><span>'+ val.email + '</span>');
                    var username = $('<div class="card-section" id="userName"><h5>'+ val.username + '</h5>');
                    //var userImg = $('<div class="card-section" id="userImg"><img src="https://unsplash.it/200/200/?random"/></div>');
                    //var userImg = $('<div class="card-section" id="userImg"><img src="http://lorempixel.com/200/200/people/'+ val + '"/></div>');
                    $(card).append(Img);
                    $(card).append(Name);
                    $(card).append(email);
                    $(card).append(username);
                    classCol.append(card);
                    $('#cards-container').append(classCol);
                }
            });
        },
    }
})(nameSearch);