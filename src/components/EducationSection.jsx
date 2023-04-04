import { useState } from "react";
import '../styles/EducationSection.css'

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

  function deleteSection(ev) {
    const {id} = ev.target;
    const newArr = sections.filter((item, i) => id != i)
    setSections(newArr)
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
          <section key={i} className="education-section">
            {edit ? 
            <div className="data-container">
            <div>
              <p>{school}</p>
              <p>{title}</p>
            </div>
            <div>
              <p>{startDate}</p>
              <p>{endDate}</p>
            </div>
            </div>
            :
            <div className="inputs-container">
            <fieldset>
              <input name="school" placeholder="School" value={school} id={i} onChange={handleInput}></input>
              <input name="title" placeholder="Title" value={title} id={i} onChange={handleInput}></input>
            </fieldset>
            <fieldset>
              <input name="startDate" placeholder="Start Date" value={startDate} id={i} onChange={handleInput}></input>
              <input name="endDate" placeholder="End Date" value={endDate} id={i} onChange={handleInput}></input>
            </fieldset>
            </div>
            }
            <button onClick={()=> {handleValid(i)}}>{edit ? 'Edit' : 'Save'}</button>
            <button id={i} onClick={deleteSection}>Delete</button>
          </section>
        )
      })
    }
    <button onClick={addSection}>Add</button>
    </>
  )
}