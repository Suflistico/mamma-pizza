import { Route, Routes } from 'react-router-dom';
import Home from "../View/Home";

import Carro from "../View/Carro";
const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />            
            <Route path="/cart" element={<Carro />} />            
        </Routes>
    )
}
export default AppRoutes;   