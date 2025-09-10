/*Clicked button styling and showing menu social links to share article*/
const cardFooter = document.querySelector(".card__footer");
const articleDetails = document.querySelector(".article__details");
const socialLinks = document.querySelector(".social__links");
const iconShareArticle = document.querySelector(".icon__share__article");
const svgArrowShare = document.querySelector(".svg__share");

iconShareArticle.addEventListener("click", () => {
  iconShareArticle.classList.toggle("icon__share__clicked");
  svgArrowShare.classList.toggle("icon__share__clicked");

  cardFooter.classList.toggle("bg-dark");
  articleDetails.classList.toggle("hide");
  socialLinks.classList.toggle("show");
});
