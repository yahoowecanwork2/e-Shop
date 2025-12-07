// FilterBar.jsx
import React from "react";

const FilterBar = ({ selected, onChange }) => {
  return (
    <div className="w-full flex items-center justify-center gap-4 py-4">
      {["men", "women", "child"].map((item) => (
        <button
          key={item}
          onClick={() => onChange(item)}
          className={`px-5 py-2 rounded-lg text-sm font-medium capitalize 
            ${
              selected === item
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700"
            }
          `}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
