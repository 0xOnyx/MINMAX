
// https://github.com/CodingTrain/website/tree/master/CodingChallenges/CC_154_Tic_Tac_Toe_Minimax/P5

let game =
[
  ["","",""],    //x = en horizontale
  ["","",""],    //y = en verticale
  ["","",""]
]

let humain = "O"
let ai = "X"

let win = null

let joueur = [humain,ai]

let currentPlayer = joueur[Math.floor(Math.random() * 1)]

function checkWIn(){
  function egal(a, b, c){
    if(a === b && b === c  &&
       a != "" && b != ""  && c != ""){return true}
  }
  function whoWin(a){
    if(a === humain){win = humain}
    if else(a === ai){win = ai}
  }
  if(win === null){

    //horizontale
    for(let i = 0; i < 3 ; i++){
      if( egal(game[i][0], game[i][1], game[i][2]) ){
        return game[i][0]
      }
    }

    //Verticale
    for(let i = 0; i < 3 ; i++){
      if( egal(game[0][i], game[1][i], game[2][i]) ){
        return game[0][i]
      }
    }

    //Croisé
    if(egal(game[0][0]) , egal(game[1][1]), egal(game[2][2]) ){
      return game[0][0]
    }
    else if(egal(game[2][2]) , egal(game[1][1]), egal(game[0][0]) ) {
      return game[2][2]
    }

    let vide = 0

    for(let x = 0 ; x < 3; x ++){
      for(let y = 0; y < 3; y++){
        if(game[x][y] === ""){
          vide ++
        }
      }
    }

    if(vide === 0 && win === null){
      return til
    }

  }
}

function play(x, y){
  if(currentPlayer === humain){
    game[x][y] = humain
    currentPlayer = ai
    ai()
    console.log(game)
  }
}

function ai(){
  let bestScore = null
  let decision = {}
  if(curentPlayer === ai){
    function move(){
      for(let x = 0; x < 3; x++){
        for(let y = 0; y < 3; y++){
          if(game[x][y] != ""){
            game[x][y] = ia
            let score = minmax(game , false)
            game[x][y] = ""
            if(score > bestScore){
              bestScore = score
              decision = {x , y}
            }
          }
        }
      }
      game[decision.x][decision.y] = ai
      currentPlayer = humain
    }
  }
}

function minmax(board, maximaze){
  let valeur = {
    ai : 10,
    til: 0,
    humain: -10,
  }

  let winner = checkWIn()

  let tmpBestScore = null

  if(winer != null){
    return valeur[winner]
  }

  if(maximaze){//humain
    for(let x = 0; x < 3; x++){
      for(let y = 0; y < 3; y++){
        if(game[x][y] != ""){
          game[x][y] = humain
          let tmpScore = minmax(game , false)
          game[x][y] = ""
          tmpBestScore = max()
          if(tmpScore > tmpBestScore){
            score = bestScore
          }
        }
      }
    }
    return bestScore
  }

  else{
    for(let x = 0; x < 3; x++){
      for(let y = 0; y < 3; y++){
        if(game[x][y] != ""){
          game[x][y] = ai
          let tmpScore = minmax(game , true)
          game[x][y] = ""
          tmpBestScore = max()
          if(tmpScore > tmpBestScore){
            score = bestScore
          }
        }
      }
    }
    return bestScore
  }
}


export {play}
