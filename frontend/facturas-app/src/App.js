import "./App.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import CrearFacturas from "./Crear-Facturas/CrearFacturas";
import { CButton, CContainer } from "@coreui/react";
import { useState } from "react";

function App() {
  document.title = "Tarea Leandro Santana";
  const [enviar, setEnviar] = useState(false);
  return (
    <div className="App">
      <CContainer>
        <CButton onClick={() => setEnviar(true)}>Crear Facturas</CButton>
      </CContainer>
      <CrearFacturas setEnviar={setEnviar} enviar={enviar} />
    </div>
  );
}

export default App;
