export class Layer {
    constructor(game, width, height, speedModifier, image){
        this.game = game;
        this.width = width;
        this.height = height;
        this.speedModifier = speedModifier;
        this.image = image;
        this.x = 0;
        this.y = 0;
       
       
    }
    update(){
     
        if(this.x < -this.width) this.x = 0;
        else this.x -= this.game.speed * this.speedModifier;
        if(this.x > 0) {
           this.x = -1244;
       }     
     
        if(this.game.player.ending && this.y < 1700 && this.game.rocketFlying)this.y +=8;
        if(this.y>800){
         this.game.textColor = "rgba(256,256,256,1)";
         if(this.game.input.keys.length != 0)this.game.reset(),this.y = 0;
         }
         if(this.y>1700)this.game.restartText = true;
    }
    draw(context){
        context.drawImage(this.image, this.x, this.y, this.width, this.height);
        context.drawImage(this.image, this.x +this.width, this.y, this.width, this.height);
    }
    end(){

    }
    restart(){
        
        this.x = 0;
        this.y = 0;
      
      
    }
}

export class Background {
    constructor(game){
        this.game = game; 
        this.width = 1244;
        this.height = 700;
        this.layer1image = document.getElementById('layer1');
        this.layer2image = document.getElementById('layer2');
        this.layer3image = document.getElementById('layer3');
        this.layer4image = document.getElementById('layer4');
        this.layer5image = document.getElementById('layer5');
        this.layer6image = document.getElementById('layer6');
        this.layer7image = document.getElementById('layer7');
        this.layer8image = document.getElementById('layer8');
        this.layer1 = new Layer(this.game, this.width, this.height, 0, this.layer1image);
        this.layer2 = new Layer(this.game, this.width, this.height, 0.2, this.layer2image);
        this.layer3 = new Layer(this.game, this.width, this.height, 0.2, this.layer3image);
        this.layer4 = new Layer(this.game, this.width, this.height, 0.2, this.layer4image);
        this.layer5 = new Layer(this.game, this.width, this.height, 0.4, this.layer5image);
        this.layer6 = new Layer(this.game, this.width, this.height, 0.8, this.layer6image);
        this.layer7 = new Layer(this.game, this.width, this.height, 0.8, this.layer7image);
        this.layer8 = new Layer(this.game, this.width, this.height, 1, this.layer8image);

        this.backgroundLayers = [this.layer1, this.layer2, this.layer3, this.layer4, this.layer5, this.layer6, this.layer7, this.layer8];
    }
    update(){
        this.backgroundLayers.forEach(layer => {
            layer.update(); 
        })
    }
    draw(context){
        this.backgroundLayers.forEach(layer => {
            layer.draw(context);
        })
    }
}