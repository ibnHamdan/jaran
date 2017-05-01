const slider = document.querySelector('.items');

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown= true;
    slider.classList.add('active');
    starX = e.pageX - slider.offsetLeft;
    scrollLeft = slider;

});

slider.addEventListener('mouseleave', () => {
    isDown= false;
    slider.classList.add('active');
});

slider.addEventListener('mouseup', () => {
    isDown= false;
    slider.classList.add('active');

});

slider.addEventListener('mousemove', (e) => {
    e.preventDefault();
    const x = e.pagex - slider.offsetLeft;
    const walk = (x - startX * 3);
    slider.scrollLeft = scrollLeft - walk;

});



