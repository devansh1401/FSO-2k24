function Part({ name, exercises }) {
  return (
    <p>
      {name} {exercises}
    </p>
  );
}

function Header({course}){
  return <h1>{course}</h1>;
}

function Total({exercises}){
    return(
      <p>Number of exercises {exercises}</p>
    );
    }
function Content({ parts }) {
  return (
    <div>
      {parts.map((part, index) => (
        <Part key={index} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
}

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    { name: 'Fundamentals of React', exercises: 10 },
    { name: 'Using props to pass data', exercises: 7 },
    { name: 'State of a component', exercises: 14 },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total exercises={parts.reduce((sum, part) => sum + part.exercises, 0)} />
    </div>
  );
};

export default App;
