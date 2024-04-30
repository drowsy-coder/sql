import logo from './logo.svg';
import './App.css';
import Home from './home';
import Form from './form';
import { useState } from 'react';

function App() {

  const [route, setRoute] = useState('home');

  const navigator = (routeName) => {
    setRoute(routeName);
  }
  

  return (
    <div className="App">
      <nav>
        <button onClick={() => navigator("home")}>Home</button>
        <button onClick={() => navigator("form")}>Form</button>
      </nav>
      <div>
        {route === 'home' && <Home />}
        {route === 'form' && <Form />}
      </div>
    </div>
  );
}


export default App;
