import React from 'react'
import cloud from '../data/cloud.png'
import imgdownload from '../data/imagedownload.png'
// import collegewebsite from '../data/college.jpeg'
import portfolio from '../data/portfolioimg.png'
import collegewebsite from '../data/collegewebsite.jpeg'


const Projects = () => {
  return (
   
    <section id>
      <div id='projects' className='relative flex justify-center items-center max-h-none' >
        <h1 className='title-font sm:text-4xl text-3xl font-bold'>Projects</h1>
      </div>
        <div id='projects' className='projects'>
      
        <div className="projectscontainer grid lg:grid-cols-3 mx-auto h-auto my-auto w-full items-center text-lg bg-black  md:py-10">  

          <div  className='projectsh h-auto md:w-2/10 lg:w-2/10 bg-slate-100 m-10  p-4 md:p-10 lg:p-10 gap-5 hover:bg-blue-500 hover:transition-all rounded-md flex flex-col text-center text-black'>
            <div>
                  <img src={imgdownload} alt="img" />
            </div>

            <div className='flex-shrink'>
              <h1 className='font-bold'>Image Downloader</h1>
              <p className='text-sm md:text-lg lg:text-lg'>The image downloader website allows users to quickly and easily download images from the internet by simply searching the image URL. With its user-friendly interface and fast fetching capabilities, users can save images directly to their devices hassle-free.</p>
              <button className='rounded-md border border-black  bg-slate-50 hover:bg-black hover:text-white hover:transition-colors p-1 mt-3'><a href="https://karansingh34951.github.io/IMAGE-GENERATOR/">View Live</a></button>
            </div>

          </div>
          
          <div className='projectsh h-auto md:w-2/10 lg:w-2/10 bg-slate-100 m-10 p-4 md:p-10 lg:p-10 gap-5 hover:bg-blue-500 hover:transition-all rounded-md flex flex-col text-center text-black'>
            <div className='md:items-center text-center'>
                  <img className='object-cover' src={collegewebsite} alt="img" />
            </div>

            <div className='flex-shrink'>
              <h1 className='font-bold'>College Website</h1>
              <p className='text-sm md:text-lg lg:text-lg'>The college website's homepage offers a comprehensive gateway to explore academic programs and admissions. With engaging content, it serves as a vibrant hub for showcasing the institution's achievements, values, and opportunities.</p>
              <button className='rounded-md border border-black bg-slate-50 hover:bg-black hover:text-white hover:transition-colors p-1 mt-3'><a href="https://karansingh34951.github.io/College-website-home-landing-page/">View Live</a></button>
            </div>
          </div>
          
          <div className='projectsh h-auto md:w-2/10 lg:w-2/10 bg-slate-100 m-10 p-4 md:p-10 lg:p-10 gap-5 hover:bg-blue-500 hover:transition-all rounded-md flex flex-col text-center text-black'>
            <div>
                  <img src={portfolio} alt="img" />
            </div>

            <div className='flex-shrink'>
              <h1 className='font-bold'>Personal Protfolio</h1>
                 <p className='text-sm md:text-lg lg:text-lg'>
                    A personal portfolio website showcases a professional's skills, projects, and accomplishments, serving as a digital resume. It provides a visually appealing platform to highlight expertise. With concise yet impactful content, it aims to leave a strong impression and foster career opportunities.
                  </p>
              <button className='rounded-md border border-black bg-slate-50 hover:bg-black hover:text-white hover:transition-colors p-1 mt-3'>View Live</button>
            </div>
          </div>
          
          
        </div>
      </div>
    </section>
  
  )
} 

export default Projects
