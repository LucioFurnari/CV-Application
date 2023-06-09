import { useState } from "react"
import { TiMail, TiDevicePhone, TiSocialLinkedin } from "react-icons/ti";
import { VscGithub } from "react-icons/vsc";
import { IconContext } from "react-icons";
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
    summary: '',
  })
  const {name, profession, number, email, linkedin, github, direction, summary} = input
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
      {valid ? <h1>{name}</h1> :
      <input name="name" onChange={handleInput} value={name} placeholder="Name"></input>}
      {valid ? <h2>{profession}</h2> :
      <input name="profession" onChange={handleInput} value={profession} placeholder="Profession"></input>}
    </section>
    <section className="contact-section">
      {valid ? <span><IconContext.Provider value={{size: "1.5em"}}><TiDevicePhone /></IconContext.Provider> {number} | </span> :
      <input name="number" onChange={handleInput} value={number} placeholder="Number"></input>}
      {valid ? <span><IconContext.Provider value={{size: "1.5em"}}><TiMail/></IconContext.Provider><a href={email} target="_blank">{email} </a> | </span>  :
      <input name="email" onChange={handleInput} value={email} placeholder="Email"></input>}
      {valid ? <span><IconContext.Provider value={{size: "1.5em"}}><VscGithub/></IconContext.Provider><a href={'https://github.com/'+ github} target="_blank"> Github </a> | </span>: 
      <input name="github" onChange={handleInput} value={github} placeholder="Github"></input>}
      {valid ? <span><IconContext.Provider value={{size: "1.5em"}}><TiSocialLinkedin/></IconContext.Provider><a href={linkedin} target="_blank"> Linkedin </a> </span> :
      <input name="linkedin" onChange={handleInput} value={linkedin} placeholder="Linkedin profile"></input>}
    </section>
    <section className="contact-section">
      {valid ? <p>{summary}</p> : 
      <textarea name="summary" placeholder="Summary" onChange={handleInput} value={summary}></textarea>
      }
    </section>
    <button onClick={handleValid}>{valid ? 'Edit' : 'Save'}</button>
    </>
  )
}