import { Route, Routes } from 'react-router-dom';
import Home from "../View/Home";
import Detalle from "../View/Detalle";
import DetalleCar from "../components/DetalleCar"; 

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pizza/:id" element={<Detalle />} />       
      <Route path="/detalle-car" element={<DetalleCar />} />  
    </Routes>
  );
};

export default AppRoutes;
