import React from 'react'

function Form() {

  return (
    <form className = 'form' >
      <input type="text" name='firstName' placeholder='first name'/>
      <input type="text" name='lastName' placeholder='last name'/>
      <input type="email" name='email' placeholder='e-mail'/>
      <input type="password" name='password' placeholder='password'/>
      <button type='submit'>Enter</button>
    </form>
  )
}

export default Form
