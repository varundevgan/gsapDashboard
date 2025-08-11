import React from 'react'
import Signup from './Auth/Signup'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import Companies from './components/Companies'
import Tasks from './components/Tasks'

const App = () => {
  return (
   <Router>
      <Routes>
          <Route key={'login-in'}  path='/login' element={<Signup />} />
          <Route key={'sign-in'}  path='/sign-up' element={<Signup />} />
          <Route path='dashboard' element={<Dashboard />}>
            <Route path='home' element={<Home />} />
            <Route path='companies' element={<Companies />} />
            <Route path='tasks' element={<Tasks />} />
          </Route>
      </Routes>
   </Router>
  )
}

export default App
