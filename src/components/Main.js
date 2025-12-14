import { useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import Menu from "../pages/Menu/Menu";
import BookingPage from "../pages/BookingPage/BookingPage";
import AboutPage from "../pages/AboutPage/AboutPage";

export const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

export const updateTimes = (state, action) => {
  const selectedDate = action.date;
  console.log("Selected date:", selectedDate);

  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/menu" element={<Menu />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatchAvailableTimes={dispatch} // passiamo il dispatch
            />
          }
        />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </main>
  );
}

export default Main;
