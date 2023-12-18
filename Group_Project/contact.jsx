import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
      ` <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline norder-b-4 border-gray-500'>Contact</p>
                <p className='py-6'>Submit the form below to get in touch with me.</p>
            </div>

            <div className='flex justfy-center items-center'>
                <form action='https://getform.io/f/c1b470f9-72c6-4a11-8b69-3c5c05f42810' method="POST" className='flex flex-col w-full md:w-1/2 '>
                    <input type='text' name="name" placeholder='Enter your name' className='p-3 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <input type='text' name="Email" placeholder='Enter your Email' className='my-4 p-3 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <textarea name='message' placeholder='Enter your message' rows="10" className='p-3 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>
                </form>
            </div>
        </div>
    </div>
  )
};

export default Contact
