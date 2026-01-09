import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  // Hide language & sign-in on login AND dashboard
  const hideItems =
    location.pathname === "/login" ||
    location.pathname === "/dashboard";

  return (
    <nav className="absolute top-0 left-0 w-full px-6 py-4 flex justify-between items-center z-50">

      {/* Logo */}
      <Link to="/" className="">
        <img
          src="https://cdn-icons-png.flaticon.com/128/5977/5977590.png"
          alt="logo"
          className="w-24 md:w-32"
        />
      </Link>

      {/* Language + Sign In */}
      {!hideItems && (
        <div className="flex items-center gap-4">
          <select className="bg-black/40 text-white px-3 py-1 rounded outline-none">
            <option>English</option>
            <option>Hindi</option>
            <option>Tamil</option>
          </select>

          <Link to="/login">
            <button className="bg-red-600 px-4 py-1 rounded text-white font-medium">
              Sign in
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
