

let toggledropDown = () => {
  let nav = document.getElementsByClassName("nav")[0];
  nav.classList.toggle("open");
}

let chevlonButton = document.getElementsByClassName("open-nav-chevlon")[0];

chevlonButton.addEventListener('click', toggledropDown);