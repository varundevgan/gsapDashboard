import React from 'react'
import Signup from './Auth/Signup'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

const App = () => {
  return (
   <Router>
      <Routes>
        <Route>
          <Route key={'login-in'} exact path='/login-in' element={<Signup />} />
          <Route key={'sign-in'} exact path='/sign-up' element={<Signup />} />
        </Route>
      </Routes>
   </Router>
  )
}

export default App
