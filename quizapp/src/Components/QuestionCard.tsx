import type { Question } from "../types";
import AnswerOption from "./AnswerOption";

interface Props {
  question: Question;
  number: number;
  selected: number | null;
  onSelect: (index: number) => void;
}

const LETTERS = ["A", "B", "C", "D"];

export default function QuestionCard({ question, number, selected, onSelect }: Props) {
  return (
    <section className="card">
      <p className="muted">Question {number}</p>
      <h3 className="question-text">{question.text}</h3>
      <div className="answers" role="radiogroup" aria-label={question.text}>
        {question.choices.map((choice, i) => (
          <AnswerOption
            key={i}
            letter={LETTERS[i]}
            label={choice}
            selected={selected === i}
            onSelect={() => onSelect(i)}
          />
        ))}
      </div>
    </section>
  );
}