const ratingForm = document.getElementById("ratingForm");
const confirmationMessage = document.getElementById("selectedRatingMessage");
const ratingCard = document.getElementById("ratingCard");
const confirmationCard = document.getElementById("confirmationCard");
const btnRateAgain = document.getElementById("btnRateAgain");

ratingForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const selectedOption = document.querySelector('input[name="rate"]:checked');

  if (selectedOption) {
    const selectedRating = selectedOption.value;

    ratingCard.classList.toggle("card--hidden");
    confirmationCard.classList.toggle("card--hidden");
    confirmationMessage.textContent = `You selected ${selectedRating} out of 5`;
  } else {
    alert("Please select a rating before submitting");
  }
});

btnRateAgain.addEventListener("click", () => {
  confirmationCard.classList.toggle("card--hidden");
  ratingCard.classList.toggle("card--hidden");
  ratingForm.reset();
});
