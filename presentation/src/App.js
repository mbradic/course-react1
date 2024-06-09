import "./App.css";
import { NavLink, Outlet } from "react-router-dom";
import { Separator } from "./Separator";

function App({ course }) {
  return (
    <>
      <AppHeader course={course} />
      <main>
        <Outlet />
      </main>
    </>
  );
}

function AppHeader({ course }) {
  return (
    <header className="header">
      <AppTitle course={course} />
      <NavLessons course={course} />
    </header>
  );
}

function AppTitle({ course }) {
  return (
    <h1 className="title">
      {course.code} - {course.title}
    </h1>
  );
}

function NavLessons({ course }) {
  return (
    <nav className="nav">
      {course.lessons.map((lesson, index, arr) => (
        <span key={lesson.path}>
          <LessonLink lesson={lesson} />
          {index < arr.length - 1 && <Separator />}
        </span>
      ))}
    </nav>
  );
}

function LessonLink({ lesson }) {
  return (
    <NavLink
      to={lesson.path}
      className={({ isActive }) => (isActive ? "active" : "")}
    >
      {lesson.shortTitle}
    </NavLink>
  );
}

export default App;
