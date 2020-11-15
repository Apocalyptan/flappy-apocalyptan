const playerSprite = new Image();
playerSprite.src = "apocalyptan.png";
class Bird {
    constructor(){
        this.x = 150;
        this.y = 200;
        this.vy = 0;
        this.originalWidth = 640;
        this.originalHeight = 640;
        this.width = this.originalWidth/20;
        this.height = this.originalHeight/20;
        this.weight = 1;
    }
    update(){
        let curve = Math.sin(angle) * 20;
        if (this.y > canvas.height - (this.height * 3) + curve){
            this.y = canvas.height - (this.height * 3) + curve;
            this.vy = 0;
        } else {
            this.vy += this.weight;
            this.vy *= 0.9;
            this.y += this.vy;
        }
        if (this.y < 0 + this.height){
            this.y = 0 + this.height;
            this.vy = 0;
        }
        if (spacePressed && this.y > this.height *3 ) this.flap();
    }
    draw(){
        ctx.fillStyle = "purple";
        //ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(playerSprite, 0, 0, this.width, this.height, 
            this.x -5, this.y - 12 , this.width, this.height);
    }
    flap(){
        this.vy -= 3;
    }
}
const bird = new Bird();