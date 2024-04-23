import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages.jsx/Login';
import Landing from './Pages.jsx/Landing';
import Register from './Pages.jsx/Register';
import Navigation from './Pages.jsx/Navigationpage';
import CallingPage from './Pages.jsx/CallingPage';
import TelecallerPage from './Pages.jsx/Telecallerpage';
import TelecallerPopup from './Pages.jsx/TelecallerPop';
import LeadDetailPage from './Pages.jsx/LeadDetailpage';

function App() {
  return (
    <BrowserRouter>
   
    <Routes>
     {/* <Route element = {<Sidebar />}  > */}
        <Route index element = {<Navigation />}/>
        <Route path = "/landing" element = {<Landing/>} />
         <Route path = "/register" element = {<Register/>} />
       <Route path = "/telecaller" element = {<TelecallerPage/>} />
         <Route path = "/login" element = {<Login/>} />
        <Route path = "/calling" element = {<CallingPage/>} />
        <Route path = "/popup" element = {<TelecallerPopup/>} />
        <Route path = "/details" element = {<LeadDetailPage/>} />
      {/* </Route> */}
    </Routes>
  
    </BrowserRouter>
 
  );
}

export default App;
