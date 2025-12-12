import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import About from "./components/About";
import Contact from "./components/Contact";
import Publisher from "./components/Publisher";
import EachNews from "./components/EachNews";
import Reporter from "./components/Reporter";
import PostAd from "./components/PostAd";
import Pub_Reg from "./components/Pub_Reg";
import Rep_Reg from "./components/Rep_Reg";
import Admin from "./components/Admin";
import AdPayment from "./components/AdPayment";
import Admin_Login from "./components/Admin_Login";
//Footer
import Terms from "./components/Footer/Terms";
import Privacy from "./components/Footer/Privacy";
import License from "./components/Footer/License";
import Guide from "./components/Footer/Guide";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.startsWith("/EachNews/")) {
      window.scrollTo(0, 8000); // Scroll to a specific position for news
    } else {
      window.scrollTo(0, 0); // Default scroll to top
    }
  }, [pathname]);

  return null;
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/publisher" element={<Publisher />} />
          <Route path="/EachNews/:id" element={<EachNews />} />
          <Route path="/reporter" element={<Reporter />} />
          <Route path="/PostAd" element={<PostAd />} />
          <Route path="/pubreg" element={<Pub_Reg />} />
          <Route path="/repreg" element={<Rep_Reg />} />
          <Route path="/adminlogin" element={<Admin_Login />} />
          <Route path="/adpay" element={<AdPayment />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/adminlogin" element={<Admin_Login />} />
          {/* Footer */}
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/license" element={<License />} />
          <Route path="/guide" element={<Guide />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
