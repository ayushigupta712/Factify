import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const PostAd = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    businessName: "",
    adLink: "",
    adImage: null,
    adSize: "Size 1",
    adDuration: 1,
  });

  const [totalCost, setTotalCost] = useState(0);
  const ratePerDay = 100; // Customize this rate as needed

  useEffect(() => {
    // Automatically update cost when duration changes
    setTotalCost(formData.adDuration * ratePerDay);
  }, [formData.adDuration]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: name === "adDuration" ? parseInt(value) : value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "image/gif", "image/webp", "video/mp4", "video/webm", "video/ogg", "video/quicktime", "video/x-msvideo"];

    if (file && !allowedTypes.includes(file.type)) {
      alert("Only image and video files are allowed!");
      e.target.value = ""; // Clear the file input
      return;
    }

    setFormData({ ...formData, adImage: file });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.businessName ||
      !formData.adLink ||
      !formData.adImage ||
      !formData.adSize ||
      !formData.adDuration
    ) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    console.log("Form Data:", formData);
    console.log("Total Cost: ₹", totalCost);

    // Navigate and pass formData and totalCost to payment page
    navigate("/adpay", {
      state: {
        formData,
        totalCost,
      },
    });
  };


  return (
    <div className="bg-[#121727] text-white min-h-screen">
      <Navbar />

      <div className="text-center pt-50 text-5xl font-bold text-white">
        Advertise Your Business with Factify
      </div>

      <p className="text-center px-6 sm:px-16 md:px-32 py-10 text-lg leading-relaxed text-gray-300">
        Promote your brand with Factify's powerful advertising solutions and
        unlock the potential to reach thousands of targeted customers...
      </p>

      <div className="text-center text-4xl font-bold mb-10 text-white">
        Get Started
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center space-y-6 bg-[#1C2331] p-12 rounded-xl mx-auto w-full max-w-lg shadow-2xl"
      >
        <label className="w-full text-left text-lg font-semibold text-white">
          Business Name
        </label>
        <input
          type="text"
          name="businessName"
          placeholder="Enter your business name"
          value={formData.businessName}
          onChange={handleChange}
          className="w-full p-3 rounded-md bg-[#243549] text-white hover:bg-[#2c3e50] transition-all duration-300"
          required
        />

        <label className="w-full text-left text-lg font-semibold text-white">
          Ad Link Redirection
        </label>
        <input
          type="url"
          name="adLink"
          placeholder="Enter ad redirection link"
          value={formData.adLink}
          onChange={handleChange}
          className="w-full p-3 rounded-md bg-[#243549] text-white hover:bg-[#2c3e50] transition-all duration-300"
          required
        />

        <label className="w-full text-left text-lg font-semibold text-white">
          Upload Ad Image
        </label>
        <input
          type="file"
          onChange={handleFileChange}
          accept="image/*,video/*"
          className="w-full p-3 rounded-md bg-[#243549] text-white cursor-pointer hover:bg-[#2c3e50] transition-all duration-300"
          required
        />


        <label className="w-full text-left text-lg font-semibold text-white">
          Select Ad Size
        </label>
        <select
          name="adSize"
          value={formData.adSize}
          onChange={handleChange}
          className="w-full p-3 rounded-md bg-[#243549] text-white hover:bg-[#2c3e50] transition-all duration-300"
        >
          <option>Size 1</option>
          <option>Size 2</option>
        </select>

        <label className="w-full text-left text-lg font-semibold text-white">
          Ad Duration (Days)
        </label>
        <input
          type="number"
          name="adDuration"
          min="1"
          max="50"
          value={formData.adDuration}
          onChange={handleChange}
          className="w-full p-3 rounded-md bg-[#243549] text-white hover:bg-[#2c3e50] transition-all duration-300"
          required
        />

        {/* Cost Display Section */}
        <div className="w-full text-left text-lg font-semibold text-white">
          Total Cost: <span className="text-green-400">₹{totalCost}</span>
        </div>

        <button
          type="submit"
          className="bg-blue-400 cursor-pointer hover:bg-blue-500 px-8 py-2 rounded-md font-bold text-white text-lg transition-all duration-300"
        >
          Submit
        </button>
      </form>

      <div className="h-24"></div>
      <Footer />
    </div>
  );
};

export default PostAd;
