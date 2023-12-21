import { Dust } from "./particles.js";

const states = {
    STANDING: 0,
    RUNNINGRIGHT: 1,
    RUNNINGLEFT: 2,
    JUMPING: 3,
    FALLING: 4,
}

class State {
    constructor(state, game){
        this.state = state;
        this.game = game;
    }
}

export class Standing extends State {
    constructor(game){
        super("STANDING", game);
    }
    enter(){
        this.game.player.frameX = 0;
        this.game.player.maxFrame = 4;
        this.game.player.frameY = 0;
        
    }
    handleInput(input){
        if(input.includes("ArrowRight")){
            this.game.player.setState(states.RUNNINGRIGHT, 1);
        }
        if(input.includes('ArrowLeft')){
            this.game.player.setState(states.RUNNINGLEFT, -1);
        }
        if(input.includes("ArrowUp")){
            this.game.player.setState(states.JUMPING, 0);
        }
    }
}

export class Runningright extends State {
    constructor(game){
        super("RUNNINGRIGHT", game);
    }
    enter(){
        this.game.player.frameX = 0;
        this.game.player.maxFrame = 4;
        this.game.player.frameY = 1;
    }
    handleInput(input){
        this.game.particles.push(new Dust(this.game, this.game.player.x + this.game.player.width *0.5,
             this.game.player.y + this.game.player.height));
        if(input == ""){
            this.game.player.setState(states.STANDING, 0);
        }
        if(input.includes("ArrowUp")){
            this.game.player.setState(states.JUMPING, 0);
        }
        if(input.includes('ArrowLeft') && !input.includes("ArrowRight")){
            this.game.player.setState(states.RUNNINGLEFT, -1);
        }
    }
}

export class Runningleft extends State {
    constructor(game){
        super("RUNNINGLEFT",game);
    }
    enter(){
        this.game.player.frameX = 0;
        this.game.player.maxFrame = 4;
        this.game.player.frameY = 2;
    }
    handleInput(input){
        this.game.particles.push(new Dust(this.game, this.game.player.x + this.game.player.width *0.5,
            this.game.player.y + this.game.player.height));
        if(input == ""){
            this.game.player.setState(states.STANDING, 0);
        }
        if(input.includes("ArrowUp")){
            this.game.player.setState(states.JUMPING, 0);
        }
        if(input.includes('ArrowRight') && !input.includes("ArrowLeft")){
            this.game.player.setState(states.RUNNINGRIGHT, 1);
        }
    }
}


export class Jumping extends State {
    constructor(game){
        super("JUMPING",game);
       
    }
    enter(){
        
        if(this.game.player.onGround()) this.game.player.vy -= 25;
        this.game.player.frameX = 0;
        this.game.player.maxFrame = 4;
        this.game.player.frameY = 3;
    }
    handleInput(input){
        if(this.game.player.vy > this.game.player.weight){
            this.game.player.setState(states.FALLING, 0);
        }
        else if(input.includes("ArrowRight")){
            this.game.player.setState(states.JUMPING, 1);
        }
        else if(input.includes('ArrowLeft')){
            this.game.player.setState(states.JUMPING, -1);
            this.game.player.frameY = 4;
        }
    }
}

export class Falling extends State {
    constructor(game){
        super("FALLING",game);
       
    }
    enter(){
        if(this.game.player.onGround()) this.game.player.vy -= 25;
        this.game.player.frameX = 0;
        this.game.player.maxFrame = 4;
        this.game.player.frameY = 5;

    }
    handleInput(input){
        if(this.game.player.vy < this.game.player.weight){
            this.game.player.setState(states.STANDING, 0);
        }
        else if(input.includes("ArrowRight")){
            this.game.player.setState(states.FALLING, 1);
        }
        else if(input.includes('ArrowLeft')){
            this.game.player.setState(states.FALLING, -1);
            this.game.player.frameY = 6;
        }
    }
    
}