
class Html{
  constructor(){
    this.html = [ [[],[],[]], [[],[],[]] ]
    this.react = [[],[],[]]
    this.score = [[],[]]

    this.score.push(document.getElementById('score'))
    this.score[0].push(document.getElementById('player1J'))
    this.score[0].push(document.getElementById('player1S'))
    this.score[1].push(document.getElementById('player2J'))
    this.score[1].push(document.getElementById('player2S'))

    this.react[0].push(document.getElementById('haut1'),document.getElementById('haut2'),document.getElementById('haut3'))
    this.react[1].push(document.getElementById('milieux1'),document.getElementById('milieux2'),document.getElementById('milieux3'))
    this.react[2].push(document.getElementById('bas1'),document.getElementById('bas2'),document.getElementById('bas3'))

    this.html[0][0].push(document.getElementsByClassName('crois')[0], document.getElementsByClassName('crois')[1], document.getElementsByClassName('crois')[2])
    this.html[0][1].push(document.getElementsByClassName('crois')[3], document.getElementsByClassName('crois')[4], document.getElementsByClassName('crois')[5])
    this.html[0][2].push(document.getElementsByClassName('crois')[6], document.getElementsByClassName('crois')[7], document.getElementsByClassName('crois')[8])

    this.html[1][0].push(document.getElementsByClassName('rond')[0], document.getElementsByClassName('rond')[1], document.getElementsByClassName('rond')[2])
    this.html[1][1].push(document.getElementsByClassName('rond')[3], document.getElementsByClassName('rond')[4], document.getElementsByClassName('rond')[5])
    this.html[1][2].push(document.getElementsByClassName('rond')[6], document.getElementsByClassName('rond')[7], document.getElementsByClassName('rond')[8])

    this.humainScore = 0
    this.aiScore = 0

  }

  init(){
    for(let x = 0 ; x < 3 ; x++){
      for(let y = 0 ; y < 3 ; y++){
        this.react[x][y].addEventListener("click",()=>{
          plat.play(x,y)
          this.render()
        })
      }
    }
    this.score[0][0].textContent = name 
  }


  render(){
    if(plat.win === plat.humain || plat.win === plat.ai || plat.win === plat.til){
      if(plat.win === plat.humain){
        this.humainScore++
        this.score[0][1].textContent = this.humainScore
        //plat.reset()
        plat.win = 1
        setTimeout(()=>{
          plat.reset()
          this.render()
        }, 1300);
      }
      else if(plat.win === plat.ai){
        this.aiScore++
        this.score[1][1].textContent = this.aiScore
        //plat.reset()
        plat.win = 1
        setTimeout(()=>{
          plat.reset()
          this.render()
        }, 1300);
      }
      else{
        plat.win = 1
        setTimeout(()=>{
          plat.reset()
          this.render()
        }, 1300);
      }
    }

    this.score[2].style.opacity = "1"

    for(let x = 0 ; x < 3; x ++){
      for(let y = 0; y < 3; y++){
        if(plat.game[x][y] === ""){
          this.html[0][x][y].style.opacity = "0"
          this.html[1][x][y].style.opacity = "0"
        }

        else if(plat.game[x][y] === plat.humain){
          this.html[0][x][y].style.opacity = "1"
        }

        else if(plat.game[x][y] === plat.ai){
          this.html[1][x][y].style.opacity = "1"
        }

      }
    }
  }
}

let html = new Html()
