import { useState } from "react";
export default function EducationSection() {
  const input = {
    school: '',
    title: '',
    startDate: '',
    endDate: '',
    edit: false,
  }
  const [sections, setSections] = useState([]);
  const {school, title, startDate, endDate} = input;

  function addSection() {
    setSections([...sections, input])
  }

  function handleInput(ev) {
    const {id, value, name} = ev.target;
    const newArr = sections.map((item,i) => {
      if (id == i) {
        return {...item, [name]: value}
      } else {
        return item
      }
    })
    setSections(newArr)
  }
  function handleValid(index) {
    const newArr = sections.map((item,i) => {
      if(index == i) {
        return {...item, edit: !item.edit}
      } else {
        return item
      }
    })
    setSections(newArr);
  }

  return (
    <>
    <h2>Education</h2>
    {
      sections.map((item,i) => {
        const {school, title, startDate, endDate, edit} = item;
        return(
          <section key={i}>
            {edit ? <p>{school}</p> : <input name="school" value={school} id={i} onChange={handleInput}></input>}
            {edit ? <p>{title}</p> : <input name="title" value={title} id={i} onChange={handleInput}></input>}
            {edit ? <p>{startDate}</p> : <input name="startDate" value={startDate} id={i} onChange={handleInput}></input>}
            {edit ? <p>{endDate}</p> : <input name="endDate" value={endDate} id={i} onChange={handleInput}></input>}
            <button onClick={()=> {handleValid(i)}}>{edit ? 'Edit' : 'Save'}</button>
          </section>
        )
      })
    }
    <button onClick={addSection}>Add</button>
    </>
  )
}