import { NavLink, Outlet, useLocation } from "react-router-dom";
import "./Lesson.css";
import { Separator } from "./Separator";
import { LessonTitle } from "./LessonTitle";
import { course } from "./course";

export default function Lesson() {
  const location = useLocation();
  const lesson = course.lessons.find((l) => "/" + l.path === location.pathname);
  return (
    <>
      <div className="header">
        <LessonTitle lesson={lesson} />
        <NavTopics lesson={lesson} />
      </div>

      <Outlet />
    </>
  );
}

function NavTopics({ lesson }) {
  return (
    <nav className="nav">
      {lesson.topics.map((topic, index, arr) => (
        <span key={topic.path}>
          <TopicLink topic={topic} />
          {index < arr.length - 1 && <Separator />}
        </span>
      ))}
    </nav>
  );
}

function TopicLink({ topic }) {
  return (
    <NavLink
      to={topic.path}
      className={({ isActive }) => (isActive ? "active" : "")}
    >
      {topic.shortTitle}
    </NavLink>
  );
}
