

class Game{
  constructor(){
    this.game = [
      ["","",""],    //x = en horizontale
      ["","",""],    //y = en verticale
      ["","",""]
    ]
    this.humain = "O"
    this.ai = "X"
    this.til = "KO"
    this.win = null
    this.joueur = [this.humain,this.ai]
    this.curentPlayer = this.humain
    this.valeur = {
      [this.humain]: -10,
      [this.ai]: +10,
      [this.til]: 0,
    }
    this.init()
  }
  init(){
    //this.curentPlayer = this.humain //this.joueur[Math.floor(Math.random())]
  }

  checkWIn(){
    function egal(a, b, c){
      if(a === b && b === c  &&
         a != "" && b != ""  && c != ""){return true}
    }

    if(this.win === null){
      function whoWin(a){
        if(a === humain){return humain}
        else if(a === ai){return ai}
      }
      //horizontale
      for(let i = 0; i < 3 ; i++){
        if( egal(this.game[i][0], this.game[i][1], this.game[i][2]) ){
          return this.game[i][0]
        }
      }

      //Verticale
      for(let i = 0; i < 3 ; i++){
        if( egal(this.game[0][i], this.game[1][i], this.game[2][i]) ){
          return this.game[0][i]
        }
      }

      //Croisé
      if(egal(this.game[0][0]) , egal(this.game[1][1]), egal(this.game[2][2]) ){
        return this.game[0][0]
      }
      else if(egal(this.game[2][2]) , egal(this.game[1][1]), egal(this.game[0][0]) ) {
        return this.game[2][2]
      }

      let vide = 0

      for(let x = 0 ; x < 3; x ++){
        for(let y = 0; y < 3; y++){
          if(this.game[x][y] === ""){
            vide ++
            return null
          }
        }
      }

      if(vide === 0 && this.win === null){
        return this.til
      }

    }
  }

  play(x, y){

    if(this.win === null){
      console.log(this.win)
      console.log(this.curentPlayer)
      if(this.curentPlayer === this.humain ){
        if(this.game[x][y] === ""){
          this.game[x][y] = this.humain
          this.curentPlayer = this.ai
          this.playAI()
        }
      }
      else{
        this.playAI()
      }
      console.log(this.game)


    }

  }

  playAI(){


    let move = {}
    let bestScore = null
    if(this.curentPlayer === this.ai){
      for(let x = 0 ; x < 3 ; x++){
        for(let y = 0 ; y < 3 ; y++){
          if(this.game[x][y] === ""){
            this.game[x][y] = this.ai
            let score = this.minimax(this.game, false)
            this.game[x][y] = ""
            if(score > bestScore){
              bestScore = score
              move = {x, y}
            }
          }
        }
      }

      this.game[move.x][move.y] = this.ai
      this.curentPlayer = this.humain
    }
  }

  minimax(game, maximaze){



    let winner = this.checkWIn()
    console.log(winner)
    if(winner != null){
      return this.valeur[winner]
    }

    let bestScore = null

    if(maximaze){
      for(let x = 0 ; x < 3 ; x++){
        for(let y = 0 ; y < 3 ; y++){
          if(this.game[x][y] === ""){
            this.game[x][y] = this.ai
            let score = this.minimax(this.game, false)
            this.game[x][y] = ""
            if(score > bestScore){
              bestScore = score
            }
          }
        }
      }
      return bestScore
    }
    else {
      for(let x = 0 ; x < 3 ; x++){
        for(let y = 0 ; y < 3 ; y++){
          if(this.game[x][y] === ""){
            this.game[x][y] = this.humain
            let score = this.minimax(this.game, true)
            this.game[x][y] = ""
            if(score > bestScore){
              bestScore = score
            }
          }
        }
      }
      return bestScore
    }
  }

  reset(){
    for(let x = 0 ; x < 3 ; x++){
      for(let y = 0 ; y < 3 ; y++){
        game[x][y] = ""
        this.init()
        this.win = null
      }
    }
  }


}
