import {useState} from "react";
import { auth } from '../firebase';
import { useDispatch } from "react-redux";
import { action } from "../redux/user";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin =  (e) => {
    e.preventDefault();

    try {
       signInWithEmailAndPassword(auth, email, password).then((userCredential)=>{
        dispatch(action.login({
          email: userCredential.user.email,
          displayName: userCredential.user.displayName,
          uid: userCredential.user.uid
        }))
        navigate("/")
       }) 
      // User successfully logged in
    } catch (error) {
      console.error('Error logging in:', error.message);
      // Handle login error (e.g., show an error message)
    }
  };
  return (
    <form onSubmit={(e)=>handleLogin(e)}>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input type="email" className="form-control" required onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input type="password" className="form-control" required  onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Login;
