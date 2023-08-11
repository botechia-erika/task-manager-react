
import {Routes, Route} from 'react-router-dom'
import {Notebook} from './../components/Notebook/Notebook'
export function AppRouter (){
  return (
    <Routes>
      <Route path={'/'} element={<Notebook/>}/>  
      <Route path={'/:owner'} element={<Notebook/>}/>  
      <Route path={'/:owner/:page'} element={<Notebook/>}/>
    </Routes>
    
  )
}
