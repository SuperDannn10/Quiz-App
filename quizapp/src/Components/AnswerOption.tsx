interface Props {
  letter: string;
  label: string;
  selected: boolean;
  onSelect: () => void;
}

export default function AnswerOption({ letter, label, selected, onSelect }: Props) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      className={`answer ${selected ? "answer-selected" : ""}`}
      onClick={onSelect}
    >
      <span className="answer-letter">{letter}</span>
      <span>{label}</span>
    </button>
  );
}