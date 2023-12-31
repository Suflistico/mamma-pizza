import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Container } from 'react-bootstrap';
import { useContext } from 'react';
import { PizzaContext } from '../Context/PizzaContext';

const CustomNavbar = () => {
  const { total } = useContext(PizzaContext);

  return (
    <Nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" data-bs-theme="dark">
      <Container className="d-flex justify-content-between">
        <Link className="text-light" to="/">Home</Link>
        <h3 className='text-light'>Pizzeria Mamma Mia</h3>
        <div className="text-light">
          <Link to="/detalle-car" className="btn btn-outline-primary bg-primary text-light">
            Total Carro $ {total}
          </Link>
        </div>
      </Container>
    </Nav>
  );
};

export default CustomNavbar;
