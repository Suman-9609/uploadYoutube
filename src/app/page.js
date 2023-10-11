import Button from '@/components/Button'
import Image from 'next/image'
import Link from 'next/link'
import {FaFacebookF, FaLinkedinIn, FaGoogle, FaRegEnvelope} from 'react-icons/fa'
import {MdLock} from 'react-icons/md'


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full flex-1 px-20 text-center bg-gray-100">
        <div className=' bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl'>
          <div className='w-3/5 p-5'>
            <div className='text-left font-bold'>
              <span className='text-green-500'>Company</span>Name
            </div>
            <div className='py-10'>
              <h2 className='text-3xl font-bold text-green-500 mb-2'>Sign in to Account</h2>
              <div className='border-2 border-green-500 w-10 inline-block mb-2'></div>
              {/* Social login section */}
              <div className='flex justify-center my-2'>
                <Link href={''} className='border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-green-500 hover:text-white transition-all animation-500'>
                  <FaFacebookF />
                </Link>
                <Link href={''} className='border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-green-500 hover:text-white transition-all animation-500'>
                  <FaLinkedinIn />
                </Link>
                <Link href={''} className='border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-green-500 hover:text-white transition-all animation-500'>
                  <FaGoogle />
                </Link>
              </div>
              {/* form login section */}
              <p className='text-gray-400 mb-2'>or use your email account</p>
              <div className='flex flex-col items-center'>
                <div className='bg-gray-100 w-64 p-3 flex items-center mb-2'>
                  <FaRegEnvelope className='text-gray-400 mr-2'/>
                  <input type='email' name='email' placeholder='Email' className='bg-gray-100 outline-none text-sm flex-1' />
                </div>
                <div className='bg-gray-100 w-64 p-3 flex items-center mb-2'>
                  <MdLock className='text-gray-400 mr-2'/>
                  <input type='password' name='pwd' placeholder='Password' className='bg-gray-100 outline-none text-sm flex-1' />
                </div>

                <div className='flex justify-between w-64 mb-3'>
                  <label className='flex items-center text-xs'> 
                  <input type='checkbox' name='remember' className='mr-1' /> Remember me </label>
                  <Link href={''} className='text-xs'>Forgoet Password</Link>
                </div>

                  {/* <Button name="Sign In"/> */}
                  <Button name="Sign In" />
              </div>
 
            </div>
          </div> {/* Sign in Section  */}

          <div className='w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12'>
            <h2 className='text-2xl font-bold mb-2'>Hi Friends !</h2>
            <div className='border-2 w-10 inline-block mb-2'></div>
            <p className='mb-10'>Fill up personal informaition and start journey with us.</p>
            {/* <Link href={'/'} className='border-2 rounded-full px-12 py-2 inline-block hover:bg-white  hover:shadow-2xl hover:text-green-500 transition-all duration-500 font-semibold'>Sign Up</Link> */}
            <Button name="Sign Up"/>
          </div> {/* Sign up Section  */}
        </div>
    </main>
  )
}
