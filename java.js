
function game() {
let plat  = new Game()

let html = [ [[],[],[]], [[],[],[]] ]
let react = [[],[],[]]


react[0].push(document.getElementById('haut1'),document.getElementById('haut2'),document.getElementById('haut3'))
react[1].push(document.getElementById('milieux1'),document.getElementById('milieux2'),document.getElementById('milieux3'))
react[2].push(document.getElementById('bas1'),document.getElementById('bas2'),document.getElementById('bas3'))

html[0][0].push(document.getElementsByClassName('crois')[0], document.getElementsByClassName('crois')[1], document.getElementsByClassName('crois')[3])
html[0][1].push(document.getElementsByClassName('crois')[4], document.getElementsByClassName('crois')[5], document.getElementsByClassName('crois')[6])
html[0][2].push(document.getElementsByClassName('crois')[0], document.getElementsByClassName('crois')[7], document.getElementsByClassName('crois')[8])

html[1][0].push(document.getElementsByClassName('rond')[0], document.getElementsByClassName('rond')[1], document.getElementsByClassName('rond')[3])
html[1][1].push(document.getElementsByClassName('rond')[4], document.getElementsByClassName('rond')[5], document.getElementsByClassName('rond')[6])
html[1][2].push(document.getElementsByClassName('rond')[0], document.getElementsByClassName('rond')[7], document.getElementsByClassName('rond')[8])


for(let x = 0 ; x < 3 ; x++){
  for(let y = 0 ; y < 3 ; y++){
    react[x][y].addEventListener("click",()=>{
      plat.play(x,y)

      //render()
    })
  }
}

  function render(){
    for(let x = 0 ; x < 3; x ++){
      for(let y = 0; y < 3; y++){
        if(plat.game[x][y] === ""){
          html[0][x][y].style.opacity = "0"
          html[1][x][y].style.opacity = "0"
        }

        else if(plat.game[x][y] === plat.humain){
          html[0][x][y].style.opacity = "1"
         }

        else if(plat.game[x][y] === plat.humain){
          html[1][x][y].style.opacity = "1"
        }

        }
      }
    }

} //windows load

window.onload  = function(){menu(); game()}
