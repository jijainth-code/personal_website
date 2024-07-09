import React from 'react';
import SectionTitle from '../../elements/section-title/SectionTitle';
import TestimonialPropOne from './TestimonialPropOne';
import { FaLinkedinIn, FaDribbble, FaBehance } from "react-icons/fa";

const TestimonialTwo = () => {
    return (
        <div className="section section-padding-equal">
            <div className="container">
                <SectionTitle 
                    subtitle="About"
                    title="A brief story about me "
                    description="I'm a full-stack developer skilled in React, Flask, and MongoDB. I've mastered data structures and algorithms through extensive LeetCode practice and possess strong system architecture knowledge. I have practical experience in machine learning and neural network projects from both my university and company roles. I excel in both team leadership and solo projects. Currently pursuing a B.Sc. in Artificial Intelligence, I also work on my own programming projects in my free time."
                    textAlignment="heading-left"
                    textColor=""
                />
                
                

            </div>
            <ul className="shape-group-4 list-unstyled">
                <li className="shape-1">
                    <img src={process.env.PUBLIC_URL + "/images/others/bubble-1.png"} alt="Bubble" />
                </li>
            </ul>
        </div>
    )
}

export default TestimonialTwo;