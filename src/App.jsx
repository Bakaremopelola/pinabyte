
import Home from './Components/Home';
import Projects from './Components/Projects';
import Services from './Components/Service';
import Team from './Components/Team';
import Blog from './Components/blog'
import ContactUs from './Components/ContactUs';
import "./App.css";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';




const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>

      
      <Route path="/" element={<Home/>} />
      <Route path="/Project" element={<Projects/>} />
      <Route path="/Service" element={<Services/>} />
      <Route path="/Team" element={<Team/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/ContactUs" element={<ContactUs/>} />
    
      </Routes>
      <Footer/>

    </div>
  )
}

export default App

