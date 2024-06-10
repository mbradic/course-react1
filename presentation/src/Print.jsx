import { CourseTitle } from "./CourseTitle";
import { LessonTitle } from "./LessonTitle";

function Print({ course }) {
  return (
    <>
      <CourseTitle course={course} />
      {course.lessons.map((lesson) => (
        <div key={lesson.path}>
          <LessonTitle lesson={lesson} />
          {lesson.topics.map((topic) => (
            <div key={topic.path}>{topic.element}</div>
          ))}
        </div>
      ))}
    </>
  );
}

export default Print;
