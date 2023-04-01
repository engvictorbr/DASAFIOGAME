const mario = document.querySelector('.mario');
const cano = document.querySelector('.cano');
const chao = document.querySelector('.chao');

textStart = document.querySelector('iniciar')
audioStart = new Audio('./audio/theme.mp3')
somdepula = new Audio('./audio/pula.mp3')
audioGameOver = new Audio('./audio/gameover.mp3')
pontuacao = document.querySelector('pontos')

var gol = -100


//tentativa start
const start = () => {

    document.getElementById("iniciar").style.opacity = "0%";

    cano.classList.add('canovindo');
    chao.classList.add('chaopassando');
    mario.src = './images/mario.gif';
    mario.style.width = '100px';

    audioStart.play();


}
document.addEventListener('keydown', start);

//fim tentativa start


const pula = () => {
mario.classList.add('pula');
setTimeout(() => {
    mario.classList.remove('pula');
}, 600 );



setTimeout(() => {
 document.getElementById("score").innerHTML=`Score: ${gol=gol+100} pontos`;   
}, 1000 )

somdepula.play();


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
        //tentativa game over
        document.removeEventListener('keydown', pula);
             document.getElementById("iniciar").style.color = "black";
        document.getElementById("iniciar").style.opacity = "100%";
            somdepula = null;
        document.getElementById("iniciar").innerHTML="<strong>GAME OVER</strong> <br> Pressione F5 para reiniciar";


            function stopAudioStart(){
                audioStart.pause();
                }stopAudioStart();
                audioStart=null;

            audioGameOver.play();

            function stopAudio(){
                audioGameOver.pause();
                }setTimeout(stopAudio, 8000);

            clearInterval(checkGameOver);
            audioGameOver = null;

            
            //tentativa game over
    }
},10);


document.addEventListener('keydown', pula);
