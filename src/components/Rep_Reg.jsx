import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const ReporterRegistration = () => {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    dob: "",
    documentId: null,
    reporterId: null,
    organisation: "",
    experience: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Registration Submitted Successfully!");
  };

  return (
    <div className="bg-[#121727] text-white min-h-screen">
      <Navbar />
      
      <div className="text-center pt-40 text-5xl font-bold text-white">
        Reporter Registration Form
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center space-y-6 bg-[#1C2331] p-12 rounded-xl mx-auto w-full max-w-lg shadow-2xl mt-10"
      >
        {/* Phone Number */}
        <label className="w-full text-left text-lg font-semibold text-white">
          Phone Number
        </label>
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Enter your phone number"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="w-full p-3 rounded-md bg-[#243549] text-white hover:bg-[#2c3e50] transition-all duration-300"
          required
        />

        {/* Date of Birth */}
        <label className="w-full text-left text-lg font-semibold text-white">
          Date of Birth
        </label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          className="w-full p-3 rounded-md bg-[#243549] text-white hover:bg-[#2c3e50] transition-all duration-300"
          required
        />

        {/* Document ID Upload */}
        <label className="w-full text-left text-lg font-semibold text-white">
          Aadhar Card
        </label>
        <input
          type="file"
          name="documentId"
          onChange={handleFileChange}
          className="w-full p-3 rounded-md bg-[#243549] text-white cursor-pointer hover:bg-[#2c3e50] transition-all duration-300"
          required
        />

        {/* Reporter ID Upload */}
        <label className="w-full text-left text-lg font-semibold text-white">
          Reporter ID
        </label>
        <input
          type="file"
          name="reporterId"
          onChange={handleFileChange}
          className="w-full p-3 rounded-md bg-[#243549] text-white cursor-pointer hover:bg-[#2c3e50] transition-all duration-300"
          required
        />

        {/* Organisation */}
        <label className="w-full text-left text-lg font-semibold text-white">
          Organisation
        </label>
        <input
          type="text"
          name="organisation"
          placeholder="Enter your organisation name"
          value={formData.organisation}
          onChange={handleChange}
          className="w-full p-3 rounded-md bg-[#243549] text-white hover:bg-[#2c3e50] transition-all duration-300"
          required
        />

        {/* Years of Experience */}
        <label className="w-full text-left text-lg font-semibold text-white">
          Years of Experience
        </label>
        <input
          type="number"
          name="experience"
          min="0"
          value={formData.experience}
          onChange={handleChange}
          className="w-full p-3 rounded-md bg-[#243549] text-white hover:bg-[#2c3e50] transition-all duration-300"
          required
        />

        {/* Submit Button */}
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

export default ReporterRegistration;
