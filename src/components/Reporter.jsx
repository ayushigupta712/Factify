import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Reporter = () => {
  const [reporter, setReporter] = useState(null);
  const [newsData, setNewsData] = useState({
    headline: "",
    content: "",
    image: null,
    publisherName: "",
    reporterName: "",
    category: "",
  });

  useEffect(() => {
    const fetchReporterData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/reporterdata");
        if (!response.ok) throw new Error("Failed to fetch reporter data");
        const data = await response.json();
        setReporter(data);
      } catch (error) {
        console.error("Error fetching reporter data:", error);
      }
    };

    fetchReporterData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewsData({ ...newsData, [name]: value });
  };

  const handleImageChange = (e) => {
    setNewsData({ ...newsData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("headline", newsData.headline);
    formData.append("content", newsData.content);
    formData.append("image", newsData.image);
    formData.append("publisherName", newsData.publisherName);
    formData.append("reporterName", newsData.reporterName);
    formData.append("category", newsData.category);

    try {
      const response = await fetch("http://localhost:5000/api/newsrequest", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to submit news request");

      alert("News Request Submitted Successfully!");
      setNewsData({
        headline: "",
        content: "",
        image: null,
        publisherName: "",
        reporterName: "",
        category: "",
      });
    } catch (error) {
      console.error("Error submitting news request:", error);
      alert("Failed to submit news request.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#121727] pt-40 text-white min-h-screen">
        <div className="max-w-4xl mx-auto bg-[#1C2331] mb-20 p-8 shadow-2xl rounded-xl">
          {/* Reporter Section */}
          {reporter ? (
            <div className="flex items-center mb-8">
              <img
                src={reporter.profileImage}
                alt="Reporter"
                className="w-20 h-20 rounded-full object-cover border-4 border-blue-500"
              />
              <h2 className="text-3xl font-bold ml-6 text-white">
                Welcome, {reporter.name}!
              </h2>
            </div>
          ) : (
            <p className="text-center text-gray-300">
              Loading reporter data...
            </p>
          )}

          {/* Form Section */}
          <h3 className="text-2xl font-semibold mb-6 text-blue-400">
            Send a News Request
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <label className="block text-lg font-semibold text-white">
              Headline
            </label>
            <input
              type="text"
              name="headline"
              value={newsData.headline}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-[#243549] text-white hover:bg-[#2c3e50] transition-all duration-300"
              required
            />

            <label className="block text-lg font-semibold text-white">
              Content
            </label>
            <textarea
              name="content"
              value={newsData.content}
              onChange={handleChange}
              rows="5"
              className="w-full p-3 rounded-md bg-[#243549] text-white hover:bg-[#2c3e50] transition-all duration-300"
              required
            ></textarea>

            <label className="block text-lg font-semibold text-white">
              Upload Image
            </label>
            <input
              type="file"
              onChange={handleImageChange}
              className="w-full p-3 rounded-md bg-[#243549] text-white cursor-pointer hover:bg-[#2c3e50] transition-all duration-300"
              required
            />

            <label className="block text-lg font-semibold text-white">
              Publisher Name
            </label>
            <input
              type="text"
              name="publisherName"
              value={newsData.publisherName}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-[#243549] text-white hover:bg-[#2c3e50] transition-all duration-300"
              required
            />

            <label className="block text-lg font-semibold text-white">
              Reporter Name
            </label>
            <input
              type="text"
              name="reporterName"
              value={newsData.reporterName}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-[#243549] text-white hover:bg-[#2c3e50] transition-all duration-300"
              required
            />

            <label className="block text-lg font-semibold text-white">
              category
            </label>
            <input
              type="text"
              name="category"
              value={newsData.category}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-[#243549] text-white hover:bg-[#2c3e50] transition-all duration-300"
              required
            />

            <button
              type="submit"
              className="bg-blue-400 px-8 py-2 rounded-md font-bold text-white text-lg transition-all duration-300"
            >
              Submit News Request
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Reporter;
