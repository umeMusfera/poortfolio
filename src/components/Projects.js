import React from 'react';
import Capture1 from '../Capture1.PNG';
import Capture2 from '../Capture2.PNG';
import Capture3 from '../Capture3.PNG';
import Capture4 from '../Capture4.PNG';
import Capture5 from '../Capture5.PNG';
import resume from "../resumee.pdf";
import Capture6 from '../port.PNG';
import Contact from "./Contact";

function Projects() {
  const imgstyle = {
    width: "340px",
    height: "120px",
    margin: "auto",
  };

  const cardStyle = {
    backgroundColor: "#7A5B42",
    padding: "8px",
    boxShadow:
      "-5px -5px 10px rgba(0, 0, 0, 0.9), 5px 5px 10px rgba(255, 255, 255, 0.4)",
    Text: "bold",
    borderRadius: "10px",
    color: "white"
  };

  return (
    <>
      <div className="heading container" style={{
        fontSize: '10rem',
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        minHeight: '100px',
        textAlign: 'center',
        color: 'white',
        marginTop: '20px',
      }}>
        <h1>Projects</h1>
      </div>

      <div className="skills-container container" style={{ backgroundColor: 'Transparent' }}>
        <div className="Container">
          <div className="row">
            <div className="col-md-4 mb-4 image-container" style={{ position: "relative", display: "inline-block" }}>
              <div className="card" style={{ width: '22rem', margin: 'auto' }}>
                <img src={Capture1} style={imgstyle} className="card-img-top" alt="Project 1" />
                <div className="card-body">
                  <h6 className="card-title">Text Analyzer site with React</h6>
                  <a href="https://tiny-cascaron-c0248d.netlify.app/" style={cardStyle} className="text-decoration-none">Visit Project</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card" style={{ width: '22rem', margin: 'auto' }}>
                <img src={Capture4} style={imgstyle} className="card-img-top" alt="Project 2" />
                <div className="card-body">
                  <h6 className="card-title">Responsive Site with Dynamic Features</h6>
                  <a href="https://umemusfera.github.io/myprojectt/" style={cardStyle} className="text-decoration-none">Visit Project</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card" style={{ width: '22rem', margin: 'auto' }}>
                <img src={Capture3} style={imgstyle} className="card-img-top" alt="Project 3" />
                <div className="card-body">
                  <h6 className="card-title">JavaScript-Powered Interactive Calculator</h6>
                  <a href="https://umemusfera.github.io/calculators/" style={cardStyle} className="text-decoration-none">Visit Project</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card" style={{ width: '22rem', margin: 'auto' }}>
                <img src={Capture2} style={imgstyle} className="card-img-top" alt="Project 4" />
                <div className="card-body">
                  <h6 className="card-title">Interactive Tic-Tac-Toe Game Site</h6>
                  <a href="https://regal-dragon-87bf90.netlify.app/" style={cardStyle} className="text-decoration-none">Visit Project</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card" style={{ width: '22rem', margin: 'auto' }}>
                <img src={Capture5} style={imgstyle} className="card-img-top" alt="Project 5" />
                <div className="card-body">
                  <h6 className="card-title">Personal Portfolio Website Design</h6>
                  <a href="https://umemusfera.github.io/portfolio/" style={cardStyle} className="text-decoration-none">Visit Project</a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card" style={{ width: '22rem', margin: 'auto' }}>
                <img src={Capture6} style={imgstyle} className="card-img-top" alt="Project 6" />
                <div className="card-body">
                  <h6 className="card-title">Fully Responsive Web Application</h6>
                  <a href="https://umemusfera.github.io/myprojectt/" style={cardStyle} className="text-decoration-none">Visit Project</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a 
        href={resume}
        style={{ textDecoration: "none" }}
      >
        <div className="my-5 mx-20 text-white">
          <div 
            className="card mx-auto about" 
            style={{ ...cardStyle, width: 290, cursor: "pointer", borderRadius: 15 }}
          >
            <div>
              <h2 className="heading">Download Resume</h2>
            </div>
          </div>
        </div>
      </a>
      <Contact />
    </>
  );
}

export default Projects;
