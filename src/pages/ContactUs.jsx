import ContactCard from "../components/ContactUs/ContactCard";
import locationImg from "../assets/images/contact-us/location.png";
import emailImg from "../assets/images/contact-us/email-logo.png";
import oldPhoneImg from "../assets/images/contact-us/old-phone.png";
import goGasLocationsImg from "../assets/images/contact-us/go-gas-locations.png";
import Input from "../components/ContactUs/Input";
import goGasShopImg from "../assets/images/contact-us/station-shop.jpg";
import { useReducer } from "react";
import CompanyImg from "../components/CompanyImg";
import Button from "../components/Button";
import extractNameFromSRC from "../components/utils/extractNameFromSRC";
import arrowImg from "../assets/images/slider/carousel-arrow.svg";
import { useLocation } from "react-router";
import EaseAccess from "../components/EaseAccess";
const intialState = {
  name: "",
  companyName: "",
  phoneNumber: "",
  email: "",
  message: ""
};

function reducer(state, action) {
  switch (action.type) {
    case "name": {
      return { ...state, name: action.payload };
    }
    case "companyName": {
      return { ...state, companyName: action.payload };
    }
    case "phoneNumber": {
      return { ...state, phoneNumber: action.payload };
    }
    case "email": {
      return { ...state, email: action.payload };
    }
    case "message": {
      return { ...state, message: action.payload };
    }
    default: {
      console.error("No Case matched:");
    }
  }
  console.log(state);
}
const contactDetailsCards = [
  { imgSrc: emailImg, contactDetail: "info@NEG-group.com" },
  { contactDetail: "00962 111 222 000", imgSrc: oldPhoneImg },
  {
    contactDetail: "AL Muqabalain, AL Quds St.BL408, Amman, Jordan",
    imgSrc: locationImg
  },
  { contactDetail: "00962 111 222 000", imgSrc: oldPhoneImg }
];

function ContactUs() {
  // make variable holds the destructerd data (so i can debug easly)
  const [data, dispatch] = useReducer(reducer, intialState);
  const { name, email, companyName, phoneNumber, message } = data;
  const path = useLocation();
  const formInputs = [
    {
      label: "Your Name",
      placeholder: "Your Name",
      name: "name",
      id: "name",
      value: name
    },
    {
      label: "Company Name",
      placeholder: "Company Name",
      name: "companyName",
      id: "companyName",
      value: companyName
    },
    {
      label: "Phone Number",
      placeholder: "00962 - ",
      type: "number",
      name: "phoneNumber",
      id: "phoneNumber",
      value: phoneNumber
    },
    {
      label: "E-mail Address",
      placeholder: "Email",
      type: "email",
      name: "email",
      id: "email",
      value: email
    },
    {
      label: "Message",
      placeholder: "Message",
      isMsg: true,
      name: "message",
      id: "message",
      value: message
    }
  ];
  const style = {
    base: "flex flex-col gap-8",
    contact_container:
      "w-full h-fit flex flex-col gap-8 px-5 [font-family:var(--font-second)]",
    contact_details:
      " w-[85%] mx-auto h-fit flex justify-between sm:flex-row flex-col items-center flex-wrap gap-4 ",
    contact_details_card: "w-70 h-60 ",
    location_map: "w-[85%] mx-auto h-80 mb-30",
    contact_us_container: "grid grid-cols-3 ",
    contact_us_title: "font-semibold text-[1.4rem]  leading-16 ",
    form_container:
      "col-start-1 sm:col-start-2 row-start-2 sm:row-start-1 col-end-4 bg-white px-8",
    form: "grid sm:grid-cols-2 grid-cols-1 gap-5",
    submit:
      "w-full h-15 sm:w-50 rounded-2xl flex justify-around hover:brightness-105 transition cursor-pointer    text-[1.3rem] bg-[var(--color-11)] text-white font-medium  [font-family:var(--font-second)] leading-16",
    submit_img: "invert w-full h-full scale-105 ml-4",
    contact_us_bg:
      "w-full h-50 col-start-1  row-start-1 sm:col-end-3 sm:h-full col-end-4  bg_img"
  };

  function inputChangeHandler(value, type) {
    dispatch({ type, payload: value });
  }
  function formSubmitHandler(e) {
    e.preventDefault();
  }
  return (
    <div className={style.base}>
      <div>
        <CompanyImg />
        <div className="w-[80%] my-8 mx-auto">
          <EaseAccess text={path.pathname} to={path.pathname} />
        </div>
      </div>
      <div className={style.contact_container}>
        <div className={style.contact_details}>
          {contactDetailsCards.map((card, i) =>
            <div key={i} className={style.contact_details_card}>
              <ContactCard
                imgSrc={card.imgSrc}
                contactDetail={card.contactDetail}
              />
            </div>
          )}
        </div>
        <a
          style={{ backgroundImage: `url(${goGasLocationsImg})` }}
          href="https://www.google.com/maps?q=go+gas+amman"
          target="_blank"
          rel="noopener noreferrer"
          className={style.location_map}
        >
          <span className="sr-only">Open Go Gas location in Google Maps</span>
        </a>

        <div className={style.contact_us_container}>
          <div
            className={style.contact_us_bg}
            style={{ backgroundImage: `url(${goGasShopImg})` }}
          />

          <div className={style.form_container}>
            <h1 className={style.contact_us_title}>
              We are happy to answer all your questions
            </h1>
            <form className={style.form}>
              {formInputs.map((input, i) =>
                <div
                  key={i}
                  className={`${input.isMsg ? "h-60 sm:col-span-2" : "h-fit"}`}
                >
                  <Input
                    label={input.label}
                    placeholder={input.placeholder}
                    name={input.name}
                    id={input.id}
                    isMsg={input.isMsg || false}
                    value={input.value}
                    onchange={inputChangeHandler}
                    type={input.type}
                  />
                </div>
              )}
              <div className={style.submit}>
                <Button
                  callback={formSubmitHandler}
                  type={"submit"}
                  radius="xlg"
                  textSize="lg"
                  backgroundColor="color_9"
                  text={"Send"}
                >
                  <img
                    className={style.submit_img}
                    src={arrowImg}
                    alt={extractNameFromSRC(arrowImg)}
                  />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
