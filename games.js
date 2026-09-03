const grid = document.querySelector("#game-grid");
const template = document.querySelector("#game-card-template");

async function loadGames() {
  const response = await fetch("games.json");

  if (!response.ok) {
    throw new Error(`Could not load games: ${response.status}`);
  }

  return response.json();
}

function renderGames(games) {
  games.forEach((game, index) => {
    const card = template.content.cloneNode(true);
    const article = card.querySelector("article");
    article.classList.add(`card-${game.accent}`);
    article.style.setProperty("--delay", `${index * 90}ms`);
    card.querySelector(".art-icon").textContent = game.icon;
    card.querySelector(".tag").textContent = game.tag;
    card.querySelector("h3").textContent = game.title;
    card.querySelector("p").textContent = game.description;
    const link = card.querySelector(".play-button");
    link.href = game.path;
    link.setAttribute("aria-label", `Play ${game.title}`);
    grid.appendChild(card);
  });
}

loadGames().then(renderGames).catch(() => {
  grid.textContent = "Our game shelf is taking a tiny nap. Please try again soon!";
});
