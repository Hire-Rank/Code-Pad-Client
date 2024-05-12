import { Route, Routes } from 'react-router-dom'
import './App.css'
import Auth from './pages/Auth'
import CodeEditor from './pages/CodeEditor'

function App() {
  return (
    <Routes>
    <Route path='/auth' element={<Auth />} />
    <Route path='/codeeditor' element={<CodeEditor />} />
    </Routes>
  )
}

export default App
