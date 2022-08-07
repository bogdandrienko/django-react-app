import React from 'react'
import * as navbars from '../components/navbars'
import * as footers from '../components/footers'

export function Base1({children}) {
  return (
    <div>
        <navbars.Navbar1></navbars.Navbar1>
        <main>
            {children}
        </main>
        <footers.Footer1></footers.Footer1>
    </div>
  )
}
