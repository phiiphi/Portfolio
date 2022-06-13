import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className='bg-white h-[38rem]'>
      <div className='flex text-black'>
        <div className='flex flex-col w-full md:w-1/2  mx-16 my-12'>
          <h3 className='text-2xl md:text-3xl'>Welcome Back!</h3>
          <div>
            <div class='w-full'>
              <form class='mt-6 rounded'>
                <div className='block md:flex flex-col'>
                  <div class='w-full my-2 mx-2'>
                    <input
                      class='appearance-none border rounded-xl h-12 w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline'
                      id='username'
                      type='text'
                      placeholder='Email'
                    />
                  </div>
                  <div class='w-full my-2 mx-2'>
                    <input
                      class='appearance-none border border-red rounded-xl h-12 w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline'
                      id='password'
                      type='password'
                      placeholder='Password'
                    />
                  </div>
                </div>
                <div class='flex items-center justify-center mt-4 h-10'>
                  <button
                    href='/login'
                    class='rounded-2xl flex justify-center items-center bg-[#fbb3c1] w-full h-10'
                  >
                    Login
                  </button>
                </div>
                <div className='flex flex-row items-center'>
                  <p className='items-center text-gray-400'>
                    Don't have an account?
                  </p>
                  <div class='flex items-center justify-center mx-2 h-12'>
                    <button
                      href='#'
                      class='rounded-2xl flex justify-center items-center h-12'
                    >
                      <Link to='/register'>Register</Link>
                    </button>
                  </div>
                </div>
                <div className='flex flex-row items-center'>
                  <p className='items-center text-gray-400'>Forgot Pasword?</p>
                  <div class='flex items-center justify-center mx-2 h-12'>
                    <button
                      href='#'
                      class='rounded-2xl flex justify-center items-center h-12'
                    >
                      <Link to='/#'>Reset Password?</Link>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='hidden md:flex flex-row w-1/2 my-12'>
          <div className='flex w-2/3'>
            <div className='flex h-[42rem] rounded-2xl my-10'>
              <img
                src='https://booking.luxetribes.com/images/background/back-8.jpeg'
                alt=''
                className='flex rounded-2xl h-full object-cover'
              />
            </div>
          </div>
          <div className='flex w-1/3 ml-8'>
            <div className='flex flex-col my-8'>
              <img
                src='https://booking.luxetribes.com/images/background/back-7.png'
                alt=''
                className='flex object-cover mb-10'
              />
              <img
                src='https://booking.luxetribes.com/images/background/back-6.jpeg'
                alt=''
                className='flex rounded-2xl my-10 object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
