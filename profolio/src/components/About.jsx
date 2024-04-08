import React from 'react'
import img3 from '../data/img3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin,faGithub, faDiscord, faTwitter} from "@fortawesome/free-brands-svg-icons";
import Resume from '../data/Resume.pdf'




const About = () => {

  const handleDownload = () => {
  
    const resumeUrl =Resume;
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Karan_Singh_Resume.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <>
    <section className="relative" id="about">

      <div className=" mx-auto flex px-10 md:px-10 my-8 md:flex-row flex-col items-center text-lg animate__animated animate__swing mt-12" >

        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center justify-center gap-x-5">

          <h2 className="title-font sm:text-4xl text-3xl mb-4  text-white font-bold"> Hi, I'm Karan Singh</h2>
          <h2 className='lg:inline-block text-lg my-3'> I M A WEB-DEVELOPER</h2>

          <p className="mb-8 leading-relaxed">
          Web developer with a passion for crafting captivating online experiences. Aspiring full stack wizard eager to bridge the gap between front and back end. Let's build something extraordinary together!
          </p>
          <div className="flex justify-center">
            <a href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <button onClick={handleDownload}
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Download My Resume
            </button>
          </div>

          <div className=' text-center my-7 flex justify-center items-center mx-auto text-white gap-4'>
            <h1 className='text-center  m-auto '><a href='https://www.linkedin.com/in/karan-singh-d-97770a246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><FontAwesomeIcon icon={faLinkedin} /></a> </h1>
            <h1 className='text-center  m-auto '><a href='https://github.com/KARANSINGH34951'><FontAwesomeIcon icon={faGithub} /></a></h1>
            <h1 className='text-center  m-auto '><FontAwesomeIcon icon={faTwitter} /></h1>
            <h1 className='text-center  m-auto '><a href='discordapp.com/users/1144440547847721041'><FontAwesomeIcon icon={faDiscord} /></a></h1>
          </div>
          
        </div>

        <div className="lg:max-w-lg lg:w-1/2 h-full lg:h-96 md:w-1/2 w-5/6 flex justify-center items-center flex-col  ">
          <img
            className=" object-cover min-h-1/2 w-96 md:h-1/2 lg:h-96 object-center rounded-full border border-4xl p-10 relative " alt="hero" src={img3}/>   
        </div>
      </div>

    </section>
      
    </>
  )
}

export default About





