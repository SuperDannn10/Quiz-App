type Question = {
  id: number;
  text: string;
  choices: string[];
  correctIndex: number;
};

export const questions: Question[] = [
  { id: 1, text: "What does HTML stand for?", choices: ["HyperText Markup Language", "High Text Machine Language", "HyperTool Multi Language", "Home Text Markup Level"], correctIndex: 0 },
  { id: 2, text: "Which CSS property changes the color of text?", choices: ["font-style", "text-color", "color", "foreground"], correctIndex: 2 },
  { id: 3, text: "When did JavaScript first appear?", choices: ["1998", "1997", "1995", "1999"], correctIndex: 2 },
  { id: 4, text: "Which React hook is used to manage state in a component?", choices: ["useEffect", "useState", "useRef", "useMemo"], correctIndex: 1 },
  { id: 5, text: "In React, how does a parent component pass data to a child?", choices: ["Through props", "Through the DOM", "Through CSS", "Through localStorage only"], correctIndex: 0 },
];