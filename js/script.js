let canvas = document.querySelector('canvas');

let ctx = canvas.getContext('2d');
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

let str = 'chitkarshrathi';
let matrix = str.split('');
let font_size = 12;
let columns = width / font_size;
let drops = [];

for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = '#0F0';
    ctx.font = font_size + 'px arial';

    for (let i = 0; i < drops.length; i++) {
        let text = matrix[drops[i] % matrix.length]; // Modified line
        ctx.fillText(text, i * font_size, drops[i] * font_size);

        if (drops[i] * font_size > height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(draw, 40 );

window.addEventListener('resize', () => location.reload());
