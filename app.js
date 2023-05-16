// Board
const allWindow = document.querySelectorAll(".gameItem");
const window0 = document.getElementById("0");
const window1 = document.getElementById("1");
const window2 = document.getElementById("2");
const window3 = document.getElementById("3");
const window4 = document.getElementById("4");
const window5 = document.getElementById("5");
const window6 = document.getElementById("6");
const window7 = document.getElementById("7");
const window8 = document.getElementById("8");

// Buttons
const setMapColor = document.getElementById("establecer");
const replay = document.getElementById("replay");

// Color configs
const playerOneColor = document.getElementById("colorPlayerOne");
const playerTwoColor = document.getElementById("colorPlayerTwo");
const mapColor = document.getElementById("colorMap");

let turno = true;

let matriz = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];

replay.addEventListener("click", ()=>{
    matriz = matriz = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ];

    allWindow.forEach(function(allWindow) {
        allWindow.style.background = mapColor.value;
      });
});

setMapColor.addEventListener("click",()=>{
    allWindow.forEach(function(allWindow) {
        allWindow.style.background = mapColor.value;
      });
});

window0.addEventListener("click",()=>{
    pintarRellenar(window0,0,0);
    verificarGanador();
});

window1.addEventListener("click",()=>{
    pintarRellenar(window1,0,1);
    verificarGanador();
});

window2.addEventListener("click",()=>{
    pintarRellenar(window2,0,2);
    verificarGanador();
});

window3.addEventListener("click",()=>{
    pintarRellenar(window3,1,0);
    verificarGanador();
});

window4.addEventListener("click",()=>{
    pintarRellenar(window4,1,1);
    verificarGanador();
});

window5.addEventListener("click",()=>{
    pintarRellenar(window5,1,2);
    verificarGanador();
});

window6.addEventListener("click",()=>{
    pintarRellenar(window6,2,0);
    verificarGanador();
});

window7.addEventListener("click",()=>{
    pintarRellenar(window7,2,1);
    verificarGanador();
});

window8.addEventListener("click",()=>{
    pintarRellenar(window8,2,2);
    verificarGanador();
});

function verificarGanador() {
    if (matriz[0][0] == 1 & matriz[1][0] == 1 & matriz[2][0] == 1) {
        console.log("El jugador uno a ganado");
    } else if (matriz[0][0] == 1 & matriz[0][1] == 1 & matriz[0][2] == 1) {
        console.log("El jugador uno a ganado");
    } else if (matriz[0][2] == 1 & matriz[1][2] == 1 & matriz[2][2] == 1) {
        console.log("El jugador uno a ganado");
    } else if (matriz[2][0] == 1 & matriz[2][1] == 1 & matriz[2][2] == 1) {
        console.log("El jugador uno a ganado");
    } else if (matriz[1][0] == 1 & matriz[1][1] == 1 & matriz[1][2] == 1) {
        console.log("El jugador uno a ganado");
    } else if (matriz[0][1] == 1 & matriz[1][1] == 1 & matriz[2][1] == 1) {
        console.log("El jugador uno a ganado");
    } else if (matriz[2][0] == 1 & matriz[1][1] == 1 & matriz[0][2] == 1) {
        console.log("El jugador uno a ganado");
    } else if (matriz[0][0] == 1 & matriz[1][1] == 1 & matriz[2][2] == 1) {
        console.log("El jugador uno a ganado");
    }
    
    if (matriz[0][0] == 2 & matriz[1][0] == 2 & matriz[2][0] == 2) {
        console.log("El jugador dos a ganado");
    } else if (matriz[0][0] == 2 & matriz[0][1] == 2 & matriz[0][2] == 2) {
        console.log("El jugador dos a ganado");
    } else if (matriz[0][2] == 2 & matriz[1][2] == 2 & matriz[2][2] == 2) {
        console.log("El jugador dos a ganado");
    } else if (matriz[2][0] == 2 & matriz[2][1] == 2 & matriz[2][2] == 2) {
        console.log("El jugador dos a ganado");
    } else if (matriz[1][0] == 2 & matriz[1][1] == 2 & matriz[1][2] == 2) {
        console.log("El jugador dos a ganado");
    } else if (matriz[0][1] == 2 & matriz[1][1] == 2 & matriz[2][1] == 2) {
        console.log("El jugador dos a ganado");
    } else if (matriz[2][0] == 2 & matriz[1][1] == 2 & matriz[0][2] == 2) {
        console.log("El jugador dos a ganado");
    } else if (matriz[0][0] == 2 & matriz[1][1] == 2 & matriz[2][2] == 2) {
        console.log("El jugador dos a ganado");
    } 
}

function pintarRellenar(ventana,x,y) {
    if(turno){
        matriz[x][y] = 1;
        ventana.style.background = playerOneColor.value;
        turno = false;
    } else {
        matriz[x][y] = 2;
        ventana.style.background = playerTwoColor.value;
        turno = true;
    }
}


