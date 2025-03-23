import React from 'react'
import Context from './Context'
import Header from './Header'
import Mmain from './Mmain'

function FullPage() {
  return (
    <>
        <Context>
            <Header />
            <Mmain />
        </Context>
    </>
  )
}

export default FullPage