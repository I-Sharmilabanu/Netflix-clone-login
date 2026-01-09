import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="relative min-h-screen w-full">

      {/* Background Image */}
      <img
        src="https://www.azcostadelsol.com/wp-content/uploads/2022/07/840_560.jpeg"
        alt="bg"
        className="fixed top-0 left-0 w-full h-full object-cover -z-10 pointer-events-none"
      />

      {/* Overlay */}
      <div className="fixed top-0 left-0 w-full h-full bg-black/70 -z-10 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-40 flex flex-col justify-center items-center min-h-screen px-4 max-w-3xl mx-auto text-center">

        <h1 className="text-white text-4xl md:text-6xl font-extrabold">
          Unlimited movies, shows, and more.
        </h1>

        <p className="mt-6 text-white text-lg md:text-2xl">
          Starts at ₹149. Cancel at any time.
        </p>

        <p className="mt-3 text-white text-sm md:text-base">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="flex flex-col md:flex-row w-full mt-6 gap-4">
          <input
            type="email"
            placeholder="Email Address"
            className="bg-white/10 p-4 rounded-lg w-full outline-none text-white border border-white/30"
          />

          <Link to="/login" className="w-full md:w-auto">
            <button
              type="button"
              className="w-full bg-red-700 px-6 py-4 rounded-lg text-white font-semibold"
            >
              Get Started
            </button>
          </Link>
        </div>
      
      </div>
      
    </div>
  );
}

export default Home;
