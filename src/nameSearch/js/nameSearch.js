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
        }).done(this.showUsers.getNames.bind(this.showUsers));
    };  
})(nameSearch);


(function (nameSearch) {
    nameSearch.showUsers = {
        usersName : [],
        getNames: function (data) {
            var list = data;
            for(var val of list){
                this.usersName.push(val.name);
            }
            this.updateText();
        },
        updateText : function(){
            var resultsArea = document.getElementById('resultArea');
            resultsArea.value = nameSearch.showUsers.usersName;
            
        }  
    };
})(nameSearch);