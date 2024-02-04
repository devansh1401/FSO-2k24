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

function Content({ part1, exercises1, part2, exercises2, part3, exercises3 }) {
  return (
    <div>
      <Part name={part1} exercises={exercises1} />
      <Part name={part2} exercises={exercises2} />
      <Part name={part3} exercises={exercises3} />
    </div>
  );
}

function Total({exercises}){
  return(
    <p>Number of exercises {exercises}</p>
  );
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course = {course}/>
      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />
      <Total exercises={exercises1+exercises2+exercises3}/>
    </div>
  )
}

export default App

                   // By maps in JS 


// function Part({ name, exercises }) {
//   return (
//     <p>
//       {name} {exercises}
//     </p>
//   );
// }

// function Header({course}){
//   return <h1>{course}</h1>;
// }

// function Total({exercises}){
//     return(
//       <p>Number of exercises {exercises}</p>
//     );
//     }
// function Content({ parts }) {
//   return (
//     <div>
//       {parts.map((part, index) => (
//         <Part key={index} name={part.name} exercises={part.exercises} />
//       ))}
//     </div>
//   );
// }

// const App = () => {
//   const course = 'Half Stack application development';
//   const parts = [
//     { name: 'Fundamentals of React', exercises: 10 },
//     { name: 'Using props to pass data', exercises: 7 },
//     { name: 'State of a component', exercises: 14 },
//   ];

//   return (
//     <div>
//       <Header course={course} />
//       <Content parts={parts} />
//       <Total exercises={parts.reduce((sum, part) => sum + part.exercises, 0)} />
//     </div>
//   );
// };

// export default App;
