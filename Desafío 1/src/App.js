import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import inicio from './Pages/Inicio';
import Alumno from './alumno';
import Showproducto from './components/Itemcontent';
import { ShoppingCartOutlined } from '@material-ui/icons';
import { useEffect } from 'react';

function App() { //La función App es un componente, que llama a otro componente "hijo" llamado "alumno"
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
        <button type="button" className="btn btn-primary">Primary</button>
        <button type="button" className="btn btn-secondary">Secondary</button>
        <button type="button" className="btn btn-success">Success</button>
      </header>
      <main>
        <Showproducto />
      </main>
      <footer>
        <Alumno apellido="Musso Rodriguez" nombres="Guillermo Andrés" msisdn="+5491130743868" email="gamussorodriguez@teco.com.ar" />
      </footer>
    </div>
  );
}

export default App;