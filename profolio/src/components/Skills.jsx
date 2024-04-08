import React from 'react'



const Skills = (props) => {
  return (
    <>
     
   <section id='skill' >
   <div id='skills' className=' flex justify-center items-center m-auto mt-10' >
      <h1 className='title-font sm:text-4xl text-3xl font-bold'>What I Do ?</h1>
    </div>
    
      <div id='skill' className=' h-[500px]  p-[20px] lg:p-[50px] md:p-[50px] lg:my-[60px] lg:mx-[100px] md:mx-[50px] my-10 w-auto  lg:w-auto' > 

        <div className=' grid grid-cols-9 lg:w-auto lg:grid-cols-8 h-[400px] bg-white w-auto mx-auto items-center justify-center text-lg text-center gap-x-4 lg:gap-5 '>

          <div className='mypic col-span-3 lg:col-span-2 h-[90px] w-[70px] rounded-md lg:w-[85px] flex justify-center items-center border border-red-700 bg-white  mx-auto'>
            <img  className=' object-scale-down overflow-hidden h-[50px] rounded-lg shadow-2xl' src={props.img1} alt='img' />
          </div>
          
          <div className='mypic col-span-3 lg:col-span-2  h-[90px] w-[70px] rounded-md lg:w-[85px] flex justify-center items-center border border-red-700 bg-white  mx-auto'>
            <img  className=' object-scale-down overflow-hidden h-[50px]  rounded-lg  shadow-2xl' src={props.img2} alt='img' />
          </div>
          <div className='mypic col-span-3 lg:col-span-2  h-[90px] w-[70px] rounded-md lg:w-[85px] flex justify-center items-center mx-auto border border-red-700 bg-white'>
            <img  className=' object-scale-down overflow-hidden h-[50px]  rounded-lg'  src={props.img3} alt='img' />
          </div>
          <div className='mypic col-span-3 lg:col-span-2  h-[90px] w-[70px] rounded-md lg:w-[85px] flex justify-center items-center mx-auto border border-red-700 bg-white'>
            <img  className=' object-scale-down overflow-hidden h-[50px]  rounded-lg'  src={props.img4} alt='img' />
          </div>
          <div className='mypic col-span-3 lg:col-span-2  h-[90px] w-[70px] rounded-md lg:w-[85px] border border-red-700 bg-white flex justify-center items-center mx-auto'>
            <img  className=' object-scale-down overflow-hidden h-[50px]  rounded-lg' src={props.img5} alt='img' />
          </div>
          <div className='mypic col-span-3 lg:col-span-2  h-[90px] w-[70px] rounded-md lg:w-[85px] flex justify-center items-center border border-red-700 bg-white  mx-auto'>
            <img  className=' object-scale-down overflow-hidden h-[50px]  rounded-lg' src={props.img6} alt='img' />
          </div>
          <div className='mypic col-span-3 lg:col-span-2  h-[90px] w-[70px] rounded-md lg:w-[85px] flex justify-center items-center mx-auto border border-red-700 bg-white'>
            <img  className=' object-scale-down overflow-hidden h-[50px]  rounded-lg'  src={props.img7} alt='img' />
          </div>
          <div className='mypic col-span-3 lg:col-span-2  h-[90px] w-[70px] rounded-md lg:w-[85px] flex justify-center items-center mx-auto border border-red-700 bg-white'>
            <img  className=' object-scale-down overflow-hidden h-[50px]  rounded-lg'  src={props.img8} alt='img' />
          </div>
          <div className='mypic col-span-3 lg:hidden h-[90px] w-[70px] rounded-md lg:w-[85px] flex justify-center items-center mx-auto border border-red-700 bg-white'>
            <img  className=' object-scale-down overflow-hidden h-[50px]  rounded-lg'  src={props.img9} alt='img' />
          </div>

        </div>
      </div>
   </section>
    </>
  )
}

export default Skills
