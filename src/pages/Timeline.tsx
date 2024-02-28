/* eslint-disable @typescript-eslint/no-unused-vars */
import { FormEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";
import { useMutation, useQuery } from "@tanstack/react-query";
import "./Timeline.css";

interface Tweet {
  id: string;
  created_at: string;
  likes: number;
  replies: number;
  retweets: number;
  text: string;
  user: string;
  user_handle: string;
}

export function Timeline() {
  const [newTweet, setNewTweet] = useState<string>("");

  const {
    data: tweets,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["tweets-timeline"],
    queryFn: async () => {
      const data = await fetch("http://localhost:3333/tweets");
      return data.json();
    },
  });
  if (isLoading) {
    null;
  }

  const { mutateAsync } = useMutation({
    mutationFn: async (tweet: Tweet) => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      await fetch("http://localhost:3333/tweets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tweet),
      });
      refetch();
    },
  });

  async function handleNewTweet(event: FormEvent) {
    event.preventDefault();
    if (newTweet.trim() !== "") {
      const tweet: Tweet = {
        created_at: new Date().toISOString(),
        likes: 0,
        replies: 0,
        retweets: 0,
        text: newTweet,
        user: "Leonardo Bombassei",
        user_handle: "@leonardo_bomb",
        id: "@leonardo_bomb" + new Date().toISOString(),
      };
      await mutateAsync(tweet);
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
            onChange={(e) => {
              setNewTweet(e.target.value);
            }}
          />
        </label>
        <button type="submit"> Tweet </button>
      </form>
      <Separator />
      {tweets?.map((tweet: Tweet) => (
        <Tweet
          text={tweet.text}
          key={tweet.text}
          likes={tweet.likes}
          replies={tweet.replies}
          retweets={tweet.retweets}
          user={tweet.user}
          userHandle={tweet.user_handle}
        />
      ))}
    </main>
  );
}
