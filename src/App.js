import "./App.css";
import { Testimonio } from "./componentes/Testimonio";
function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos</h1>
        <Testimonio
          nombre="Angelo Patrick"
          pais="Perú"
          imagen="patrick"
          tipo="png"
          cargo="Ingeniero de Sistemas"
          empresa="Unheval City"
          testimonio=" patrikc iajsodfjioasjd fajso jdf oasjdfo jasd"
        ></Testimonio>
        <Testimonio
          nombre="Josue Miguel"
          pais="Bolivia"
          imagen="patrick"
          tipo="png"
          cargo="Ingeniero Químico"
          empresa="Petro City"
          testimonio="Hola a <strong>PATRICK</strong> espero que se encuentren bien todos."
        ></Testimonio>
      </div>
    </div>
  );
}

export default App;
