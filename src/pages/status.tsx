import { useState, FormEvent, KeyboardEvent } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";
import "./status.css";
import { PaperPlaneRight } from "phosphor-react";

export function Status() {
  const [newAnswer, setNewAnswers] = useState<string>("");

  const [answers, setAnswers] = useState<string[]>([
    "Concordo",
    "olha faz sentido",
    "parabéns pelo progresso",
  ]);

  function handleAnswer(event: FormEvent) {
    event.preventDefault();
    setAnswers([newAnswer, ...answers]);
    setNewAnswers("");
  }

  function handleHotKeySubmit(e: KeyboardEvent) {
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      setAnswers([newAnswer, ...answers]);
      setNewAnswers("");
    }
  }

  return (
    <main className="status">
      <Header title="Tweet" />
      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sit, dolorum facere minus nobis sint ratione asperiores amet ducimus atque fuga vero mollitia velit aliquam excepturi? Earum, sunt! Consectetur, unde." />
      <Separator />
      <form className="answer-tweet-form" onSubmit={handleAnswer}>
        <label htmlFor="tweet">
          <img src="https://github.com/lbombassei.png" alt="User" />
          <textarea
            id="tweet"
            placeholder="Tweet your answer"
            value={newAnswer}
            onKeyDown={handleHotKeySubmit}
            onChange={(e) => {
              setNewAnswers(e.target.value);
            }}
          />
        </label>
        <button type="submit">
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>
      {answers.map((answer) => (
        <Tweet content={answer} key={answer} />
      ))}
    </main>
  );
}
