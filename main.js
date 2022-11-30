const imageChange = document.getElementById("imagesrc");
const closeNav = document.getElementById("closeNav");
const openNav = document.getElementById("opeNav");
const windowLenght = window.innerWidth;

closeNav.addEventListener("click", () => {
    if (windowLenght < 601) {
      document.getElementById("mySidenav").style.width = "0";
    }
  });
  openNav.addEventListener("click", () => {
    if (windowLenght < 601) {
      document.getElementById("mySidenav").style.width = "250px";
    }
  });

function setSize() {
  if (windowLenght < 601) {
    imageChange.src = "/assets/images/webviewmobile.jpg";
  } else {
    imageChange.src = "/assets/images/webviewdesktop.jpg";
  }
}

window.addEventListener("resize", setSize);

