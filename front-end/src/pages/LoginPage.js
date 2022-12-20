import { useState, useEffect  } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useToken } from '../auth/useToken';
import { useQueryParams } from '../util/useQueryParams';

const LoginPage = () => { 
 const [, setToken] = useToken();

 const [emailValue, setEmail] = useState('');
 const [passwordValue, setPassword] = useState('');
 const [errorMessage, setError ] = useState('');

 const [googleOauthUrl, setGoogleOauthUrl] = useState('');
 const { token: oauthToken } = useQueryParams();

 const navigate = useNavigate();
 
 useEffect(() => {
  if (oauthToken) {
      setToken(oauthToken);
      navigate('/user');
  }
}, [oauthToken, setToken, navigate]);

 useEffect(() => {
  const loadOauthUrl = async () => {
      try {
          const response = await axios.get('/auth/google/url');
          const { url } = response.data;
          setGoogleOauthUrl(url);
      } catch (e) {
          console.log(e);
      }
  }
  loadOauthUrl();
}, []);


 const onLoginClicked = async () => {
  try {
    const response = await axios.post('/api/login', {
      email: emailValue,
      password: passwordValue,
    });
    navigate('/user');
    const { token } = response.data;
    setToken(token);
  } catch (error) {
    setError(error);
  }
  
 }

 return (
  <div className="mx-auto block p-6 rounded-lg shadow-lg bg-white max-w-sm justify-center">
   <div className='form-group mb-6'>
    <label className="text-3xl form-label inline-block mb-2 text-gray-700">Login</label>
    { errorMessage && <div> {errorMessage} </div>}
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
   <hr />
     <button disabled={!emailValue || !passwordValue}
       className="btn-primary mt-5 w-full"
      onClick={onLoginClicked}>Log In</button>
      <div>
      <Link to="/forgot-password">Forgot password?</Link>
      </div>
      <div>
      <Link to="/signup">Do not have an account yet?</Link>
      </div>
      <button disabled={!googleOauthUrl}
       className="btn-primary"
       onClick={() => { window.location.href = googleOauthUrl}}>
        Login with Google </button>
  </div>
 )
}

export default LoginPage;