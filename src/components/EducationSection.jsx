import { useState } from "react";
export default function EducationSection() {
  const [input, setInput] = useState({
    school: '',
    title: '',
    startDate: '',
    endDate: '',
  })
  const [valid, setValid] = useState(false);
  const {school, title, startDate, endDate} = input;

  function handleInput(cev) {
    const {value,name} = ev.target;
    setInput({
      ...input,
      [name]: value,
    })
  }
  function handleValid() {
    setValid(!valid);
  }

  return (
    <>
    <h2>Education</h2>
    <section>
      {valid ? <p>{school}</p> : <input name="school" value={school} onChange={handleInput}></input>}
      {valid ? <p>{title}</p> : <input name="title" value={title} onChange={handleInput}></input>}
      {valid ? <p>{startDate}</p> : <input name="startDate" value={startDate} onChange={handleInput}></input>}
      {valid ? <p>{endDate}</p> : <input name="endDate" value={endDate} onChange={handleInput}></input>}
    </section>
    <button onClick={handleValid}>{valid ? 'Edit' : 'Save'}</button>
    </>
  )
}