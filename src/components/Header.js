
function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__text">
          <h1>Little Lemon</h1>
          <p>
            Welcome to Little Lemon, where we serve fresh,
          </p>
          <p>
          delicious, and
            authentic cuisine in the heart of the city. 
          </p>
          <p>
            Come enjoy our
            signature dishes and cozy atmosphere!
          </p>
        </div>
        <div className="header__image-container">
          <img
            src="/restaurantfood.jpg"
            alt="Little Lemon restaurant cuisine"
            className="header__image"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;