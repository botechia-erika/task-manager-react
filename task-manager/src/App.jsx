import { BrowserRouter } from "react-router-dom"
import GlobalStyle from "./globalStyled"
import {AppRouter} from "./router/AppRouter"
import {Sidebar} from "./components/Sidebar/Sidebar"

export function App() {

  return (
    <BrowserRouter>
      <GlobalStyle/>
        <div className='App'>
        <Sidebar/>
    
            <AppRouter/>
        </div>
    </BrowserRouter>
  )
}