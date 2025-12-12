import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import CommentSection from "./Cmnt";

const EachNews = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 3000);
    axios
      .get(`http://localhost:5000/api/news/${id}`)
      .then((response) => {
        console.log("Fetched News Data:", response.data);
        setNews(response.data);
      })
      .catch((error) => console.error("Error fetching news:", error));
  }, [id]);

  if (!news) return <div>Loading...</div>;

  return (
    <>
      <Navbar />
      <Sidebar />

      <div className="text-4xl flex justify-center pt-50 font-bold">
        {news.headline}
      </div>

      <div className="bg-white text-[#121727] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <img
              src={news.image}
              alt="News"
              className="w-4/5 h-[400px] object-cover rounded-lg shadow-lg"
            />
            <div className="mt-4 text-gray-500 text-lg">
              <span className="font-semibold">{news.category} </span> |{" "}
              {news.createdAt} | By {news.publisher}
            </div>
            <div className="mt-6 w-4/5 text-lg text-justify leading-7 text-gray-800">
              {news.content}
            </div>
          </div>
        </div>
      </div>

      {/* Comments Section */}
      <CommentSection comments={news.comments} />

      <Footer />
    </>
  );
};

export default EachNews;
