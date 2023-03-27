const mario = document.querySelector('.mario');
const cano = document.querySelector('.cano');
const chao = document.querySelector('.chao');

const pula = () => {
mario.classList.add('pula');
setTimeout(() => {
    mario.classList.remove('pula');
}, 600 );
}

const loop = setInterval(() => {
    const lugarcano = cano.offsetLeft;
    const lugarmario = +window.getComputedStyle(mario).bottom.replace('px', '');
    console.log(lugarmario);
        if (lugarcano <= 142 && lugarcano>0 && lugarmario < 80) {
        
        cano.style.animation = 'none';
        cano.style.left = `${lugarcano}px`;
        chao.style.animation = 'none';
        mario.style.animation = 'none';
        mario.style.bottom = `${lugarmario}px`;
        mario.src = './images/perdeu.png';
        mario.style.width = "60px";
    }
},10)


document.addEventListener('keydown', pula);
