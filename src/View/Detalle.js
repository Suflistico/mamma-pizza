import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PizzaContext } from "../Context/PizzaContext";

const Detalle = () => {
  const { id } = useParams(); // funcion para obtener id de pizza
  const { pizzas } = useContext(PizzaContext);
  const navigate = useNavigate(); // para cambiar rutas

  // Buscar la pizza correspondiente en el contexto o en la lista de pizzas
  const pizza = pizzas.find(pizza => pizza.id === id);

  const handleNavigateHome = () => {
    navigate('/'); // Navegar al componente Home
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          {pizza && (
            <div className="card mt-4">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={pizza.img} alt={pizza.name} className="img-fluid rounded" style={{ maxHeight: '200px' }} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h2 className="card-title">{pizza.name}</h2>
                    <p className="card-text">{pizza.desc}</p>
                    <button onClick={handleNavigateHome} className="btn btn-primary">Volver al Home</button> 
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Detalle;
