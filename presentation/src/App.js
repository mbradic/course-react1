import "./App.css";
import { NavLink, Outlet } from "react-router-dom";
import { Separator } from "./Separator";
import { CourseTitle } from "./CourseTitle";
import { course } from "./course";

function App() {
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
      <CourseTitle course={course} />
      <NavLessons course={course} />
    </header>
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
