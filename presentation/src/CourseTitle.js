export function CourseTitle({ course }) {
  return (
    <h1 className="title">
      {course.code} - {course.title}
    </h1>
  );
}
