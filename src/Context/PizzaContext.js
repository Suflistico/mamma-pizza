import { createContext, useState, useEffect } from "react";
import { useFetch } from "../ApiPizza/useFetch";

export const PizzaContext = createContext();
export const PizzasProvider = ({ children }) => {
    const [pizzas, setPizzas] = useState([]);
    const [cart, setCart] = useState([]);

    const { data, loading} = useFetch('/pizzas.json');
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
    
    const increaseQuantity = (pizzaId) => {
        const updatedCart = cart.map((item) => {
          if (item.id === pizzaId) {
            return { ...item, count: item.count + 1 };
          }
          return item;
        });
        setCart(updatedCart);
      };      
      const decreaseQuantity = (pizzaId) => {
        const updatedCart = cart.map((item) => {
          if (item.id === pizzaId) {
            return { ...item, count: item.count - 1 };
          }
          return item;
        });
        setCart(updatedCart);
      };          
    const total = cart.reduce((acc, item) => acc + (item.price * item.count), 0);

    const PizzasProviderValues={
        pizzas,
        cart,
        loading,
        setCart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        total
    }

    return (
        <PizzaContext.Provider value={PizzasProviderValues}>
            {children}
        </PizzaContext.Provider>
    )

}