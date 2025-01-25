
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ scrollToSkills }) {
  const [isCardVisible, setIsCardVisible] = useState(false);

  const handleTogglerClick = () => {
    setIsCardVisible(!isCardVisible);
  };

  const handleSkillsClick = () => {
    setIsCardVisible(false); // Hide the card
    scrollToSkills(); // Scroll to the Skills section
  };

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg p-3">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              onClick={handleTogglerClick}
              style={{
                width: '30px',
                height: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: 'transparent',
                background: 'transparent',
                cursor: 'pointer',
              }}
            >
              <span style={{ width: '15px', height: '2px', backgroundColor: 'white' }}></span>
              <span style={{ width: '15px', height: '2px', backgroundColor: 'white' }}></span>
              <span style={{ width: '15px', height: '2px', backgroundColor: 'white' }}></span>
            </button>
          </div>
        </nav>

        {isCardVisible && (
          <div
          style={{
                        position: 'absolute', // This makes the card float above the page
                        top: '50px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        color: 'white',
                        borderRadius: '10px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        margin: '10px auto',
                        textAlign: 'center',
                        width: '220px',
                        height: '350px',
                        zIndex: 1000, // Ensure it floats above other content
                      }}
          >
            <ul style={{ listStyleType: 'none', padding: '0', paddingTop: '70px', fontSize: '15px' }}>
              <li>
                <Link to="/" style={{ color: 'white',textDecoration:"none" }} onClick={() => setIsCardVisible(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/Skills" style={{ color: 'white',textDecoration:"none"  }} onClick={() => setIsCardVisible(false)}>
                  Skills
                </Link>
              </li>
              <li>
                <Link to="/Projects" style={{ color: 'white',textDecoration:"none"  }} onClick={() => setIsCardVisible(false)}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" style={{ color: 'white',textDecoration:"none"  }} onClick={() => setIsCardVisible(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
