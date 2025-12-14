function Nav() {
  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/booking">Booking</a></li>
      </ul>
      <img
        src={'/icon.png'}
        alt={'Little Lemon restaurant cuisine'}
      />
    </nav>
  );
}

export default Nav;