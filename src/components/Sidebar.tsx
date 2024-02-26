import {
  House,
  Hash,
  Bell,
  Envelope,
  BookmarkSimple,
  FileText,
  User,
  DotsThreeCircle,
  Pencil,
} from "phosphor-react";
import twitterLogo from "../assets/Logo.svg";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", icon: <House weight="fill" />, text: "Home" },
  { to: "/explore", icon: <Hash />, text: "Explore" },
  { to: "/notifications", icon: <Bell />, text: "Notifications" },
  { to: "/messages", icon: <Envelope />, text: "Messages" },
  { to: "/bookmarks", icon: <BookmarkSimple />, text: "Bookmarks" },
  { to: "/lists", icon: <FileText />, text: "Lists" },
  { to: "/profile", icon: <User />, text: "Profile" },
  { to: "/more", icon: <DotsThreeCircle />, text: "More" },
];

export function Sidebar() {
  return (
    <aside className="sidebar">
      <img src={twitterLogo} alt="Logo" className="logo" />
      <nav className="main-navigation">
        {links.map((link, index) => (
          <NavLink key={index} to={link.to}>
            {link.icon}
            <span>{link.text}</span>
          </NavLink>
        ))}
      </nav>
      <button className="new-tweet" type="button">
        <Pencil />
        <span>Tweet</span>
      </button>
    </aside>
  );
}
