import { useEffect, useReducer } from "react";
import Input from "../components/ContactUs/Input";
import CompanyImg from "../components/CompanyImg";

const intialState = {

  email: "",
  password: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "email": {
      return { ...state, email: action.payload };
    }
    case "password": {
      return { ...state, password: action.payload };
    }
    default: {
      console.error("No Case matched:");
    }
  }

}
function Login() {
    const [data, dispatch] = useReducer(reducer, intialState);
    const {

      email,

      password,
  
    } = data;
  useEffect(()=>{
   document.querySelector('.preloader')?.remove();
  },[]);

    const formInputs = [
    {
      placeholder: "Username or email address",
    
      name: "email",
      id: "email",
      value: email
    },
    {
      placeholder: "password",

      name: "password",
      id: "password",
      value: password,
      type: "password"
    },
    
  ];  function inputChangeHandler(value, type) {
    dispatch({ type, payload: value });
  }
  function formSubmitHandler() {
    console.log(data);
  }
  return (
    <div className="flex flex-col gap-24">
            <CompanyImg />

  
    


<div className="relative   overflow-hidden">


    <div className=" min-h-[50vh] max-h-fit flex flex-col items-center sm:flex-row w-[80%] mx-auto">
      <form className="h-full w-full sm:w-120 px-10 py-12 [font-family:var(--font-second)]  bg-[#f5f5f5]">
        <h1 className="font-semibold text-[1.5rem] leading-16 capitalize">
          Login!
        </h1>
        
        <div>

        {formInputs.map(item=><Input id={item.id} label={item.label} name={item.name} placeholder={item.placeholder} key={item.id} value={item.value} type={item.type} onchange={inputChangeHandler}/>)}
        </div>
        <div className="flex items-center gap-3 w-fit">
          <input className="w-5 h-5 accent-[var(--color-11)] " type="checkbox" name="remmemberMe" id="remmemberMe" />
          <label
            className="font-light text-[1rem] leading-16 capitalize"
            htmlFor="remmemberMe"
            >
            Remember me
          </label>
        </div>
           <button
        className="btn transition sm:col-span-2 w-full h-15  rounded-md text-[1.3rem] bg-[var(--color-11)] text-white font-medium  [font-family:var(--font-second)] leading-16"
        onClick={e => {
          e.preventDefault();
          formSubmitHandler();
        }}
        type="submit"
        >
        Login
      </button>
      </form>
    

    <img className=" sm:absolute sm:h-120 relative -right-40 sm:-right-80 sm:-z-1" src="./assets/images/login/car.jpg" alt="car" />
</div>    
    </div>

    
    </div>
  );
}

export default Login;
