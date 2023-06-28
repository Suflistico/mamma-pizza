import React, { useContext } from 'react';
import { PizzaContext } from "../Context/PizzaContext";
import CardPizza from "../components/CardPizza";
const Home = () => {

    const { pizzas } = useContext(PizzaContext);
    return (
        <div className="">
            {pizzas && (
                <div className="row gy-2">
                    {pizzas.map((pizza) => (
                        <div className="col-sm-4" key={pizza.id}>
                            <CardPizza pizza={pizza} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Home;