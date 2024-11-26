import { useLocation } from "react-router-dom";
import { course } from "./course";

function Topic() {
  const location = useLocation();
  const [lessonPath, topicPath] = location.pathname.split("/");
  const lesson = course.lessons.find(l => l.path === lessonPath)
  const topic = lesson.topics.find(t => t.path === topicPath)
  return (
    <>
      <h3>{topic.fullTitle}</h3>
      {topic.element}
    </>
  );
}

export default Topic;
