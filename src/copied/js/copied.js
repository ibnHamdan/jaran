/*
*
* first methos
*

var btn = document.getElementById('copied');


btn.addEventListener('click', function(e) {
    console.log('hi')
    document.execCommand('copy', false, document.getElementById('select').select());
    console.log('copied')
});

*/

(function() {
    var btn = document.getElementById('copied');

    btn.addEventListener('click', copy, true);

    function copy(e) {
        var t = e.target;
        var c = t.dataset.copytarget;
        var inp = (c ? document.querySelector(c) : null)

        if(inp && inp.select) {
            inp .select();

            try {
                document.execCommand('copy');
            }
        }
    }
})