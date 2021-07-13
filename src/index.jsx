import React from 'react';
import ReactDOM from 'react-dom';

// Nuevo componente Title
function Title(props) {
  return <h1>{props.texto}</h1>;
}

function App() {
  // Uso del componente Title con el valor "Hola Mundo"
  return (
    <>
      <Title texto="Hola Mundo!!"/>
      <Title texto="Hello Word!!"/>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);