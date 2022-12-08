import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import axios from 'axios';

import SideNav from '../components/SideNav';

import '../assets/styles/SignUp.css';

const SignUp = () => {

  // Calling all Users
  const allUsers = useSelector(state => state.allUsers);

  // Calling dispatch
  const dispatch = useDispatch();

  // Navigator
  const navigator = useNavigate();

  // States

  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPassword, setCustomerPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [sex, setSex] = useState('');
  const [birthday, setBirthday] = useState({birthday: new Date()});
  const [address, setAddress] = useState('');
  const [hasError, setHasError] = useState( false );
  const [errorMessage, setErrorMessage] = useState('');

  // on Users Handlers

  const onCustomerEmailChangeHandler = event => {
    setCustomerEmail(event.target.value);
  }

  const onCustomerPasswordChangeHandler = event => {
    setCustomerPassword(event.target.value);
  }

  const onFirstNameChangeHandler = event => {
    setFirstName(event.target.value);
  }

  const onLastNameChangeHandler = event => {
    setLastName(event.target.value);
  }

  const onSexChangeHandler = event => {
    setSex(event.target.value);
  }

  const onBirthdayChangeHandler = event => {
    setBirthday(event.target.value);
  }

  const onAddressChangeHandler = event => {
    setAddress(event.target.value);
  }

  // Submit Form Handler
  const onSubmitFormHandler = async (event) => {
    // Prevent from reloading
    event.preventDefault();

    const addUsers = await axios.post('http://localhost:8080/api/v1/auth/register', {
      customerEmail,customerPassword,firstName,lastName,sex,birthday,address
    })

    // Email is already exist
    if(allUsers.filter( user => 
      user.customerEmail.trim() === customerEmail.trim()).length !== 0) {
        setHasError( true );
        setErrorMessage('Email is already exist! Please try other email address.');
    }
    // Adding all input
    else {
      alert(`Account has been created.`);
      dispatch({type: 'SIGNUP', payload: {
        customerEmail: customerEmail,
        customerPassword: customerPassword,
        firstName: firstName,
        lastName: lastName,
        sex: sex,
        birthday: birthday,
        address: address
      }
    })
     // Resetting Form
     setHasError( false );
     setErrorMessage('');
     setCustomerEmail('');
     setCustomerPassword('');
     setFirstName('');
     setLastName('');
     setBirthday('');
     setAddress('');
     // Going back to homepage
     navigator('/sign-in');
    }
  }


  return (
    <>
    <SideNav />
    <form className='form-signup' onSubmit={onSubmitFormHandler}>
      <div className='container-signup'>
        <p>Email:</p>
        <input 
        type='email' 
        placeholder='Email address...'
        onChange={onCustomerEmailChangeHandler} 
        required/>
        <p>Password:</p>
        <input 
        type='password' 
        placeholder='Password...' 
        onChange={onCustomerPasswordChangeHandler} 
        required/>
        <p>First Name:</p>
        <input 
        type='text' 
        placeholder='First name...'
        onChange={onFirstNameChangeHandler}  
        required/>
        <p>Last Name:</p>
        <input 
        type='text' 
        placeholder='Last name...'
        onChange={onLastNameChangeHandler}  
        required/>
        <div className='sex'>   
          <p>Sex:</p>
          <select
            value={sex}
            onChange={onSexChangeHandler}
          >
            <option>--SELECT--</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <p>Birthday:</p>
        <input 
        type='date'
        onChange={onBirthdayChangeHandler}  
        required/>
        <p>Address:</p>
        <input 
        type='type' 
        placeholder='Address...'
        onChange={onAddressChangeHandler}  
        required/>
        <div>
          <button type='submit'>Sign Up</button>
        </div>
      </div>
    </form>
    </>
  )
}

export default SignUp;