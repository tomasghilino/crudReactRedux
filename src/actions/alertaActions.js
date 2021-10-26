import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from '../types';

// Muestra alerta
export function mostrarAlerta(alerta) {
  return (dispatch) => {
    dispatch(crearAlerta());
  };
}
const crearAlerta = (alerta) => ({
  type: MOSTRAR_ALERTA,
  payload: alerta,
});

// ocultar la alerta
export function ocultarAlertaAction() {
  return (dispatch) => {
    dispatch(ocultarAlerta());
  };
}

const ocultarAlerta = () => ({
  type: OCULTAR_ALERTA,
});
