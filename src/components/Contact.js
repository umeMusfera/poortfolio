import React from "react";
import leetcode from '../leet.png';

const Contact = () => {
    const contactsec = {
        backgroundColor: "#7A5B42",
        borderTopLeftRadius: "20px", // Rounded top-left corner
        borderTopRightRadius: "20px", // Rounded top-right corner
        boxShadow: "0 -5px 10px rgba(0, 0, 0, 0.8)", // Shadow on the upper side
        marginTop: "50px",
        marginBottom: "0",
        padding: "60px", // Add some padding for inner spacing
    };

    const cardStyle = {
        backgroundColor: "#7A5B42",
        boxShadow:
            "-5px -5px 10px rgba(0, 0, 0, 0.9), 5px 5px 10px rgba(255, 255, 255, 0.4)",
        fontWeight: "bold",
        borderRadius: "10px",
        color: "white",
    };

    const cardStyleicon = {
        backgroundColor: "#7A5B42",
        boxShadow:
            "-5px -5px 10px rgba(0, 0, 0, 0.9), 5px 5px 10px rgba(255, 255, 255, 0.4)",
        textAlign: "center",
        fontWeight: "bold",
        justifyContent: "center",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        marginRight: "10px",
        color: "white",
    };

    const footerStyle = {
        color: "white",
        textAlign: "center",
        padding: "10px",
        fontSize: "14px",
        marginTop: "20px",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
    };

    return (
        <>
            <div
                style={{
                    display: "flex", // Flexbox for centering
                    justifyContent: "center", // Horizontal centering
                    alignItems: "center", // Vertical centering
                    textAlign: "center", // Full viewport height for vertical centering
                }}
            >
                <div
                    className="card about"
                     style={{
        ...cardStyle,
        width: "auto", // Automatically adjusts the width based on content
        display: "inline-block", // Allows content width adjustment
        cursor: "pointer",
        padding: "60px",
        textAlign: "center" // Optional: Center the content
    }}
                >
                    <h2 className="heading">
                        Want to connect or <br />
                        ask a question?
                        <br />
                        Drop an Email
                    </h2>
                    <a
    style={{
        ...cardStyle,
        marginTop: 10,
        paddingInline: 50,
        paddingBlock: 20,
        display: "inline-block", // Ensures margin behaves properly
        textDecoration: "none", // Optional: Prevents underline
        textAlign: "center",
    }}
    href="mailto:umemusfira33@gmail.com?subject=Hello%20There&body=I%20want%20to%20connect"
>
    Say Hello
</a>


                </div>
            </div>
            <div style={contactsec}>
                <p className="text-white text-center">
                    With a passion for bringing ideas to life, I specialize in crafting dynamic and innovative web applications.
                </p>
                <div className="col-lg-8 col-md-12 p-3 mb-5 d-flex">
                    <div className="card" style={cardStyleicon}>
                        <a className="text-white" href="https://www.instagram.com/its_ummay_?igsh=MXN5cm5penQzb2F0bA==">
                            <i className="mx-1 fa-brands fa-instagram"></i>
                        </a>
                    </div>
                    <div className="card" style={cardStyleicon}>
                        <a className="text-white" href="https://github.com/umeMusfera">
                            <i className="mx-1 fa-brands fa-github"></i>
                        </a>
                    </div>
                    <div className="card" style={cardStyleicon}>
                        <a className="text-white" href="https://www.linkedin.com/in/musfira-rafiq-593076287">
                            <i className="mx-1 fa-brands fa-linkedin"></i>
                        </a>
                    </div>
                    <div className="card" style={cardStyleicon}>
                        <a href="https://leetcode.com/u/Ume_Musfira/" target="_blank" rel="noopener noreferrer">
                            <img className="text-white" style={{ width: "20px" }} src={leetcode} alt="LeetCode Profile" />
                        </a>
                    </div>
                </div>
                <footer style={footerStyle}>
                    © All rights reserved.
                </footer>
            </div>
        </>
    );
};

export default Contact;
