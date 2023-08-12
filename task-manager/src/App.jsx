import { BrowserRouter } from "react-router-dom"
import GlobalStyle from "./globalStyle"
import {AppRouter} from "./router/AppRouter"
import {Sidebar} from "./components/Sidebar/Sidebar"
import i001 from './assets/img/i001.png'
import { useState } from "react"

const dataNotes = [
  {
    id: 1,
    title: "Iniciar Nota",
    body: "minha nova nota"
  }
]
export function App() {
const [notes, setNotes]= useState([...dataNotes])
const icon=i001

  return (
    <BrowserRouter>
      <GlobalStyle/>
        <div className='App'>
        <Sidebar
        icon1={icon}
        notes={notes}
        />
        <AppRouter/>
        </div>
    </BrowserRouter>
  )
}