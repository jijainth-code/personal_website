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
                    title="Jijainth Dhinakaran's Adventure ... "
                    description={`
                                    In the sprawling realm where lines of code intertwine like ancient runes, Jijainth Dhinakaran emerges as a fearless explorer. Hailing from the vibrant lands of India, his journey led him across oceans to the heart of innovation in Germany. Armed with the mighty trinity of React, Flask, and MongoDB, he navigates through the intricate labyrinths of full-stack development. 

                                    <br /><br />

                                    From the dense forests of data structures to the peaks of algorithmic prowess, Jijainth honed his skills through countless trials in the crucible of LeetCode. Yet, his odyssey transcends mere coding; it delves into the mysterious realms of machine learning and neural networks. Echoes of his triumphs resonate from university halls to corporate battlegrounds, where his genius shines in crafting systems that defy conventional limits.

                                    <br /><br />

                                    In the depths of solo quests and the crucible of team dynamics, Jijainth is not merely a player but a leader. His name whispered among digital nomads and tech sages alike, for his mastery extends beyond the screen. With a quest for knowledge as boundless as the cosmos, he pursues a B.Sc. in Artificial Intelligence, unraveling the secrets of intelligence itself.

                                    <br /><br />

                                    Yet, his adventures do not cease at the edge of academia. In the twilight hours, he forges his own creations, where ideas sprout wings and innovation knows no bounds. Each line of code, a stroke in the canvas of his epic saga, etching a legacy that transcends time and space.

                                    <br /><br />

                                    Jijainth Dhinakaran's journey is not just a narrative—it is an action-packed adventure where technology meets imagination, where challenges become conquests, and where every byte of data holds the promise of the unknown .... 
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