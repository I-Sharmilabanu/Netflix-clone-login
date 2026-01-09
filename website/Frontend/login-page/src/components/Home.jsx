import React from "react";
import { Link } from "react-router-dom";
function Home() {
  
  return (
    <div className="relative w-full h-full">

    
      <img
        src="https://www.azcostadelsol.com/wp-content/uploads/2022/07/840_560.jpeg"
        className=" fixed top-0 left-0 w-full h-full object-cover"
        
      />

      
      <div className="fixed top-0 left-0 w-full h-full bg-black/70"></div>
      <div className="relative z-20 flex flex-col justify-center items-center min-h-screen px-4  max-w-3xl">
        <h1 className="text-white text-4xl md:text-6xl font-extrabold ">
          Unlimited movies, shows, and more.
        </h1>

        <p className="mt-6 text-white text-lg md:text-2xl  left-32">
          Starts at ₹149. Cancel at any time.
        </p>

        <p className="mt-3 text-white text-sm md:text-base">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex flex-row justify-between items-center w-full mt-4 gap-3">
        <input type="email" placeholder="Email Address" className="bg-white/10  p-3 rounded-lg w-full hover:outline-blue-900 shadow-lg outline-none text-white"
          />
        <Link to="/login">  <button className="bg-red-700   rounded-lg text-white ">Get started</button>
        </Link>

      </div></div>
    </div>
  );
}
export default Home;