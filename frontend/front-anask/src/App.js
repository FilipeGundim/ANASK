import React from 'react';
import Header from './components/header'
import Footer from './components/footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './components/utils/routes';

function App() {
  return (
    <div className="App">
      <Header />
      <Router  />
      <Footer />
    </div>
  );
}

export default App;
