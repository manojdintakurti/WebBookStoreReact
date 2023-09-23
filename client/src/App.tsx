import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom"
import AppHeader from "./components/Header";
import AppFooter from './components/AppFooter';
import Home from './components/Home';
import AppCategory from "./components/AppCategory";
import ErrorPage from "./components/ErrorPage";
import UnderConstruction from "./components/UnderConstruction";

function App() {
  return (
      <Router basename="/SaiManojBookstoreReact">
          <AppHeader />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/categories" element={<AppCategory />} />
              <Route path="*" element={<ErrorPage />} />
              <Route path="/wishlist" element={<UnderConstruction />} />
              <Route path="/cart" element={<UnderConstruction />} />
              <Route path="/contactus" element={<UnderConstruction />} />
              <Route path="/ebooks" element={<UnderConstruction />} />
          </Routes>
          <AppFooter />
      </Router>
  );
}

export default App;
