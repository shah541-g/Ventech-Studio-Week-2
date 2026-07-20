document.getElementsByClassName("menu-btn")[0].addEventListener('click',()=>{
  document.getElementsByClassName("sidebar")[0].classList.add("open");
})

document.getElementsByClassName("cross-btn")[0].addEventListener("click",()=>{
  document.getElementsByClassName("sidebar")[0].classList.remove("open");
})