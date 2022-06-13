import React,{useContext, useState} from 'react'
import UserContext from '../context/UserContext'

const SearchUser = () => {
    const [text, setText] = useState('');

    const { getUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault()

        if(text === '')
        {
            alert('Please type something','error')

        }
        else{
            getUser(Number(text))
            setText('')
        }
    }

    const handleChange=(e)=>{
        setText(e.target.value);

    }

  return (
    <div className='flex flex-col'>
        <form className="" onSubmit={handleSubmit}>
            <div className='form-control'>
                <div className='flex items-center my-2'>
                    <label htmlFor="Name" className='mx-2'>ID</label>
                    <input 
                        type="text" 
                        placeholder='Name' 
                        className="w-full bg-gray-200 input input-l text-black"
                        value={text}
                        onChange={handleChange} 
                    />
                </div>
                <button type='submit' className="rounded w-36 btn btn-lg">
                    Post
                </button> 

              </div>

          </form>

    </div>
  )
}

export default SearchUser