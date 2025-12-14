import React from 'react';
import './Menu.css';

const Menu = () => {
  const dishes = [
    { name: "Margherita Pizza", ingredients: "Tomato, mozzarella, basil", price: "$12" },
    { name: "Spaghetti Carbonara", ingredients: "Spaghetti, pancetta, eggs, parmesan", price: "$14" },
    { name: "Greek Salad", ingredients: "Tomato, cucumber, olives, feta cheese, onion", price: "$10" },
    { name: "Grilled Salmon", ingredients: "Salmon, lemon, herbs", price: "$18" },
    { name: "Tiramisu", ingredients: "Mascarpone, coffee, ladyfingers, cocoa powder", price: "$8" },
  ];

  return (
    <div className="menu-page">
      <h1>Our Menu</h1>
      <ul className="menu-list">
        {dishes.map((dish, index) => (
          <li key={index} className="menu-item">
            <h2>{dish.name}</h2>
            <p>{dish.ingredients}</p>
            <p className="price">{dish.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
