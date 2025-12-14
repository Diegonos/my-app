import { initializeTimes, updateTimes } from "../Main";

describe("BookingForm reducer functions", () => {

  test("initializeTimes should return the default available times", () => {
    const times = initializeTimes();
    expect(times).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
  });

  test("updateTimes should return the same value for now", () => {
    const currentState = ["17:00", "18:00", "19:00"];
    const action = { date: "2025-12-25" };

    const newState = updateTimes(currentState, action);

    // Al momento updateTimes ritorna sempre la stessa lista fissa
    expect(newState).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
  });

});