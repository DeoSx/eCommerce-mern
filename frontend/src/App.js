import React from 'react'
import { Container } from 'react-bootstrap'

import Header from './components/modules/Header'
import Footer from './components/modules/Footer'

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1>eCommerce</h1>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
