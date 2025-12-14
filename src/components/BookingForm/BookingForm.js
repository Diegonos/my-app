import React, { useState } from "react";

function BookingForm({ availableTimes, dispatchAvailableTimes }) {
  const [resDate, setResDate] = useState("");
  const [resTime, setResTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ resDate, resTime, guests, occasion });
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setResDate(selectedDate);
    dispatchAvailableTimes({ date: selectedDate });
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Table booking form">
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={resDate}
        onChange={handleDateChange}
        aria-required="true"                // campo obbligatorio
        aria-label="Reservation date"       // etichetta ARIA
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={resTime}
        onChange={(e) => setResTime(e.target.value)}
        aria-required="true"
        aria-label="Reservation time"
      >
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        aria-required="true"
        aria-label="Number of guests"
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        aria-label="Occasion of reservation"
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input
        type="submit"
        value="Make Your reservation"
        aria-label="Submit reservation"
      />
    </form>
  );
}

export default BookingForm;
