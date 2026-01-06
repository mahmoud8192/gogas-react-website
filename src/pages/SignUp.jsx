import { useEffect, useState } from "react";
import AccordianItem from "../components/Sign Up/AccordianItem";
import SignUpForm from "../components/Sign Up/SignUpForm";
import MyPurchese from "../components/Sign Up/MyPurchese";
import OrderStatus from "../components/Sign Up/OrderStatus";
import EaseAccess from "../components/EaseAccess";
import { useLocation } from "react-router";
import CompanyImg from "../components/CompanyImg";

function SignUp() {
const tapItems = [
    {text:"My personal information",component:<SignUpForm />,id:0}
    ,{text:"My purchases",component:<MyPurchese />,id:1},

    {text:"Order status",component:<OrderStatus />,id:2},
    {text:"Logout",id:3}
]
const [activeID,setActiveID] = useState(0);
const path = useLocation();
function clickDetailHandler(elementID){
  setActiveID(elementID);
  
}
    useEffect(()=>{
     document.querySelector('.preloader')?.remove();
    },[])
  return <div className="flex flex-col gap-10 w-full h-full">
      <div>
        <div className="h-[15%]">

        <CompanyImg />
        </div>
        <div className="w-[80%] my-8 mx-auto">
          <EaseAccess text={path.pathname} to={path.pathname} />
        </div>
      </div>

<div className="w-full min-h-[90vh] max-h-fit">

  <div 
  className="flex flex-col gap-4 mx-auto w-[80%] h-fit [font-family:var(--font-second)] font-medium">
    {tapItems.map((item,i)=><AccordianItem id={item.id} text={item.text} key={i} active={item.id === activeID} clickDetailHandler={clickDetailHandler}>
    
    {item.component}  
    </AccordianItem>)}
 
  </div>;
    </div>

</div>

}
export default SignUp;
