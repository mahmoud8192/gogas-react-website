import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import GoDiesel from "./pages/GoDiesel";
import GoFresh from "./pages/GoFresh";
import StationLocation from "./pages/StationLocation";
import Careers from "./pages/Careers";
import ContactUs from "./pages/ContactUs";
import { useEffect } from "react";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
function App() {
  useEffect(() => {
    // remove preloader on app mount -- bundles loaded --
    document.querySelector(".preloader")?.remove();
  }, []);
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <div className="w-full relative inset-0">
              <HomePage />
            </div>
          }
        />
        <Route
          path="about-us"
          element={
            <div className="">
              <AboutUs />
            </div>
          }
        />
        <Route
          path="go-diesel"
          element={
            <div className="">
              <GoDiesel />
            </div>
          }
        />

        <Route
          path="go-fresh"
          element={
            <div className="">
              <GoFresh />
            </div>
          }
        />

        <Route
          path="station-location"
          element={
            <div className="">
              <StationLocation />
            </div>
          }
        />

        <Route
          path="contact-us"
          element={
            <div className="">
              <ContactUs />
            </div>
          }
        />
        <Route
          path="careers"
          element={
            <div className="h-[40vh]">
              <Careers />
            </div>
          }
        />
        <Route
          path="my-account"
          element={
            <div className="h-fit">
              <SignUp />
            </div>
          }
        />
        <Route
          path="login"
          element={
            <div className="">
              <Login />
            </div>
          }
        />

        <Route
          path="cart"
          element={
            <div className="">
              <Cart />
            </div>
          }
        />
        <Route
          path="*"
          element={
            <div>
              <h1 className="w-full h-[90vh] ">
                <NotFound />
              </h1>
            </div>
          }
        />
      </Routes>
      <div className="mt-20">
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
