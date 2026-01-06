import { useEffect, useRef, useState } from "react";
import "./SLIDER/assets/style/style.css";
import carouselArrow from "../Slider/SLIDER/assets/images/carousel-arrow.svg";
import slider1 from "../../assets/images/slider/slider1.png";
import slider2 from "../../assets/images/slider/slider2.png";
import Card from "./Card";

const cards = [
  {
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    title: "Restaurant",
    imgSrc: slider1,
    id: 1
  },
  {
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    title: "Free wifi zone",
    imgSrc: slider2,
    id: 5
  }
];
function Slider() {
  const [index, setIndex] = useState(0);

  const [viewedCards, setViewedCards] = useState(0);
  const [maxVisibleCount, setMaxVisibleCount] = useState(0);
  const [valueToMove, setValueToMove] = useState(0);

  const slideContainer = useRef();
  const slider = useRef();
  const sliderCards = useRef();
  const nextBtn = useRef();
  const prevBtn = useRef();
  useEffect(
    () => {
      sliderCards.current = slider.current.querySelectorAll(".card");

      const getCardWidth = card => {
        return card.offsetWidth;
      };
      const getSpacingBetweenCards = (card1, card2) => {
        // get right-edge position in the document
        // returns the element’s position relative to the viewport.
        const card1Rect = card1.getBoundingClientRect();
        const card2Rect = card2.getBoundingClientRect();

        const spacing = card2Rect.left.toFixed(2) - card1Rect.right.toFixed(2);

        return spacing;
        // get left-edge position in the document
      };

      const countVisibleCards = container => {
        const containerRect = container.getBoundingClientRect();
        let visibleCount = 0;

        sliderCards.current.forEach(card => {
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
      };

      setValueToMove(
        getCardWidth(sliderCards.current[0]) +
          getSpacingBetweenCards(sliderCards.current[0], sliderCards.current[1])
      );
      setMaxVisibleCount(() => countVisibleCards(slideContainer.current));

      setViewedCards(() => maxVisibleCount);
      window.addEventListener("resize", () => {
        setMaxVisibleCount(() => countVisibleCards(slideContainer.current));
      });
    },
    [maxVisibleCount]
  );
  useEffect(
    () => {
      if (slider.current) {
        slider.current.style.transform = `translateX(${index}px)`;
      }
    },
    [index]
  );
  const nextBtnHandler = () => {
    if (viewedCards < sliderCards.current.length) {
      setIndex(i => i - valueToMove);

      setViewedCards(v => v + 1);
    }
  };
  const prevBtnHandler = () => {
    if (viewedCards > maxVisibleCount) {
      setIndex(i => i + valueToMove);
      setViewedCards(v => v - 1);
    }
  };
  return (
    <div className="w-full h-full slider-base">
      <div className="slider-container" ref={slideContainer}>
        <div className="slider" ref={slider}>
          {cards.map(card => <Card card={card} key={card.id} />)}
        </div>
      </div>
      <div className="slider-btns-container">
        <button
          ref={prevBtn}
          className="slider-prev-btn slider-btn"
          onClick={() => prevBtnHandler()}
        >
          <img src={carouselArrow} alt="prev arrow" />
        </button>
        <button
          ref={nextBtn}
          className="slider-next-btn slider-btn"
          onClick={() => nextBtnHandler()}
        >
          <img src={carouselArrow} alt="next arrow" />
        </button>
      </div>
    </div>
  );
}

export default Slider;
