const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}
const Part = (props) => {
  return (
    <p>{props.part.name} {props.part.exercise}</p>
  )
}
const Content = (props) => {
  return (
    <>
      <Part part={props.parts[0]}/>
      <Part part={props.parts[1]}/>
      <Part part={props.parts[2]}/>
    </>
  )
}
const Total = (props) => {
  return (
    <p>Number of exercises {props.total}</p>
  )
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
      <Header course={course}/>
      <Content parts={[{name: part1, exercise: exercises1}, {name: part2, exercise: exercises2}, {name: part3, exercise: exercises3}]}/>
      <Total total={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App