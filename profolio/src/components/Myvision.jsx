import React from 'react'
import vision from '../data/vision.jpeg'

const Myvision = () => {
  return (
  
      <div id='myvision' className='h-auto w-auto flex flex-col lg:flex-row  lg:p-[150px] sm::p-[100px] p-[50px] gap-5 sticky'>
       
        <div className='col-span-1 bg-black flex justify-center items-center w-full h-full m-auto'>
           <img className='col-span-1 object-contain flex-shrink' src={vision} />
        </div>

        <div className='col-span-1 w-full lg:w-full lg:h-full text-white flex flex-col pt-14 items-center text-center' >
          <h1 className='title-font sm:text-4xl text-3xl mb-4 text-white font-bold'>My Vision</h1>

          <p className='md:p-5 lg:p-5 text-sm md:text-1xl lg:text-1xl'><strong className='font-bold text-5xl'>01</strong> My vision for web development is to harness the power of technology to create innovative solutions that enhance user experiences and drive meaningful connections. I believe in continually pushing boundaries, embracing emerging technologies, and adapting to evolving trends to shape the future of the digital landscape.</p>
          <br/>
          <p className='md:p-5 lg:p-5 text-sm md:text-1xl lg:text-1xl'><strong className='font-bold text-5xl'>02</strong> In the ever-evolving landscape of technology, I see a future where artificial intelligence, augmented reality, and blockchain integration will revolutionize web development. Embracing these emerging trends, alongside a commitment to user-centric design and data privacy, will drive the next wave of digital innovation and redefine the way we interact with the online world.</p>

        </div>

      </div>
    

  
  )
}

export default Myvision

