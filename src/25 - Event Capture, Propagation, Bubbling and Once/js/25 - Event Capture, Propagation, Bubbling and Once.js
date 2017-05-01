const divs = document.querySelectorAll('div')
function logtext(e) {
    e.stopPropagation();
    console.log(this.classList.value)
}

divs.forEach(div => div.addEventListener('click', logtext, {
    capture: false,
    once: true
}))