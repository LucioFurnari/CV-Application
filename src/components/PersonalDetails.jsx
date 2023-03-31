import { useState } from "react"
import '../styles/PersonalSection.css'

export default function PersonalDetails() {
  const [input, setInput] = useState({
    name: '',
    profession: '',
    number: '',
    email: '',
    direction: '',
  })
  const [valid, setValid] = useState(false);

  function handleInput(ev) {
    const {name} = ev.target
    setInput({
      ...input,
      [name]: ev.target.value,
    })
  }
  function handleValid() {
    setValid(!valid);
  }
  return (
    <>
      {valid ? <p>{input.name} </p> : <input name="name" onChange={handleInput} value={input.name}></input> }
      {valid ? <p>{input.profession} </p> : <input name="profession" onChange={handleInput} value={input.profession}></input>}
      {valid ? <p>{input.number}</p> : <input name="number" onChange={handleInput} value={input.number}></input>}
      <button onClick={handleValid}>Edit</button>
    </>
  )
}