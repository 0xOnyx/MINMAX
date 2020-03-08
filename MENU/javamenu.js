
function menu() {
const barre1   = document.getElementById('barre1')
const barre2   = document.getElementById('barre2')
const barre3   = document.getElementById('barre3')
const menu     = document.getElementById('background')
const body     = document.getElementById('body')
const menuliste= document.getElementById('menu')
const menutext = document.getElementById('menuliste')

const option  = [document.getElementById("LAUNCH"), document.getElementById("RESET")]
const game    = document.getElementById('game')
const welcome = document.getElementById("welcome")

var click = 0

function menufunction(){

    if(click === 0){ //open
      open()
      openmenu()
      click = 1
      //console.info("open")
      }

    else if(click === 1){ //close
      close()
      closemenu()
      click = 0
      //console.info("close")
    }
    else {
      console.error("ERROR MENU")
    }

  function open(){
    barre1.style.top = "50%"
    barre1.style.transform = "translatey(-50%)"
    barre3.style.top = "50%"
    barre3.style.transform = "translatey(-50%)"
    setTimeout(function () {
      barre2.style.display = "none"
      barre1.style.transform = "rotate(40deg)"
      barre3.style.transform = "rotate(-40deg)"
    }, 70);
  }


  function close(){
    barre1.style.transform = "rotate(0deg)"
    barre3.style.transform = "rotate(0deg)"
    setTimeout(function () {
      barre2.style.display = "block"
      barre1.style.top = "0px"
      barre1.remove.transform
      barre3.style.top = "100%"
      barre3.remove.transform
    }, 70);
  }

  function openmenu(){
    menuliste.style.zIndex  = "1"
    body.style.overflow = "hidden"
    menuliste.style.display = "block"
    menuliste.style.opacity = "0"
    setTimeout(function () {
      menuliste.style.zIndex  = "98"
      menuliste.style.opacity = "1"

    }, 70);
  }

  function closemenu(){
    menuliste.style.opacity = "0"
    setTimeout(function () {
      body.style.overflow = "hidden"
      menuliste.style.display = "none"
      menuliste.style.zIndex  = "1"
    }, 310);
  }

}


menu.addEventListener('click', function(){
    menufunction()
})//menu click

option[0].addEventListener("click", ()=>{
  //plat = new Game()
  plat.init()
  plat.reset()
  html.init()
  html.render()
  game.style.opacity = "1"
  welcome.style.opacity = "0"
  menufunction()
})
option[1].addEventListener("click", ()=>{
  plat.reset()
  html.render()
  menufunction()
})


} //windows load

window.onload  = function(){menu()}
