import React, { useState } from "react";
import {
  CButton,
  CCallout,
  CCol,
  CContainer,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
  CRow,
} from "@coreui/react";
import { PostFacturas } from "./services/services";

export default function CrearFacturas({ enviar, setEnviar }) {
  const [tipo, setTipo] = useState("");
  const [apellido, setApellido] = useState("");
  const [nombre, setNombre] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [cedula, setCedula] = useState("");
  const [tipoPago, setTipoPago] = useState("");
  const [numeroFactura, setNumeroFactura] = useState("");
  const [itemsAlbum, setItemsAlbum] = useState("");
  const [itemsAnio, setItemsAnio] = useState("");
  const [itemsCantidad, setItemsCantidad] = useState("");
  const [itemsPrecio, setItemsPrecio] = useState("");
  const [itemsArtista, setItemsArtista] = useState("");
  const [interes, setInteres] = useState([]);
  const clienteD = {
    cliente: {
      tipo: tipo,
      apellido: apellido,
      nombre: nombre,
      ciudad: ciudad,
      cedula: cedula,
      item: [
        {
          album: itemsAlbum,
          anio: itemsAnio,
          cantidad: itemsCantidad,
          precio: itemsPrecio,
        },
      ],
      tipodepago: tipoPago,
      nroFactura: numeroFactura,
      intereses: [interes],
    },
  };
  const handleSubmit = async () => {
    console.log(clienteD);
    try {
      await PostFacturas(clienteD);
    } catch (error) {}
  };
  return (
    <div>
      <CContainer>
        <CModal
          fullscreen="xxl"
          visible={enviar}
          onClose={() => setEnviar(false)}
        >
          <CModalHeader>
            <CModalTitle className="mx-2">Crear nueva factura</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CCallout color="secondary">
              <CRow className="mb-2 justify-content-center mx-auto">
                <CFormLabel>Cliente:</CFormLabel>
                <CCol xs="auto">
                  <CFormLabel>Tipo:</CFormLabel>
                </CCol>
                <CCol xs="auto">
                  <CFormInput onChange={(e) => setTipo(e.target.value)} />
                </CCol>
              </CRow>
              <CRow className="mb-2 justify-content-center mx-auto">
                <CCol xs="auto">
                  <CFormLabel>Apellido:</CFormLabel>
                </CCol>
                <CCol xs="auto">
                  <CFormInput onChange={(e) => setApellido(e.target.value)} />
                </CCol>
              </CRow>
              <CRow className="mb-2 justify-content-center mx-auto">
                <CCol xs="auto">
                  <CFormLabel>Nombre:</CFormLabel>
                </CCol>
                <CCol xs="auto">
                  <CFormInput onChange={(e) => setNombre(e.target.value)} />
                </CCol>
              </CRow>
              <CRow className="mb-2 justify-content-center mx-auto">
                <CCol xs="auto">
                  <CFormLabel>Ciudad:</CFormLabel>
                </CCol>
                <CCol xs="auto">
                  <CFormInput onChange={(e) => setCiudad(e.target.value)} />
                </CCol>
              </CRow>
              <CRow className="mb-2 justify-content-center mx-auto">
                <CCol xs="auto">
                  <CFormLabel>Cedula :</CFormLabel>
                </CCol>
                <CCol xs="auto">
                  <CFormInput onChange={(e) => setCedula(e.target.value)} />
                </CCol>
              </CRow>
            </CCallout>
            <CCallout color="info">
              <CRow>
                <CFormLabel>Otros:</CFormLabel>
              </CRow>
              <CRow>
                <CCol>
                  <CFormLabel>Tipo de Pago:</CFormLabel>
                </CCol>
                <CCol className="justify-content-center mx-auto">
                  <CFormSelect
                    onChange={(e) => {
                      setTipoPago(e.target.value);
                    }}
                  >
                    <option>Seleccione el tipo de Pago</option>
                    <option value="Contado">Contado</option>
                    <option value="Diferido">Diferido</option>
                    <option value="Cheques">Cheques</option>
                  </CFormSelect>
                </CCol>
              </CRow>
              <CRow>
                <CFormLabel>Item:</CFormLabel>
                <CCallout>
                  <CRow className="mb-2 justify-content-center mx-auto">
                    <CCol xs="auto">
                      <CFormLabel>Album:</CFormLabel>
                    </CCol>
                    <CCol xs="auto">
                      <CFormInput
                        onChange={(e) => setItemsAlbum(e.target.value)}
                      />
                    </CCol>
                  </CRow>
                  <CRow className="mb-2 justify-content-center mx-auto">
                    <CCol xs="auto">
                      <CFormLabel>Año:</CFormLabel>
                    </CCol>
                    <CCol xs="auto">
                      <CFormInput
                        onChange={(e) => setItemsAnio(e.target.value)}
                      />
                    </CCol>
                  </CRow>
                  <CRow className="mb-2 justify-content-center mx-auto">
                    <CCol xs="auto">
                      <CFormLabel>Cantidad:</CFormLabel>
                    </CCol>
                    <CCol xs="auto">
                      <CFormInput
                        onChange={(e) => setItemsCantidad(e.target.value)}
                      />
                    </CCol>
                  </CRow>
                  <CRow className="mb-2 justify-content-center mx-auto">
                    <CCol xs="auto">
                      <CFormLabel>Precio:</CFormLabel>
                    </CCol>
                    <CCol xs="auto">
                      <CFormInput
                        onChange={(e) => setItemsPrecio(e.target.value)}
                      />
                    </CCol>
                  </CRow>
                </CCallout>
              </CRow>
              <CRow>
                <CCol xs="auto">
                  <CFormLabel>Numero de factura:</CFormLabel>
                </CCol>
                <CCol xs="auto">
                  <CFormInput
                    onChange={(e) => setNumeroFactura(e.target.value)}
                  />
                </CCol>
              </CRow>
              <CRow>
                <CFormLabel>Interes:</CFormLabel>
                <CFormInput onChange={(e) => setInteres(e.target.value)} />
              </CRow>
            </CCallout>
            <CButton onClick={() => handleSubmit()}>Enviar</CButton>
          </CModalBody>
        </CModal>
      </CContainer>
    </div>
  );
}
