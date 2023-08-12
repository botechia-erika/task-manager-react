
import {Routes, Route} from 'react-router-dom'
import {Notebook} from './../pages/Notebook/Notebook'
import { Homepage } from '../pages/Homepage/Homepage'
export function AppRouter (){
  return (
    <Routes>
      <Route path={'/'} element={<Homepage/>}/>  
      <Route path={'/notebook'} element={<Notebook/>}/>  
    </Routes>
    
  )
}
