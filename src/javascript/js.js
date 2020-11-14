// Captura dos elementos na DOM

const card = document.querySelector('.card');
const container = document.querySelector('.container');
const title = document.querySelector('.title');
const show = document.querySelector('.show img');
const info = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');

// Evento de movimentar animação

container.addEventListener('mousemove', (event) => {
    let xAxis = (window.innerWidth / 2 - event.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - event.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animar na parte de dentro
container.addEventListener('mouseenter', (event) => {
    card.style.transition = 'none';
    
    // Entrar
    title.style.transform = 'translateZ(150px)';
    show.style.transform = 'translateZ(200px)';
    info.style.transform = 'translateZ(125px)';
    sizes.style.transform = 'translateZ(100px)';    
});

// Animar na parte de fora
container.addEventListener('mouseleave', (event) => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';

    // Voltar
    title.style.transform = 'translateZ(0px)';
    show.style.transform = 'translateZ(0px)';
    info.style.transform = 'translateZ(0px)';
    sizes.style.transform = 'translateZ(0px)';    
});