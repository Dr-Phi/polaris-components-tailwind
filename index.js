const threeDots1 = document.querySelector(".dots");
const dismiss1 = document.querySelector("div.active-clic");
dismiss1.classList.add("hidden");
const btn1 = document.querySelector("button.btn-1");
const shareFb1 = document.querySelector("div.share-fb");
shareFb1.classList.add("hidden");

threeDots1.addEventListener('click', () => toggleActive(dismiss1));
btn1.addEventListener('click', () => toggleActive(shareFb1));


function toggleActive(targ) {
  targ.classList.toggle("hidden");
}