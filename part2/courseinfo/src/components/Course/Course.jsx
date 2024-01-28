import PropTypes from "prop-types";

const Header = ({ nameCourse }) => {
  return <h1>{nameCourse}</h1>;
};

const Part = ({ part, exercises }) => {
  return (
    <p>
      {part} {exercises}
    </p>
  );
};

const Content = ({ partsCourse }) => {
  const totalExcersises = (parts) => {
    return parts.reduce((sum, p) => sum + p.exercises, 0);
  };

  return (
    <>
      {partsCourse.map((part) => (
        <Part key={part.id} part={part.name} exercises={part.exercises} />
      ))}
      <p>
        <strong>total of {totalExcersises(partsCourse)} exercises</strong>
      </p>
    </>
  );
};

const Course = ({ course }) => {
  return (
    <>
      <Header nameCourse={course.name} />
      <Content partsCourse={course.parts} />
    </>
  );
};

Header.propTypes = {
  nameCourse: PropTypes.string.isRequired,
};

Part.propTypes = {
  part: PropTypes.string.isRequired,
  exercises: PropTypes.number.isRequired,
};

Content.propTypes = {
  partsCourse: PropTypes.array.isRequired,
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
};

export default Course;
