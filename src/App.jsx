import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages.jsx/Login';
import Landing from './Pages.jsx/Landing';
import Register from './Pages.jsx/Register';
function App() {
  return (
    <BrowserRouter>
   
    <Routes>
     {/* <Route element = {<Sidebar />}  > */}
        <Route index element = {<Login />}/>
        <Route path = "/landing" element = {<Landing/>} />
         <Route path = "/register" element = {<Register/>} />
       {/* <Route path = "/toprated" element = {<Toprated/>} />
        <Route path = "/sglmovie" element = {<SglMovie/>} />
        <Route path = "/browse" element = {<Browse/>} /> */}
      {/* </Route> */}
    </Routes>
  
    </BrowserRouter>
 
  );
}

export default App;
