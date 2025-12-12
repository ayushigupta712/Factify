import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import useNavigate hook from React Router

const Login = () => {
  //Setting Structure
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLogin = async () => {
    console.log("Sending request to backend...");

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log("Response from backend:", data);

      if (data.success) {
        //store user data in local storage
        localStorage.setItem("userData", JSON.stringify(data.user));
        console.log("Login successful!");
        navigate("/home"); // Redirect to Home page
      } else {
        alert("Invalid Credentials!");
        console.log("Invalid Credentials!"); // Log to console
      }
    } catch (error) {
      console.error("Error logging in:", error.message);
    }
  };

  //HTML CSS Code
  return (
    <>
      <div className="flex flex-col w-full h-[100vh] bg-no-repeat justify-center items-center bg-[url(https://images.pexels.com/photos/8940374/pexels-photo-8940374.jpeg)] bg-cover bg-radial backdrop-blur-xl">
        <div className="mx-auto blur-none bg-white flex h-85 w-80 flex-col items-center rounded-xl border">
          <div className="my-10 text-3xl font-extrabold">FACTIFY</div>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="my-0.5 flex w-55 items-center rounded-sm border px-2 py-2 text-xs"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="my-0.5 flex w-55 items-center rounded-sm border px-2 py-2 text-xs"
          />
          <button
            onClick={handleLogin}
            className="my-3 w-55 cursor-pointer rounded-md bg-blue-500 py-1 text-sm font-bold text-white"
          >
            Log in
          </button>
          <div className="my-2 cursor-pointer text-sm">Forgot Password?</div>
        </div>
        <div className="mx-auto bg-white my-2 flex h-15 w-80 items-center justify-center rounded-xl border">
          Don't have an account?
          <div className="ml-1 cursor-pointer text-sm font-medium text-blue-500">
            <Link to={"/register"}>Sign up</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
