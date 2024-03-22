import "../anim.css"
import '../App.css';
import dpImage from '../assets/images/dpp.jpg';
import { useState, useEffect } from "react";


const Hero = () => {
  const [copied, setCopied] = useState(false);
  // Smooth scrolling function
  const handleNavLinkClick = (event, targetId) => {
    event.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth"
      });
    }
  };
 // Function to copy email address to clipboard
 const copyToClipboard = () => {
  const email = 'hpaptan@gmail.com';
  navigator.clipboard.writeText(email);
  setCopied(true);
  setTimeout(() => {
    setCopied(false);
  }, 2000); // Reset copied message after 2 seconds
};
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    // hero page 
    <>
   


      <div className="lg:mr-40 lg:ml-40 mr-4 ml-4 mt-8 sm:mt-20 flex flex-col">
         {/* Navbar */}
         <nav className="z-20 fixed bottom-[6.7rem] left-1/2 transform -translate-x-1/2 bg-black p-4 rounded-full">
          <ul className="text-white flex gap-4">
          <li><a href="#hero" onClick={(e) => handleNavLinkClick(e, 'hero')}><i className="fa-solid fa-house"></i></a></li>
            <li><a href="#about" onClick={(e) => handleNavLinkClick(e, 'about')}><i className="fa-solid fa-user"></i></a></li>
            <li><a href="#projects" onClick={(e) => handleNavLinkClick(e, 'projects')}><i className="fa-solid fa-diagram-project"></i></a></li>
            <li><a href="#skills" onClick={(e) => handleNavLinkClick(e, 'skills')}><i className="fa-solid fa-hand"></i></a></li>
            <li><a href="#contact" onClick={(e) => handleNavLinkClick(e, 'contact')}><i className="fa-solid fa-envelope"></i></a></li>
          </ul>
        </nav>
        {/* hero section  */}
        <div   id="hero" className="mb-36 flex gap-4 sm:gap-32 flex-col sm:flex-row">
          <div className="flex sm:w-1/2 items-center">
            <img className="sm:w-[80%] w-[100%] sm:h-1/2 h-1/3 object-cover object-bottom rounded-3xl" src={dpImage} alt="image" />
          </div>
          <div className="flex flex-col justify-center mt-4 sm:mt-0">
            <h1 className="font-fig text-xl font-semibold tracking-tighter">I&apos;m Honey Paptan — web developer</h1>
            <p className="font-robo font-semibold tracking-tighter text-gray-600 text-sm">focusing on mastering the art of minimalism</p>
          </div>
        </div>

        {/* about section  */}
        <div   id="about"    className="h-[90vh] gap-10  flex justify-center flex-col sm:flex-row sm:justify-between">
          <h2 className="font-fig font-normal tracking-tight">About</h2>
          <div className="w-full sm:w-1/2 font-robo font-semibold tracking-tighter text-black text-sm mt-2 flex flex-col gap-7">

            <p className="font-robo font-semibold text-sm tracking-tight">My journey in the world of web development has been nothing short of exhilarating. With each project, I strive to master the art of minimalism, crafting sleek and user-friendly digital experiences that leave a lasting impression.
<br />
What sets me apart? Well, besides my knack for clean code and pixel-perfect designs, I bring a refreshing dose of optimism to every project I undertake. Whether it's tackling complex challenges or collaborating with a dynamic team, I thrive on the opportunity to learn and grow.
<br />
In addition to my professional endeavors, I've also delved into the world of freelance projects. This hands-on experience has honed my skills and allowed me to connect with clients from diverse backgrounds, further enriching my perspective as a developer.
<br />
With about a year of dedicated experience under my belt, I'm excited to take on new challenges and continue pushing the boundaries of what's possible in web development.</p>
           
          </div>
        </div>

        {/* Projects section */}
        <div   id="projects" className="h-[90vh] gap-10  flex justify-center  flex-col sm:flex-row sm:justify-between">
          <h2 className="font-fig font-normal tracking-tight">Projects</h2>
          <ul className="w-full sm:w-1/2 font-robo font-semibold tracking-tighter text-black text-sm mt-2">
            <li><a href="https://github.com/HoneyPaptan/BLOGWEBSITEDJANGO" target="_blank" className="group">A Complete Blog Website<i className="fa-solid fa-arrow-right ml-2 -rotate-45 transition-transform duration-300 transform  group-hover:rotate-0"></i></a></li>
            <li><a href="https://github.com/HoneyPaptan/MERN-NOTES-APP-KEEPER" target="_blank"  className="group">Notes App <i className="fa-solid fa-arrow-right ml-2 -rotate-45 transition-transform duration-300 transform  group-hover:rotate-0"></i></a></li>
            <li><a href="https://github.com/HoneyPaptan" target="_blank"  className="group">Check out more here <i className="fa-solid fa-arrow-right ml-2 -rotate-45 transition-transform duration-300 transform  group-hover:rotate-0"></i></a></li>
            {/* Add more projects as needed */}
          </ul>
        </div>

        {/* Skills section */}
        <div   id="skills" className="h-[90vh] gap-10 flex justify-center flex-col sm:flex-row sm:justify-between">
          <h2 className="font-fig font-normal  tracking-tight" >Skills</h2>
          <div className="flex mt-2 w-full sm:w-1/2 flex-col gap-10">
          <div className="flex flex-col gap-2">
        <h1 className="font-fig font-semibold text-sm">Frontend</h1>
        <div className="flex flex-wrap gap-3">

        

   
      <div className="w-auto px-5 rounded-xl bg-gray-200 p-4 mr-2">
        {/* Placeholder skill icon */}
        
        <h1 className="font-robo font-semibold text-sm">Html</h1>
      </div>
      <div className="w-auto px-5 rounded-xl bg-gray-200 p-4 mr-2">
        {/* Placeholder skill icon */}
        
        <h1 className="font-robo font-semibold text-sm">CSS</h1>
      </div>
      <div className="w-auto px-5 rounded-xl bg-gray-200 p-4 mr-2">
        {/* Placeholder skill icon */}
        
        <h1 className="font-robo font-semibold text-sm">Js</h1>
      </div>
      <div className="w-auto px-5 rounded-xl bg-gray-200 p-4 mr-2">
        {/* Placeholder skill icon */}
        
        <h1 className="font-robo font-semibold text-sm">Tailwind</h1>
      </div>
      <div className="w-auto px-5 rounded-xl bg-gray-200 p-4 mr-2">
        {/* Placeholder skill icon */}
        
        <h1 className="font-robo font-semibold text-sm">Django Templates</h1>
      </div>
      <div className="w-auto px-5 rounded-xl bg-gray-200 p-4 mr-2">
        {/* Placeholder skill icon */}
        
        <h1 className="font-robo font-semibold text-sm">React</h1>
      </div>
      </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font-fig font-semibold text-sm">Backend & DBs</h1>
        <div className="flex flex-wrap gap-3">

        

   
      <div className="w-auto px-5 rounded-xl bg-gray-200 p-4 mr-2">
        {/* Placeholder skill icon */}
        
        <h1 className="font-robo font-semibold text-sm">Django</h1>
      </div>
      <div className="w-auto px-5 rounded-xl bg-gray-200 p-4 mr-2">
        {/* Placeholder skill icon */}
        
        <h1 className="font-robo font-semibold text-sm">Node</h1>
      </div>
      <div className="w-auto px-5 rounded-xl bg-gray-200 p-4 mr-2">
        {/* Placeholder skill icon */}
        
        <h1 className="font-robo font-semibold text-sm">Express</h1>
      </div>
      <div className="w-auto px-5 rounded-xl bg-gray-200 p-4 mr-2">
        {/* Placeholder skill icon */}
        
        <h1 className="font-robo font-semibold text-sm">MongoDB</h1>
      </div>
      <div className="w-auto px-5 rounded-xl bg-gray-200 p-4 mr-2">
        {/* Placeholder skill icon */}
        
        <h1 className="font-robo font-semibold text-sm">Sql</h1>
      </div>
      </div>
      </div>
            {/* Add more skill categories */}
          </div>
        </div>

        {/* contact  */}
        <div   id="contact" className="h-[90vh] gap-10  flex justify-center flex-col sm:flex-row sm:justify-between">
          <h2 className="font-fig font-normal tracking-tight">Contact</h2>
          <div className="w-full sm:w-1/2 font-robo font-semibold tracking-tighter text-black text-sm mt-2 flex flex-col gap-7">

            <p className="font-robo font-semibold text-lg tracking-tight">Looking to start a project or you need consultation? Feel free to contact me.</p>
            <div className="flex flex-col">
              <small className="font-fig tracking-tight">Chandigarh, Punjab, India</small>
              <small className="font-fig tracking-tight underline" onClick={copyToClipboard} style={{ cursor: 'pointer' }}>
            hpaptan@gmail.com {copied && <span style={{ marginLeft: '0.5rem', color: 'green' }}>Copied!</span>}
          </small>
            </div>
            <div className="flex flex-col">
              <h1 className="font-robo font-semibold tracking-tight">Available for work</h1>
              <ul className="flex gap-3">
                <li><a href="https://www.linkedin.com/in/honey-paptan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"  className="text-lg"><i className="text-black fa-brands fa-linkedin"></i></a></li>
                <li><a href="https://www.instagram.com/honey_paptan?igsh=MWR6bDhhdmx5MzNhbw==" target="_blank"  className="text-lg"><i className="text-black fa-brands fa-instagram"></i></a></li>
                <li><a href="https://github.com/HoneyPaptan" target="_blank" className="text-lg"><i className="text-black fa-brands fa-github"></i></a></li>
              </ul>

            </div>
          </div>
        </div>

        {/* footer  */}
        <footer    className="m-3">
          <div className="flex items-center justify-center">
            <h1 className="font-fig font-bold tracking-tighter text-sm">@2024 Made by Honey Paptan.</h1>
          </div>
        </footer>
      </div>
    
    </>
  )
}

export default Hero
