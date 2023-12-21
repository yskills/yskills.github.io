export class UIBox {
    constructor(game){
        this.game = game;
        this.fontSize = 30;
        this.fontFamily = "Helvetica";
        this.x = this.game.width/9;
        this.y = this.game.height/10;
        this.width = this.game.width;
        this.height = this.game.height/3;
    }
    draw(context){
        context.beginPath();
        context.fillStyle = this.game.boxColor;
        context.fillRect(this.x, this.y, this.width-2*this.x, this.height);
       
    }
}