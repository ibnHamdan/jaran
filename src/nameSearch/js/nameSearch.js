

var users = $.ajax({
    url: 'https://jsonplaceholder.typicode.com/users',
    method: 'Get'
}).then(function (data) {
    names(data);
});

var usersName = [];
function names(data) {
    var list = data;
    
    list.forEach(function(el, index, array){
         usersName.push(el.name);
        for(var prop in el){
        }
    });
}

var resultsArea = document.getElementById('resutArea');

resultsArea.value = usersName;
