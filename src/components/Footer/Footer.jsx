import React from 'react'
import './Footer.css'
import { FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "white", marginRight: "5px" }} />
                        <div>
                        <p>HYDERABAD ,TELANGANA</p>
                            <p>India</p>
                        </div>
                    </div>

                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: "white", marginRight: "5px" }} /> 9346245753
                        </h4>
                    </div>

                    <div className="email">
                        <h4><FaMailBulk size={20} style={{ color: "white"}} />  avinashgude1234@gmail.com
                        </h4>
                    </div>

                </div>
                <div className="right">
                    <h4>Something about me </h4>
                    <p>I enjoy group discussions and  enthusiastic to learn new technologies and ofcourse too much procastrination too.</p>
                    <div className="social">
                    
                    <a href="https://instagram.com/a_v_i_n_ash__insta__?igshid=ZGUzMzM3NWJiOQ=="> <FaInstagram size={30} style={{ color: "white" }} />  </a>
                    <a href="https://www.linkedin.com/in/avinash-gude-914406220/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B44HCwB08S92pTKO5EUQgJg%3D%3D"><FaLinkedin size={30} style={{ color: "white"}} /> </a>
                    <a href="https://github.com/avinash1371"><FaGithub size={30} style={{ color: "white"}} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
