import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wishlist from "./pages/Wishlist";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import About from "./pages/About";
import User from "./pages/User";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Navbar/Footer";
import Cart from "./pages/cart";
import 'bootstrap/dist/css/bootstrap.min.css';
import Error from "./pages/Error";
import 'font-awesome/css/font-awesome.min.css';


const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/profile" element={<User/>}/>
        <Route path="*" element={<Error/>} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
