const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;

let spacePressed = false;
let angle = 0;
let hue = 0;
let frame = 0;
let score = 0;
let gamespeed = 2;

function animate (){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //ctx.fillRect(10, canvas.height - 90, 50, 50); //player
    bird.update();
    bird.draw();
    requestAnimationFrame(animate);
    angle += 0.12;
}
animate();

window.addEventListener('keydown', function(e){
   if (e.code === 'Space') spacePressed = true;
});
window.addEventListener('keyup', function(e){
    if (e.code === 'Space') spacePressed = false;
}); 