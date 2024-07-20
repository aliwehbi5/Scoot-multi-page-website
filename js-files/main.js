const hamburger = document.querySelector(".hamburger");
const leftPart = document.querySelector("nav .left-part");
let closeLink =
  "https://fluffy-tarsier-9926b4.netlify.app/assets/close.308894da.svg";
let hamburgerLink =
  "https://fluffy-tarsier-9926b4.netlify.app/assets/hamburger.c55de7ed.svg";

hamburger.addEventListener("click", () => {
  if (!hamburger.classList.contains("close")) {
    hamburger.src = closeLink;
  } else {
    hamburger.src = hamburgerLink;
  }
  hamburger.classList.toggle("close");
  document.body.classList.toggle("active");
});
