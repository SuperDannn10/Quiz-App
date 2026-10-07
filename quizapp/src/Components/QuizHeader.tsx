import ProgressBar from "./ProgressBar";

interface Props {
  title: string;
  current: number;
  total: number;
  onExit: () => void;
}

export default function QuizHeader({ title, current, total, onExit }: Props) {
  return (
    <header className="quiz-header">
      <div className="quiz-header-row">
        <h2>{title}</h2>
        <button type="button" className="link-btn" onClick={onExit}>
          Exit
        </button>
      </div>
      <p className="muted">
        Question {current} of {total}
      </p>
      <ProgressBar current={current} total={total} />
    </header>
  );
}