import { Alert as BootstrapAlert } from 'react-bootstrap';

const Alerta = ({ mensaje, variante }) => {
  return mensaje ? <BootstrapAlert variant={variante}>{mensaje}</BootstrapAlert> : null;
};

export default Alerta;
