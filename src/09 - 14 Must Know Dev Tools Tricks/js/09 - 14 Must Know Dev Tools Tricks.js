const dogs = [{ name: 'Snickers', age: 2}, {name:'hugo', age: 8}];

    const p = document.querySelector('p');
function makeGreen() {
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

//Regular
console.log('hello');

//Interpolated
console.log('hi i am a %s string', '~!@')

//Styled
console.log('%c I some ', 'font-size:20px; ');

// warning
console.warn('O Nooooo')

//error
console.error('o OOO')

//info
console.info('info')

//testing
console.assert(p.classList.contains('ouch'), 'that is wrong!');

//viewing DOM Elements
console.dir(p)

//Grouping

dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`)
    console.log(`this is ${dog.name}`)
    console.groupEnd(`${dog.name}`)
})

//timing 
console.time('fetching data');
fetch('https://api.github.com/users/ibnHamdan')
.then(data => data.json())
.then(data => {
    console.timeEnd('fetching data');
    console.log(data);
});