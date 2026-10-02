import { TypeAnimation } from "react-type-animation";


const Speech = () => {
    return (
        <div className="bubbleContainer">
            <div className="bubble">
                <TypeAnimation 
                    sequence={[
                        1000,
                        "Have a business idea, outdated system, or manual process that needs improvement?",
                        1000,
                        "I can help you design, develop, and transform your ideas into reliable digital solutions.",
                        1000,
                    ]}
                    wrapper="span" speed={40} deletionSpeed={60}
                    omi
                    repeat={Infinity}
                />
            </div>   
            <img src="me2.png" alt="" /> 
        </div>
    );
};

export default Speech;