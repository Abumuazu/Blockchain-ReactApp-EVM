import './App.css';
import Home from './Pages/Home/Home';
import Transaction from './Pages/Transaction/Transaction';
import * as React from 'react'
import {Routes,  Route, Link} from 'react-router-dom'


function App() {
  return (
    <div className="App">
 <Transaction />
    </div>
  );
}

export default App;
