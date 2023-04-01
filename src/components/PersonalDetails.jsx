import { useState } from "react"
import '../styles/PersonalSection.css'

export default function PersonalDetails() {
  const [input, setInput] = useState({
    name: '',
    profession: '',
    number: '',
    email: '',
    linkedin: '',
    github:'',
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
    <section className="name-section">
      {valid ? <h1>{input.name} </h1> : <input name="name" onChange={handleInput} value={input.name} placeholder="Name"></input> }
      {valid ? <h2>{input.profession} </h2> : <input name="profession" onChange={handleInput} value={input.profession} placeholder="Profession"></input>}
    </section>
    <section className="contact-section">
      {valid ? <p> {input.number} | </p> : <input name="number" onChange={handleInput} value={input.number} placeholder="Number"></input>}
      {valid ? <span><a href={input.email} target="_blank">{input.email} </a> |</span>  : <input name="email" onChange={handleInput} value={input.email} placeholder="Email"></input>}
      {valid ? <span><a href={'https://github.com/'+ input.github} target="_blank"> Github </a> | </span>: <input name="github" onChange={handleInput} value={input.github} placeholder="Github"></input>}
      {valid ? <span><a href={input.linkedin} target="_blank"> Linkedin </a> </span> : <input name="linkedin" onChange={handleInput} value={input.linkedin} placeholder="Linkedin profile"></input>}
    </section>
    <button onClick={handleValid}>{valid ? 'Edit' : 'Save'}</button>
    </>
  )
}