import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/HomePage";
import Menu from "../pages/menu";
import OrderPage from "../pages/OrderPage";

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/order" element={<OrderPage />}></Route>
    </Routes>
    </main>
  );
}

export default Main;