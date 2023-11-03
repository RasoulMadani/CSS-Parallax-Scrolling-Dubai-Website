let dubaiText = document.getElementById("dubaitext");
let burjkhalifa = document.getElementById("burjkhalifa");
let stars = document.getElementById("stars");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  dubaiText.style.left = value * -2 + "px";
  console.log(dubaiText.parentElement.nextElementSibling.offsetHeight)
  if(dubaiText.parentElement.nextElementSibling.offsetHeight -200 >value){
      burjkhalifa.style.top = value * 1 + "px";
      stars.style.top = value * 1 + "px";

  }
});
