window.alert("testestestestestestes");

const mario = document.querySelector('.mario');

const pula = () => {
mario.classList.add('pula');
setTimeout(() => {
    mario.classList.remove('pula');
}, 500 );
}


document.addEventListener('keydown', pula);
