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

    let board = ['', '', '', '', '', '', '', '', ''];
    let turno = true;

    let currentSymbol;

    const cases = [
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
            let checkCases = cases[i];
            const index1 = board[checkCases[0]];
            const index2 = board[checkCases[1]];
            const index3 = board[checkCases[2]];

            if (index1 === playerOneSymbol && index2 === playerOneSymbol && index3 === playerOneSymbol) {
                announcer.innerHTML = `${playerOneSymbol} Win the match`;
                gameItem.forEach(function(tiles) {
                    tiles.classList.add('active');
                });
                break;
            } 
            
            if (index1 === playerTwoSymbol && index2 === playerTwoSymbol && index3 === playerTwoSymbol) {
                announcer.innerHTML = `${playerTwoSymbol} Win the match`;
                gameItem.forEach(function(tiles) {
                    tiles.classList.add('active');
                });
                break;
            } 
            
            if(!board.includes('')){
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
                //Obtenemos el id del elemento para rellenar la board
                const tileId = e.explicitOriginalTarget.id;
                //Se cambia el turno y el simbolo correspondiente
                currentSymbol = changeCurrentPlayer();
                tiles.innerHTML = currentSymbol;
                board[tileId] = currentSymbol;
                tiles.classList.add('active');
                checkWinner();
            }
        }
    });

    
    btn_changeSymbols.addEventListener('click', () => {

        if(board.includes(playerOneSymbol)){

            const confirmMessage = "Si cambias de simbolos en medio de una partida esta se reseteara ¿seguro que quieres continuar?";
            const check = confirm(confirmMessage);

            if (check) {
                changeSymbols();
            }
                
        } else {
            changeSymbols();
        }
    });

    resetButton.addEventListener('click', restartGame);

    function restartGame() {
        board = ['', '', '', '', '', '', '', '', ''];
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



