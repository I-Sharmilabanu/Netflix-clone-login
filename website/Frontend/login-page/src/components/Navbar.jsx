import { Link, useLocation } from "react-router-dom";

function Navbar() { 
  const location = useLocation();
  const hideItems =
  location.pathname === "/login" ||
  location.pathname === "/dashboard";

  

  return (
    <nav className="absolute top-0 left-0 w-full p-4 flex justify-between items-center z-20">
      
      <Link to="/">
      <img
      src="https://cdn-icons-png.flaticon.com/128/5977/5977590.png"
          className="w-24 md:w-32 cursor-pointer"
          alt="logo"/>
        
      </Link>

      
    {!hideItems &&(
        <div className="flex items-center gap-4">
          <select className="bg-black/10 text-white px-3 py-1 rounded  text-white">
            <option>English</option>
            <option>Hindi</option>
            <option>Tamil</option>
          </select>

          <Link to="/login">
            <button className="bg-red-600 px-4 py-1 rounded text-white">
              Sign in
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;