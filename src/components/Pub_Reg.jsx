import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const UserDetailsForm = () => {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    dob: "",
    documentId: null,
    occupation: "",
    organisation: "",
    yearsOfExperience: "",
    areaOfInterest: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, documentId: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Form Submitted Successfully!");
  };

  return (
    <div className="bg-[#121727] text-white min-h-screen">
      {/* Navbar Section */}
      <Navbar />

      {/* Heading Section */}
      <div className="text-center mb-16 pt-40 text-5xl font-bold text-white">
        Publisher Registration Form
      </div>

      {/* Form Section */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center space-y-6 bg-[#1C2331] p-12 rounded-xl mx-auto w-full max-w-lg shadow-2xl"
      >
        {/* Phone Number */}
        <label className="w-full text-left text-lg font-semibold text-white">
          Phone Number
        </label>
        <input
          type="text"
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
          onChange={handleFileChange}
          className="w-full p-3 rounded-md bg-[#243549] text-white cursor-pointer hover:bg-[#2c3e50] transition-all duration-300"
          required
        />

        {/* Occupation */}
        <label className="w-full text-left text-lg font-semibold text-white">
          Occupation
        </label>
        <input
          type="text"
          name="occupation"
          placeholder="Enter your occupation"
          value={formData.occupation}
          onChange={handleChange}
          className="w-full p-3 rounded-md bg-[#243549] text-white hover:bg-[#2c3e50] transition-all duration-300"
          required
        />

        {/* Organisation */}
        <label className="w-full text-left text-lg font-semibold text-white">
          Organisation
        </label>
        <input
          type="text"
          name="organisation"
          placeholder="Enter your organisation"
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
          name="yearsOfExperience"
          min="0"
          max="50"
          value={formData.yearsOfExperience}
          onChange={handleChange}
          className="w-full p-3 rounded-md bg-[#243549] text-white hover:bg-[#2c3e50] transition-all duration-300"
          required
        />

        {/* Area of Interest */}
        <label className="w-full text-left text-lg font-semibold text-white">
          Area of Interest
        </label>
        <select
          name="areaOfInterest"
          value={formData.areaOfInterest}
          onChange={handleChange}
          className="w-full p-3 rounded-md bg-[#243549] text-white hover:bg-[#2c3e50] transition-all duration-300"
        >
          <option value="">Select an option</option>
          <option value="Technology">Blockchain</option>
          <option value="Education">AI</option>
          <option value="Healthcare">Technical</option>
          <option value="Finance">DevOps</option>
          
        </select>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-400 cursor-pointer hover:bg-blue-500 px-8 py-2 rounded-md font-bold text-white text-lg transition-all duration-300"
        >
          Submit
        </button>
      </form>

      {/* Additional Space After Submit */}
      <div className="h-24"></div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default UserDetailsForm;
