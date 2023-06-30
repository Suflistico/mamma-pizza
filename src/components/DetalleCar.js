import React, { useContext } from 'react';
import { PizzaContext } from '../Context/PizzaContext';
import { useNavigate } from 'react-router-dom';

const DetalleCar = () => {
  const { cart, total, increaseQuantity, decreaseQuantity } = useContext(PizzaContext);
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate('/');
  };

  const handleIncreaseQuantity = (pizzaId) => {//fucion para agregar mas unidades de pizza para llevarlo al archivo PizzaContext
    increaseQuantity(pizzaId);
  };

  const handleDecreaseQuantity = (pizzaId) => {//funcion contraria para descontar pizza y valor
    decreaseQuantity(pizzaId);
  };

  return (
    <div className="container mt-5">
      <h2>Detalle del Carrito de Compra</h2>
      {cart.length > 0 ? (
        <div>
          <table className="table mt-4">
            <thead>
              <tr>
                <th>Pizza</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((pizza) => (
                <tr key={pizza.id}>
                  <td>
                    <i className="fas fa-pizza-slice" /> {pizza.name}
                  </td>
                  <td>
                    <button onClick={() => handleDecreaseQuantity(pizza.id)}>-</button>
                    {pizza.count}
                    <button onClick={() => handleIncreaseQuantity(pizza.id)}>+</button>
                  </td>
                  <td>${pizza.price}</td>
                  <td>${pizza.price * pizza.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3>Total: ${total}</h3>
        </div>
      ) : (
        <p>No hay pizzas agregadas al Carro</p>
      )}
      <button onClick={handleNavigateHome} className="btn btn-primary">Volver al Home</button>
    </div>
  );
};

export default DetalleCar;
