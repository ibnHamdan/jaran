var nameSearch = nameSearch || {};

(function (nameSearch) {
    nameSearch.init = function(){
         this.getData();

         this.showUsers.getNames();

         this.showUsers.updateText();

         return ;
    };  
})(nameSearch);

(function (nameSearch) {
    nameSearch.getData = function(){
         $.ajax({
            url: 'https://jsonplaceholder.typicode.com/users',
            method: 'Get'
        }).then(function (data) {
            nameSearch.showUsers.getNames(data);
        });
    };  
})(nameSearch);
(function (nameSearch) {
    nameSearch.showUsers = {
        usersName : [],
        getNames: function (data) {
            var list = data;
            for(var prop in list){
                list.forEach(function (el, index, array) {
                nameSearch.showUsers.usersName.push(el.name);
                for (var prop in el) {
                }
            });
            }
        },
        updateText : function(){
            var resultsArea = document.getElementById('resultArea');
            resultsArea.value = nameSearch.showUsers.usersName;
            
        }  
    };
})(nameSearch);