import { useEffect, useRef, useState } from "react";
import OurstoryItem from "./OurstoryItem";
import VerticalSlider from "./VerticalSlider";
import InfoContainer from "./InfoContainer";

const TEXTS = [
  {
    title: "1970s - 1980s Proudly Rooted in Jordan",
    desc:
      "In the 1970s, the founder of Al Watanieh started leasing gas stations in Jordan.As the business grew so well, the company expanded its operations in the 1980s to establish its own station in one of Amman'smost vibrant and strategic locations",
    id: 487123,
    active: true,
    index: true
  },
  {
    title: "2004 Servicing all of Jordan",
    desc:
      "In 2004 Al Watanieh was established as a company, specialized in providing and distributing fuel to individuals and corporations. The same year it expanded its network of service stations across The Kingdom of Jordan.",
    id: 817231,
    active: false
  },
  {
    title: "Contemporary global standards",
    desc:
      "From its earliest days, Al Watanieh saw an opportunity to improve the typical standards of the market. To set itself apart, the companyadopted a customer-centric mentality and began to enhance the experience across all service stations and energy distribution channels.Al Watanieh invested in international industry standards – from best-in class service to innovative solutions and eco-friendly practices.At the same time it began to pay close attention to every detail that makes a difference in a customer’s journey.The result is that Al Watanieh has been able to fulfill the energy needs of individuals and corporations in responsible and sustainable manners.",
    id: 485123,
    active: false
  },
  {
    title: "Proudly standing for Jordan",
    desc:
      "Born in Jordan, built by local hands and grown by Jordanian talent, Al Watanieh values are rooted in Jordan›s culture and heritage.It continues to contribute to the development of the local economy and communities, making a positive impact wherever it operates. This includes conducting business in an ethical, sustainable and responsible way, investing in employees and taking care of the environment.",
    id: 787123,
    active: false
  },
  {
    title: "2015 The birth of GO",
    desc:
      "In 2015 the company went through a major re-branding. As a result Al Watanieh created three sub brands :",
    Link: [
      {
        title: "GO Station , GO Fresh  , GO Diesel",
        desc:
          "to further enhance its customer offering. Al Watanieh service stations operate across Jordan, fully equipped with convenience storesand extra services to ensure a pleasant and safe experience for motorists. They also provide fuel and heating to the corporate,",
        desc_span: "industrial and residential sectors.",
        id: 1087123
      }
    ],
    id: 487121,
    active: false
  },
  {
    title: "A future of growth and innovation",
    desc:
      "Al Watanieh will expand its presence and services in Jordan to become the preferred and most trusted national energy provider – continuing to set the benchmark in Jordanian service excellence, quality and innovation.",
    id: 45001,
    active: false
  }
];

// Final
const MAX_RANGE = 100;
const MIN_RANGE = 0;
const DEFAULT_VALUE = 5;
function AboutUs() {
  const style = {
    base: "flex w-full h-200 max-h-[90vh] mb-20 mt-5",
    scrollableWrapper:
      "w-[90%] h-full  flex flex-col gap-8  overflow-y-scroll scrollbar  scrolscrollbar-none ",
    scrollable: "px-2",
    title:
      "[font-family:var(--font-main)] font-bold text-[1.5rem] leading-[1.8rem] "
  };
  const [rangeValue, setRangeValue] = useState(0);
  const scrollableEl = useRef(null);
  const scrollableWrapEl = useRef(null);
  // enhance ux by adding delay before scroll-event excuted .
  const timeoutID = useRef(null);
  // normlize scrollable div height: using the follwing formula: (xi – min(x)) / (max(x) – min(x)) * 100
  function normlizeHeight(point, max_original, max, min, min_original) {
    const normalized =
      (point - min_original) / (max_original - min_original) * (max - min) +
      min;

    return normalized;
  }

  useEffect(
    () => {
      const el = scrollableEl.current;
      const elWrap = scrollableWrapEl.current;

      function handleScroll() {
        console.log(rangeValue);

        timeoutID.current = setTimeout(() => {
          const normlizedHeight = Number(
            normlizeHeight(
              elWrap.scrollTop,
              el.scrollHeight - elWrap.offsetHeight,
              MAX_RANGE,
              MIN_RANGE,
              0
            ).toFixed(2)
          );

          setRangeValue(normlizedHeight);
        }, 100);
      }

      elWrap.addEventListener("scroll", handleScroll);
      return () => {
        clearTimeout(timeoutID.current);
        elWrap.removeEventListener("scroll", handleScroll);
      };
    },
    [rangeValue]
  );

  function addItemScrollTop(offsetTop, id) {
    const normlizedValue =
      normlizeHeight(
        offsetTop,
        scrollableWrapEl.current.scrollHeight,
        100,
        0,
        0
      ).toFixed(2) * 1;

    if (normlizedValue < rangeValue) {
      TEXTS.find(item => item.id === id).active = true;
    } else {
      TEXTS.find(item => item.id === id).active = false;
    }
  }
  return (
    <div className="w-[80%] max-w-[2000px] mx-auto h-fit">
      <h1 className={style.title}>Our Story</h1>
      <div className={style.base}>
        <VerticalSlider
          defaultValue={DEFAULT_VALUE}
          min={MIN_RANGE}
          max={MAX_RANGE}
          value={rangeValue}
        />

        <div ref={scrollableWrapEl} className={style.scrollableWrapper}>
          <div ref={scrollableEl} className={style.scrollable}>
            {TEXTS.map(item =>
              <OurstoryItem
                List={item.Link}
                title={item.title}
                desc={item.desc}
                active={item.active}
                index={item.index}
                onMount={addItemScrollTop}
                id={item.id}
                key={item.id}
              />
            )}
          </div>
        </div>
      </div>
      <div className="">
        <InfoContainer />
      </div>
    </div>
  );
}

export default AboutUs;
