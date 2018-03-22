import React from 'react'
import Block from './Block.jsx'
import Form from './Form.jsx'
import content from '../db'

function App() {
  return (
    <div>
      <h1>App name</h1>
      <Block block = { content[0] } />
      <Form/>
    </div>
  )
}

export default App
