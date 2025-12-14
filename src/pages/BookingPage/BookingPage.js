import React from "react";
import BookingForm from "../../components/BookingForm/BookingForm";
import "./BookingPage.css";

const BookingPage = ({ availableTimes, dispatchAvailableTimes }) => {
  return (
    <div className="booking-page">
      <h1>Book a table</h1>
      <BookingForm
        availableTimes={availableTimes}
        dispatchAvailableTimes={dispatchAvailableTimes} 
      />
    </div>
  );
};

export default BookingPage;
