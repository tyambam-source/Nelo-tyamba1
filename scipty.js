function troca() {
 let HTML = document.documentElement

  HTML.classList.toggle("light")
  
  const imege =  document.querySelector("#profile img")
  if (HTML.classList.contains("light")){
    imege.setAttribute("src","./assets/assets/avatar-light.png")
   imege.setAttribute("alt", "Foto do perfil com tema claro")
  }
else{
    imege.setAttribute("src","./assets/assets/Nelo tymba.png")
    imege.setAttribute("alt", "Foto do perfil com tema black") 
}
}