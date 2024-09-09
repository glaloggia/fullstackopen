const Header = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
    </>
  )  
}

const Part = (props) => {
  return (
    <>
      <p>{props.name} {props.exercises}</p>
    </>
  )  
}

const Content = (props) => {
  return (
    <>
      <Part name={props.info[0].name} exercises={props.info[0].excercises}></Part>
      <Part name={props.info[1].name} exercises={props.info[1].excercises}></Part>
      <Part name={props.info[2].name} exercises={props.info[2].excercises}></Part>
    </>
  )  
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.total}</p>
    </>
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

  const info = [
    {name: part1, excercises:exercises1},
    {name: part2, excercises:exercises2},
    {name: part3, excercises:exercises3}
  ]

  return (
    <div>
      <Header name={course}/>
      <Content info={info}/>
      <Total total = {exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App