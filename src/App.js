import React from 'react';
import Header from './Header';
import ChefProfile from './ChefProfile';
import About from './About';
import Contact  from './Contact';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Pakistani from './components/Pakistani';
import Chinese from './components/Chinese';
import Thai from './components/Thai';
import Drinks from './components/Drinks';
import Italian from './components/Italian';
import Salad from './components/Salad';
import { BrowserRouter , Routes, Route  } from 'react-router-dom';
import NotFound from './NotFound';
import  Home  from "./imageslider/Home";
import './style.css';
import Footer from './Footer';
import Foodlist from './components/Foodlist';
const App = (props) => {

  return (
    <div className="App my-5">
       {/* <button
  type="button"
  className="btn btn-lg btn-danger"
  data-bs-toggle="popover"
  data-bs-title="Popover title"
  data-bs-content="And here's some amazing content. It's very engaging. Right?"
>
  Click to toggle popover
</button> */}

      <BrowserRouter>
      <Header />
      <ChefProfile />
      <Navbar />
      
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/chef-iftikhar" element={<Home/>} />
          <Route path="/pakistani" element={<Pakistani />} />
          <Route path="/chinese" element={<Chinese />} />
            <Route path="/thai" element={<Thai />} />
            <Route path="/italian" element={<Italian />} />
            <Route path="/drinks" element={<Drinks />} />
            <Route path="/salad" element={<Salad />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/foodlist" element={<Foodlist/>} />
            <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    
    </div>
  )

};


export default App;

