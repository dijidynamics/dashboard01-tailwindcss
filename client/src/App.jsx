import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Sidebar from '../components/Sidebar'
import Dashboard from '../components/Dashboard'
import Agents from '../components/Agents'
import Calllogs from '../components/Calllogs'
import Reports from '../components/Reports'
import Tasks from '../components/Tasks'

import 'boxicons/css/boxicons.min.css'
import Settings from '../components/Settings'
import Layout from '../components/Layout'
function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Layout><Dashboard /></Layout>} />
        <Route path='/agents' element={<Layout><Agents /></Layout>} />
        <Route path='/calllogs' element={<Layout><Calllogs/></Layout>} />
        <Route path='/reports' element={<Layout><Reports /></Layout>} />
        <Route path='/tasks' element={<Layout><Tasks /></Layout>} />
        <Route path='/settings' element={<Layout><Settings /></Layout>} />
       </Routes>
    </Router>
    </>
  )
}

export default App
