import { NavLink, Link } from 'react-router-dom';

function Navbar() {
  const getLinkStyles = ({ isActive }) => {
    const base = "no-underline cursor-pointer transition-all duration-300 px-4 py-2 rounded-2xl font-medium";
    
    return isActive 
      ? `${base} bg-red-100 text-[#b91c1c]` 
      : `${base} text-[#333] hover:text-[#FF3B3B]`;
  };

  return (
    <nav className="flex justify-between items-center py-5 px-[60px] bg-red-50 border-b border-gray-200">

      <Link to="/" className="text-[#FF3B3B] font-bold text-2xl no-underline">
        Sanjeeva
      </Link>

      <ul className="flex gap-[15px] list-none p-0 m-0 items-center">
        <li>
          <NavLink to="/" className={getLinkStyles}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/search" className={getLinkStyles}>
            Search Blood
          </NavLink>
        </li>
        <li>
          <NavLink to="/emergency" className={getLinkStyles}>
            Emergency
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" className={getLinkStyles}>
            Dashboard
          </NavLink>
        </li>
      </ul>

      <Link to="/emergency" className="bg-[#D92121] text-white no-underline py-2.5 px-[18px] rounded-lg cursor-pointer font-semibold hover:bg-[#b91c1c] transition-colors">
        SOS Request
      </Link>

    </nav>
  );
}

export default Navbar;