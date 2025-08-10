import React from 'react'
import Signup from './Auth/Signup'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'

const App = () => {
  return (
   <Router>
      <Routes>
        <Route>
          <Route key={'login-in'} exact path='/login' element={<Signup />} />
          <Route key={'sign-in'} exact path='/sign-up' element={<Signup />} />
          <Route path='dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
   </Router>
  )
}

export default App
