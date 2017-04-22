const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progrssBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullScreenBtn = player.querySelector('[data-full-screen');


/* build our function */

function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateButton() {
    const icon = this.paused ? '>' : '||';
    toggle.textContent = icon;
}

function skip(){
    video.currentTime += parseFloat(this.dataset.skip)
}

function handleRangeUpdate() {
    video[this.name] = this.value;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progrssBar.style.flexBasis = `${percent}%`

}

function scrub (e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

function fullScreen (){
    console.warn('TO DO : video fullScreen show')
}

/* Hook up the event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress)


toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button =>  button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));


let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove',(e) => mousedown && scrub);
progress.addEventListener('mosedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

fullScreenBtn.addEventListener('click', fullScreen)