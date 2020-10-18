import React from 'react'
import { Container } from 'react-bootstrap'

import Home from './pages/Home'

import Header from './components/modules/Header'
import Footer from './components/modules/Footer'

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Home />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
