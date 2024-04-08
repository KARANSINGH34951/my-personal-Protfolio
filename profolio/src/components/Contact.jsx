import React from 'react'
import img from '../data/image.png'

const Contact = () => {
  return (
  <section id='contact'>
    <div id="contact" className=" grid lg:grid-cols-4 mx-auto h-auto my-auto w-auto items-center text-lg m-auto justify-center">

    <div className='bg-blue-500-500 col-span-2 w-full h-full m-auto animate__animated animate__bounceIn'>
      <div className='flex flex-col p-10 w-full  h-full items-center text-center justify-center'>
          <img src={img}/>
          {/* <h1 className='text-5xl mb-10'><i>Let's collaborate and create something extraordinary together</i></h1> */}

         

          {/* <p className='text-2xl font-bold text-white'>Let's connect and collaborate on exciting projects! Whether you have an idea to discuss, a question to ask, or simply want to say hello, I'm all ears. Drop me a message, and let's bring our ideas to life together</p> */}
      </div>
    </div>

    <div className='text-white col-span-2 w-auto h-full'>

      <div className='flex flex-col justify-center items-center md-10 md:m-20 lg:m-20 p-5 md:p-10 lg:p-10 py-10 gap-6 w-auto border-4 border-white'>
          <label htmlFor='username'><strong>Name : </strong> <input type='text' id='username' placeholder='Enter your Name' className='border p-2 border-black rounded-md  w-auto lg:w-[250px] md:w-[250px] h-[35px]'></input></label>

          <label htmlFor='email'><strong>Email : </strong> <input type='email' id='email' placeholder='Enter your email' className='border p-2 border-black rounded-md  w-auto lg:w-[250px] md:w-[250px] h-[35px]'></input></label>


          <label htmlFor='subject'><strong>subject : </strong> <input type='text' id='subject' placeholder='Related to?' className='border p-2 text-black border-black rounded-md  w-auto lg:w-[250px] md:w-[250px] h-[35px]'></input></label>

          <label htmlFor='textarea'><strong>More details</strong> </label>

          <textarea name="More details" placeholder='Anything you want to discuss' id="textarea" cols="25" rows="5" className='border text-black border-black p-2 w-auto'></textarea>

          <label htmlFor='submitbtn' className='border bg-white text-black border-white'>
            <button type='submit' className='border bg-white border-white p-2 rounded-lg'>Submit</button>
          </label>
      </div>
    </div>

</div>  

  </section>
  )
}

export default Contact
