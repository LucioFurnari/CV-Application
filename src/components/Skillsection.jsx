import { useState } from "react"
import '../styles/PersonalSection.css'
export default function Skillsection() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState('');
  const [edit, setEdit] = useState(false);
  
  function handleInput(ev) {
    const {value} = ev.target;
    setInput(value)
  }

  function addSkill() {
    setList([...list, input])
  }

  function removeSkill(ev) {
    const {id} = ev.target;
    setList(list.filter((item,index) => id != index))
  }
  function handleValid() {
    setEdit(!edit)
  }
  return(
    <section className="skillList-container">
      <h2>Skills</h2>
        <>
        {!edit && <input onChange={handleInput}></input>}
        <ul className="skill-list">
        {list.map((item, index) => {
        return (
          <li key={index}>{item} {!edit && <button id={index} onClick={removeSkill}>x</button>}</li>
        )
        })}
        </ul>
        {!edit && <button onClick={addSkill}>Add skill</button>}
        </>
    <button onClick={handleValid}>{edit ? 'Edit' : 'Save'}</button>
    </section>
  )
}