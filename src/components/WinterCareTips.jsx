import React from "react";

const WinterCareTips = () => {
  const tips = [
    {
      icon: "❄️",
      title: "Keep Your Pet Warm Indoors",
      text: "As temperatures drop, ensure your pet stays cozy indoors. Provide blankets and warm bedding.",
    },
    {
      icon: "🐾",
      title: "Moisturize Paws Regularly",
      text: "Cold weather causes cracked paws. Apply safe balms to keep them moisturized.",
    },
    {
      icon: "🏃‍♂️",
      title: "Limit Outdoor Time",
      text: "Shorter walks reduce risk of frostbite and cold stress. Watch their body language.",
    },
    {
      icon: "💧",
      title: "Hydrate & Maintain Nutrition",
      text: "Pets lose moisture faster in winter. Ensure full water bowls and a balanced diet.",
    },
  ];

  return (
    <div className="w-full  py-12">
      <h2 className="text-center text-3xl font-bold text-purple-600 mb-10">
        Winter Care Tips for Pets
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {tips.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 border hover:shadow-lg transition-all duration-300"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WinterCareTips;
