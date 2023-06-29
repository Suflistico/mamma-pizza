import React, { useContext } from 'react';
import { PizzaContext } from "../Context/PizzaContext";
import { useNavigate } from 'react-router-dom';

const CardPizza = ({ pizza }) => {
  const { addToCart, removeFromCart } = useContext(PizzaContext);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/pizza/${pizza.id}`);
  };

  const cardStyle = {
    width: '300px', 
    height: '400px',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    transition: '0.3s',
    borderRadius: '5px',
    margin: '0px'
  };

  const imgStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  };

  return (
    <div className="mt-3"> 
      <div className='card' style={cardStyle}>
        <img style={imgStyle} src={pizza.img} alt={pizza.name} />
        <div className='card-body'>
          <h3 className='display-3' style={{ fontSize: '18px' }}>{pizza.name}</h3>         
          <p style={{ fontSize: '16px' }}>Precio: ${pizza.price}</p>
          <div className='d-flex justify-content-between'>
            <button onClick={() => addToCart(pizza)} className='btn btn-primary btn-sm border rounded mr-2'>Añadir al Carro</button>          
            <button onClick={() => removeFromCart(pizza.id)} className='btn btn-primary btn-sm border rounded mr-2'>Eliminar del Carro</button>
            <button onClick={handleNavigate} className='btn btn-primary btn-sm border rounded'>Detalle pizza</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;