/*Staf del jugador*/
let HP = 100;
let ATT = 5;
let DEF = 2;

/*Info del jugador*/
let namePlayer = [];
let armas;
let armaduras;
let player = [HP, ATT, DEF];
let pc = [HP, ATT, DEF];

/*Valor de los objetos*/
    /*Armas*/
let Espada = 20;
let Arco = 15;
let Hacha = 35;
    /*Armadura*/
    let Madera = 18;
    let Hierro = 32;
    let Desnudo = 5;    

/*Variables Funcionales*/
let arma, armadura, combate, starValor1, turnoPlayer, esquivo, PATT, PDEF, PRO, PROA, ESQA;
let PCPROA, PCPROB, PCPROC;
let input = []
let a = 0;
let Star = undefined;
let gameFinish = true;
let defensaPlayer = false;
let defensaPc = false;
let esquivoPC = false;
let buclePc = false;
let turnoConsole = 0;
let colorConsole = 0;
let colorConsolePC = 4;


//FUNCIONE DE LOADING// 
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    const paginaWeb = document.getElementById('paginaWeb');
    loader.style.display = 'none';
    paginaWeb.style.display = 'block';
});
//FUNCIONE DE LOADING// 

// Variable de musica
function musicaPlay(){//Musica de fondo
    document.getElementById('musicaMedieval').play();
}
let espadaAudio = new Audio('./items/efectoDeSonidos/draw-sword1-44724.mp3');
let arcoSonido = new Audio('./items/efectoDeSonidos/arrow-body-impact-146419.mp3');
let hachaSonido = new Audio('./items/efectoDeSonidos/dagger-scrape-and-hit-185443.mp3');
let armaduraMadera = new Audio('./items/efectoDeSonidos/knife-thrust-into-wall-7017.mp3');
let armaduraHierro = new Audio('./items/efectoDeSonidos/swing-whoosh-metal-hit-12-234628.mp3');
let armaduraCarne = new Audio('./items/efectoDeSonidos/middle-ages-war-crywav-14780.mp3');
let colorSonido = new Audio('./items/efectoDeSonidos/horn-89801.mp3');
let pcAtaca = new Audio('./Items/efectoDeSonidos/pcAtaca.mp3');
let pcEsquiva = new Audio('./Items/efectoDeSonidos/pcEsquiva.mp3');
let pcFalla = new Audio('./Items/efectoDeSonidos/pcFalla.mp3');
let pcSeCubre = new Audio('./Items/efectoDeSonidos/pcSeCubre.mp3');
let pcAtacaEscudo = new Audio('./Items/efectoDeSonidos/pcAtacaEscudo.mp3');
let jugadorAtaca = new Audio('./Items/efectoDeSonidos/jugadorAtaca.mp3');
let pcHerido = new Audio('./Items/efectoDeSonidos/pcHerido.mp3');
let jugadorFalla = new Audio('./Items/efectoDeSonidos/jugadorFalla.mp3');
// Variable de musica



/*Variables para HTML */
const name1 = document.getElementById("name1")
let PlayerATT = document.getElementById("PlayerATT");
let PlayerDEF = document.getElementById("PlayerDEF");
let PlayerHP = document.getElementById("PlayerHP");
let pcATT = document.getElementById("pcATT");
let pcDEF = document.getElementById("pcDEF");
let pcHP = document.getElementById("pcHP");
let armaName1 = document.getElementById("armaName1");
let armaduraName1 =  document.getElementById("armaduraName1");
let armaName2 = document.getElementById("armaName2");
let armaduraName2 =  document.getElementById("armaduraName2");
let htmlConsole = document.getElementById("htmlConsole");
const mensajes = document.getElementById('mensaje5');


/*Probabilidades*/
let valorPC1 = getRandomIntInclusive(1, 3);
let valorPC2 = getRandomIntInclusive(1, 3);
let pcMov;
let probabilidadGaming;

/*Juego*/

/*Seleciona tu arma*/
function game(){
    activeDiv();
    do{
        name1.innerHTML = "<h1>" + namePlayer[0] + "</h1>";
        armas = parseInt(input[0]);
        valorDeArmas(armas);
        sistemaProbabilidadArmas();
        colorConsole = parseInt(input[2]);
        armaduras = parseInt(input[1]);
        valorDeArmaduras(armaduras);
        sistemaProbabilidadArmadura();
    }while(armas <= 0 || armaduras <= 0 );
    player = [HP, ATT, DEF];
    PlayerATT.innerHTML ="<h3>" + " " + player[1] + "</h3>";
    PlayerDEF.innerHTML ="<h3>" + " " + player[2] + "</h3>";
    PlayerHP.innerHTML ="<h3>" + " " + player[0] + "</h3>";
    armaName1.innerHTML = "<h4>" + arma + "</h4>";
    armaduraName1.innerHTML = "<h4>" + armadura + "</h4>";
    valorDeArmas(valorPC1);
    sistemaProbabilidadPC1();
    valorDeArmaduras(valorPC2);
    sistemaProbabilidadPC2();
    pc = [HP, ATT, DEF];
    pcATT.innerHTML ="<h3>" + " " + pc[1] + "</h3>";
    pcDEF.innerHTML ="<h3>" + " " + pc[2] + "</h3>";
    pcHP.innerHTML ="<h3>" + " " + pc[0] + "</h3>";
    armaName2.innerHTML = "<h4>" + arma + "</h4>";
    armaduraName2.innerHTML = "<h4>" + armadura + "</h4>";
}

/*Funciones */
function miName() {
    let textoIngresado = document.getElementById('suNombre').value;
    let textoGuardado = textoIngresado;
    namePlayer.push(textoGuardado)
}
function ocultarDiv(ocultar){
    document.getElementById(ocultar).style.display = 'none';
}
function mostrarDiv(mostrar){
    document.getElementById(mostrar).style.display = 'block';
}
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// SELECCION DE ARMAS
function espada(){
    input[0] = 1;
    document.getElementById('confirmArma').style.display = 'none';
    espadaAudio.play();
}
function arco(){
    input[0] = 2;
    document.getElementById('confirmArma').style.display = 'none';
    arcoSonido.play();
}
function hacha(){
    input[0] = 3;
    document.getElementById('confirmArma').style.display = 'none';
    hachaSonido.play();
}
// SELECCION DE ARMAS
// SELECCION DE ARMADURA
function madera(){
    input[1] = 1;
    document.getElementById('confirmArma').style.display = 'none';
    armaduraMadera.play();
}
function hierro(){
    input[1] = 2;
    document.getElementById('confirmArma').style.display = 'none';
    armaduraHierro.play();
}
function desnudo(){
    input[1] = 3;
    document.getElementById('confirmArma').style.display = 'none';
    armaduraCarne.play();
}
// SELECCION DE ARMADURA
// SELECCION DE COLOR
function color(a){
    document.getElementById('confirmArma').style.display = 'none';
    colorSonido.play();
    input[2] = a
    game();
}
// SELECCION DE COLOR
function valorDeArmas(valor1){
    switch(valor1){
        case 1:
            ATT = 5 + Espada;
            PATT = 1;
            arma = "Espada";
        break
        case 2:
            ATT = 5 + Arco;
            PATT = 2;
            arma = "Arco";
        break;
        case 3:  
            ATT = 5 + Hacha;
            PATT = 3;
            arma = "Hacha";  
        break;
        default:
            armas = -5;
        }
}
function valorDeArmaduras(valor2){
    switch(valor2){
        case 1:
            DEF = 2 + Madera;
            PDEF = 1;
            armadura = "Madera";
        break
        case 2:
            DEF = 2 + Hierro;
            PDEF = 2;
            armadura = "Hierro";
        break
        case 3:  
            DEF = 2 + Desnudo;
            PDEF = 3;
            armadura = "Desnudo";
        break  
        default:
        armaduras = 10;
    }
}
// Funciones de confirmaciones
function activeDiv(){
    document.getElementById('confirmBody').style.display = 'block';
}
function confirmButtonTrue(){
    document.getElementById('confirmGame').style.display = 'none';
    document.getElementById('confirmName').style.display = 'block';
}
function confirmButtonFalse(){
    document.getElementById('confirmGame').style.display = 'none';
}
function confirmArma(){
    document.getElementById('confirmArma').style.display = 'block';
}
function confirmArmadura(){
    document.getElementById('confirmArmadura').style.display = 'block';
}
function confirmColor(){
    document.getElementById('confirmColor').style.display = 'block';
}
// Funciones de confirmaciones

// Funciones de mensajes
function agregarMensaje(texto) {
    switch(colorConsole){
        case 1:
        mensajes.innerHTML += "<p style='color:blue'>" + texto + "</p>";
        mensajes.scrollTop = mensajes.scrollHeight;
        break
        case 2:
        mensajes.innerHTML += "<p style='color:green'>" + texto + "</p>";
        mensajes.scrollTop = mensajes.scrollHeight;
        break
        case 3:
        mensajes.innerHTML += "<p style='color:purple'>" + texto + "</p>";
        mensajes.scrollTop = mensajes.scrollHeight;
        break
        default:
            mensajes.innerHTML += "<p style='color:black'>" + texto + "</p>";
            mensajes.scrollTop = mensajes.scrollHeight;
            break;
}}
function agregarMensajePC(texto){
    switch(colorConsolePC){
        case 2:
        mensajes.innerHTML += "<p style='color:green'>" + texto + "</p>";
        mensajes.scrollTop = mensajes.scrollHeight;
        break
        case 4:
        mensajes.innerHTML += "<p>" + texto + "</p>";
        mensajes.scrollTop = mensajes.scrollHeight;
        break
        case 5:
        mensajes.innerHTML += "<p style='color:red'>" + texto + "</p>";
        mensajes.scrollTop = mensajes.scrollHeight;
        break
}}
// Funciones de mensajes
// FUNCIONES DEL DAÑO DE PERSONAJE 
function hpPersonaje(){//Personaje del jugador
    if (player[0] <= 80 && player[0] > 50) {
        document.getElementById('playerHp100').style.display = 'none';
        document.getElementById('playerHp80').style.display = 'block';
        document.getElementById('playerHp50').style.display = 'none';
        document.getElementById('playerHp20').style.display = 'none';
    } else if (player[0] > 20 && player[0] <= 50) {
        document.getElementById('playerHp100').style.display = 'none';
        document.getElementById('playerHp80').style.display = 'none';
        document.getElementById('playerHp50').style.display = 'block';
        document.getElementById('playerHp20').style.display = 'none';
    } else if (player[0] > 0 && player[0] <= 20) {
        document.getElementById('playerHp100').style.display = 'none';
        document.getElementById('playerHp80').style.display = 'none';
        document.getElementById('playerHp50').style.display = 'none';
        document.getElementById('playerHp20').style.display = 'block';
    }
}
function hpPersonajePc(){//Personaje de la pc
    if (pc[0] <= 80 && pc[0] > 50) {
        document.getElementById('pcHp100').style.display = 'none';
        document.getElementById('pcHp80').style.display = 'block';
        document.getElementById('pcHp50').style.display = 'none';
        document.getElementById('pcHp20').style.display = 'none';
    } else if (pc[0] > 20 && pc[0] <= 50) {
        document.getElementById('pcHp100').style.display = 'none';
        document.getElementById('pcHp80').style.display = 'none';
        document.getElementById('pcHp50').style.display = 'block';
        document.getElementById('pcHp20').style.display = 'none';
    } else if (pc[0] > 0 && pc[0] <= 20) {
        document.getElementById('pcHp100').style.display = 'none';
        document.getElementById('pcHp80').style.display = 'none';
        document.getElementById('pcHp50').style.display = 'none';
        document.getElementById('pcHp20').style.display = 'block';
    }
}
// FUNCIONES DEL DAÑO DE PERSONAJE 
// FUNCIONES DE PROBABILIDADES
function sistemaProbabilidadArmas(){
    switch(PATT){
        case 1:
            PRO = 45;
            break;
        case 2:
            PRO = 75;
            break;
        case 3:
            PRO = 35;
            break;
        default:
            PRO = 30; 
            break;   
    }
}
function sistemaProbabilidadArmadura(){
    switch(PDEF){
        case 1:
            ESQA = 31;
            PROA = 36;
            break;
        case 2:
            ESQA = 10;
            PROA = 58;
            break;
        case 3:
            ESQA = 60;
            PROA = 10;
            break;
        default:
            ESQA = 60;
            PROA = 10;    
            break;
    }
}
function sistemaProbabilidadPC1(){
    switch(valorPC1){
        case 1:
            PCPROA = 45;
            break;
        case 2:
            PCPROA = 63;
            break;
        case 3:
            PCPROA = 35;
            break;
        default:
            PCPROA = 30; 
            break;   
    }
}
function sistemaProbabilidadPC2(){
    switch(valorPC2){
        case 1:
            PCPROC = 36;
            PCPROB = 31;
            break;
        case 2:
            PCPROC = 10;
            PCPROB = 54;
            break;
        case 3:
            PCPROC = 54;
            PCPROB = 5;
            break;
        default:
            PCPROC = 54
            PCPROB = 5;    
            break;
    }
}
// FUNCIONES DE PROBABILIDADES


 /*Funciones de las mecanicas Del jugador */
function ataque(){
    jugadorAtaca.play();
    probabilidadGaming = getRandomIntInclusive(1, 90);
    console.log(probabilidadGaming);
                if(probabilidadGaming <= PRO){
                    console.log("twd")
                    if(defensaPc == false){
                        console.log("twd---3")
                        if(esquivoPC == true){
                            agregarMensajePC("PC esquivo a jugador");
                            esquivoPC = false;
                        }
                        else{
                            console.log("twd///4")
                            agregarMensaje("Jugador haz atacado " + player[1]);
                            pcHerido.play();
                            combate = pc[0] - player[1] ;
                            pc[0] = combate;
                            pcHP.innerHTML = "<h4>" + pc[0] + "</h4>";
                        if(pc[0] <= 0){
                            alert("Felicidades haz gando!! ");
                            location.reload();
                        }}}
                        else if(defensaPc == true){
                            console.log("twd///2")
                            defensaPc =  player[1] - pc[2];
                            agregarMensaje("Pc se ha protegido");
                            if(defensaPc >= 1 ){
                                combate = pc[0] - defensaPc; 
                                agregarMensaje("Jugador haz atacado " + defensaPc);
                                pcHerido.play();
                                pc[0] = combate;
                                pcHP.innerHTML = "<h4>" + pc[0] + "</h4>";
                                if(pc[0] <= 0){
                                    alert("Felicidades haz gando!! ");
                                    location.reload();
                                }
                            } else if(defensaPc <= 0){combate = player[0] - 0; agregarMensaje("Jugador, no le haz echo nigún daño");}
                        defensaPc = false;
                        }
                    }
                else{
                    agregarMensaje("Jugador haz fallado tu ataque");
                    jugadorFalla.play();
                }
probabilidadGaming = 0;
turnoPc();
}    
function defenderse(){
probabilidadGaming = getRandomIntInclusive(1, 90);
    if( probabilidadGaming >= PROA){
        agregarMensaje("Jugador te haz proteguido para el siguinte ataque");
        ocultarDiv('buttonCubrirse');
        defensaPlayer = true;
    } else{
        agregarMensaje("No te haz cubrierto jugador");
        jugadorFalla.play();
    } turnoPc();
}
function esquivar(){
    pcEsquiva.play();
probabilidadGaming = getRandomIntInclusive(1, 90);
    if(probabilidadGaming >= ESQA){
        agregarMensaje("Haz logrado esquivar jugador");
        ocultarDiv('buttonEsquivar');
        jugadorFalla.play();
        esquivo = true;
    } else{
    agregarMensaje("Jugador no pudistes esquivar");
    }
    turnoPc();
}

/*Mecanicas del pc */
function turnoPc(){
    do{
        pcMov = getRandomIntInclusive(1, 3);
        switch(pcMov){
            case 1:
                if(defensaPc == true || esquivoPC == true){
                    buclePc = false;
                }
                probabilidadGaming = getRandomIntInclusive(1, 90);
                if(probabilidadGaming >= PCPROA){
                    if(defensaPlayer == true){
                        colorConsolePC = 5;
                        turnoPlayer = pc[1] - player[2];
                        pcAtaca.play();
                        if(turnoPlayer >= 1 ){
                            combate = player[0] - turnoPlayer;
                            player[0] = combate;
                            PlayerHP.innerHTML = "<h4>" + player[0] + "</h4>";
                            agregarMensajePC("!!!te cubriste mal jugador");
                            hpPersonaje();
                            pcAtaca.play();
                            defensaPlayer = false;
                            mostrarDiv('buttonCubrirse');
                            if(player[0] <= 0){
                                alert("Haz sido derrotado");
                                location.reload();
                            }
                            break;
                        } else if(turnoPlayer <= 0){
                            colorConsolePC = 2;
                            agregarMensajePC("!!!te cubriste exitosamente jugador");
                            defensaPlayer = false;
                            mostrarDiv('buttonCubrirse');
                            colorConsolePC = 4;
                            pcAtacaEscudo.play();
                            break;
                            }}
                    else if(esquivo == true){
                        agregarMensajePC("El jugador esquivo a PC");
                        colorConsolePC = 4; 
                        esquivo = false;
                        mostrarDiv('buttonEsquivar');
                        break;
                    }
                    else{
                        colorConsolePC = 5;
                        agregarMensajePC("PC te ha atacado");
                        colorConsolePC = 4;
                        pcAtaca.play();
                        combate = player[0] - pc[1] ;
                        player[0] = combate;
                        hpPersonaje();
                        PlayerHP.innerHTML = "<h4>" + player[0] + "</h4>";
                        if(player[0] <= 0){
                            alert("Haz sido derrotado");
                            location.reload();
                        }break;
                    }}
                    else{
                        colorConsolePC = 2;
                        agregarMensajePC("Pc fallo en atacarte");
                        pcFalla.play();
                    }
                    colorConsolePC = 4;    
            break;
            case 2:
                if(defensaPc != true){
                    probabilidadGaming = getRandomIntInclusive(1, 90);
                    if(probabilidadGaming >= PCPROB){
                        agregarMensajePC("PC se ha proteguido para el siguinte ataque");
                        pcSeCubre.play();
                        defensaPc =  true; 
                    } else{
                        agregarMensajePC("PC No se puso al cubrierto");
                        pcFalla.play();
                    }
                    console.log('1')
                    break;
                }buclePc = true;
                console.log('2')
            case 3:
                if(esquivoPC != true){
                probabilidadGaming = getRandomIntInclusive(1, 90);
                if(probabilidadGaming >= PCPROC){
                    agregarMensajePC("PC se prepara para esquivar");
                    esquivoPC = true;
                } else{
                    agregarMensajePC("PC no se preparó para esquivar");
                }
                console.log('3')
            break;
                }buclePc = true;
                console.log('4')
        }    
    }while(buclePc == true)}