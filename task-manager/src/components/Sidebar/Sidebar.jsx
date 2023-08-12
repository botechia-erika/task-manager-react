import {useState} from 'react'

import { SidebarContainer } from './styledSidebar'
export function Sidebar ({icon1, notes, handleAddNote}) {
  const [ownersName, setOwnersName] = useState("BLÁHPad")




  const handleCancel = ()=>{}
return (
  <SidebarContainer className='app-sidebar'>
    <div className='app-sidebar-header'>
      <h1>
          <img src={icon1} alt={"LOGO ICON da BLÁHPad"} />
          {ownersName}
      </h1>
      <button onClick={handleAddNote()}>
          <span>
              <i className="fa-solid fa-circle-plus" ></i>
          </span>
        CriarBLÁH
      </button>
      </div>
      <div className='app-sidebar-notes'>
      {notes.map((note, indice)=>(
<div className='app-sidebar-note' key={note.id}>
    <div className='sidebar-note-title'>
      <strong>#0{note.id}:{note.title}</strong>
      <button onClick={handleCancel()}> 
        <span>
        <i className="fa-solid fa-circle-xmark"></i>
        </span>  CancelaBLÁH
      </button>
    </div>
      <p> {note.body}</p>
      <small className='note-meta'>
        {note.lastUpdate}
      </small>
      </div>
      ))
      }
       </div>
    </SidebarContainer>
  )
}

