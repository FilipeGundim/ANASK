import React from 'react';
import Header from './components/header'
import Footer from './components/footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './components/utils/routes';

function App() {
  return (
    <div className="App">
      <Header id = {1001} />
      <Router id = {1001} />
      <Footer />
    </div>
  );
}

export default App;
