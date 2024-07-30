import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/about.css'; 

const About = () => {
    return (
        <div className="d-flex justify-content-center bg-dark align-items-center mt-5">
            <div className="col-12 col-md-10">
                <div className="card text-white bg-dark mb-3 about-card">
                    <div className="card-header text-center bg-black fs-2">About</div>
                    <div className="card-body">
                        <h5 className="card-title text-center"><strong>Who Is Dr. Doom?</strong></h5>
                        <p className="card-text fs-4 text-center">Victor Von Doom, also known as Dr. Doom, is the ruler of the fictional nation of Latveria in the Marvel Universe. A brilliant scientist and a powerful sorcerer, Dr. Doom combines his scientific prowess with mystical abilities to achieve his goals. Born in a Romani camp, Victor's early life was marked by tragedy, including the loss of his parents. His mother's death, in particular, drove him to seek power and knowledge in both science and magic. He attended Empire State University, where his experiments in contacting his deceased mother resulted in a catastrophic accident that scarred his face and led to his expulsion. After leaving the university, Victor traveled the world, eventually finding refuge with a group of Tibetan monks. There, he forged his iconic armor and mask, taking on the persona of Dr. Doom. He returned to Latveria, overthrowing its ruler and establishing himself as the nation's monarch. Dr. Doom's intellect is his greatest weapon, often rivaling that of other geniuses like Reed Richards. He is a master of both technology and magic, with a vast array of inventions and spells at his disposal. His armor enhances his physical strength, provides flight capabilities, and includes numerous weapons. Dr. Doom seeks to expand his power and influence, often clashing with superheroes such as the Fantastic Four, the Avengers, and Doctor Strange. Despite his villainous actions, he believes that his rule is ultimately for the greater good, seeing himself as the only one capable of bringing order and peace to the world.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;