import React from 'react';
import {BrowserRouter as Router } from 'react-router-dom';
import AddClass from './components/addclass';

function App() {
  return (
    <Router>
    <div className="App">
      <AddClass/>
    </div>
    </Router>
  );
}

export default App;
