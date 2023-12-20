import React from 'react'

import Header from './Component/Header'
import Home from './Component/Home'
import Footer from './Component/Footer'
import Contact from './Component/Contact'
import Services from './Component/Services'

import './Styles/app.scss'
import './Styles/header.scss'
import './Styles/footer.scss'
import './Styles/home.scss'
import './Styles/contact.scss'
import './Styles/mediaquery.scss'


import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

function App() {
  return (
   
    <Router>
      
  <Header />
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/contact' element={<Contact />} />
<Route path='/services' element={<Services/>} />
</Routes>
<Footer />
  </Router>
  )
}

export default App