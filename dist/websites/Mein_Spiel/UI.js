export class UI {
    constructor(game){
        this.game = game;
        this.x = 20;
        this.y = 20;
        this.width = this.game.width/4;
        this.height = this.game.height/3; 
        this.letterTimer = 0;
        this.letterIntervall = 10;
        this.ans1Array = [];
        this.helpArray = [];
        this.ans2Array = [];
        this.ans3Array = [];
        this.ans4Array = [];
        this.text = ["Mein Spiel"];
        this.yOffset = 70;
        this.xOffset = 90;
        this.i = 0;
        this.k = 0;
        this.z = 0;
        this.textDone = false;
      
    }
    restart(){
        
        this.text = ["Mein Spiel"];
        this.yOffset = 70;
        this.xOffset = 90;
        this.k = 0;
        this.i = 0;
        this.z = 0;
        this.ans1Array = [];
        this.ans2Array = [];
        this.ans3Array = [];
        this.ans4Array = [];
  
       
       
    }
    update(deltaTime){
                if((this.game.input.keys.length != 0 && this.z==4)){
                this.textReset(this.k);
                }
            
              
        if(this.game.player.collision == true || this.game.distance <1000){
            if(this.letterTimer > this.letterIntervall){
                this.textArr = this.text[this.k].split("");
                if(this.i<this.text[this.k].length){
                if(this.z==0)this.helpArray = this.ans1Array;
                else if(this.z==1)this.helpArray= this.ans2Array;
                else if(this.z==2)this.helpArray = this.ans3Array;
                else if(this.z==3)this.helpArray= this.ans4Array;
                this.helpArray.push(this.textArr[this.i]);
                this.i++;
                
                }
                
                else if(this.k<this.text.length-1) {
                
                    if(this.z<4){
                    this.helpArray = [];
                    this.z++;
                 
                    this.k++;
                    this.i = 0;
                    }
      
                }
                else if(this.game.input.keys.length != 0 &&
                     this.k == this.text.length-1 &&
                      this.game.distance >900) 
                      {this.textReset(this.k+1);}
               
              
                this.letterTimer = 0;
            } else {
                this.letterTimer += deltaTime;
            }
        }
    }
    
    draw(context){
   
        context.font = this.game.fontSize + "px " + this.game.fontFamily;
        context.textAlign = "center";
        context.fillStyle = this.game.textColor;
        // textsplitter

    
      
        if(this.game.distance <1000){
            
            
            for(let i=0; i<this.ans1Array.length; i++){
            
            if(this.z>=0)context.fillText(this.ans1Array[i], this.width/2+this.xOffset*(i+1), this.height, 700);
            
            }
           for(let k = 0; k< this.ans2Array.length;k++){
            
           if(this.z>=1)context.fillText(this.ans2Array[k], this.width+this.xOffset*(k+1), this.height+this.yOffset, 700);
            } 
          for(let l=0; l<this.ans3Array.length; l++){
        
            if(this.z>=2)context.fillText(this.ans3Array[l], this.width+this.xOffset*(l+1), this.height+2*this.yOffset, 700);
            
            }
            for(let m = 0; m< this.ans4Array.length;m++){
            
            if(this.z>=3)context.fillText(this.ans4Array[m], this.width+this.xOffset*(m+1), this.height+3*this.yOffset, 700);
            } 
        }  
          
        else if(this.game.player.ending == true){
            context.fillText("Danke fürs Spielen!", this.width/2+450, this.height, 1200);
            if(this.game.restartText)context.fillText("Drücken Sie eine Taste um Neuzustarten!", this.width/2+450, this.height*2, 1200);
        }
     
        else {
            for(let i=0; i<this.ans1Array.length; i++){
            
                if(this.z>=0)context.fillText(this.ans1Array[i], this.width/2+this.xOffset*(i+1), this.height/2, 700);
                
                }
            for(let k = 0; k< this.ans2Array.length;k++){
            
                if(this.z>=1)context.fillText(this.ans2Array[k], this.width/2+this.xOffset*(k+1), this.height/2+this.yOffset, 700);
            } 
            for(let l=0; l<this.ans3Array.length; l++){
        
                if(this.z>=2)context.fillText(this.ans3Array[l], this.width/2+this.xOffset*(l+1), this.height/2+2*this.yOffset, 700);
        
            }
            for(let m = 0; m< this.ans4Array.length;m++){
            
                if(this.z>=3)context.fillText(this.ans4Array[m], this.width/2+this.xOffset*(m+1), this.height/2+3*this.yOffset, 700);
            } 
        }
            
        
   
        //context.fillText("distance:" + this.game.distance, this.width, this.height/2)
       
    }

    textReset(test){
        this.ans1Array = [];
        this.ans2Array = [];
        this.ans3Array = [];
        this.ans4Array = [];
        this.i = 0;
        this.z = 0;
        

        if(test == this.text.length ){
            this.textDone = true;
            
          }
        else this.textDone = false;

    } 
}