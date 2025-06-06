import React from "react";

const getDaysInMonth = (month) => {
  const thirtyOne = [3, 7, 8, 10];
  return thirtyOne.includes(month) ? 31 : 30;
};

const MonthPart = ({ month, selected, onToggle }) => {
  const days = getDaysInMonth(month);

  return (
    <div>
      <h4 className="text-lg font-semibold">{month}월</h4>
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: days }, (_, i) => {
          const day = i + 1;
          const key = `${month}-${day}`;
          const isSelected = selected.includes(key);
          return (
            <button
              key={key}
              className={`w-8 h-8 rounded-full text-sm border ${
                isSelected ? "bg-blue-500 text-white" : "bg-white"
              }`}
              onClick={() => onToggle(key)}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MonthPart;