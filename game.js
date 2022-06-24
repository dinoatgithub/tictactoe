let textContent = 'X';
let gameOn = false;

const clickMe = function (id) {
    console.log(`gameOn ${gameOn}`)
    if (gameOn) {
        let currentTextContent = document.getElementById(id).textContent
        if (currentTextContent == '') {
            document.getElementById(id).textContent = textContent;
            if (textContent == 'X') {
                textContent = 'O';
            } else if (textContent == 'O') {
                textContent = 'X'
            }
        }
        checkStatus();
    }

}

const startGame = function () {
    let currentTextContent = document.getElementById("btn").textContent;
    gameOn = true;
    if (currentTextContent === "Start") {
        document.getElementById("btn").textContent = "Reset"
        document.getElementById("gameboard").style.display = 'block'
        cleartiles();
    } else {
        document.getElementById("btn").textContent = "Start"
        gameOn = false;
        textContent = 'X'
        document.getElementById("gameboard").style.display = 'none'
        cleartiles();
    }
}

const gameLoaded = function () {
    document.getElementById("gameboard").style.display = 'none'
}

const cleartiles = function () {
    document.getElementById("tl").textContent = '';
    document.getElementById("tl").setAttribute("class", "topleft");
    document.getElementById("tc").textContent = '';
    document.getElementById("tc").setAttribute("class", "topcenter");
    document.getElementById("tr").textContent = '';
    document.getElementById("tr").setAttribute("class", "topright");
    document.getElementById("ml").textContent = '';
    document.getElementById("ml").setAttribute("class", "middleleft");
    document.getElementById("mc").textContent = '';
    document.getElementById("mc").setAttribute("class", "middlecenter");
    document.getElementById("mr").textContent = '';
    document.getElementById("mr").setAttribute("class", "middleright");
    document.getElementById("bc").textContent = '';
    document.getElementById("bc").setAttribute("class", "bottomcenter");
    document.getElementById("bl").textContent = '';
    document.getElementById("bl").setAttribute("class", "bottomleft");
    document.getElementById("br").textContent = '';
    document.getElementById("br").setAttribute("class", "bottomright");
}

const checkStatus = function () {
    var t1, t2, t3, t4, t5, t6, t7, t8, t9;
    var winner;

    t1 = document.getElementById("tl").textContent;
    t2 = document.getElementById("tc").textContent;
    t3 = document.getElementById("tr").textContent;
    t4 = document.getElementById("ml").textContent;
    t5 = document.getElementById("mc").textContent;
    t6 = document.getElementById("mr").textContent;
    t7 = document.getElementById("bl").textContent;
    t8 = document.getElementById("bc").textContent;
    t9 = document.getElementById("br").textContent;

    console.log('t1=' + t1, 't2=' + t2, 't3=' + t3, 't4=' + t4, 't5=' + t5, 't6=' + t6, 't7=' + t7, 't8=' + t8, 't9=' + t9)

    if (t1 === t2 && t2 === t3 && t1 !== '') {
        winner = t1;
        gameOn = false;
        highlightWinnerTiles(['tl', 'tc', 'tr'])
    };

    if (t4 === t5 && t5 === t6 && t4 !== '') {
        winner = t4;
        gameOn = false;
        highlightWinnerTiles(['ml', 'mc', 'mr'])
    };

    if (t7 === t8 && t8 === t9 && t7 !== '') {
        winner = t7;
        gameOn = false;
        highlightWinnerTiles(['bl', 'bc', 'br'])
    };

    if (t1 === t4 && t4 === t7 && t1 !== '') {
        winner = t1;
        gameOn = false;
        highlightWinnerTiles(['tl', 'bl', 'ml'])
    };

    if (t2 === t5 && t5 === t8 && t2 !== '') {
        winner = t2;
        gameOn = false;
        highlightWinnerTiles(['tc', 'bc', 'mc'])
    };

    if (t3 === t6 && t6 === t9 && t3 !== '') {
        winner = t3;
        gameOn = false;
        highlightWinnerTiles(['tr', 'br', 'mr'])
    };

    if (t1 === t5 && t5 === t9 && t1 !== '') {
        winner = t1;
        gameOn = false;
        highlightWinnerTiles(['tl', 'mc', 'br'])
    };

    if (t3 === t5 && t5 === t7 && t3 !== '') {
        winner = t3;
        gameOn = false;
        highlightWinnerTiles(['tr', 'mc', 'bl'])
    };

    return winner;
}

const highlightWinnerTiles = function (tiles) {
    tiles.forEach((t) => {
        var tile;
        tile = document.getElementById(t);
        tile.setAttribute("class", "winners")
    })
}

