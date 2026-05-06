function Navbar() {
  return (
    <nav className="navbar">

      <h2 className="logo">
        Sanjeeva
      </h2>

      <ul className="nav-links">
        <li>Home</li>
        <li>Search Blood</li>
        <li>Emergency</li>
      </ul>

      <button className="nav-btn">
        SOS Request
      </button>

    </nav>
  );
}

export default Navbar;