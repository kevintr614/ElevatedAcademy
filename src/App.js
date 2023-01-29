import React, {useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "./style/global.css";
// import Header from './container/Header/Header';
// import Footer from './container/Footer/Footer';
import Homepage from './container/Homepage/Homepage';
import Courses from './container/Courses/Courses';

function App() {
    useEffect(() => {
        document.title = 'Elevated';
    });
  return (
    <BrowserRouter>
        {/* <Header/> */}
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/courses" element={<Courses/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
