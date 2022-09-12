interface ButtonProps {
  title: string
}

function Button(props: ButtonProps) {
  return (
    <button>{props.title}</button>
  )
}

function App() {
  return (
    <>
      <Button title="Button 1"></Button>
      <Button title="Button 2"></Button>
      <Button title="Button 3"></Button>
      <Button title="Button 4"></Button>
      <Button title="Hello World!"></Button>
    </>
  )
}

export default App
