const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 50;
  }

  draw() {
    ctx.fillStyle = 'blue';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

class Projectile {
  constructor(x, y, velocityX, velocityY) {
    this.x = x;
    this.y = y;
    this.width = 10;
    this.height = 10;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
  }

  draw() {
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  update() {
    this.x += this.velocityX;
    this.y += this.velocityY;
  }
}

const player = new Player(canvas.width / 2, canvas.height / 2);
const projectiles = [];

canvas.addEventListener('click', (event) => {
  const angle = Math.atan2(
    event.clientY - canvas.offsetTop - player.y,
    event.clientX - canvas.offsetLeft - player.x
  );
  const velocity = {
    x: Math.cos(angle) * 5,
    y: Math.sin(angle) * 5,
  };
  projectiles.push(new Projectile(player.x, player.y, velocity.x, velocity.y));
});

function animate() {
  ctx.clearRect(0, 0, canvas.width
