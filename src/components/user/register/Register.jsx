import React,{useState, useContext} from "react";
import { BsPerson} from "react-icons/bs";
import { FaUpload } from "react-icons/fa";
import { Link } from 'react-router-dom'
import UserContext from "../../context/UserContext";

const Register = () => {

  const { registerUser} = useContext(UserContext)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const [option_feilds, setOptionalFeilds] = useState('')

  const handleUsernameChange=(e)=>{
    setUsername(e.target.value);
}

const handlePasswordChange=(e)=>{
  setPassword(e.target.value);
}

const handleEmailChange=(e)=>{
  setEmail(e.target.value);
}
const handleSubmit=(e)=>{
    e.preventDefault();
    if((username || password || email ) === '' )
    {
        alert('Please type something','error')

    }
    else{

      registerUser(username,password,email)

        // setText('')
    }

}

  return (
    <div className='bg-white'>
      <div className='flex text-black mx-12'>
        <div className='flex flex-col w-full md:w-1/2 my-12'>
          <h3 className='text-2xl md:text-3xl'>
            Become a part of the <br /> Luxe Tribes!
          </h3>
          <div className='flex flex-row my-8'>
            <div className='flex overflow-hidden bg-gray-300 rounded-full w-16 h-16'>
              <BsPerson className='flex overflow-hidden text-7xl rounded-full' />
            </div>
            <div className='mx-4'>
              <h3 className='text-xl'>Add your photo (optional)</h3>
              <p className='text-sm text-gray-400'>
                Supported formats: jpg, jpeg, png.
              </p>
              <div className='flex flex-row'>
                <FaUpload />
                <p className='px-1'>click to upload</p>
              </div>
            </div>
          </div>
          <div>
            <div className='w-full border-t-2'>
              <form className='bg-white mt-6 rounded' onSubmit={handleSubmit}>
              <div className='block md:flex flex-row'>
                  <div className='w-full mx-2'>
                    <input
                      className='appearance-none border border-red rounded h-12 w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline'
      
                      type='text'
                      placeholder='Username'
                      value={username}
                      onChange={handleUsernameChange}

                    />
                  </div>
                </div>
                <div className='block md:flex flex-row'>
                  <div className='w-full my-2 md:w-1/2 mx-2'>
                    <input
                      className='appearance-none border rounded h-12 w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline'
      
                      type='text'
                      placeholder='First Name'
                    />
                  </div>
                  <div className='w-full my-2 md:w-1/2 mx-2'>
                    <input
                      className='appearance-none border rounded h-12 w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline'
                        type='text'
                      placeholder='Surname'
                    />
                  </div>
                </div>
                <div className='block md:flex flex-row'>
                  <div className='w-full my-2 md:w-1/2 mx-2'>
                    <input
                      className='appearance-none border rounded h-12 w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline'
      
                      type='text'
                      placeholder='Middle Name'
                    />
                  </div>
                  <div className='w-full my-2 md:w-1/2 mx-2'>
                    <input
                      className='appearance-none border rounded h-12 w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline'
      
                      type='text'
                      placeholder='DOB'
                    />
                  </div>
                </div>
                <div className='block md:flex flex-row'>
                  <div className='flex flex-row w-full md:w-1/2 mx-2 border rounded h-12 px-2 py-3'>
                    <select className='w-full'>
                      <option>Gender</option>
                      <option>Female</option>
                      <option>Male</option>
                      <option>Others</option>
                    </select>
                  </div>
                  <div className='w-full my-2 md:w-1/2 mx-2'>
                    <input
                      className='appearance-none border rounded h-12 w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline'
      
                      type='email'
                      placeholder='Email'
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </div>
                </div>
                <div className='block md:flex flex-row'>
                <div className='w-full my-2 md:w-1/2 mx-2'>
                    <input
                      className='appearance-none border rounded h-12 w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline'
      
                      type='text'
                      placeholder='National ID'
                    />
                  </div>
                  <div className='w-full my-2 md:w-1/2 mx-2'>
                    <input
                      className='appearance-none border rounded h-12 w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline'
                      type='phone'
                      placeholder='Primary Phone'
                    />
                  </div>
                </div>
                <div className='block md:flex flex-row'>
                  <div className='w-full md:w-1/2 mx-2'>
                    <input
                      className='appearance-none border rounded h-12 w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline'
      
                      type='text'
                      placeholder='Secondary Phone'
                    />
                  </div>
                  <div className='w-full md:w-1/2 mx-2'>
                    <input
                      className='appearance-none border border-red rounded h-12 w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline'
      
                      type='password'
                      placeholder='Password'
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </div>
                </div>

                <div className='block md:flex flex-row'>
                  <div className='flex flex-row w-full md:w-1/2 mx-2 border rounded h-12 px-2 py-3'>
                    <select className='w-full'>
                      <option>Created By</option>
                      <option>Female</option>
                      <option>Male</option>
                      <option>Others</option>
                    </select>
                  </div>
                  <div className='w-full md:w-1/2 mx-2'>
                    <input
                      className='appearance-none border border-red rounded h-12 w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline'
      
                      type='password'
                      placeholder='Old Password'
                    />
                  </div>
                </div>
                
                <div className='flex items-center justify-center mt-4 h-10'>
                  <button type="submit"
                    className='rounded-2xl flex justify-center items-center bg-[#fbb3c1] w-full h-10'
                  >
                    Register
                  </button>
                </div>
                {/* <div className='flex flex-row items-center my-2'>
                  <p className='items-center text-gray-400'>
                    Already having Account?
                  </p>
                  <div className='flex items-center justify-center mx-2 h-12'>
                    <button
                      href='#'
                      className='rounded-2xl flex justify-center items-center h-12'
                    >
                      <Link to='/login'> Log In</Link>
                    </button>
                  </div>
                </div> */}
              </form>
            </div>
          </div>
        </div>
        <div className='hidden md:flex flex-row w-1/2'>
          <div className='flex items-center ml-8'>
            <div className='flex justify-center items-center h-96'>
              <img
                src='https://booking.luxetribes.com/images/background/back-4.svg'
                alt=''
                className='flex justify-center h-full object-cover items-center'
              />
            </div>
          </div>
          <div className='flex  justify-items-end ml-8'>
            <div className='flex flex-col my-8'>
              <img
                src='https://booking.luxetribes.com/images/background/back-5.svg'
                alt=''
                className='flex object-cover my-4'
              />
              <img
                src='https://booking.luxetribes.com/images/background/back-5.svg'
                alt=''
                className='flex object-cover my-4'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;