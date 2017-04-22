var parent = document.querySelector('.parent');
var child = document.querySelector('.child');

parent.addEventListener('click', function(e){
    var $selected = $(e.currentTarget());
    console.log(e.currentTarget())

}, false)