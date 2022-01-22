/*Los componentes siempre deben comenzar con una letra mayuscula*/
function Alumno(props) {
    return (
      <> {/*Esta etiqueta de React siempre debe estar al principio y al final*/} 
        {/*
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            DESAFÍO N° 3 <br></br>
            Alumno: Guillermo Andrés Musso Rodríguez <br></br>
            e-Mail: gamussorodriguez@teco.com.ar <br></br>
            Móvil: 1130743868 <br></br>
          </a>
        */}
        <p>Apellido: {props.apellido}</p>
        <p>Nombres: {props.nombres}</p>
        <p>Móvil: {props.msisdn}</p>
        <p>e-Mail: {props.email}</p>
      </> //Final de etiqueta React <>
    );
}
export default Alumno;