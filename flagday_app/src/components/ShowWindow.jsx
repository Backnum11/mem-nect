import React from "react";

const ShowWindow = ({ answers, correctAnswers }) => {
  const isCorrect = () =>
    answers.length === correctAnswers.length &&
    answers.every((ans) => correctAnswers.includes(ans));

  return (
    <div className="p-4 border rounded bg-gray-50">
      <p>총 선택한 날짜: {answers.length}</p>
      <p>정답 여부: {isCorrect() ? "정답입니다 " : "아직 정답이 아닙니다."}</p>
    </div>
  );
};

export default ShowWindow;