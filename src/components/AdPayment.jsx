// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
// import Footer from "./Footer";
// import Navbar from "./Navbar";

// const AdPayment = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const { formData, totalCost } = location.state || {}; // Retrieve the data passed via state

//   const [paymentMethod, setPaymentMethod] = useState(""); // Store the selected payment method

//   const handlePaymentSubmit = (e) => {
//     e.preventDefault();

//     if (!paymentMethod) {
//       alert("Please select a payment method.");
//       return;
//     }

//     // Simulating a successful payment process
//     alert(`Payment of ₹${totalCost} was successful using ${paymentMethod}`);

//     // Redirect to a confirmation or success page after payment
//     navigate("/payment-success");
//   };

//   return (
//     <div className="bg-[#121727] text-white min-h-screen">
//       <Navbar />

//       <div className="text-center pt-50 text-5xl font-bold text-white">
//         Confirm Your Ad Payment
//       </div>

//       {/* Ad Details Section */}
//       <div className="text-center px-6 sm:px-16 md:px-32 py-10 text-lg leading-relaxed text-gray-300">
//         <p>Review your ad details before proceeding with payment:</p>
//       </div>

//       <div className="flex justify-center space-x-10 py-6">
//         <div className="bg-[#1C2331] p-6 rounded-xl shadow-lg w-full max-w-lg">
//           <div className="text-xl font-semibold text-white">
//             <p>Business Name: {formData.businessName}</p>
//             <p>Ad Link: <a href={formData.adLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{formData.adLink}</a></p>
//             <p>Ad Size: {formData.adSize}</p>
//             <p>Ad Duration: {formData.adDuration} Days</p>
//             <p>Total Cost: ₹{totalCost}</p>
//           </div>
//         </div>
//       </div>

//       {/* Payment Methods Section */}
//       <div className="text-center text-4xl font-bold mb-10 text-white">
//         Select Payment Method
//       </div>

//       <form onSubmit={handlePaymentSubmit} className="flex flex-col items-center space-y-6 bg-[#1C2331] p-12 rounded-xl mx-auto w-full max-w-lg shadow-2xl">
//         <label className="w-full text-left text-lg font-semibold text-white">
//           Choose Payment Method
//         </label>
//         <select
//           value={paymentMethod}
//           onChange={(e) => setPaymentMethod(e.target.value)}
//           className="w-full p-3 rounded-md bg-[#243549] text-white hover:bg-[#2c3e50] transition-all duration-300"
//         >
//           <option value="">Select a method...</option>
//           <option value="Credit Card">Credit Card</option>
//           <option value="Debit Card">Debit Card</option>
//           <option value="UPI">UPI</option>
//         </select>

//         <button
//           type="submit"
//           className="bg-blue-400 cursor-pointer hover:bg-blue-500 px-8 py-2 rounded-md font-bold text-white text-lg transition-all duration-300"
//         >
//           Pay ₹{totalCost}
//         </button>
//       </form>

//       <div className="h-24"></div>
//       <Footer />
//     </div>
//   );
// };

// export default AdPayment;


import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const AdPayment = () => {
  const location = useLocation();
  const { formData, totalCost } = location.state || {};

  const [showQR, setShowQR] = useState(false);

  const handleQRCodePayment = () => {
    setShowQR(true); // Show QR code when button is clicked
  };

  return (
    <div className="bg-[#121727] text-white min-h-screen">
      <Navbar />

      <div className="text-center pt-50 text-5xl font-bold text-white">
        Confirm Your Ad Payment
      </div>

      <div className="text-center px-6 sm:px-16 md:px-32 py-10 text-lg leading-relaxed text-gray-300">
        <p>Review your ad details before proceeding with payment:</p>
      </div>

      <div className="flex justify-center space-x-10 py-6">
        <div className="bg-[#1C2331] p-6 rounded-xl shadow-lg w-full max-w-lg">
          <div className="text-xl font-semibold text-white">
            <p>Business Name: {formData.businessName}</p>
            <p>
              Ad Link:{" "}
              <a
                href={formData.adLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                {formData.adLink}
              </a>
            </p>
            <p>Ad Size: {formData.adSize}</p>
            <p>Ad Duration: {formData.adDuration} Days</p>
            <p>Total Cost: ₹{totalCost}</p>
          </div>
        </div>
      </div>

      <div className="text-center text-4xl font-bold mb-10 text-white">
        Proceed to Payment
      </div>

      <div className="flex flex-col items-center">
        <button
          type="button"
          onClick={handleQRCodePayment}
          className="bg-blue-400 cursor-pointer hover:bg-blue-500 px-8 py-2 rounded-md font-bold text-white text-lg transition-all duration-300"
        >
          Pay ₹{totalCost}
        </button>

        {showQR && (
          <div className="mt-8">
            <p className="text-xl text-gray-300 mb-4">Scan this QR to pay:</p>
            <img
              src="/path-to-your-qr-code.png" // Update this path after you upload the QR
              alt="QR Code for Payment"
              className="w-64 h-64 object-contain border-2 border-gray-400 rounded-lg"
            />
          </div>
        )}
      </div>

      <div className="h-24"></div>
      <Footer />
    </div>
  );
};

export default AdPayment;
