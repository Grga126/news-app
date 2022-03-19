import './App.css';
import Login from "./html/login";

import {  BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
