import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    username: "",
  });

  const [error, setError] = useState(null); // To handle errors
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error message

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data.message); // "User registered successfully"
        alert("Registration successful! Please log in.");
        navigate("/"); // Redirect to login page
      } else {
        setError(data.error);
        console.error("Error:", data.error);
      }
    } catch (error) {
      setError("Failed to connect to server. Try again later.");
      console.error("Request error:", error);
    }
  };

  return (
    <>
      <div className="mx-auto mt-50 flex w-80 flex-col items-center rounded-xl border">
        <div className="mt-10 mb-4 text-3xl font-extrabold">FACTIFY</div>
        <div className="mx-4 mb-4 flex justify-center font-bold">
          <center>Sign up to see photos and videos from your friends.</center>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="my-0.5 flex w-55 items-center rounded-sm border px-2 py-2 text-xs"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="my-0.5 flex w-55 items-center rounded-sm border px-2 py-2 text-xs"
            required
          />
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="my-0.5 flex w-55 items-center rounded-sm border px-2 py-2 text-xs"
            required
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="my-0.5 flex w-55 items-center rounded-sm border px-2 py-2 text-xs"
            required
          />
          <button
            type="submit"
            className="my-3 mb-5 w-55 cursor-pointer rounded-md bg-blue-500 py-1 text-sm font-bold text-white"
          >
            Sign up
          </button>
        </form>
      </div>
      <div className="mx-auto my-2 flex h-15 w-80 items-center justify-center rounded-xl border">
        Have an account?
        <div className="ml-1 cursor-pointer text-sm font-medium text-blue-500">
          <Link to="/">Log in</Link>
        </div>
      </div>
    </>
  );
};

export default Register;
