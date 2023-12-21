<script>        //vue part

import intro from "./components/intro.vue"


    let id = 1;         // global var to get unique ids for each element
    export default{
        components: {
            intro
        },
        data() {                        //data which are used in this app
        return {
            seen: true,
            mainMenu: String,
            menu: String,
            hover: false,
            boxes: [
                {link: "\\icons\\about_me_profile.png",
                des: "Über mich",
                id: "box1"}, 
                {link: "\\icons\\skills.png",
                des: "Ausbildung und Projekte", 
                id: "box2"},
                {link:"\\icons\\game.png",
                des: "Interaktives Spiel",
                id: "box3"
                },
                {link: "\\icons\\contact.png",
                des: "Kontakt", 
                id: "box4"}
            ],
            ausbildung: false,
            about: false,
            projects: [
                {title: "Studienarbeiten",
                elements: [
                    {name: "Entwicklung eines Audio-Players, zum abspielen und speichern von Songs",
                    link: "\\websites\\Audioplayer_all_in_one.html",
                    id: id++
                    },
                    {name: "Schnittstelle zwischen Browser und Circuit.js",
                    link: "\\pdfs\\Xie_Yi-Hank_8986105_Studienarbeit1_Circuit.JS_Abgabe.pdf",
                    id: id++
                    }
                    
                ],
                toggle: "studienArbeiten",

                },
                {title: "Praxisarbeiten",
                elements: [
                    {name: "Bewertung von Speiseplankonzepten für den Ausbau einer viergleisigen Strecke",
                    id: id++
                    },
                    {name: "Programmierung einer Funktionserweiterung für das CAD-Programm \"Microstation\"",
                    id: id++
                    }
                ],
                toggle:"praxisArbeiten"},
                {title: "Freizeitprojekte",
                elements: [
                    {name: "Eine persönliche Vorlage für Tabellen, zum flexiblen bearbeiten von Werten",
                    link: "\\websites\\Tabellenvorlage.html",
                    id: id++
                    },
                    {name: "Mein Spiel",
                    link: "\\websites\\Mein_Spiel\\index.html",
                    id: id++
                    },
                    {name: "Die Entwicklung einer eigenen Homepage (wird noch weiterentwickelt)",
                    link: "https://yxie.de/",
                    id: id++
                    }
                ],
                toggle: "freizeitProjekte"}
                
            ],
            activeProject: "studienArbeiten"
            
        }
    
        },

        methods: {                              //@ events
            disappear() {
                this.seen = false;
                setTimeout(() => this.mainMenu = "active", 1500);       //timeout to get the transition right
            
                
            },     
                select: function(event) {
                
                var boxId = event.currentTarget.id;
                if(boxId !="box3"){
                this.mainMenu = "";
                setTimeout(() => {this.menu = boxId; this.mainMenu = "notActive"}, 1500);
                this.hover = false;
                }
                if(boxId =="box1"){
                    this.about = true;
                }
                if(boxId =="box3"){
                    window.open("\\websites\\Mein_Spiel\\index.html","blank");
                }
                if(boxId == "box4"){
                    setTimeout(() => window.open("https://www.linkedin.com/in/yi-hank-xie", '_blank'),2300)
                }
            },
            hoverMenu(x){
                
                this.boxDescritpion = x;
            },
            backToMain() {
                this.mainMenu = "";
                setTimeout(() => this.mainMenu = "active", 1000);
                this.hover = false;
                this.about = false;
                this.ausbildung = false;
            
            },
            toggleProject: function(event) {
                
                var projectId = event.currentTarget.id;
                
                if(this.activeProject==projectId){
                    this.activeProject = ""
                }
                else{
                        
                this.activeProject = projectId;
                }
        
            },
            fullScreen: function(event){
                var fullScreenId = event.currentTarget.id;
                this.fscreen = !this.fscreen;
            
                if(fullScreenId!== "4" && fullScreenId!=="3"){
                document.getElementById(fullScreenId).classList.toggle("projectIframesDivfscreen");
                document.getElementById("iframe"+fullScreenId).classList.toggle("projectIframesfscreen");
                }
            }

        }
        
    }     
      
   
</script>

<template>                                                          <!--Basically the HTML Part-->
               
               
               <!--<div v-for="n in 50" class="snow"></div>-->           <!--Snow-Event-->
                <Transition name="intro-fade">                      <!--Intro-Animation-->
                    
                    <intro v-if="seen" @click="disappear"/>         <!--Calls the intro.vue template-->
                
                </Transition>
                <Transition name="normal-fade">
                
                    <!--after intro mainmenu and other menus-->
           
                
                        <div v-if="mainMenu === 'active'" id="parentDiv">               <!--Main-Menu-->
                           
                            <div v-for="box in boxes" class="box glow-on-hover" @click="select" @mouseover="hover = true, hoverMenu(box.des)" @mouseleave ="hover =false" :id="box.id">
                                <img v-bind:src="box.link">
                            </div> 
                            
                            <div v-if="hover" id="menuDesDiv">
                                <p id="menuDesText">
                                    {{boxDescritpion}}                                  <!--Box-Description-->
                                </p>
                            </div>
                            
                        </div>
                        
                        <div v-else-if="mainMenu === 'notActive'" id="selectedBox" :class="{whiteBody: about,denimBody: ausbildung}">
                            
                            <button class="glow-on-hover" id="backToMainButton" @click="backToMain">
                                <img src="\icons\back_arrow.png">
                            </button>
                        

                            <div v-if="menu === 'box1'" class="menu" id="menu1">
                                
                                <div id="menu1T0">
                                    <h1>
                                        About Me
                                    </h1>
                                </div>
                                <div>
                                <div id="menu1T2" class="menu1">
                                        
                                        <a href="\images\Lebenslauf.jpg" target="_blank"><img src="\images\Bewerbungsfoto_Weis.jpg"  alt="Bewerbungsfoto" id="foto"></a>
                                    
                                    <table id="aboutMeTable">
                                        <tr>
                                            <th>Name:</th>
                                            <td>Yi-Hank Xie</td>
                                        </tr>
                                        <tr>
                                            <th>Alter: </th>
                                            <td>23 Jahre</td>
                                        </tr>
                        
                                        <tr>
                                            <th>Hobbies: </th>
                                            <td>Volleyball, Programmieren, Tennis, Gitarre</td>
                                        </tr>
                                        </table>                         
                                </div>
                                <div id="menu1T1" class ="menu1">
                                    <h2>
                                        Hallo,
                                    </h2>
                                    <p>
                                        es freut mich, dass sie meine Seite aufgerufen haben. 
                                        Die Idee hinter dieser Seite ist es, einen persönlichen Eindruck zu vermitteln 
                                        und was ist persönlicher als eine selbst programmierte Website&#128512; <br />
                                        Als junger Elektroingenieur, welcher bereits praktische Erfahrung gesammelt hat, suche ich eine Stelle, welche es mir ermöglicht mich neuen Herausforderugnen zu stellen und mich weiterzuentwickeln. 
                                        Ich lerne gerne dazu und bin dabei zielorientiert und effizient.
                                        Beispielsweise habe ich mich für die Programmierung dieser Seite 
                                        in das Framework <a href="https://vuejs.org/guide/introduction.html" target="_blank">Vue-js</a> eingearbeitet.
                                    </p>
                                </div>
                                </div>

                            
                            </div>

                            <div v-else-if="menu ==='box2'" class="menu" id="menu2">
                                
                                <div id="switch">
                                    <input type="checkbox" v-model="ausbildung" id="toggle" class="toggle--checkbox" />
                                        <label for="toggle" class="toggle--label">
                                            <span class="toggle--label-background"></span>
                                            <p :class="{projectHeader: ausbildung}" style="position: absolute;bottom: 20px;right: 1px;margin-right: 0px; font-size: 1.4vh;" class="ausbildung">Klick mich!</p>
                                        </label>
                                    <div class="background "></div>
                                    <div v-for="n in 50" class="snow"></div>
                                </div>
                                <div>
                                <h1><span class="ausbildung" :class="{experienceHeader: ausbildung}">Ausbildung</span><span v-show="ausbildung" :class="{projectHeader: ausbildung}">Projekte</span></h1> 
                                </div>
                                        <div v-if="ausbildung" id="project" style="text-align: left">
                                            <div v-for="project in projects">
                                                <h2 class="projectClick" @click="toggleProject" :id="project.toggle" style="clear: both">{{project.title}}</h2>
                                                <div style="margin: 20px auto">
                                                    <div v-show="activeProject === project.toggle">
                                                        <div v-for="e in project.elements"  @click="fullScreen" :class="{projectIframesDiv: e.link !== empty, projectIframesDiv2: e.link == emtpy}" :id="e.id"> 
                                                        <div @click.stop="fullScreen" class="spanIframes"><a :href="e.link" target="_blank" class="spanIframes">{{e.name}}</a></div><div>
                                                            <div v-if="e.link !== empty">
                                                                <button class="fullScreenButton"><img src="\icons\fullscreen.png"></button>
                                                                <iframe :id="'iframe'+e.id" class="projectIframes" :src="e.link"></iframe>   
                                                            </div>                                       
                                                            <div v-else="" class="sperrvermerk">
                                                                Für Externe Gesperrt
                                                            </div>
                                                        </div>
                                                        </div>
                                                    <div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-else="ausbildung" id="experience" style="text-align: left" class="ausbildung">
                                    <div>
                                        <h2>Abitur 2018</h2>
                                        <p style="margin: 50px 0px 70px 10px">
                                            Am <a href="https://www.koenigin-katharina-stift.de/" target="_blank">
                                            "Königin-Katharina-Stift-Gymnasium"</a> 
                                            erwarb ich meine allgemeine Hochschulreife.
                                        </p>
                                    </div>
                                    <div>
                                        <h2>Duales Studium 09.2019 - 09.2022</h2>
                                        <p style="margin: 30px 0px 30px 10px">
                                            Letztes Jahr schloss ich erfolgreich mein duales Studium an der <a href="https://www.mannheim.dhbw.de/startseite" target="_blank">"DHBW Mannheim"</a> ab.
                                            Über 3 Jahre konnte ich Praxiserfahrungen beim Partnerunternehmen <a href="https://db-engineering-consulting.com/de/" target="_blank">"DB E&C"</a> Sammeln.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        
                            <div v-else-if="menu === 'box4'" class="menu" id="menu3" style="text-align:center">
                                <h1 class="contactCell" style="margin-top: 35px">
                                    Kontakt
                                </h1>
                                <div style="text-align: center">
                                    
                                    <table id="contactTable">
                                        <tr>
                                        <th class="contactCell">Mobiltelefon:</th>
                                        <td ><a class="contactCell" href="tel:+4915733965928">01573 3965928</a></td>
                                        </tr>
                                        <tr>
                                        <th class="contactCell">E-Mail:</th>
                                        <td><a class="contactCell" href="mailto:yihank.xie@yxie.de?subject=Ihre Bewerbung">yihank.xie@yxie.de</a></td>
                                        </tr>
                                        
                                    </table>  
                                                                
                                </div>
                                
                            
                            </div>
                        </div>
                  
                </Transition>
        
           
</template>



