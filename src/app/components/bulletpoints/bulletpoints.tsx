import React from 'react'
import bulletpoints from './bulletpoints.module.css'

export default function Bulletpoints() {
  return (
    <>
        <div className={bulletpoints.numbers}>
            <h1>1</h1>
            <h1>2</h1>
            <h1>3</h1>
            <h1>4</h1>
        </div>
    </>
  )
}
