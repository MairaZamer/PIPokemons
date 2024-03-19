import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route, Routes } from "react-router-dom";

import './App.css';
import LandingPage from "./views/LandingPage/landingPage"
import HomePage from "./views/HomePage/homePage"
import DetailPage from "./views/DetailPage/detailPage"
import FormPage from "./views/FormPage/formPage"

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <LandingPage /> }/>
        <Route path='/home' element={ <HomePage /> } />
        <Route path='/detail/:id' element={<DetailPage /> } />
        <Route path='/form' element={<FormPage />} />
      </Routes>
    </>
  );
}

export default App;
