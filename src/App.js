import './App.css';
import Login from "./html/login";
import Signin from "./html/signin";
import Nav from './html/nav';
import {  BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/nav" element={<Nav/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
