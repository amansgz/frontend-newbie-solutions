document.addEventListener("DOMContentLoaded", () => {
  /* Opens details summary item one at a time, using toggle event, hasAttribute and removeAttribute open */
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

  /* Shows hand cursor effect with mouse event */
  const accordion = document.getElementById("accordion-container");
  const cursor = document.querySelector(".accordion__cursor");

  accordion.addEventListener("mousemove", (e) => {
    cursor.style.left =
      e.clientX - accordion.getBoundingClientRect().left + "px";
    cursor.style.top = e.clientY - accordion.getBoundingClientRect().top + "px";
  });
});
/* 
Alternative solution: to open the details summary (one at a time), using the toggle event and .open false 
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
