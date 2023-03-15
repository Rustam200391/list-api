import React from 'react';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import Home from './pages/Home';
import EditUsers from './pages/EditUsers';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<EditUsers />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
