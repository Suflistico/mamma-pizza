import { Route, Routes } from 'react-router-dom';
import Home from "../View/Home";
import Detalle from "../View/Detalle";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />  
      <Route path="/pizza/:id" element={<Detalle />} /> {/* Nueva ruta con parámetro :id */}
    </Routes>
  );
};

export default AppRoutes;
