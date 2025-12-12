import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate("/PostAd");
  };

  return (
    <>
      <div className="flex h-90 w-full justify-between border-b-3 border-[#243549] border-t-3 bg-[#121727] text-white">
        <div className="mx-10 mt-20 flex space-x-4">
          <div className="text-5xl font-bold">FACTIFY</div>
        </div>
        <div className="flex items-center justify-center flex-grow">
          <img
            src="https://media.licdn.com/dms/image/v2/C5112AQF_0jnLe9ouIQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1520208645779?e=2147483647&v=beta&t=1FNI44EWI-WOcIwUz7f7D9QPPqzMhI3tOG8_Q483Fko"
            alt="Post Ad"
            className="h-50 w-50 cursor-pointer"
            onClick={handleImageClick}
          />
        </div>
        <div className="mt-20 flex w-4xl justify-evenly">
          {/* <div className="flex">
            <ul className="space-y-3 text-[#B0B0B0]">
              <li className="py-2 font-medium text-white">Solutions</li>
              <li>Marketing</li>
              <li>Analytics</li>
              <li>Automation</li>
              <li>Commerce</li>
              <li>Insights</li>
            </ul>
          </div> */}
          <div className="flex">
            <ul className="space-y-3 text-[#B0B0B0]">
              <li className="py-2 font-medium text-white">Support</li>
              <li><Link to={'/PostAd'}>Advertise</Link></li>
              <li><Link to={'/guide'}>Guides</Link></li>
            </ul>
          </div>
          <div className="flex">
            <ul className="space-y-3 text-[#B0B0B0]">
              <li className="py-2 font-medium text-white">Company</li>
              <li><Link to={'/about'}>About Us</Link></li>
              <li><Link to={'/contact'}>Contact Us</Link></li>
            </ul>
          </div>
          <div className="flex">
            <ul className="space-y-3 text-[#B0B0B0]">
              <li className="py-2 font-medium text-white">Legal</li>
              <li><Link to={'/terms'}>Terms of Service</Link></li>
              <li><Link to={'/privacy'}>Privacy Policy</Link></li>
              <li><Link to={'/license'}>License</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex h-50 w-full justify-center space-x-[30rem] bg-[#121727] text-white">
        <div className="flex flex-col justify-center space-y-2.5 px-5">
          <div className="flex font-bold">Subscribe to our Newsletter</div>
          <div className="flex">
            The latest news, articles, and resources, sent to your inbox weekly.
          </div>
        </div>
        <div className="flex items-center space-x-2.5">
          <input
            type="text"
            placeholder="Email"
            className="rounded-md border p-2"
          />
          <button className="rounded-md bg-blue-400 p-2 cursor-pointer px-5">
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
};

export default Footer;
