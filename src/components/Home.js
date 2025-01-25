import React, { useState, useEffect } from 'react';
import leetcode from '../leet.png'
import Skills from "./Skills"

export default function Forms() {
  const [headingText, setHeadingText] = useState('React JS Developer');
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false); // Reset animation
      setTimeout(() => {
        setHeadingText((prevText) =>
          prevText === 'React JS Developer' ? 'Full Stack Developer' : 'React JS Developer'
        );
        setAnimate(true); // Trigger animation again
      }, 100); // Small delay to reset animation
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);
  // #b2ad7f

  const cardStyle = {
    // backgroundColor: "#a79e84",
    backgroundColor: "#7A5B42",
    padding: "20px",
    boxShadow:
      "-5px -5px 10px rgba(0, 0, 0, 0.9), 5px 5px 10px rgba(255, 255, 255, 0.4)",
    Text: "bold",
    borderRadius: "20px",
    color: "white"
  }
  const cardStyleicon = {
    backgroundColor: "#7A5B42",
    boxShadow:
      "-5px -5px 10px rgba(0, 0, 0, 0.9), 5px 5px 10px rgba(255, 255, 255, 0.4)",
    textAlign: "center",
    Text: "bold",
    justifyContent: "center",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    marginRight: "10px",
    color: "white"
  }


  return (
    <>
      <div className="container " style={{ paddingTop: '70px' }}>
        <div className="row radius">
          <div className="radius col-lg-6 col-md-12  text-white">
            <h1>I'm <span style={{ color: "" }}>Ume Musfirah.</span></h1>
            <h1 className={`pt-4 slide-in ${animate ? 'animate' : ''}`}>{headingText}</h1> {/* Dynamic text with animation */}
            <p className='para'>With a passion for bringing ideas to life,<br /> I specialize in crafting dynamic and innovative<br/> web applications.</p>

            <div className='row pt-4'>
              <div className='col-lg-4 col-md-12 p-2 '>
                <div class="card p-1 pb-0 m-o   h-2" style={{ ...cardStyle, textAlign: "center",justifyContent:"center", maxWidth: "250px", height: "70px" }} >
                  <p className='para'><i class="fa-solid fa-arrow-right"></i>  Get in touch</p>
                </div>
              </div>
              <div className='col-lg-8 col-md-12 p-3 mb-5 d-flex'>
                <div class="card " style={cardStyleicon} >
                  <a className='text-white' href="https://www.instagram.com/its_ummay_?igsh=MXN5cm5penQzb2F0bA=="><i className="mx-1 fa-brands fa-instagram"></i></a>
                </div>
                <div class="card" style={cardStyleicon} >
                  <a className='text-white' href="https://github.com/umeMusfera"><i className="mx-1 fa-brands fa-github"></i></a>
                </div>
                <div class="card" style={cardStyleicon} >
                  <a className='text-white' href="https://www.linkedin.com/in/musfira-rafiq-593076287"><i className="mx-1 fa-brands fa-linkedin"></i></a>
                </div>
                <div class="card " style={cardStyleicon} >
                  <a href="https://leetcode.com/u/Ume_Musfira/" target="_blank">
                    <img className='text-white' style={{ width: "20px" }} src={leetcode} alt="LeetCode Profile" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 text-white">
            <div class="card about pb-0 m-o " style={{ ...cardStyle, maxWidth: "650px",width:"100%", minHeight: "350px" }} >
              <div >
                <h1 className='heading'>About</h1>
                <p className='para'>I am a Full Stack Software Engineer specializing in backend development.My area of expertise lies in building scalable and high-performance systems using MongoDB, Express.js, React.js, and Node.js, along with modern JavaScript.<br /> I am excited to expand my expertise into the realm of artificial intelligence.<br /> My goal is to leverage AI to drive innovation and deliver cutting-edge solutions that push the boundaries of what’s possible.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Skills/>
    </>
  );
}









