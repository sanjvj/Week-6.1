import { useState } from "react";
import React,{Fragment} from "react";
function App() {
  const [title, setTitle] = useState("Sanjay");
  function change() {
    setTitle(Math.random());
  }
  
  return (
    <div>
      <button onClick={change}>Click me to change title</button>
      <Header title={title}></Header>
      <Header title={title}></Header>
      <Header title="Surya"></Header>
      <Header title="Surya"></Header>
      <Header title="Surya"></Header>
      <Header title="Surya"></Header>
    </div>
  )
}

const Header = React.memo(function Header({ title }) {
  return <div>{title}</div>;
})

export default App;
