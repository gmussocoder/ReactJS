import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import inicio from './Pages/Inicio';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
          <Navbar/>
      </Router>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          DESAFÍO N° 2 <br></br>
          Alumno: Guillermo Andrés Musso Rodríguez <br></br>
          e-Mail: gamussorodriguez@teco.com.ar <br></br>
          Móvil: 1130743868 <br></br>
        </a>
        <button type="button" className="btn btn-primary">Primary</button>
        <button type="button" className="btn btn-secondary">Secondary</button>
        <button type="button" className="btn btn-success">Success</button>
      </header>
    </div>
  );
}

export default App;
