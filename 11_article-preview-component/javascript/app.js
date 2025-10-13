const cardFooter = document.querySelector(".card__footer");
const btnShare = document.getElementById("btn-share");

/*
When clicks share button the item profile hides and
the nav with social-links displays. 
Also changes the bg card footer and the fill of the icon button.
*/
btnShare.addEventListener("click", () => {
  cardFooter.classList.toggle("active");
});
