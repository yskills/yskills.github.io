
class Enemy {
    constructor(){
        this.frameX = 0;
        this.frameY = 0;
        this.fps = 20;
        this.frameInterval = 1000/this.fps; 
        this.frameTimer = 0;
        this.markedForDeletion = false;
        this.speedY = 0;
       this.ending = false;
    }
    update(deltaTime){
        //movement
        
        this.x -= this.speedX + this.game.speed;
        this.y += this.speedY;
        if (this.frameTimer > this.frameInterval) {
            this.frameTimer = 0;
            if (this.frameX < this.maxFrame) this.frameX++;
            else this.frameX = 0;
        } else {
            this.frameTimer += deltaTime;
        }
        // check if off screen
        if (this.x + this.width + 1000  < 0 || this.x > this.game.width) {
            this.markedForDeletion = true;
            this.game.buildingState = false;
          
        }




    }
    draw(context){
        if (this.game.debug) context.strokeRect(this.x,this.y, this.width, this.height);
        context.drawImage(this.image, this.frameX * this.width, 0, this.width, this.height, 
        this.x, this.y, this.width, this.height)
    }

}


    export class Stuttgart extends Enemy {
        constructor(game, x){
            super();
            this.game = game;
            this.width = 1200;
            this.height = 429;
            this.x = x;
            this.y = this.game.height -this.height - this.game.groundMargin;
            this.image = document.getElementById("building-1");
            this.speedX = 0;
            this.maxFrame = 0;
            this.textHelp = 
            "Hallo und Herzlich Willkommen /nn"+
            "auf meiner Seite. /nn"+
            "Dieses Spiel ist eine Interaktive /nn"+
            "Version meines Lebenslaufs... /nn"+

            "Das Spiel begleitet Sie durch /nn" +
            "Alle Relevanten Abschnitte meiner /nn"+
            "Bisherigen Reise und vermittelt /nn" +
            "Ihnen auf diese Art einen... /nn"+

            "Einblick auf meine Persönlichkeit /nn"+
            "Und Erfahrungen. /nn"+
            "Erstmal ein Paar Infos über mich /nn" +
            ".../nn"+
        

            "Ich bin 23 Jahre alt und komme /nn" +
            "Aus Stuttgart dort verbrachte /nn" +
            "Ich den größten Teil meines /nn"+
            "Lebens... /nn" +

            "Ich freue mich auch jedes mal  /nn"+
            "wieder in der Heimat zu sein. /nn" +
            "Allerdings hatte ich schon /nn"+
            "Immer vor andere Städte zu... /nn"+

            "Entdecken und dadurch meinen /nn"+ 
            "Horizont zu erweitern ..."
            ;
            this.text = this.textHelp.split("/nn") ?? [];
    
        }

    }

    export class Kkst extends Enemy {
        constructor(game, x){
            super();
            this.game = game;
            this.width = 800;
            this.height = 531;
            this.x = x;
            this.y = this.game.height -this.height - this.game.groundMargin;
            this.image = document.getElementById("building-2");
            this.maxFrame = 9;
            this.speedX = 0;   
            this.textHelp = 
            "Im Jahr 2018 machte ich mein Abitur /nn"+
            "Am KKST-Gymnasium und war bereit /nn"+
            "Für ein neues Abenteuer..."+
            "/nn" 
           
            ;
            this.text = this.textHelp.split("/nn") ?? [];
            
        }    
 

    
    }
    export class Bahn extends Enemy {
        constructor(game, x){
            super();
            this.game = game;
            this.width = 1664;
            this.height = 500;
            this.x = x;
            this.y = this.game.height -this.height - this.game.groundMargin;
            this.image = document.getElementById("building-3");
            this.speedX = 0;
            this.maxFrame = 4;
            this.textHelp = 
            "2019 entschloss ich mich dazu /nn" +
            "Beim Partner Unternehmen  /nn" +
            "DB Engineering & Consulting /nn"+
            "Dual zu studieren. Und zog daraufhin/nn"+

            "Nach Mannheim... /nn"
            ;
            this.text = this.textHelp.split("/nn") ?? []; 
     

        }       
        update(deltaTime){
            super.update(deltaTime);
            // bike collision
            if(this.game.player.collision&&!this.game.UI.textDone) this.speedX = 0, this.maxFrame = 0;
            else this.speedX = 9, this.maxFrame = 4;
        }
    }

    export class Arbeit extends Enemy {
        constructor(game, x){
            super();
            this.game = game;
            this.width = 887;
            this.height = 531;
            this.x = x;
            this.y = this.game.height -this.height - this.game.groundMargin;
            this.image = document.getElementById("building-4");
            this.speedX = 0;
            this.maxFrame = 4;
            this.textHelp = 
            "Der Betrieb war in Karlsruhe und im /nn"+
            "Unternehmen konnte ich über 3 Jahre /nn"+
            "Erfahrungen als Planungsingenieur /nn" +
            "Sammeln und neue Kollegen... /nn"+
           
            "Kennenlernen. Außerdem habe ich /nn"+
            "Durch diverse neue Aufgaben viel /nn"+
            "Über mich selbst gelernt. /nn"+
            "Darunter auch meine Affinität... /nn"+
            "Zum Programmieren..."
            ;
            this.text = this.textHelp.split("/nn") ?? [];

        }
    }
    export class Dhbw extends Enemy {
        constructor(game, x){
            super();
            this.game = game;
            this.width = 1158.3;
            this.height = 500;
            this.x = x;
            this.y = this.game.height -this.height - this.game.groundMargin;
            this.image = document.getElementById("building-5");
            this.speedX = 0;
            this.maxFrame = 9;
            this.textHelp = 
            "2022 machte ich schließlich meinen /nn"+
            "Abschluss an der DHBW Mannheim und /nn"+
            "lernte meine jetzige Freundinn/nn"+
            "Kennen. Rückblickend hat mir... /nn"+

            "Das Studium zwar einiges /nn"+            
            "Abverlangt und es gab viele /nn"+
            "Höhen und Tiefen. Nichtsdestotrotz /nn"+
            "Freue ich mich, dass ich diese... /nn"+
            "Zeit erleben durfte..."
            ;
            this.text = this.textHelp.split("/nn") ?? [];

        }
    }

    export class Bochum extends Enemy {
        constructor(game, x){
            super();
            this.game = game;
            this.width = 1000;
            this.height = 500;
            this.x = x;
            this.y = this.game.height -this.height - this.game.groundMargin;
            this.image = document.getElementById("building-6");
            this.speedX = 0;
            this.maxFrame = 4;
            this.textHelp = 
            "Wir entschlossen uns nach dem Studium /nn"+
            "Zusammenzuziehen und haben uns für /nn"+
            "Bochum entschieden. Weil es beruflich /nn"+
            "Und persönlich gepasst hat... /nn"
            ;
            this.text = this.textHelp.split("/nn") ?? [];

        }
    }
    export class Hobbys extends Enemy {
        constructor(game, x){
            super();
            this.game = game;
            this.width = 700;
            this.height = 450;
            this.x = x;
            this.y = this.game.height -this.height - this.game.groundMargin;
            this.image = document.getElementById("building-7");
            this.speedX = 0;
            this.maxFrame = 19;
            this.textHelp = 
            "Ich habe über die Jahre eine vielzahl /nn"+
            "Von Hobbys gehabt. Von Tennis, /nn"+
            "Gittare, Keyboard bis hin zu  /nn"+
            "Paartanz und Kickboxen... /nn"+

            "Zurzeit ist mein zeitintensivstes /nn"+
            "Hobby auf jeden Fall Volleyball /nn"+
            "Nach dem Umzug habe ich mir direkt /nn"+
            "Einen Verein gesucht und trainiere... /nn"+

            "Inzwischen auch eine eigene /nn"+
            "U13-Mannschaft..."
            ;
            this.text = this.textHelp.split("/nn") ?? [];

        }

    }

    export class Rackete extends Enemy {
        constructor(game, x){
            super();
            this.game = game;
            this.width = 308;
            this.height = 500;
            this.x = x;
            this.y = this.game.height -this.height - this.game.groundMargin;
            this.image = document.getElementById("building-8");
            this.speedX = 0;
            this.maxFrame = 0;
            this.name = "Rocket";
            this.textHelp = 
            "Ich freue mich, dass Sie das Spiel /nn"+
            "Bis zum Ende durchgespielt haben. /nn"+
            "Ich hoffe, dass Ihnen der Ausflug /nn"+
            "Spaß gemacht hat... /nn"+

            "Da ich noch am Anfang meiner Reise /nn"+
            "Stehe, weiß ich nicht wohin /nn"+
            "Es noch gehen wird. Jedoch bin ich /nn"+
            "Mir sicher, dass ich mich.../nn"+
            
            "Stetig weiterentwickeln werde. /nn"+
            "Wenn Sie ein Teil dieser Reise /nn"+
            "Sein möchten freue ich mich auf /nn"+
            "ein Gespräch mit Ihnen..."
            ;
            this.text = this.textHelp.split("/nn") ?? [];

        }        
        update(deltaTime){
            super.update(deltaTime);
            //rocket
            if(this.game.player.collision&&!this.game.UI.textDone) {
                this.game.speed = 0;
                this.maxFrame = 0;
            }
            if(this.game.player.ending == true){
            this.maxFrame = 6;
            this.frameInterval = 450;
            this.frameY = 1;
            this.game.fontSize = 90;
   
            
            
                if(this.frameX>3)
                {
                    this.game.rocketFlying = true;
                    this.speedY = -5;
                    
                }
            
            }
        }


    }

