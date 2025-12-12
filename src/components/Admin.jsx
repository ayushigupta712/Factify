import { useEffect, useState } from "react";
import axios from "axios";

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState("news");
  const [newsRequests, setNewsRequests] = useState([]);
  const [adRequests, setAdRequests] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const tabs = [
    { key: "news", label: "News Requests" },
    { key: "ads", label: "Ad Requests" },
    { key: "publishers", label: "New Publisher Requests" },
    { key: "reporters", label: "New Reporter Requests" },
  ];

  useEffect(() => {
    if (activeTab === "news") {
      fetchNewsRequests();
    } else if (activeTab === "ads") {
      fetchAdRequests();
    }
  }, [activeTab]);

  const fetchNewsRequests = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/newsrequest");
      setNewsRequests(response.data);
    } catch (err) {
      console.error("Error fetching news requests:", err);
    }
  };

  const fetchAdRequests = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/adrequests");
      setAdRequests(response.data);
    } catch (err) {
      console.error("Error fetching ad requests:", err);
    }
  };

  const handleApprove = async (item) => {
    try {
      await axios.post("http://localhost:5000/api/news", item);
      await axios.delete(`http://localhost:5000/api/newsrequest/${item._id}`);
      setNewsRequests((prev) => prev.filter((news) => news._id !== item._id));
    } catch (err) {
      console.error("Error approving news:", err);
    }
  };

  const handleReject = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/newsrequest/${id}`);
      setNewsRequests((prev) => prev.filter((news) => news._id !== id));
    } catch (err) {
      console.error("Error rejecting news:", err);
    }
  };

  const handleApproveAd = async (item) => {
    try {
      await axios.post("http://localhost:5000/api/ads", item);
      await axios.delete(`http://localhost:5000/api/adrequests/${item._id}`);
      setAdRequests((prev) => prev.filter((ad) => ad._id !== item._id));
    } catch (err) {
      console.error("Error approving ad:", err);
    }
  };

  const handleRejectAd = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/adrequests/${id}`);
      setAdRequests((prev) => prev.filter((ad) => ad._id !== id));
    } catch (err) {
      console.error("Error rejecting ad:", err);
    }
  };

  const paginatedNews = newsRequests.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const paginatedAds = adRequests.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const totalPagesNews = Math.ceil(newsRequests.length / itemsPerPage);
  const totalPagesAds = Math.ceil(adRequests.length / itemsPerPage);

  const renderTable = () => {
    if (activeTab === "news") {
      return (
        <table className="w-full border mt-4 text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2">Title</th>
              <th className="border p-2">Reporter</th>
              <th className="border p-2">Publisher</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {paginatedNews.map((item) => (
              <tr key={item._id} className="text-center border-b">
                <td className="border p-2">{item.headline}</td>
                <td className="border p-2">{item.reporterName}</td>
                <td className="border p-2">{item.publisherName}</td>
                <td className="border p-2">
                  <div className="space-x-2">
                    <button
                      onClick={() => handleApprove(item)}
                      className="bg-green-500 text-white px-2 py-1 rounded"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleReject(item._id)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Reject
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    } else if (activeTab === "ads") {
      return (
        <table className="w-full border mt-4 text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="border p-2">Ad Title</th>
              <th className="border p-2">Submitted By</th>
              <th className="border p-2">Submission Date</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {paginatedAds.map((item) => (
              <tr key={item._id} className="text-center border-b">
                <td className="border p-2">{item.title}</td>
                <td className="border p-2">{item.submittedBy}</td>
                <td className="border p-2">
                  {new Date(item.date).toLocaleDateString()}
                </td>
                <td className="border p-2">
                  <div className="space-x-2">
                    <button
                      onClick={() => handleApproveAd(item)}
                      className="bg-green-500 text-white px-2 py-1 rounded"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleRejectAd(item._id)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Reject
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }

    const headers = {
      publishers: ["Name", "Email", "Organization"],
      reporters: ["Name", "Email", "Region"],
    };

    const dummyData = Array.from({ length: 5 }).map((_, i) => ({
      id: i,
      name: `Sample ${activeTab} ${i + 1}`,
      email: `user${i + 1}@example.com`,
      extra: `Extra ${i + 1}`,
    }));

    const currentHeaders = headers[activeTab] || [];
    return (
      <table className="w-full border mt-4 text-sm">
        <thead className="bg-gray-200">
          <tr>
            {currentHeaders.map((h, i) => (
              <th key={i} className="border p-2">
                {h}
              </th>
            ))}
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((item) => (
            <tr key={item.id} className="text-center border-b">
              <td className="border p-2">{item.name}</td>
              <td className="border p-2">{item.email}</td>
              <td className="border p-2">{item.extra}</td>
              <td className="border p-2">
                <div className="space-x-2">
                  <button className="bg-green-500 text-white px-2 py-1 rounded">
                    Approve
                  </button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded">
                    Reject
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-indigo-700 mb-10">
        Admin Dashboard
      </h1>

      <div className="flex justify-center mb-6 space-x-4">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => {
              setActiveTab(tab.key);
              setCurrentPage(1);
            }}
            className={`px-4 py-2 rounded-lg font-medium ${
              activeTab === tab.key
                ? "bg-indigo-600 text-white"
                : "bg-white border border-indigo-300 text-indigo-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        {renderTable()}

        {activeTab === "news" && (
          <div className="flex justify-between items-center mt-6">
            <button
              disabled={currentPage === 1}
              className="bg-gray-200 px-4 py-1 rounded disabled:opacity-50"
              onClick={() => setCurrentPage((prev) => prev - 1)}
            >
              Prev
            </button>
            <span className="font-medium">
              Page {currentPage} of {totalPagesNews}
            </span>
            <button
              disabled={currentPage === totalPagesNews}
              className="bg-gray-200 px-4 py-1 rounded disabled:opacity-50"
              onClick={() => setCurrentPage((prev) => prev + 1)}
            >
              Next
            </button>
          </div>
        )}

        {activeTab === "ads" && (
          <div className="flex justify-between items-center mt-6">
            <button
              disabled={currentPage === 1}
              className="bg-gray-200 px-4 py-1 rounded disabled:opacity-50"
              onClick={() => setCurrentPage((prev) => prev - 1)}
            >
              Prev
            </button>
            <span className="font-medium">
              Page {currentPage} of {totalPagesAds}
            </span>
            <button
              disabled={currentPage === totalPagesAds}
              className="bg-gray-200 px-4 py-1 rounded disabled:opacity-50"
              onClick={() => setCurrentPage((prev) => prev + 1)}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
