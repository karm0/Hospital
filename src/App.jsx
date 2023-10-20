
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import About from "./page/About";
import Home from "./page/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OurTeam from "./page/OurTeam";
import Faq from "./page/Faq";
import BookingPage from "./page/BookingPage";
import Error from "./page/Error";
import Login from "./page/Login"
import ContactUs from "./page/ContactUs";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="OurTeam" element={<OurTeam />} />
        <Route path="faq" element={<Faq />} />
        <Route path="booking" element={<BookingPage />} />
        <Route path="error" element={<Error />} />
        <Route path="login" element={<Login />} />
        <Route path="contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
