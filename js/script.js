const mario = document.querySelector('.mario')
const cano = document.querySelector('.cano')

const pulo = () => {

    mario.classList.add('pulo');

    setTimeout(() => {
        
        mario.classList.remove('pulo');

    }, 650);
}

const loop = setInterval(() => {
    
    const PosicaoCano = cano.offsetLeft;
    const PosicaoMario = +window.getComputedStyle(mario).bottom.replace('px', '');
   
    if(PosicaoCano <= 120 && PosicaoCano > 0 && PosicaoMario < 80) {

        cano.style.animation = 'none';
        cano.style.left = `${PosicaoCano}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${PosicaoMario}px`;
        
        mario.src = './imagens/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
        
        clearInterval(loop);
    }
}, 10);

document.addEventListener('keydown', pulo)