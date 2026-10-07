import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "../Data/questions";
import QuizHeader from "../Components/QuizHeader";
import QuestionCard from "../Components/QuestionCard";
import type { ResultState } from "../types";

export default function Quiz() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);

  const question = questions[current];
  const isLast = current === questions.length - 1;

  function handleNext() {
    if (selected === null) return;
    const nextAnswers = [...answers, selected];

    if (isLast) {
      const state: ResultState = { answers: nextAnswers };
      navigate("/result", { state });
      return;
    }
    setAnswers(nextAnswers);
    setCurrent(current + 1);
    setSelected(null);
  }

  return (
    <main className="page">
      <QuizHeader
        title="Frontend Quiz"
        current={current + 1}
        total={questions.length}
        onExit={() => navigate("/")}
      />
      <QuestionCard
        question={question}
        number={current + 1}
        selected={selected}
        onSelect={setSelected}
      />
      <div className="actions">
        <button type="button" className="btn" disabled={selected === null} onClick={handleNext}>
          {isLast ? "Finish" : "Next"}
        </button>
      </div>
    </main>
  );
}