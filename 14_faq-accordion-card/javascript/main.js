/* Using toggle event from details and using hasAttribute or removeAttribute open*/
document.addEventListener("DOMContentLoaded", () => {
  const accordionItems = document.querySelectorAll(".accordion__item");

  accordionItems.forEach((item) => {
    item.addEventListener("toggle", function () {
      if (this.hasAttribute("open")) {
        accordionItems.forEach((otherItem) => {
          if (otherItem !== this) {
            otherItem.removeAttribute("open");
          }
        });
      }
    });
  });
});

/* 
another solution, using toggle event from details
and using .open false

document.addEventListener("DOMContentLoaded", () => {
  const accordionItems = document.querySelectorAll(".accordion__item");

  accordionItems.forEach((item) => {
    item.addEventListener("toggle", function () {
      if (this.open) {
        accordionItems.forEach((otherItem) => {
          if (otherItem !== this) {
            otherItem.open = false;
          }
        });
      }
    });
  });
});
 */
