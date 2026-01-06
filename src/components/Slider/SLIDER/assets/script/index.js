"use strict";
const sliderContainer = document.querySelector(".slider-container");
const slider = document.querySelector(".slider");
let sliderCards = slider.querySelectorAll(".card");

const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

// update cards with last changes
function setCards() {
  sliderCards = slider.querySelectorAll(".card");
}
// slider must have at least one card
function getCardWidth(card) {
  return card.offsetWidth;
}
// get ending point for card1 and starting point for card 2 so spacing clearly exposed
function getSpacingBetweenCards(card1, card2) {
  // get right-edge position in the document
  // returns the element’s position relative to the viewport.
  const card1Rect = card1.getBoundingClientRect();
  const card2Rect = card2.getBoundingClientRect();

  const spacing = card2Rect.left.toFixed(2) - card1Rect.right.toFixed(2);

  return spacing;
  // get left-edge position in the document
}
function moveSliderToLeft(slider, value = 0) {
  slider.style.transform = `translateX(${value}px)`;
}
function moveSliderToRight(slider, value) {
  slider.style.transform = `translateX(${value}px)`;
}
function countVisibleCards(container, sliderCards) {
  const containerRect = container.getBoundingClientRect();
  let visibleCount = 0;

  sliderCards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    // Check if the card is inside the container horizontally
    if (
      rect.right > containerRect.left &&
      rect.left < containerRect.right &&
      rect.right < containerRect.right
    ) {
      visibleCount++;
    }
  });

  return visibleCount;
}
function nextBtnHandler() {
  if (viewCards < sliderCards.length) {
    index -= valueToMove;
    viewCards++;
    console.log(viewCards, maxVisibleCount, sliderCards.length);
    moveSliderToLeft(slider, index);
  }
}
function prevBtnHandler() {
  if (viewCards > maxVisibleCount) {
    index += valueToMove;
    viewCards--;
    console.log(viewCards, maxVisibleCount, sliderCards.length);
    moveSliderToRight(slider, index);
  }
}
function addCard(imgSrc = "", title = "", desc = "") {
  const card = document.createElement("div");
  const img = document.createElement("img");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  img.src = imgSrc;
  h3.innerHTML = title;
  p.innerHTML = desc;

  card.append(img, h3, p);

  card.classList.add("card");
  slider.append(card);
  setCards();
}
nextBtn.addEventListener("click", nextBtnHandler);
prevBtn.addEventListener("click", prevBtnHandler);

// script start point .
function INITIATOR(cards) {
  console.log("access");

  cards.forEach((item) => {
    addCard(item.imgSrc, item.title, item.desc);
  });
}
// INITIATOR(cards);

// Place globals at the very bottom (after script initiate)
// GLOBAL
// store how much should slider go left/right

let valueToMove =
  getCardWidth(sliderCards[0]) +
  getSpacingBetweenCards(sliderCards[0], sliderCards[1]);
let maxVisibleCount = countVisibleCards(sliderContainer, sliderCards);
let viewCards = maxVisibleCount;
let index = 0;

/**
 * - card width
 * - spacing between cards
 */

/**
 * - when should the next button stop -- when all cards are shown --
 * -- when all cards are shown ? when card's right edge is less than container right edge and card's left-edge greater than container left edge .
 *
 */
