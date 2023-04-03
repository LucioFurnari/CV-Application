import { useState } from "react";
export default function ExperienceSection() {
  const input = {
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    description: '',
    list: [],
    edit: false,
  }
  const [sections, setSections] = useState([]);

  const {company, position, list, description} = input

  function addSection() {
    setSections([...sections, input])
  }

  function handleInput(ev) {
    const {name, id, value} = ev.target
    const newArr = sections.map((item, i) => {
      if(i == id) {
        return {...item, [name]: value}
      } else {
        return item
      }
    })
    setSections(newArr)
  }

  function handleValid(index) {
    const newArr = sections.map((item, i) => {
      if(i === index) {
        return {...item, edit: !item.edit}
      } else {
        return item
      }
    })
    setSections(newArr)
  }

  function handleList(ev) {
    const {id} = ev.target;
    const newArr = sections.map((item,i) => {
      if (id == i) {
        return {...item, list: [...item.list, item.description]}
      } else {
        return item
      }
    })
    setSections(newArr)
  }

  return(
    <>
    <h2>Experience</h2>
    {
    sections.map((item,i) => {
      const {edit, company, position, list, description} = item
      return(
      <section key={i}>
        {edit ? 
        <h3>{company}</h3> :
        <input name="company" value={company} placeholder="Company" onChange={handleInput} id={i}></input>}
        {edit ? 
        <p>{position}</p> :
        <input name="position" value={position} placeholder="Position" onChange={handleInput} id={i}></input>}
      <ul>
        {
        !edit 
        &&
        <><input name="description" placeholder="Description" onChange={handleInput} value={description} id={i}></input><button onClick={handleList} id={i}>Add</button></>
        }
        {list.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    <button onClick={() => handleValid(i)}>{edit ? 'Edit' : 'Save'}</button>
    </section>
        )
      })
    }
    <button onClick={addSection}>Add</button>
    </>
  )
}