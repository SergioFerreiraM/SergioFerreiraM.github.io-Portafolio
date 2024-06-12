const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

document.querySelector('.menu-btn').addEventListener('click', activarMenu);

let linea1 = document.querySelector('.btn-line1');
let linea2 = document.querySelector('.btn-line2');
let linea3 = document.querySelector('.btn-line3');

function activarMenu() {
  linea1.classList.toggle('activelinea1__btn-menu');
  linea2.classList.toggle('activelinea2__btn-menu');
  linea3.classList.toggle('activelinea3__btn-menu');
}
menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});

document.querySelector('.menu-btn').addEventListener("mouseover", cambiarFondo);
let cambioColor1 = document.querySelector('.btn-line1');
let cambioColor2 = document.querySelector('.btn-line2');
let cambioColor3 = document.querySelector('.btn-line3');

function cambiarFondo() {
  cambioColor1.style.backgroundColor = "darkblue";
  cambioColor2.style.backgroundColor = "skyblue";
  cambioColor3.style.backgroundColor = "white";
}
menuBtn.addEventListener('mouseover', cambiarFondo);

document.querySelector('.menu-btn').addEventListener("mouseout", cambiarFondo2);
let cambioColor4 = document.querySelector('.btn-line1');
let cambioColor5 = document.querySelector('.btn-line2');
let cambioColor6 = document.querySelector('.btn-line3');

function cambiarFondo2() {
  cambioColor4.style.backgroundColor = "";
  cambioColor5.style.backgroundColor = "";
  cambioColor6.style.backgroundColor = "";
}
menuBtn.addEventListener('mouseout', cambiarFondo2);

function mostrarVistaPrevia(contenido) {
  let vistaPrevia = document.getElementById('vista-previa');
  let contenidoEnlace = document.getElementById(contenidoEnlace1);

  vistaPrevia.style.display = 'block';
  vistaPrevia.innerHTML = contenidoEnlace.innerHTML;
}
vistaPrevia.addEventListener('mouseover', mostrarVistaPrevia);

//Juego Snake
const canvas = document.getElementById('gameSnake');
const ctx = canvas.getContext('2d');

const box = 20;
const canvasSize = 400;
let snake = [{ x: 200, y: 200 }];
let dx = 0;
let dy = 0;
let food = { x: 0, y: 0 };

function draw() {
    ctx.clearRect(0, 0, canvasSize, canvasSize);
    drawSnake();
    drawFood();
}

function drawSnake() {
    let name = "Sergio-Ferreira-Mateus".split('');
    let offset = 0;
    ctx.font = '30px serif';
    ctx.fillStyle = 'green';
    snake.forEach((part, index) => {
        if (index >= name.length) return;
        ctx.fillText(name[index], part.x, part.y);
        offset += ctx.measureText(name[index]).width;
    });
}

function drawFood() {
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, box, box);
}

function moveSnake() {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(head);
    if (head.x === food.x && head.y === food.y) {
        generateFood();
    } else {
        snake.pop();
    }
}

function generateFood() {
    food.x = Math.floor(Math.random() * (canvasSize / box)) * box;
    food.y = Math.floor(Math.random() * (canvasSize / box)) * box;
}

function checkCollision() {
    const head = snake[0];
    if (
        head.x < 0 ||
        head.x >= canvasSize ||
        head.y < 0 ||
        head.y >= canvasSize ||
        snake.slice(1).some(part => part.x === head.x && part.y === head.y)
    ) {
        return true;
    }
    return false;
}

function restartGame() {
    snake = [{ x: 200, y: 200 }];
    dx = 0;
    dy = 0;
    generateFood();
}

function main() {
    if (checkCollision()) {
        clearInterval(game);
        alert('Game Over!');
        restartGame();
        game = setInterval(main, 100);
        return;
    }
    moveSnake();
    draw();
}

restartGame();
let game = setInterval(main, 100);

/*generateFood();
let game = setInterval(main, 100);*/

document.addEventListener('keydown', e => {
    const key = e.key;
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(key)) {
        e.preventDefault(); 
    }
    if (key === 'ArrowUp' && dy === 0) {
        dx = 0;
        dy = -box;
    } else if (key === 'ArrowDown' && dy === 0) {
        dx = 0;
        dy = box;
    } else if (key === 'ArrowLeft' && dx === 0) {
        dx = -box;
        dy = 0;
    } else if (key === 'ArrowRight' && dx === 0) {
        dx = box;
        dy = 0;
    }
});
// Controlar el desplazamiento en dispositivos tctiles
document.getElementById('upButton').addEventListener('touchstart', function() {
    dx = 0;
    dy = -box;
});
document.getElementById('downButton').addEventListener('touchstart', function() {
    dx = 0;
    dy = box;
});
document.getElementById('leftButton').addEventListener('touchstart', function() {
    dx = -box;
    dy = 0;
});
document.getElementById('rightButton').addEventListener('touchstart', function() {
    dx = box;
    dy = 0;
});

