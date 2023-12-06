import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { action } from "../redux/user";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

  const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registerUser = async(e)=>{
    e.preventDefault()
    try {
      if(!name && !email && !password){
        return alert("You have missed some thing. Please enter")
      }
      if(password.length < 6){
        return alert("Enter a larger password")
      }
      await createUserWithEmailAndPassword(auth,email,password).then((userCredential)=>{
        updateProfile(userCredential.user, {
          displayName: name,
        }).then(dispatch(action.login({
          email: userCredential.user.email,
          displayName: name,
          uid: userCredential.user.uid
        })))
        navigate("/")
      })
    } catch (error) {
      console.log("error" ,error)
    }


  }

  return (
    <form onSubmit={(e) => registerUser(e)}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="name"
          className="form-control"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input
          type="email"
          className="form-control"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Signup;
