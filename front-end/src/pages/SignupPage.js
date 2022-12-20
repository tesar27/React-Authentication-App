import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useToken } from '../auth/useToken';

const SignupPage = () => { 
 const [, setToken] = useToken();

 const [emailValue, setEmail] = useState('');
 const [passwordValue, setPassword] = useState('');
 const [confirmPassword, setConfirmPassword] = useState('');
 const [errorMessage, setErrorMessage] = useState('');

 const navigate = useNavigate();

 const onSignupClicked = async () => {
  try {
    const response = await axios.post('/api/signup', {
      email: emailValue,
      password: passwordValue,
  });
    const { token } = response.data;
    setToken(token);
    navigate('/please-verify');
  } catch (error) {
    console.log(error);
    setErrorMessage(error.response.data);
  }
  
}

 return (
   <div className="mx-auto block p-6 rounded-lg shadow-lg bg-white max-w-sm ">
   <div className='form-group mb-6'>
    <label className="text-3xl form-label inline-block mb-2 text-gray-700">Sign Up</label>
    { errorMessage && <div> The email already exists </div>}
    <input
     className='input-primary'
     value={emailValue}
     type="email"
     onChange={e => setEmail(e.target.value)}
     placeholder="example@mail.com"/>
   </div>
   <div className='form-group mb-6'>
     <input 
     className='input-primary'
     value={passwordValue}
     placeholder="Input password"
     type="password"
      onChange={e => setPassword(e.target.value)}/>
   </div>
   <div className='form-group mb-6'>
     <input 
     className='input-primary'
     value={confirmPassword}
     placeholder="Confirm password"
     type="password"
      onChange={e => setConfirmPassword(e.target.value)}/>
   </div>
   <hr />
     <button type='button' className="btn-primary mt-5 w-full"
      disabled={!emailValue || !passwordValue || passwordValue !== confirmPassword}
      onClick={onSignupClicked}>Log In</button>
      <div>
      <Link to="/login">Already have an account?</Link>
      </div>
  </div>
 )
}

export default SignupPage;