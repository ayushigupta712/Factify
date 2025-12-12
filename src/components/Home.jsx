import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { BiLike } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";

const Home = () => {
  const [news, setNews] = useState([]); // All News
  const [trendingNews, setTrendingNews] = useState([]); // Trending News
  const [ads, setAds] = useState([]); // Ads

  useEffect(() => {
    // Fetch news
    axios
      .get("http://localhost:5000/api/news")
      .then((response) => {
        const allNews = response.data;
        setNews(allNews);
        // Pick top 6 as Trending News (modify this logic if needed)
        setTrendingNews(allNews.slice(0, 6));
      })
      .catch((error) => console.error("Error fetching news:", error));

    // Fetch ads
    axios
      .get("http://localhost:5000/api/ads")
      .then((response) => {
        console.log("Ads fetched:", response.data);
        setAds(response.data.ads);
      })
      .catch((error) => console.error("Error fetching ads:", error));
  }, []);

  // Build interleaved list for main news section:
  const interleavedNewsAndAds = (() => {
    const interleaved = [];
    news.forEach((article, i) => {
      // Push a news article
      interleaved.push(
        <div
          key={article._id}
          className="mt-3 ml-3 flex h-80 w-xs flex-col rounded-xl bg-[#243549] text-white"
        >
          {/* News Image */}
          <div className="h-36 w-full overflow-hidden">
            <img
              src={article.image}
              alt="News"
              className="h-36 w-full rounded-t-xl object-cover transition-all hover:scale-110"
            />
          </div>
          {/* News Content */}
          <div className="m-2 flex h-40 flex-col justify-between">
            <div className="flex w-full items-center">
              <div className="h-7 w-7 rounded-full bg-amber-100"></div>
              <div className="ml-2 text-sm">{article.publisher} • 12h</div>
            </div>
            <div className="flex h-24 text-xl font-bold">
              <Link
                to={`/EachNews/${article._id}`}
                className="text-xl font-bold text-white hover:underline"
              >
                {article.headline}
              </Link>
            </div>
            <div className="flex text-2xl">
              <div className="cursor-pointer">
                <BiLike />
              </div>
              <div className="cursor-pointer text-sm mt-1 ml-1">29.5K</div>
              <div className="cursor-pointer ml-3">
                <FaRegComment />
              </div>
              <div className="cursor-pointer ml-3">
                <IoIosShareAlt />
              </div>
            </div>
          </div>
        </div>
      );
      // After every 4 news articles, insert an ad if available
      if ((i + 1) % 4 === 0 && ads[Math.floor(i / 4)]) {
        const ad = ads[Math.floor(i / 4)];
        interleaved.push(
          <div
            key={`ad-${Math.floor(i / 4)}`}
            className="mt-3 ml-3 flex h-80 w-xs flex-col rounded-xl bg-[#243549] text-white"
          >
            {/* Ad Image */}
            <div className="h-76 border relative w-full overflow-hidden">
              <a
                href={ad.redirectLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={ad.image}
                  alt={ad.companyName}
                  className="w-full h-full rounded-t-xl object-cover transition-all hover:scale-110"
                />
                {/* Ad Content */}
                <div className="m-2 absolute flex h-40 flex-col justify-center items-center text-center">
                  <div className="text-xl font-bold">{ad.adheadline}</div>
                  <a
                    href={ad.redirectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 underline"
                  >
                    {ad.redirectLink}
                  </a>
                </div>
              </a>
            </div>
          </div>
        );
      }
    });
    return interleaved;
  })();

  return (
    <>
      <Navbar />
      <div className="flex w-full">
        <Sidebar />

        {/* --------------------------- MAIN NEWS SECTION (Interleaved with Ads) --------------------------- */}
        <div className="flex justify-center bg-[#121727] flex-wrap ml-60 mt-29 w-full">
          {news.length > 0 ? (
            interleavedNewsAndAds
          ) : (
            <p className="text-white">No news available</p>
          )}
        </div>

        {/* --------------------------- RIGHT SECTION - TRENDING NEWS & ADS --------------------------- */}
        <div className="flex bg-[#121727] text-white mt-29 w-180 flex-col items-center border-l-1">
          <div className="m-auto my-3 text-2xl font-bold">Trending News</div>
          <div className="mx-auto flex w-full flex-col">
            {trendingNews.length > 0 ? (
              trendingNews.map((newsItem, index) => (
                <React.Fragment key={newsItem._id}>
                  {/* Trending News Item */}
                  <div className="m-4 mx-7 flex items-center">
                    <img
                      src={newsItem.image}
                      alt="Trending News"
                      className="h-30 w-30 shrink-0 rounded-3xl object-cover"
                    />
                    <div className="h-30 text-justify w-full p-1.5">
                      <Link
                        to={`/EachNews/${newsItem._id}`}
                        className=" font-bold hover:underline"
                      >
                        {newsItem.headline}
                      </Link>
                    </div>
                  </div>
                  {/* After every 2 trending news, insert an ad */}
                  {(index + 1) % 2 === 0 && ads[Math.floor(index / 2)] && (
                    <div
                      className="relative mb-4 mx-auto w-full"
                      key={`right-ad-${Math.floor(index / 2)}`}
                    >
                      <a
                        href={ads[Math.floor(index / 2)].redirectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={ads[Math.floor(index / 2)].image}
                          alt={ads[Math.floor(index / 2)].companyName}
                          className="w-full h-70 object-cover rounded-lg shadow-md"
                        />
                        {/* Overlay with redirect link text */}
                        <div className="absolute bottom-0 left-0 w-full bg-yellow-300 bg-opacity-50 text-black text-center p-2 text-sm">
                          {ads[Math.floor(index / 2)].adheadline}
                        </div>
                      </a>
                    </div>
                  )}
                </React.Fragment>
              ))
            ) : (
              <p className="text-black">No trending news available</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
