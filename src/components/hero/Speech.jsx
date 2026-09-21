import { TypeAnimation } from "react-type-animation";


const Speech = () => {
    return (
        <div className="bubbleContainer">
            <div className="bubble">
                <TypeAnimation 
                    sequence={[
                        1000,
                        "Same substring at the tart will only be type out one, initially",
                        1000,
                        "Lorem ipsum dolor sit amet lerinat consectetur adipicisicing.",
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