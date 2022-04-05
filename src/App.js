import './App.css';
import Login from "./html/login";
import Signin from "./html/signin";
import Nav from './html/nav';
import Dashboard from "./html/dashboard";
import Allnews from "./html/allnews";
import Addnews from "./html/addnews";
import Yournews from './html/yournews';
import {  BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/nav" element={<Nav/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path= "/allnews" element= {<Allnews/>}/>
        <Route path="/addnews" element= {<Addnews/>}/>
        <Route path="/yournews" element= {<Yournews/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
