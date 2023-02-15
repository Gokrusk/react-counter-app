import espoch from "./images/logoico.png";

function App() {
  return (
    <div className="App">
      <div className="espoch-logo-contenedor">
        <img 
          className="espochLogo" 
          src={espoch} 
          alt="Logo ESPOCH" 
        />
      </div>
    </div>
  );
}

export default App;
