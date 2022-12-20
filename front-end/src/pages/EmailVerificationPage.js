import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EmailVerificationPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
      setTimeout(() => {
         navigate('/'); 
      }, 3000);
    }, [navigate]);
    

    return (
      <div>
         <h1>Thanks for Signing up!</h1>
         <p>
            A verification email has been sent to the email address you provided.
            Please verify your email to unlock full site features.
         </p>
      </div>
    );
}

export default EmailVerificationPage;