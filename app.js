window.addEventListener('DOMContentLoaded', () => {

    const playerOne = document.getElementById("SymbolPlayerOne");
    const playerTwo = document.getElementById("SymbolPlayerTwo");
    const btn_changeSymbols = document.getElementById("btn-changeSymbols");
    const gameContainer = document.getElementById("game-container");
    const boardContainer = document.getElementById("boardContainer");
    const gameItem = document.querySelectorAll(".gameItem");
    const resetButton = document.getElementById("reset");
    const announcer = document.createElement('span');
    
    let playerOneSymbol = 'X';
    let playerTwoSymbol = 'O';

    announcer.innerHTML = `Start ${playerOneSymbol}`;
    gameContainer.insertBefore(announcer, boardContainer);

    let matriz = ['', '', '', '', '', '', '', '', ''];
    let turno = true;

    let position;
    let currentSymbol;

    let cases = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [6, 4, 2]
    ];

    const changeCurrentPlayer = () => {

        let actualPlayer;

        if(turno){
            actualPlayer = playerOneSymbol;
            turno = false;
            announcer.innerHTML = `it's the turn of ${playerTwoSymbol}`;
        } else {
            actualPlayer = playerTwoSymbol;
            turno = true;
            announcer.innerHTML = `it's the turn of ${playerOneSymbol}`;
        }
        return actualPlayer;
    }

    const checkWinner = () => {
        for (let i = 0; i < 8; i++) {
            let check = cases[i];
            const checkIndex1 = matriz[check[0]];
            const checkIndex2 = matriz[check[1]];
            const checkIndex3 = matriz[check[2]];

            if (checkIndex1 === playerOneSymbol && checkIndex2 === playerOneSymbol && checkIndex3 === playerOneSymbol) {
                announcer.innerHTML = `${playerOneSymbol} Win the match`;
                gameItem.forEach(function(tiles) {
                    tiles.classList.add('active');
                });
                break;
            } else if (checkIndex1 === playerTwoSymbol && checkIndex2 === playerTwoSymbol && checkIndex3 === playerTwoSymbol) {
                announcer.innerHTML = `${playerTwoSymbol} Win the match`;
                gameItem.forEach(function(tiles) {
                    tiles.classList.add('active');
                });
                break;
            } else if(!matriz.includes('')){
                announcer.innerHTML = `Draw`;
                gameItem.forEach(function(tiles) {
                    tiles.classList.add('active');
                });
            }    
        }
    }

    boardContainer.addEventListener('click', (e) => {
        
        let tiles = e.target;

        if (tiles && tiles.className != 'boardContainer') {

            if (!tiles.classList.contains('active')) {
                //Obtenemos el id del elemento para rellenar la matriz
                position = e.explicitOriginalTarget.id;
                //Se cambia el turno y obtenemos el simbolo correspondiente
                currentSymbol = changeCurrentPlayer();
                tiles.innerHTML = currentSymbol;
                matriz[position] = currentSymbol;
                tiles.classList.add('active');
                checkWinner();
            }
        }
    });

    
    btn_changeSymbols.addEventListener('click', () => {

        if(matriz.includes(playerOneSymbol)){

            let check = confirm("Si cambias de simbolos en medio de una partida esta se reseteara ¿seguro que quieres continuar?");
            check ? changeSymbols() : false;
                
        } else {

            changeSymbols();
            
        }
    });


    resetButton.addEventListener('click', () => {
        restartGame();
    });

    function restartGame() {
        matriz = ['', '', '', '', '', '', '', '', ''];
        turno = true;
        announcer.innerHTML = `Start ${playerOneSymbol}`;
    
        gameItem.forEach(function(tiles) {
            tiles.innerHTML = '';
            tiles.classList.remove('active');
        });
    }

    function changeSymbols() {
        playerOneSymbol = playerOne.value.toUpperCase();
        playerTwoSymbol = playerTwo.value.toUpperCase();

        if (playerOneSymbol === '' || playerTwoSymbol === '') {
            playerOneSymbol = 'X';
            playerTwoSymbol = 'O';
        }

        announcer.innerHTML = `Start ${playerOneSymbol}`;
        restartGame();
    }
});



