import React from 'react';
import Header from "./pages/Header/Header";
import Feed from './pages/Feed/Feed';
import './App.css';
import Sidebar from './pages/Sidebar/Sidebar';
import Footer from './pages/Footer/Footer';

function App() {
  return (
    <div>
      <div className="app">
        <Header />
        <div className="app__body">
          <Feed />
          <Sidebar/>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
