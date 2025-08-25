import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  let currentCards = []; // stores cards as strings like "10♦", "A♥"

  //----------------Random Card-------------------------
  function randomCard() {
    const cardContainer = document.getElementById("card-container");

    if (cardContainer.children.length >= 10) {
      alert("Maximum amount of cards reached!");
      return;
    }

    let allSuits = ["♦", "♥", "♣", "♠"];
    let allNumbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

    let randomSuit = allSuits[Math.floor(Math.random() * allSuits.length)];
    let randomNumber = allNumbers[Math.floor(Math.random() * allNumbers.length)];
    let randomCardLog = randomNumber + randomSuit;

    if (currentCards.includes(randomCardLog)) return; // skip duplicates

    currentCards.push(randomCardLog); // store the card

    const color = (randomSuit === "♦" || randomSuit === "♥") ? "red" : "black";

    const cardGeneral = document.createElement("div");
    cardGeneral.className = "cardGeneral";

    const cardTop = document.createElement("div");
    cardTop.className = "cardTop";
    cardTop.textContent = randomNumber;
    cardTop.style.color = color;

    const cardCenter = document.createElement("div");
    cardCenter.className = "cardCenter";
    cardCenter.textContent = randomSuit;
    cardCenter.style.color = color;

    const cardBottom = document.createElement("div");
    cardBottom.className = "cardBottom";
    cardBottom.textContent = randomNumber;
    cardBottom.style.color = color;

    cardGeneral.appendChild(cardTop);
    cardGeneral.appendChild(cardCenter);
    cardGeneral.appendChild(cardBottom);

    cardContainer.appendChild(cardGeneral);

    console.log("Added card:", randomCardLog);
  }

  document.getElementById("draw").addEventListener("click", randomCard);

  //----------------Sorting Card--------------------
  function sortingCards() {
    if (currentCards.length === 0) return;

    const valueMap = {
      2: 2, 3: 3, 4: 4, 5: 5, 6: 6,
      7: 7, 8: 8, 9: 9, 10: 10,
      J: 11, Q: 12, K: 13, A: 14
    };

    // Sort the cards
    const sortedCards = [...currentCards].sort((a, b) => {
      let valueA = valueMap[a.slice(0, -1)] || 0; // number part
      let valueB = valueMap[b.slice(0, -1)] || 0;
      return valueA - valueB;
    });

    const sortedContainer = document.getElementById("sorted-card-container");
    sortedContainer.innerHTML = ""; // clear old sorted cards

    // Create and append sorted card elements
    sortedCards.forEach(card => {
      let number = card.slice(0, -1);
      let suit = card.slice(-1);
      const color = (suit === "♦" || suit === "♥") ? "red" : "black";

      const sortedCardGeneral = document.createElement("div");
      sortedCardGeneral.className = "sortedCardGeneral";

      const sortedCardTop = document.createElement("div");
      sortedCardTop.className = "sortedCardTop";
      sortedCardTop.textContent = number;
      sortedCardTop.style.color = color;

      const sortedCardCenter = document.createElement("div");
      sortedCardCenter.className = "sortedCardCenter";
      sortedCardCenter.textContent = suit;
      sortedCardCenter.style.color = color;

      const sortedCardBottom = document.createElement("div");
      sortedCardBottom.className = "sortedCardBottom";
      sortedCardBottom.textContent = number;
      sortedCardBottom.style.color = color;

      sortedCardGeneral.appendChild(sortedCardTop);
      sortedCardGeneral.appendChild(sortedCardCenter);
      sortedCardGeneral.appendChild(sortedCardBottom);

      sortedContainer.appendChild(sortedCardGeneral);
    });

    console.log("Sorted cards:", sortedCards);
  }
  
  document.getElementById("sort").addEventListener("click", sortingCards);
};
