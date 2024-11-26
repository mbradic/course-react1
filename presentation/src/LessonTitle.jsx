import { useLocation } from "react-router-dom";
import { course } from "./course";

export function LessonTitle() {
  const location = useLocation()
  const [_, lessonPath] = location.pathname.split('/')
  console.log(lessonPath)
  const lesson = course.lessons.find(l => l.path === lessonPath)
  return <h2 className="title page-break">{lesson.fullTitle}</h2>;
}
