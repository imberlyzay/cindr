import React from 'react';
import { Link } from 'react-router-dom'
import ivy from '../cindr-ivy.png';
import paperbird from '../paper-bird.png'

export const LoginForm = () => {
  return (
      <div className='container'>
        {/* <img src={ivy}></img> */}
      <div className='login-container'>
      <form>
        <img src={paperbird} />
        <label>
          Email
          <input type='text' name='email' placeholder='ms.scarlet@email.com' />
        </label>
        <label>
          Password
          <input type='password' name='password' placeholder="password" />
        </label>
        <input type='submit' value='Submit' className='button' />
      </form>
      <Link to='/signup'>No account? Create one.</Link>
      </div>
    </div>
  )
}
