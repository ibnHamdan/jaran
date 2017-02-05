var nameSearch = nameSearch || {};

(function (nameSearch) {
    nameSearch.init = function(){
         this.getData();
    };  
})(nameSearch);

(function (nameSearch) {
    nameSearch.getData = function(){
        var _this = this;
         $.ajax({
            url: 'https://jsonplaceholder.typicode.com/users',
            method: 'Get'
        }).done(this.getNames.getNames.bind(this.getNames));
    };  
})(nameSearch);

(function (nameSearch){
    nameSearch.getCustomName = {
        _customNameInput : '',
        _customNameBtn: '',
        _addCustomeName: function(){
            var _this = this;
            $(this._customNameBtn).on('click', function(){
                var customName = $(_this._customNameInput).val();
                nameSearch.getNames.usrsName.push(customName)
            });
        },

    }
})(nameSearch);


(function (nameSearch) {
    nameSearch.getNames = {
        _namesHiddenInput : 'namesHiddenInput',
        usersName : [],
        getNames: function (data) {
            var list = data;
            for(var val of list){
                this.usersName.push(val.name);
            }
            this.updateText();
            nameSearch.showNames.showNamesEvent();
            
        },
        updateText : function(){
            var nameInput = document.getElementById(this._namesHiddenInput);
            nameInput.value = nameSearch.getNames.usersName;
        }  
    };
})(nameSearch);

// (function (nameSearch){
//     nameSearch.search = function(){
        
//     }
// });

(function(nameSearch){
    nameSearch.showNames = {
        _showNamesBtn : '#showNamesBtn',
        _namesTable: '#namesTable',
        showNamesEvent : function(){
            $(this._showNamesBtn).on('click', function(){
                var names = nameSearch.getNames.usersName;
                // names.forEach(function(val, key){
                //     var namesTable = document.getElementById('namesTable');
                //     namesTable.innerHTML = '<tr><td><input type="checkbox" /> <td> <span>'+ val +'</span></td></tr>';
                //     console.log(val);
                // });
                names.forEach(function(val, key){
                    var namesTable = $(this._namesTable);
                    namesTable.append('<tr><td><input type="checkbox" /> <td> <span>'+ val +'</span></td></tr>');
                    console.log(val);
                });
                // for(var val of names){
                //     //var $item = $('<label><input type="checkbox" /> <span>' + data[dataProp].name + '</span></label>');
                //     //var name = ('<tr><td><input type="checkbox" /> <td> <span>'+ names[val] +'</span></td></tr>');
                //     var namesTable = document.getElementById('namesTable');
                //     namesTable.innerHTML = '<tr><td><input type="checkbox" /> <td> <span>'+ val +'</span></td></tr>';
                //     console.log(val[names]);
                // }
            });
        },
    }
})(nameSearch);
