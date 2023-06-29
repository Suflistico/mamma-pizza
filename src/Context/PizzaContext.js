import { createContext, useState, useEffect } from "react";
import { useFetch } from "../ApiPizza/useFetch";

export const PizzaContext = createContext();
export const PizzasProvider = ({ children }) => {
    const [pizzas, setPizzas] = useState([]);
    const [cart, setCart] = useState([]);

    const { data, loading} = useFetch('/pizzas.json');
    console.log(data);
    useEffect(() => {
        if (data) {
            setPizzas(data);
        }
    }, [data]);
    const addToCart = (pizza) => {
        const findProductIndex = cart.findIndex((item) => item.id === pizza.id);
        const pruduct = {
            id: pizza.id,
            name: pizza.name,
            price: pizza.price,
            count: 1,
            desc: pizza.desc,
            img: pizza.img
        }
        if (findProductIndex >= 0) {
            cart[findProductIndex].count++;
            setCart([...cart]);
        } else { 
            setCart([...cart, pruduct]);
        }
    }
    const removeFromCart = (pizzaId) => {
        const updatedCart = cart.filter((item) => item.id !== pizzaId);
        setCart(updatedCart);
    };
    
    const total = cart.reduce((acc, item) => acc + (item.price * item.count), 0);

    const PizzasProviderValues={
        pizzas,
        cart,
        loading,
        setCart,
        addToCart,
        removeFromCart,
        total
    }

    return (
        <PizzaContext.Provider value={PizzasProviderValues}>
            {children}
        </PizzaContext.Provider>
    )

}