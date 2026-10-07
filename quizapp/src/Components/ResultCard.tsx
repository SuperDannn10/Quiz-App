interface Props {
  total: number;
  correct: number;
  onRetake: () => void;
  onHome: () => void;
}

export default function ResultCard({ total, correct, onRetake, onHome }: Props) {
  const incorrect = total - correct;
  const percentage = Math.round((correct / total) * 100);

  return (
    <section className="card">
      <p className="muted">Quiz completed</p>
      <h2>Your score</h2>
      <div className="score-box">
        {correct} / {total}
      </div>
      <p className="percentage">{percentage}%</p>

      <dl className="stats">
        <div><dt>Total questions</dt><dd>{total}</dd></div>
        <div><dt>Correct answers</dt><dd className="good">{correct}</dd></div>
        <div><dt>Incorrect answers</dt><dd className="bad">{incorrect}</dd></div>
      </dl>

      <div className="actions">
        <button type="button" className="btn" onClick={onRetake}>Retake quiz</button>
        <button type="button" className="btn btn-ghost" onClick={onHome}>Return home</button>
      </div>
    </section>
  );
}