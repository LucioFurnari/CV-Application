import { useState } from "react";
import '../styles/ExperienceSection.css'
export default function ExperienceSection() {
  const input = {
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    description: '',
    location: '',
    list: [],
    edit: false,
  }
  const [sections, setSections] = useState([]);

  const {company, position, list, description} = input

  function addSection() {
    setSections([...sections, input])
  }

  function deleteSection(ev) {
    const {id} = ev.target;
    const newArr = sections.filter((item, i) => id != i)
    setSections(newArr)
  }

  function deleteList(index, ev) {
    const {id} = ev.target;
    const newArr = sections.map((item,i) => {
      if(index == i) {
        return {...item, list: item.list.filter((item,i) => id != i)}
      } else {
        return item
      }
    })
    setSections(newArr)
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
      const {edit, company, position, list, description, startDate, endDate, location} = item
      return(
      <section key={i} className="experience-section">
        {edit ? 
        <div className="data-container">
          <div>
          <h3>{company}</h3>
          <p>{position}</p>
          </div>
          <div>
            <p>{location}</p>
            <p>{startDate}</p>
          </div>
        </div>
        :
        <div className="inputs-container">
        <fieldset>
          <input
          name="company" 
          value={company} 
          placeholder="Company" 
          onChange={handleInput} 
          id={i}></input>
          <input
          name="position"
          value={position}
          placeholder="Position"
          onChange={handleInput}
          id={i}></input>
        </fieldset>
        <fieldset>
          <input
          name="location"
          value={location}
          placeholder="Location"
          onChange={handleInput}
          id={i}
          ></input>
          <input
          name="startDate"
          value={startDate}
          placeholder="Start Date"
          onChange={handleInput}
          id={i}
          ></input>
        </fieldset>
        </div>
        }
        <fieldset>
        {!edit &&
        <textarea 
          name="description"
          placeholder="Description"
          onChange={handleInput}
          value={description}
          id={i}>
        </textarea>
        }
        <ul>
          {
          list.map((item, index) => {
          return(
          <li key={index}>{item} 
          {!edit && <button onClick={(ev) => deleteList(i,ev)} id={index}>Delete</button>}
          </li>)
          })
          }
        </ul>
        <button onClick={handleList} id={i}>Add</button>
        </fieldset>
    <button onClick={() => handleValid(i)}>{edit ? 'Edit' : 'Save'}</button>
    <button id={i} onClick={deleteSection}>Delete</button>
    </section>
        )
      })
    }
    <button onClick={addSection}>Add</button>
    </>
  )
}