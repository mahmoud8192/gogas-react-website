import CompanyImg from "../components/CompanyImg";
import extractNameFromSRC from "../components/utils/extractNameFromSRC";
import mapImage from "../assets/images/station-location/go-gas-station-location.svg";
import EaseAccess from "../components/EaseAccess";
import { useLocation } from "react-router";
function StationLocation() {
  const path = useLocation();
  return (
    <div>
      <div>
        <CompanyImg />
        <div className="w-[80%] my-8 mx-auto">
          <EaseAccess text={path.pathname} to={path.pathname} />
        </div>
      </div>

      <div className="w-[60%] lg:pt-15 py-5 lg:h-screen h-fit mx-auto">
        <img
          className="w-full"
          src={mapImage}
          alt={extractNameFromSRC(mapImage)}
        />
      </div>
    </div>
  );
}

export default StationLocation;
