class Particle {
    constructor(game){
        this.game = game;
        this.markedForDeletion = false;
    }
    update(){
        this.x -= this.speedX + this.game.speed;
        this.y -= this.speedY;
        this.size *= 0.95;
        if(this.size<0.5) this.markedForDeletion = true;
    }
}

export class Dust extends Particle {
    constructor(game, x ,y){
        super(game);
        this.size = Math.random() * 10 + 5;
        this.x = x;
        this.y = y-10;
        this.speedX = Math.random();
        this.speedY = Math.random();
        this.color = "rgba(256,256,256,0.3)";
    };
    draw(context){
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.fillStyle = this.color;
        context.fill();
    }
    
} 

