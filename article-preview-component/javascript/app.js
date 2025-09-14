const cardProfile = document.querySelector(".card__profile");
const cardNav = document.querySelector(".card__nav");
const btnShare = document.getElementById("btn-share");

/*
When clicks share button the item profile hides and
the nav with social-links displays. 
Also changes the bg item and the fill of the icon button.
*/
btnShare.addEventListener("click", () => {
  cardProfile.classList.toggle("active");

  if (cardNav.classList.contains("hidden")) {
    cardNav.classList.remove("hidden");
  } else {
    cardNav.classList.add("hidden");
  }
});
