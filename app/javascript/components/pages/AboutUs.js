import React, { Component } from 'react';
import conrad from '../assets/Conrad.jpg'
import chauncy from '../assets/Chauncy.jpg'
import thomas from '../assets/Thomas.jpg'
import arturo from '../assets/Arturo.jpg'

class AboutUs extends Component {
    render() {
        return (
            <div>
                <h3 className="about-us-header">About us</h3>
                <div className="about-us-container">
                    <div className="about-us-person">
                        <img src={thomas} alt="Thomas Nguyen" width="220" height="320"/>
                        <div>
                            <h3>Thomas Nguyen</h3>
                            <h3>Product Manager</h3>
                            <div className="about-us-person-info">
                                <p>A web developer currently pursuing his Masters degree in Computer Science at CSUF. He is transitioning from the medical field in the Army where problem solving was his day to day job so he felt like the transition to programming was very natural. In a way he is still just solving problems for people, going from physical and mental support to a broader scale of support through coding and creating. Like medicine, coding is a never ending journey of change and learning.</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-us-person">
                        <img src={arturo} alt="Arturo Gourentchik" width="220" height="320"/>
                        <div>
                            <h3>Arturo Gourentchik</h3>
                            <h3>Project Manager</h3>
                            <div className="about-us-person-info">
                                <p>Making his transition to the civilian sector, Arturo is dedicated to expanding his coding knowledge and improving his skills as a full-stack web developer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-us-person">
                        <img src={chauncy} alt="Chauncy Sapien" width="220" height="320"/>
                        <div>
                            <h3>Chauncy Sapien</h3>
                            <h3>Tech Lead</h3>
                            <div className="about-us-person-info">
                                <p>A Software Engineer and a recent graduate from the University of California, Irvine where He obtained his B.S. in Software Engineering. Chauncy is a strong willed and determined individual who is passionate about learning new skills to help him to become a better individual and a developer. He has two years of experience in the Software Engineering industry all at Raytheon Technologies. He is currently looking to become a full-time Software Engineer/Full Stack Web Developer around the San Diego, CA area. He is presently taking a Full Stack Web Development coding bootcamp offered from Learn Academy</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-us-person">
                        <img src={conrad} alt="Conrad Harper" width="220" height="320"/>
                        <div>
                            <h3>Conrad Harper</h3>
                            <h3>Design Lead</h3>
                            <div className="about-us-person-info">
                                <p>A recent graduate of LEARN Academy, a full stack web development bootcamp based in San Diego that teaches technologies such as JavaScript, React.js, Ruby, and Ruby on Rails. Conrad has an educational background in digital art & computer animation with three associate degrees in 3D Animation & Modeling, Fine Arts, and Arts & Humanities. He as also worked as a photographer and video editor. He likes solving complex problems and utilizing his background in design to develop creative solutions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutUs;