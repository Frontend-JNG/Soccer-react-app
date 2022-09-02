import Navbar from "./components/Navbar";
import "./App.css";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Leagues from "./components/Leagues";
import ContactForm from "./contactForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Standings from "./components/Standings";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <div className="content">
          <Routes>
            <Route path="/" exact element={Leagues} />
            <Route path="/Standings" element={Standings} />
            <Route path="/contactForm" element={ContactForm} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
