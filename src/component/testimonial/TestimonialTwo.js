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
                    title="Harsh Gurawaliya Adventure ... "
                    description={`

                                In the electrifying universe where algorithms build empires and neural networks breathe synthetic life, Harsh Gurawaliya is not just a coder—he is a hero on a quest. From the vibrant landscapes of India to the dynamic pulse of Germany, his journey is a testament to ambition and ingenuity. Armed with legendary tools like CUDA, FastAPI, and Docker, he crafts solutions that not only solve problems but redefine the boundaries of Artificial Intelligence.

                                <br /><br />

                                From the labyrinth of deep learning to the peaks of autonomous robotics, Harsh has mastered the art of engineering intelligence. His academic forge, the Deggendorf Institute of Technology, sharpened his skills in Generative AI, NLP, Computer Vision, and Machine Learning. But his adventures extend far beyond the classroom—into corporate battlegrounds where his innovations have reshaped industries. At Onepager Software GmbH, he crafted secure, high-performing AI systems, while his contributions to B Plus Automotive GmbH advanced autonomous vehicle technology.

                                <br /><br />

                                Harsh’s personal projects tell stories of imagination and mastery:
                                <ul>
                                    <li><strong>Medical Conversations AI:</strong> Fine-tuned Llama 3 for secure, domain-specific doctor-patient interactions with reduced resource usage.</li>
                                    <li><strong>Marketing Intelligence SaaS:</strong> Developed a full-stack application integrating React, Flask, and MongoDB to empower personalized marketing.</li>
                                    <li><strong>Automated ML Pipelines:</strong> Built end-to-end workflows featuring CI/CD pipelines and AWS deployment to handle predictive modeling with precision.</li>
                                    <li><strong>Facial Recognition Coffee Dispenser:</strong> Designed a campus innovation using CNNs integrated with PyTorch and TensorFlow.</li>
                                </ul>

                                <br /><br />

                                Yet, Harsh’s legacy isn’t confined to his technical brilliance. He is a leader and a collaborator, inspiring communities like the United AI Club while pushing the boundaries of innovation. His relentless curiosity transforms challenges into stepping stones and ideas into groundbreaking realities.

                                <br /><br />

                                Harsh Gurawaliya’s journey is not just a career—it’s an epic. A saga where technology meets humanity, where every byte of data holds a promise, and where every solved problem echoes with the spirit of discovery. The tale of Harsh Gurawaliya is still unfolding, but with every project, every challenge, and every idea, he writes the next chapter in the chronicles of the extraordinary.

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