import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { questions } from "../Data/questions";
import ResultCard from "../Components/ResultCard";
import type { ResultState } from "../types";

export default function Result() {
  const navigate = useNavigate();
  const state = useLocation().state as ResultState | null;

  // Opened /result directly without taking the quiz
  if (!state?.answers) return <Navigate to="/" replace />;

  const correct = state.answers.filter((a, i) => a === questions[i].correctIndex).length;

  return (
    <main className="page">
      <ResultCard
        total={questions.length}
        correct={correct}
        onRetake={() => navigate("/quiz")}
        onHome={() => navigate("/")}
      />
    </main>
  );
}