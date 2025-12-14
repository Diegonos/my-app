function Footer() {

    return (
      <footer className="footer">
        <div className="footer__container">

        {/* Colonna 1 – Logo */}
        <div className="footer__col">
          <img
            src="/footerlogo.png"
            alt="Little Lemon restaurant"
            className="footer__logo"
          />
        </div>

        {/* Colonna 2 – Navigazione */}
        <div className="footer__col">
          <h4>Navigation</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/booking">Booking</a></li>
          </ul>
        </div>

        {/* Colonna 3 – Contact */}
        <div className="footer__col">
          <h4>Contact Us</h4>
          <p>123 Lemon Street</p>
          <p>Chicago, IL</p>
          <p>+1 (555) 123-4567</p>
          <p>
            <a href="mailto:info@littlelemon.com">
              info@littlelemon.com
            </a>
          </p>
        </div>

        {/* Colonna 4 – Social */}
        <div className="footer__col">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </div>

      </div>
      </footer>
  );
}

export default Footer;