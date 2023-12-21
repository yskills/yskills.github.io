import { Player } from "./player.js";
import { InputHandler } from "./input.js";
import { Background } from "./background.js";
import { Stuttgart, Kkst, Bahn, Arbeit, Dhbw, Bochum, Hobbys, Rackete } from "./buildings.js";
import { UI } from "./UI.js";
import { UIBox } from "./UIBox.js";
import { Layer } from "./background.js";


window.addEventListener("load", function(){
    const canvas = document.getElementById("canvas1");
    const ctx = canvas.getContext("2d");
    canvas.width = 1244;
    canvas.height = 700;
   
    class Game {
        constructor(width, height){
            this.width = width;
            this.height = height;
            this.trueWidth = canvas.getBoundingClientRect().width;
            this.trueHeight = canvas.getBoundingClientRect().height;
            this.groundMargin = 125;
            this.speed = 0;
            this.maxSpeed = 3;
            this.background = new Background(this);
            this.layer = new Layer(this);
            this.player = new Player(this);
            this.input = new InputHandler(this);
            this.UI = new UI(this);
            this.UIBox = new UIBox(this);
            this.buildingString = 
            [   new Stuttgart(this, String), new Kkst(this, String),
                new Bahn(this, String), new Arbeit(this, String),
                new Dhbw(this, String), new Bochum(this, String),
                new Hobbys(this, String), new Rackete(this,String)];
            this.enemies = [];
            this.particles = [];
            this.animationTimer = 0;
            this.animationInterval = 90;
            this.colorAnimation = 0; 
            this.debug = false;
            this.score = String;
            this.distance = 0;
            this.forwarDistance = 0;
            this.backwardsDistance = 0;
            this.textColor ="rgba(2,25,49,1)";
            this.boxColor ="rgba(0,0,0,0)";
            this.textFont = "";
            this.fontSize = 90;
            this.fontFamily = "Sans-serif";
            this.player.currentState = this.player.states[0];
            this.player.currentState.enter();
            this.buildingState = false;
            this.building = 0;
            this.rocketFlying = false;
            this.restartText = false;
       
        }
        update(deltaTime){
            this.background.update();
            this.player.update(this.input.keys, deltaTime);
            this.trueWidth = canvas.getBoundingClientRect().width;
            this.trueHeight = canvas.getBoundingClientRect().height;
            this.buildingString[1].update();

            //distance and border
            this.distance += this.speed;
            if(this.distance < 0) {
                this.speed = 0;
                this.distance = 0;
            }

            // animationTimer
            if(this.animationTimer > this.animationInterval){
                this.colorAnimation += 0.08;
                this.animationTimer = 0;
            } else {
                this.animationTimer += deltaTime;
            }
           
            if(this.distance > 50 && this.distance <1100){
                this.animation("text",1);
            }
            //handle Buildings
            //klausur
               
           
            for(let i = 0; i<=7; i++){
                this.forwarDistance = i*4500+1500;
                this.backwardsDistance = Math.ceil((this.forwarDistance + this.width + this.buildingString[i].width + 200)/this.player.maxSpeed)*this.player.maxSpeed;
                
                if(this.distance == this.forwarDistance){    
                    this.building = i;
                    this.addEnemy(this.width, this.building);  
                    this.buildingState = true;
                   
                } else if(this.distance == this.backwardsDistance && this.speed < 0){
                    this.building = i;
                    this.addEnemy(-this.buildingString[i].width -200, this.building);
                    this.buildingState = true;
                } 
                
            }

            // handle building
            this.enemies.forEach(enemy => {
                enemy.update(deltaTime);
                if(enemy.markedForDeletion) this.enemies.splice(this.enemies.indexOf(enemy), 1);
            })
            // handle text

             this.UI.update(deltaTime);

            // handle particles
            this.particles.forEach((particle, index) => {
                particle.update();
                if (particle.markedForDeletion) this.particles.splice(index, 1);
            });
        }
        //Butzi war auch hier
        draw(context){
            this.background.draw(context);
            this.enemies.forEach(enemy => {
                enemy.draw(context);
            });
            this.player.draw(context); 
            this.particles.forEach(particle => {
                particle.draw(context);
            });
            this.UIBox.draw(context);
            this.UI.draw(context);
        }
        addEnemy(xoffset,index){
        
            if(!this.buildingState){
                switch(index) {
                    case 0:
                        this.enemies.push(new Stuttgart(this, xoffset));
                      break;
                    case 1:
                        this.enemies.push(new Kkst(this, xoffset));
                      break;
                    case 2: 
                        this.enemies.push(new Bahn(this, xoffset));  
                        break;
                    case 3:
                        this.enemies.push(new Arbeit(this, xoffset));
                        break; 
                    case 4:
                        this.enemies.push(new Dhbw(this, xoffset));
                        break;
                    case 5:
                        this.enemies.push(new Bochum(this, xoffset));
                        break;
                    case 6: 
                        this.enemies.push(new Hobbys(this, xoffset));   
                        break;            
                    default:
                        this.enemies.push(new Rackete(this,xoffset));
     

                  }
            }
         
        }
        animation(object,start){
            if(object == "text")this.textColor= "rgba(0,0,0,"+ (start-this.colorAnimation) +")";
            else if(object == "box") this.boxColor= "rgba(0,0,0,"+ (start-this.colorAnimation) +")";
        }
        ending(){
            this.player.end();
            this.layer.end();
        }
        reset(){
            this.player.ending = false;
            this.player.restart();
            this.layer.restart();
            this.UI.restart();
            
            this.rocketFlying = false;
            this.restartText = false;
            this.distance = 0;
            this.buildingState = false;
            this.enemies = [];
            this.textColor = "rgba(2,25,49,1)";
            this.boxColor = "rgba(0,0,0,0)"; 
            this.fontSize = 90;
           
        }
    }

    const game = new Game (canvas.width, canvas.height);

    let lastTime = 0;

    function animate(timeStamp){
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        ctx.clearRect(0,0, canvas.width, canvas.height);
        game.update(deltaTime);
        game.draw(ctx);
       requestAnimationFrame(animate);

    }
     animate(0);
});