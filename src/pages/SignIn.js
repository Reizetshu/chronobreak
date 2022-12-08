import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import SideNav from '../components/SideNav';

import '../assets/styles/SignIn.css';

const SignIn = () => {

  const navigate = useNavigate();
    
    const allUsers = useSelector(state => state.allUsers);

    const [customerEmail, setCustomerEmail] = useState('');
    const [customerPassword, setCustomerPassword] = useState('')
    const [login, setLogin] = useState(false);

    const onCustomerEmailChangeHandler = event => {
        setCustomerEmail(event.target.value);
    }

    const onCustomerPasswordChangeHandler = event => {
        setCustomerPassword(event.target.value);
    }

    // Submit Form Handler
    const onSignInHandler = async (event) => {
    // Prevent from reloading
    event.preventDefault();

    const checkUsers = await axios.post('http://localhost:8080/api/v1/auth/login', {
      customerEmail,
      customerPassword
    })
  
  // make the API call
  axios(checkUsers)
    .then((result) => {
      console.log(result)
      // // We will use localStorage to store User details
      // localStorage.setItem('userId', result.data.id);

      setLogin(true);
      navigate('/');
    })
    .catch((error) => {
      console.log(error)
      error = new Error();
    });
  }

  return (
    <>
      <SideNav />
    <form className='form-signin' onSubmit={onSignInHandler}>
        <div className='signin'>
            <p>Email:</p>
            <input 
            type='email' 
            placeholder='Enter email...' 
            onChange={onCustomerEmailChangeHandler}
            required/>
            <p>Password:</p>
            <input type='password' 
            placeholder='Enter password...' 
            onChange={onCustomerPasswordChangeHandler}
            required/>
            <div>
            <button type='submit'>Sign In</button>
            </div>
        </div>
    </form>
    </>
  )
}

export default SignIn;