import React from 'react';
import SectionTitle from '../../elements/section-title/SectionTitle';
import TestimonialPropOne from './TestimonialPropOne';
import { FaLinkedinIn, FaDribbble, FaBehance } from "react-icons/fa";

const TestimonialTwo = () => {
    return (
        <div className="section section-padding-equal">
            <div className="container">
                <SectionTitle 
                    subtitle="About Me"
                    title="Pulkit Sharma's Adventure ... "
                    description={`

                                <p>In the boundless cosmos of artificial intelligence and robotics, Pulkit Sharma is more than a developer—he is an explorer, a pioneer of the digital frontier. From the bustling streets of Delhi to the academic halls of Deggendorf, his journey is a saga of ambition, curiosity, and relentless innovation.</p>

                                <p>Armed with a vast arsenal of skills—Python, MongoDB, Unity Game Development, and more—Pulkit crafts solutions that bridge imagination and functionality. He is not just a builder of systems but a creator of experiences, pushing the boundaries of technology to serve humanity.</p>

                                <p>In the workshops of his academic journey, Pulkit mastered the arcane arts of neural networks, robotics, and AI-driven applications. His projects are the tales of his ingenuity:</p>
                                <ul>
                                    <li><strong>Robotic Arm with Unity C#:</strong> A marvel of reinforcement learning, this arm reaches coordinates with precision, mimicking human finesse.</li>
                                    <li><strong>Custom Neural Network Framework:</strong> Built from scratch with Python and NumPy, this framework is a testament to Pulkit’s deep understanding of machine learning fundamentals.</li>
                                    <li><strong>Supply Chain Automation:</strong> Using Python and Pandas, he transformed manual workflows into efficient, automated systems, saving countless hours for the supply chain team.</li>
                                    <li><strong>Stock Market Data Scraping and Analysis:</strong> With live feedback capabilities, this GUI tool provides actionable insights for investors, showcasing Pulkit's flair for real-world applications.</li>
                                </ul>

                                <p>His creations do not merely exist; they breathe life into complex problems, offering solutions that inspire awe and admiration. Yet, his ambition extends beyond technical mastery—Pulkit is a collaborator, a member of the United AI Club, and a thought leader in his community.</p>

                                <p>Driven by an unquenchable thirst for knowledge, Pulkit has set his sights on the stars—figuratively and literally. With a passion for space, robotics, and AI, his journey is far from over. Every project he undertakes is a step toward redefining the possible, and every challenge he overcomes is a chapter in the epic of his life.</p>

                                <p>Pulkit Sharma’s story is not just a resume; it is an odyssey—a journey of discovery, innovation, and boundless potential. And in the ever-expanding universe of technology, his light shines brightly, a beacon of hope and inspiration for all who dare to dream.</p>


                                    `}

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