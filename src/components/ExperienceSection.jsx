import { useState } from "react";
export default function ExperienceSection() {
  const [input, setInput] = useState({
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    description: '',
    list: [],
  })
  const [valid, setValid] = useState(false);

  const {company, position, list, description} = input

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
  function handleList() {
    setInput({
      ...input,
      list: [...list, input.description],
      description: '',
    })
  }
  return(
    <>
    <h2>Experience</h2>
    <section>
      {valid ? <h3>{company}</h3> : <input name="company" value={company} placeholder="Company" onChange={handleInput}></input>}
      {valid ? <p>{position}</p> : <input name="position" value={position} placeholder="Position" onChange={handleInput}></input>}
      <ul>
        <input name="description" placeholder="Description" onChange={handleInput} value={description}></input>
        <button onClick={handleList}>Add</button>
        {list.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </section>
    <button onClick={handleValid}>{valid ? 'Save' : 'Edit'}</button>
    </>
  )
}