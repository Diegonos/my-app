function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/menu">Menu</a>
        </li>
        <li>
          <a href="/">Reservations</a>
        </li>
        <li>
          <a href="/">Order online</a>
        </li>
        <li>
          <a href="/">Login</a>
        </li>
      </ul>
      <img
        src={'/restaurantfood.jpg'}
        alt={'Little Lemon restaurant cuisine'}
      />
    </nav>
  );
}

export default Nav;