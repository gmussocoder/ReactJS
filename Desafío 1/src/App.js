import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import inicio from './Pages/Inicio';
import Alumno from './alumno';
import Showproducto from './components/Itemcontent';
import { SentimentDissatisfiedOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import { useEffect, useState } from 'react';
//Importación para Desafío 7:
import Customfetch from './utilities/Customfetch';

function App() { //La función App es un componente, que llama a otro componente "hijo" llamado "alumno"
//Fragmento de código agregado para el desafío 7:
  const [datos, setDatos] = useState([]);
  useEffect(() => {
  //Lo que debe hacer cuando el componente se haya montado
    Customfetch()
      .then(respuesta => setDatos(respuesta))
      .catch(error => console.log(error));
  }, []);
// Fin de FRagmento de código agregado para el desafío 7

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
           {/*Saco Showproducto para el desafío 7 y agrego las lineas que están debajo de este comentario: 
              <Showproducto /> */}
                       
          
      <ol>
      <>
        {
        
                <div>
                    <div>ID: {datos.id}</div>
                    <div>NOMBRE: {datos.name}</div>
                    <div>DISPOSITIVOS: {datos.devices}</div>
                    <div>PRECIO: {datos.cost}</div>
                </div>
           
        }
        </>
{/*
      {
        datos.map(item => 
          <>
            <li>{item.name}</li>
            <span>{item.devices}</span>
          </>
        )

      }
*/}
      </ol>
      </main>
      <footer>
        <Alumno apellido="Musso Rodriguez" nombres="Guillermo Andrés" msisdn="+5491130743868" email="gamussorodriguez@teco.com.ar" />
      </footer>
    </div>
  );
}

export default App;