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
        },
        updateText : function(){
            var nameInput = document.getElementById(this._namesHiddenInput);
            nameInput.value = nameSearch.getNames.usersName;
            console.log(nameInput.value)
        }  
    };
})(nameSearch);

(function (nameSearch){
    nameSearch.search = function(){
        
    }
})
