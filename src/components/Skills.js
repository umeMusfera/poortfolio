
import React, { useEffect, forwardRef } from 'react';
import Projects from './Projects';
const Skills = forwardRef((props, ref) => {
  const setProgress = (circle, percentage) => {
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;
    if (circle) {
      circle.style.strokeDashoffset = offset;
    }
  };

  useEffect(() => {
    const percentages = [85, 95, 90];
    const circles = document.querySelectorAll('.carousel-item.active .fg');
    circles.forEach((circle, index) => {
      setProgress(circle, percentages[index]);
    });
  }, []);

  return (
    <>        
    <div ref={ref}>
      <div className='heading container' style={{
        fontSize: '10rem',
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        minHeight: '100px',
        textAlign: 'center',
        color: 'white',
        marginTop: '20px'
      }}>
        <h1>Skills</h1>
      </div>
      <div className="skills-container container" style={{ backgroundColor: 'Transparent' }}>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="3000">
              <div className="d-flex justify-content-center flex-wrap">
                <ProgressBar skillName="HTML" percentage={85} />
                <ProgressBar skillName="CSS" percentage={95} />
                <ProgressBar skillName="JavaScript" percentage={90} />
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <div className="d-flex justify-content-center flex-wrap">
                <ProgressBar skillName="ReactJs" percentage={95} />
                <ProgressBar skillName="NodeJs" percentage={90} />
                <ProgressBar skillName="Express.js" percentage={90} />
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <div className="d-flex justify-content-center flex-wrap">
                <ProgressBar skillName="MongoDB" percentage={85} />
                <ProgressBar skillName="C++" percentage={90} />
                <ProgressBar skillName="Python" percentage={80} />
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
    <Projects/>
   </>
  );
});

function ProgressBar({ skillName, percentage }) {
  useEffect(() => {
    const circle = document.querySelector(`#progress-${percentage} .fg`);
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    if (circle) {
      circle.style.strokeDasharray = circumference;
      circle.style.strokeDashoffset = offset;
    }
  }, [percentage]);

  return (
    <div className="progress-container">
      <svg id={`progress-${percentage}`} width="100" height="100" viewBox="0 0 250 250" className="circular-progress">
        <circle className="bg" cx="50" cy="50" r="45"></circle>
        <circle className="fg" cx="50" cy="50" r="45"></circle>
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="35">
          {percentage}%
        </text>
      </svg>
      <h6 style={{ textAlign: 'center', color: 'white', marginTop: '8px' }}>{skillName}</h6>
      <style>
//         {`
          .circular-progress {
            transform: rotate(-90deg);
          }
          .bg {
            fill: none;
            stroke: #e6e6e6;
            stroke-width: 10;
          }
          .fg {
            fill: none;
            stroke:"black";
            stroke-width: 10;
            stroke-linecap: round;
            transition: stroke-dashoffset 0s; // No transition since we're directly setting the values
          }
          .progress-container {
            margin: 15px;
            display: flex;
            flex-direction: column; /* Change to column to stack the SVG and h6 */
            justify-content: center;
            align-items: center;
          }

          @media (max-width: 768px) {
            .progress-container {
              width: 50px; /* Adjust size for smaller screens */
              margin: 10px;
            }
            .circular-progress {
              width: 70px; /* Smaller spinner for small screens */
              height: 70px; /* Smaller spinner for small screens */
            }
          }

          @media (max-width: 576px) {
            .progress-container {
              width: 50px; /* Adjust size for extra small screens */
              margin: 8px;
            }
            .circular-progress {
              width: 60px; /* Even smaller spinner for extra small screens */
              height: 60px; /* Even smaller spinner for extra small screens */
            }
          }
        `}
//       </style>

    </div>
  );
}

export default Skills;
