const DATA_URL = "./javascript/data.json";

fetch(DATA_URL)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Could not load JSON data");
    }
    return response.json();
  })
  .then((data) => {
    renderScores(data);

    const totalScore = calculateTotal(data);

    const totalElement = document.getElementById("totalScore");
    if (totalElement) {
      totalElement.textContent = totalScore;
    }
  })
  .catch((error) => {
    console.error("Error:", error);
  });

function calculateTotal(data) {
  const sum = data.reduce((total, category) => total + category.score, 0);
  const average = Math.round(sum / data.length);

  return average;
}

function renderScores(data) {
  const scoresContainer = document.getElementById("scores");
  scoresContainer.innerHTML = "";

  const html = data
    .map(
      (category) => `
    <div class="score-category ${category.category.toLowerCase()}">
        <div class="category-info">
          <img src="${category.icon}" alt="${category.category}">
          <span>${category.category}</span>
        </div>    
        <div class="category-score">
          <span class="score">${category.score}</span>
          <span class="total">/100</span>
        </div>
    </div>    
    `
    )
    .join("");

  scoresContainer.insertAdjacentHTML("beforeend", html);
}
