const page1 = document.querySelector(".burger");
const page2 = document.querySelector(".burger-x");
const mbr = document.querySelector(".menu-burger")
const mmenu = document.querySelector(".m-menu");

document.querySelector(".burger").addEventListener("click", () => {
  page2.style.display = `block`;
  page1.style.display = `none`;
  mbr.style.display = `block`;
  mmenu.style.display = `flex `;
  /* mmenu.classList.remove("menu");
  mmenu.classList.toggle("m-menu"); */
});

document.querySelector(".burger-x").addEventListener("click", () => {
  page2.style.display = `none`;
  page1.style.display = `block`;
   mbr.style.display = `none`;
  mmenu.style.display = `none`;
 /*  mmenu.classList.add("menu");
  mmenu.classList.toggle("m-menu"); */
});

/* const myElement = document.getElementById("myElement");

myElement.addEventListener("mouseover", () => {
  mmenu.classList.add("menu");
  mmenu.classList.remove("m-menu");
}); */
