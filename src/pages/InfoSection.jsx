import React from "react";
import {
  FaShippingFast,
  FaHeadset,
  FaMoneyBillWave,
  FaLock,
  FaTags,
  FaUndo,
} from "react-icons/fa";

const InfoSection = () => {
  const infoItem = [
    {
      icon: <FaShippingFast className="text-3xl text-red-600" />,
      title: "Free Shipping",
      description: "Get free delivery on all orders above ₹499.",
    },
    {
      icon: <FaHeadset className="text-3xl text-red-600" />,
      title: "Support 24/7",
      description: "We are available 24/7 to assist you anytime.",
    },
    {
      icon: <FaUndo className="text-3xl text-red-600" />,
      title: "100% Money Back",
      description: "Full refund if the product is not what you expected.",
    },
    {
      icon: <FaLock className="text-3xl text-red-600" />,
      title: "Payment Secure",
      description: "Your payments are encrypted and fully secure.",
    },
    {
      icon: <FaTags className="text-3xl text-red-600" />,
      title: "Best Discounts",
      description: "Get exclusive deals and offers every week.",
    },
  ];

  return (
    <div className="bg-white pb-8 pt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {infoItem?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-5 text-center border rounded-lg shadow-lg transition-all duration-300 ease-in-out  hover:scale-105 cursor-pointer"
          >
            {item.icon}
            <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
            <p className="mt-2 text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoSection;
