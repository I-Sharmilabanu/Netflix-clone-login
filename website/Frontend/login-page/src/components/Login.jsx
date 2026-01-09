import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login(){

    const navigate=useNavigate();
    const[email,setemail]=useState("");
    const [pass,setpass]=useState("");
    const[error,seterror]=useState("")


    function handleemail(evt){
        setemail(evt.target.value)
    }
    function handlepass(evt){
        setpass(evt.target.value)
    }

    function check(){
        var logindetails=axios.post(`http://localhost:5000/login`,{"email":email,"password":pass})
        logindetails.then(function(data){
            
                        if(data.data === "successfull"){
                            seterror("")
                navigate("/dashboard")
            }else{
                seterror("invalid email or password")
            }
        })
    }
    return (
        <div className="min-h-screen bg-cover bg-center bg-no-repeat relative">
            <img
                src="https://www.azcostadelsol.com/wp-content/uploads/2022/07/840_560.jpeg"
                className="fixed top-0 left-0 w-full h-full object-cover"
            />

            <div className="fixed top-0 left-0 w-full h-full bg-black/70"></div>

            <div className="relative z-10 flex justify-center mt-10">
                <div
                    className="bg-black/50 p-10 rounded-lg w-full max-w-md text-white"
                
                >
                    <h2 className="text-3xl font-bold mb-6">Sign In</h2>

                    <input onChange={handleemail}
                        type="email"
                        placeholder="Email or mobile number"
                        className="w-full p-3 mb-4 bg-gray-800 rounded text-white outline-none"
                    
                        required
                        
                    />

                    <input onChange={handlepass}
                        type="password"
                        placeholder="Password"
                        className="w-full p-3 mb-6 bg-gray-800 rounded text-white outline-none"
                    
                        required
                        
                    />
                    {error && <p className="text-sm text-red-700 mb-3">{error}</p>}


                    <button onClick={check}
                        type="button"
                        className="w-full bg-red-600 py-3 rounded-md text-white font-semibold mb-4"
                    >
                        Sign In
                    </button>

                    <button className="w-full bg-gray-700 py-3 rounded-md text-white mb-2">
                        Use a sign-in code
                    </button>

                    <div className="text-center text-gray-400 my-4">OR</div>

                    <button className="w-full text-white text-sm mb-4 hover:underline">
                        Forgot password?
                    </button>

                    <div className="flex items-center text-gray-300 text-sm mb-4">
                        <input type="checkbox" className="mr-2" /> Remember me
                    </div>

                    <p className="text-gray-400 text-sm">
                        New to Netflix?{" "}
                        <span className="text-white cursor-pointer hover:underline">
                            Sign up now.
                        </span>
                    </p>

                    <p className="text-xs text-gray-500 mt-4">
                        This page is protected by Google reCAPTCHA to ensure you're not a bot.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;