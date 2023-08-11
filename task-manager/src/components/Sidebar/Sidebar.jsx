import {useState} from 'react'
import { SidebarContainer } from './styledSidebar'
export function Sidebar () {
  const [ownersName, setOwnersName] = useState("MyNotes")
  return (
    <SidebarContainer className='app-sidebar'>
      <div className='app-sidebar-header'>
        <h1>{ownersName}</h1>
      </div>
    </SidebarContainer>
  )
}

