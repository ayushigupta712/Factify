import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import axios from "axios";

const ITEMS_PER_PAGE = 3;

export default function Publisher() {
  const [newsRequests, setNewsRequests] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/newsrequest")
      .then((response) => setNewsRequests(response.data))
      .catch((error) => console.error("Error fetching news requests:", error));
  }, []);

  const totalPages = Math.ceil(newsRequests.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentData = newsRequests.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleApprove = async (news) => {
    try {
      // Send a POST request to add the news to the "news" table
      await axios.post("http://localhost:5000/api/news", {
        publisherName: news.publisherName,
        reporterName: news.reporterName,
        dateTime: news.dateTime,
        category: news.category,
        headline: news.headline,
        imageLink: news.imageLink,
        remarks: news.remarks,
      });

      alert("News approved and added successfully!");

      // Optionally, remove the news request after approval
      setNewsRequests(newsRequests.filter((item) => item._id !== news._id));
    } catch (error) {
      console.error("Error approving news:", error);
      alert("Failed to approve news");
    }
  };

  return (
    <>
      <Navbar />
      <div className="text-4xl flex justify-center pt-50 pb-30 font-bold">
        Hello, Publisher Number 1
      </div>

      <section className="bg-white pb-20">
        <div className="container border mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="max-w-full overflow-x-auto">
                <table className="table-auto w-full">
                  <thead>
                    <tr className="bg-[#121727] text-center">
                      {[
                        "Publisher Name",
                        "Reporter Name",
                        "Date & Time",
                        "Category",
                        "Headline",
                        "Image",
                        "Remarks",
                      ].map((header) => (
                        <th
                          key={header}
                          className="w-1/6 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {currentData.map((row) => (
                      <tr key={row._id}>
                        <td className="text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8]">
                          {row.publisherName}
                        </td>
                        <td className="text-center text-dark font-medium text-base py-5 px-2 bg-white border-b border-[#E8E8E8]">
                          {row.reporterName}
                        </td>
                        <td className="text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-[#E8E8E8]">
                          {new Date(row.dateTime).toLocaleString()}
                        </td>
                        <td className="text-center text-dark font-medium text-base py-5 px-2 bg-white border-b border-[#E8E8E8]">
                          {row.category}
                        </td>
                        <td className="text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-[#E8E8E8]">
                          {row.headline}
                        </td>
                        <td className="text-center text-dark font-medium text-base py-5 px-2 bg-white border-b border-[#E8E8E8]">
                          <img
                            src={row.imageLink}
                            alt="News"
                            className="w-20 h-20 object-cover"
                          />
                        </td>
                        <td className="text-center text-dark font-medium text-base py-5 px-2 bg-white border-b border-r border-[#E8E8E8]">
                          {row.remarks}
                          <br />
                          <div className="flex gap-4">
                            <button
                              className="mt-2 bg-green-500 text-white px-3 py-1 cursor-pointer rounded text-sm hover:bg-green-600 transition"
                              onClick={() => handleApprove(row)}
                            >
                              Approve
                            </button>
                            <button
                              className="mt-2 bg-red-500 text-white px-5 cursor-pointer py-1 rounded text-sm hover:bg-red-600 transition"
                              onClick={() => handleReject(row)}
                            >
                              Reject
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* Paging */}
              <div className="flex justify-center mt-6 mb-4">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => handlePageChange(index + 1)}
                    className={`mx-1 cursor-pointer px-4 py-2 rounded ${currentPage === index + 1
                        ? "bg-[#121727] text-white"
                        : "bg-gray-200 text-black"
                      }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
