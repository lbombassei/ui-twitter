import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react";
import "./Tweet.css";
import { Link } from "react-router-dom";
interface TweetProps {
  text: string;
  likes: number;
  replies: number;
  retweets: number;
  user: string;
  userHandle: string;
}

export function Tweet(props: TweetProps) {
  return (
    <Link to="/status" className="tweet">
      <img src="https://github.com/lbombassei.png" alt="Leonardo Bombassei" />
      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>{props.user}</strong>
          <span>{props.userHandle}</span>
        </div>
        <p>{props.text}</p>
        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
            {props.replies}
          </button>
          <button type="button">
            <ArrowsClockwise />
            {props.retweets}
          </button>
          <button type="button">
            <Heart />
            {props.likes}
          </button>
        </div>
      </div>
    </Link>
  );
}
