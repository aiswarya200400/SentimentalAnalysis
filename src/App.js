import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Components/Pages/Home';

function App() {
  return (
    <div >
      <Home />
      
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App
