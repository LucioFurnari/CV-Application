import { useState } from "react"
export default function Skillsection() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState('');
  
  function handleInput(ev) {
    const {value} = ev.target;
    setInput(value)
  }

  function addSkill() {
    setList([...list, input])
  }
  return(
    <section className="skillList-container">
      <h2>Skills</h2>
      <input onChange={handleInput}></input>
      <ul>
      {list.map((item, index) => {
        return (
          <li key={index}>{item}</li>
        )
      })}
      </ul>
    <button onClick={addSkill}>Add skill</button>
    </section>
  )
}