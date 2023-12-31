import { BrowserRouter } from "react-router-dom"
import GlobalStyle from "./globalStyled"
import {AppRouter} from "./router/AppRouter"
import {Sidebar} from "./components/Sidebar/Sidebar"
import i001 from './assets/img/i001.png'
import { useState } from "react"

const dataNotes = [
  {
    id: 1,
    title: "Primeira Nota",
    body: "minha nova nota"
  }
]
export function App() {
const [notes, setNotes]= useState([...dataNotes])
const icon=i001
const handleAddNote = (notes)=>{



}


  return (
    <BrowserRouter>
      <GlobalStyle/>
        <div className='App'>
        <Sidebar
        icon1={icon}
        notes={notes}
        handleAddNote={()=>handleAddNote()}
        />
        <AppRouter/>
        </div>
    </BrowserRouter>
  )
}