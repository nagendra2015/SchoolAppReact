import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Footer from "./components/Footer";

import { Helmet } from "react-helmet";


// import Home from './components/Home';
// import About from './components/About';
// import Online from './components/Online';
// import Offline from './components/Offline';
// import Contact from './components/Contact';
// import Test from './components/Test';
// import Navbarmenu from './components/menu/Navbarmenu';

import Mymenu from "./components/menu/Mymenu";
import { faWindowClose } from "@fortawesome/fontawesome-free-solid";


function App() {




  return (
    <div>
      <Helmet>
        <title>
          Join the Best Preschool and Daycare in India : Ragersville
        </title>
      </Helmet>

      <Mymenu></Mymenu>

      {/* <Router basename="/">

<Navbarmenu />
        
         <Routes>   
          <Route exact path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Online" element={<Online/>}/>
          <Route path="/Offline" element={<Offline/>}/>
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Test" element={<Test/>} />
          
         </Routes>

      </Router> */}
      <Footer></Footer>
    </div>
  );
}
export default App;
