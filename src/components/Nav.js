import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Container } from "react-bootstrap";
import { useContext } from "react";
import { PizzaContext } from "../Context/PizzaContext";

const CustomNavbar = () => {
  const {total}= useContext(PizzaContext)
  return (
    <Nav className="navbar bg-dark navbar-expanded" data-bs-theme="dark">
      <Container className="d-flex justify-content-center"> {/* Añade la clase "d-flex" y "justify-content-center" */}
        <Link className="nav-link text-light" to="/">Home</Link>    
        <Link className='btn btn-outline-primary' to="/cart">Cart{total}</Link>    
      </Container>
    </Nav>
  );
};

export default CustomNavbar;
