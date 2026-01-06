import extractNameFromSRC from "./utils/extractNameFromSRC";
import companyImg from "../assets/images/companyImg/go-gas-company.png";
function CompanyImg() {
  return (
    <div className="relative -z-1 w-full h-full">
      <img
        className="w-full h-full"
        src={companyImg}
        alt={extractNameFromSRC(companyImg)}
      />
    </div>
  );
}

export default CompanyImg;
