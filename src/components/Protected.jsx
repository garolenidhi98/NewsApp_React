
import { useSelector } from 'react-redux'
import { userSelect } from '../redux/user'
import { Navigate } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const Protected = ({children}) => {
    const  user  = useSelector(userSelect)
    if(!user){
      return <Navigate to="/signup"/>
    }
  return children
}

export default Protected