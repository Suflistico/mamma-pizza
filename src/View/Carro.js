import React, { useContext } from 'react';
import { PizzaContext } from "../Context/PizzaContext";

const Carro = () => {
    const { Carro, increment, decrement, total } = useContext(PizzaContext);
    return (
        <div className='container'>
            <h1>Carro total: {total}</h1>
            

            {Carro.map((item, index) => (
                <div key={index}>
                    <div className='card mb-3'>
                        <div className='col-md-4' >

                        </div>
                        <h3 className='display-3'>{item.name}</h3>
                        <p>{item.price}</p>
                        <p>{item.desc}</p>
                        <div className='d-flex'>
                        <button className='btn btn-primary ms-2'  onClick={() => increment(index)}>+</button>
                        <span > {item.count}</span>
                        <button className='btn btn-primary ms-2' onClick={() => decrement(index)}>-</button>
                        </div>
                      
                    </div>

                </div>
            ))}

        </div>

    )
}
export default Carro;