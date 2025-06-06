import React, { useState } from "react";
import { flagDays } from "../data/flagdays";
import ShowWindow from "./ShowWindow";
import MonthPart from "./MonthPart";

const months = [3, 6, 7, 8, 10];

const DateProblem = () => {
  const [answers, setAnswers] = useState([]);
  const correctAnswers = flagDays;

  const toggleAnswer = (key) => {
    setAnswers((prev) =>
      prev.includes(key) ? prev.filter((item) => item !== key) : [...prev, key]
    );
  };

  return (
    <div>
      <ShowWindow answers={answers} correctAnswers={correctAnswers} />
      <div className="grid grid-cols-3 gap-4 mt-4">
        {months.map((month) => (
          <MonthPart
            key={month}
            month={month}
            //onToggle={toggleAnswer}
            selected={answers}
          />
        ))}
      </div>
    </div>
  );
};

export default DateProblem;