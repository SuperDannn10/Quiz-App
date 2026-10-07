import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <main className="page home">
      <p className="home-lead">Welcome to the</p>
      <h1>Frontend Quiz!</h1>
      <p className="muted home-desc">
        Five multiple-choice questions on HTML, CSS, JavaScript and React.
        Pick one answer per question, then see your score at the end.
      </p>
      <button type="button" className="btn" onClick={() => navigate("/quiz")}>
        Start quiz
      </button>
    </main>
  );
}