import React,{useContext, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import UserContext from '../context/UserContext'
import UserItem from './UserItem'

const UserResults = () => {
    const { user, getUser  } = useContext(UserContext)

    const params = useParams();

    useEffect(() => {
      getUser((params.id))
    }, [])

    
  return (
    <div>
        <div className='flex items-center justify-center'>
        <div className='bg-gray-300'>
            {/* {user.name} */}
        </div>
    </div>

    </div>
  )
}

export default UserResults