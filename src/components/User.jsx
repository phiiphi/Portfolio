import React, {useState} from 'react'

const User = () => {
    const [text, setText] = useState('');

    // const { users, searchUsers, clearUsers } = useContext(GitHubContext)
    // const { setAlert } = useContext(AlertContext)

    const handleChange=(e)=>{
        setText(e.target.value);

    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(text === '')
        {
            alert('Please type something','error')

        }
        else{
            setText('')
        }

    }

  return (
      <div className='flex flex-col justify-between items-center bg-gray-400'>
          <form onSubmit={handleSubmit} className="">
            <div className='form-control'>
                <div className='flex items-center my-2'>
                    <label htmlFor="Name" className='mx-2'>Name</label>
                    <input 
                        type="text" 
                        placeholder='Name' 
                        className="w-full bg-gray-200 input input-l text-black" 
                        value={text}
                        onChange={handleChange}
                    />
                </div>
                <div className='flex items-center my-2'>
                    <label htmlFor="Name" className='mx-2'>Default</label>
                    <input type="checkbox" checked="checked" className="checkbox"/>
                </div>

                <select className="select w-full max-w-xs my-2">
                    <option disabled selected>Created</option>
                    <option>Approved</option>
                    <option>Created</option>
                    <option>Deactivated</option>
                    <option>Suspended</option>
                    <option>Delete</option>
                    <option>Closed</option>
                    <option>Registered</option>
                    <option>Vital Done</option>
                    <option>Diagonosed</option>
                    <option>Billed</option>
                    <option>Pending Lab</option>
                    <option>Pending Pharmacy</option>
                </select>
               
                <button type='submit' className="rounded w-36 btn btn-lg">
                    Post
                </button> 

              </div>

          </form>

      </div>
    
  )
}

export default User