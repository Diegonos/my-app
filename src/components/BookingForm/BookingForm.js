import React, { useState, useEffect } from "react";

function BookingForm({ availableTimes, dispatchAvailableTimes }) {
  const [resDate, setResDate] = useState("");
  const [resTime, setResTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  // Stato per tenere traccia se il form è valido
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ resDate, resTime, guests, occasion });
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setResDate(selectedDate);
    dispatchAvailableTimes({ date: selectedDate });
  };

  // --- Step 2: Client-side validation ---
  useEffect(() => {
    // Il form è valido se:
    // - data selezionata
    // - ora selezionata
    // - numero ospiti tra 1 e 10
    // - occasione selezionata
    const valid =
      resDate !== "" &&
      resTime !== "" &&
      guests >= 1 &&
      guests <= 10 &&
      occasion !== "";
    setIsFormValid(valid);
  }, [resDate, resTime, guests, occasion]); // si aggiorna ad ogni cambio dei campi

  return (
    <form onSubmit={handleSubmit} aria-label="Table booking form">
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={resDate}
        onChange={handleDateChange}
        aria-required="true"
        aria-label="Reservation date"
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={resTime}
        onChange={(e) => setResTime(e.target.value)}
        aria-required="true"
        aria-label="Reservation time"
        required
      >
        <option value="">Select a time</option>
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
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        aria-label="Occasion of reservation"
        required
      >
        <option value="">Select occasion</option>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      {/* Bottone submit disabilitato se il form non è valido */}
      <input
        type="submit"
        value="Make Your reservation"
        aria-label="Submit reservation"
        disabled={!isFormValid} // disabilitato finché il form non è valido
      />
    </form>
  );
}

export default BookingForm;
