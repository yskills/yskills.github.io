import { Standing, Runningright, Runningleft, Jumping, Falling } from "./playerStates.js";
import { UI } from "./UI.js";
let x = 0;
export class Player {
    constructor(game){
        this.game = game;
        this.width = 180;
        this.height = 164;
        this.x = 200; 
        this.y = this.game.height - this.height - this.game.groundMargin;
        this.vy = 0;
        this.weight = 1;
        this.image = document.getElementById("player");
        this.frameX = 0;
        this.frameY = 0;
        this.maxFrame;
        this.fps = 20;
        this.frameInterval = 1000/this.fps;
        this.frameTimer = 0;
        this.speed = 0;
        this.maxSpeed = 10;
        this.frameDistance = this.game.width/5;
        this.states = [new Standing(this.game), new Runningright(this.game), new Runningleft(this.game), 
        new Jumping(this.game), new Falling(this.game)];
        this.collision = false;
        this.ending = false;
        
    }
    update(input, deltaTime){
        this.checkCollision();
        this.currentState.handleInput(input);
        //horizontal movement
        this.x += this.speed;
        if (input.includes("ArrowRight") || input.includes("touch right")) this.speed = this.maxSpeed;
        else if (input.includes("ArrowLeft") || input.includes("touch left")) this.speed = -this.maxSpeed;
        else this.speed = 0;
        if (this.x < this.frameDistance) this.x = this.frameDistance;
        if (this.x > this.game.width - this.frameDistance - this.width) this.x = this.game.width -this.width -this.frameDistance;
        if(this.game.distance % 10 == 5 && this.collision == false)this.game.distance = this.game.distance -5;
        if(this.game.debug)this.maxSpeed = 100;
        // vertical movement
        this.y += this.vy;
        if(!this.onGround()) this.vy += this.weight; 
        else this.vy = 0;
        // sprite animation
        if(this.frameTimer > this.frameInterval){
            this.frameTimer = 0;
        if(this.frameX < this.maxFrame) this.frameX++;
        else this.frameX = 0;
        } else {
            this.frameTimer += deltaTime;
        }
        
        //ending
        if(this.ending == true)this.game.ending();
    }
    draw(context){
        if (this.game.debug) context.strokeRect(this.x,this.y,this.width,this.height);
        context.drawImage(this.image, this.frameX * this.width, this.frameY *this.height, this.width, this.height, this.x, this.y, this.width,
        this.height);
    }
    onGround(){
        return this.y >= this.game.height - this.height - this.game.groundMargin;

    }
    setState(state, speed){
        this.currentState = this.states[state];
        this.game.speed = this.maxSpeed * speed;
        this.currentState.enter();
    }
    checkCollision(){
        this.game.enemies.forEach(enemy => {
            if (
                enemy.x + enemy.width/4 < this.x + this.width &&
                enemy.x + enemy.width > this.x &&
                enemy.y < this.y + this.height &&
                enemy.y + enemy.height > this.y
            ){  
          
                if(enemy.name == "Rocket" && this.game.UI.textDone == true)
                {
                   
                    this.ending = true;
              
                }
                
                if(!this.collision) 
                {
                    this.game.UI.i = 0;
                    this.setState(0,0);
                    this.collision = true;
                }
                
            
                this.game.colorAnimation = 0;
                if(!this.game.UI.textDone){
                this.game.boxColor ="rgba(2,25,49,0.8)";
                this.game.textColor ="rgba(256,256,256,0.8)";
                } else{
                    this.game.textColor = "rgba(0,0,0,0)";
                    this.game.boxColor = "rgba(0,0,0,0)";
                }
                this.game.fontSize = "28";
                this.game.UI.xOffset = 25;
                this.game.UI.yOffset = 45;
                this.game.UI.text = enemy.text;
                if(!this.game.debug)this.maxSpeed = 5;
            } else{
                // no collision
                if(this.collision) 
                {   
                
                    this.setState(0,0);
                    this.collision = false;
                    
                }
                if(!this.ending){
                this.game.textColor = "rgba(0,0,0,0)";
                this.game.boxColor = "rgba(0,0,0,0)";}
                  
                //reset after leaving building 

                this.game.UI.textDone = false;
                this.game.UI.text = enemy.text;
                this.game.UI.k = 0;
                 this.game.UI.textReset();
               
                if(!this.game.debug)this.maxSpeed = 10;
            } 
             });
        }
        end(){
            this.width = 0;
            this.height = 0;
            this.maxSpeed = 0;
        }
        restart(){
        this.x = 200;
        this.y = this.game.height - this.height - this.game.groundMargin;
        this.width = 180;
        this.height = 164;
        if(this.debug)this.maxSpeed = 100;
        else this.maxSpeed = 10;
        this.collision = false;
        
        }
        
    }