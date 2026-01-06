import { useReducer } from "react";
import Input from "../ContactUs/Input";
import Button from "../Button";

const intialState = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  password: "",
  confirmpassword: ""
};
function reducer(state, action) {
  switch (action.type) {
    case "firstName": {
      return { ...state, firstName: action.payload };
    }
    case "lastName": {
      return { ...state, lastName: action.payload };
    }
    case "phoneNumber": {
      return { ...state, phoneNumber: action.payload };
    }
    case "email": {
      return { ...state, email: action.payload };
    }
    case "password": {
      return { ...state, password: action.payload };
    }
    case "confirmpassword": {
      return { ...state, confirmpassword: action.payload };
    }
    default: {
      console.error("No Case matched:");
    }
  }
}

function SignUpForm() {
  const [data, dispatch] = useReducer(reducer, intialState);
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    password,
    confirmpassword
  } = data;
  const formInputs = [
    {
      placeholder: "First Name",
      name: "firstName",
      id: "firstName",
      autoComplete: "first-name",
      value: firstName
    },
    {
      placeholder: "Last Name",
      name: "lastName",
      id: "lastName",
      autoComplete: "last-name",

      value: lastName
    },

    {
      placeholder: "E-mail Address",
      type: "email",
      name: "email",
      autoComplete: "email",

      id: "email",
      value: email
    },
    {
      type: "number",
      name: "phoneNumber",
      autoComplete: "phone-number",

      placeholder: "Phone Number",
      id: "phoneNumber",
      value: phoneNumber
    },
    {
      placeholder: "password",

      name: "password",
      id: "password",
      value: password,
      autoComplete: "new-password",
      type: "password"
    },
    {
      placeholder: "Confirm password",

      name: "confirmpassword",
      id: "confirmpassword",
      autoComplete: "new-password",

      value: confirmpassword,
      type: "password"
    }
  ];
  function inputChangeHandler(value, type) {
    dispatch({ type, payload: value });
  }
  function formSubmitHandler() {}
  function onSaveHandler(e) {
    e.preventDefault();
    formSubmitHandler();
  }
  return (
    <form className="p-10 mx-auto w-full grid grid-cols-1 grid-rows-[auto] sm:grid-cols-2 gap-x-4 gap-y-3">
      {formInputs.map(input =>
        <div key={input.id} className={`h-fit`}>
          <Input
            label={input.label}
            placeholder={input.placeholder}
            name={input.name}
            id={input.id}
            value={input.value}
            onchange={inputChangeHandler}
            autoComplete={input.autoComplete}
            type={input.type}
          />
        </div>
      )}
      <div className=" transition sm:col-span-2 w-full h-15  rounded-md   text-white font-medium  [font-family:var(--font-second)] leading-16">
        <Button
          backgroundColor="color_11"
          type={"submit"}
          callback={onSaveHandler}
          radius="md"
          textSize="md"
        >
          Save
        </Button>
      </div>
    </form>
  );
}

export default SignUpForm;
