export class InputHandler{
    constructor(game){
        this.game = game;
        this.keys = [];
        this.touchY = "";
        this.touchX = "";
        this.touchTreshold = 30;
        
        window.addEventListener("keydown", e => {
        
        if((    
            e.key ==="ArrowDown" ||
            e.key === "ArrowUp"   ||
            e.key === "ArrowLeft" ||
            e.key === "ArrowRight" ||
            e.key === "Enter" ||
            e.key === "r" ||
            e.key === "s" ||
            e.key === "w" ||
            e.key === "a" ||
            e.key === "d" ||
            e.key === " "
            ) && this.keys.indexOf(e.key) === -1){
            this.keys.unshift(e.key);
        } 
        else if (e.key ==="p") this.game.debug = !this.game.debug;
        else if(e.key === "o") this.game.reset();
        });
        window.addEventListener("keyup", e => {
            if((    e.key ==="ArrowDown" ||
                    e.key ==="ArrowUp" ||
                    e.key === "ArrowLeft" ||
                    e.key === "ArrowRight" ||
                    e.key === "Enter" ||
                    e.key === "r"||
                    e.key === "s" ||
                    e.key === "w" ||
                    e.key === "a" ||
                    e.key === "d" ||
                    e.key === " "
                )){
                this.keys.splice(this.keys.indexOf(e.key),1);
            }
          
        });
        window.addEventListener("touchstart", e=>{
            this.touchX = e.changedTouches[0].pageX;
            this.touchY = e.changedTouches[0].pageY;
     
          if(this.touchY < this.game.trueHeight/2) this.keys.push("ArrowUp");
           if(this.touchX < this.game.trueWidth/2)this.keys.push("ArrowLeft");
           if(this.touchX > this.game.trueWidth/2)this.keys.push("ArrowRight");
            
        });
        window.addEventListener("touchmove", e=>{
            const swipeDistance = e.changedTouches[0].pageY - this.touchY;
            const xchange = e.changedTouches[0].pageX;
            
            
            if(xchange < this.game.trueWidth/2)this.keys = [],this.keys.push("ArrowLeft");
            if(xchange > this.game.trueWidth/2)this.keys = [],this.keys.push("ArrowRight");
            
        });
        window.addEventListener("touchend", e=>{
          
            this.keys = [];

        });
        
    }
}