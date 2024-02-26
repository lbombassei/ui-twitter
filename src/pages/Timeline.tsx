import { FormEvent, useState, KeyboardEvent } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";
import "./Timeline.css";

export function Timeline() {
  const [newTweet, setNewTweet] = useState<string>("");

  const [tweets, setTweet] = useState<string[]>([
    "Meu Primeiro Tweet",
    "Teste",
    "Deu Certo Twittar",
  ]);

  function handleNewTweet(event: FormEvent) {
    event.preventDefault();
    setTweet([newTweet, ...tweets]);
    setNewTweet("");
  }

  function handleHotKeySubmit(e: KeyboardEvent) {
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      setTweet([newTweet, ...tweets]);
      setNewTweet("");
    }
  }

  return (
    <main className="timeline">
      <Header title="Home" />
      <form onSubmit={handleNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/lbombassei.png" alt="User" />
          <textarea
            id="tweet"
            placeholder="What's happening?"
            value={newTweet}
            onKeyDown={handleHotKeySubmit}
            onChange={(e) => {
              setNewTweet(e.target.value);
            }}
          />
        </label>
        <button type="submit"> Tweet </button>
      </form>
      <Separator />
      {tweets.map((tweet) => (
        <Tweet content={tweet} key={tweet} />
      ))}
    </main>
  );
}
