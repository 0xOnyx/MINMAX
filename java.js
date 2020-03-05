
function game() {
let plat  = new Game()

let html = [[],[],[]]

html[0].push(document.getElementById('haut1'),document.getElementById('haut2'),document.getElementById('haut3'))
html[1].push(document.getElementById('milieux1'),document.getElementById('milieux2'),document.getElementById('milieux3'))
html[2].push(document.getElementById('bas1'),document.getElementById('bas2'),document.getElementById('bas3'))

for(let x = 0 ; x < 3 ; x++){
  for(let y = 0 ; y < 3 ; y++){
    html[x][y].addEventListener("click",()=>{plat.play(x,y)})
  }
}

} //windows load

window.onload  = function(){menu(); game()}
