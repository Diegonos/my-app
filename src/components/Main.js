import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/HomePage";
import Menu from "../pages/Menu";
import BookingPage from "../pages/BookingPage";
import AboutPage from "../pages/AboutPage";

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
      </Routes>
    </main>
  );
}

export default Main;