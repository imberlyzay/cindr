import React from 'react';
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
          <input type='text' name='email' placeholder='MissScarlett@email.com' />
        </label>
        <label>
          Password
          <input type='password' name='password' placeholder="Password123!" />
        </label>
        <input type='submit' name='submit' className='button' />
      </form>
      </div>
    </div>
  )
}
