import ComputerModelContainer from "./computer/ComputerModelContainer";
import ConsoleModelContainer from "./console/ConsoleModelContainer";
import CoffeeModelContainer from "./coffee/coffeeModelContainer";
import Counter from "./Counter";
import "./services.css";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
const textVariants = {
  initial: {
    x: -100,
    y: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};
const listVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};
const services = [
  {
    id: 1,
    img: "/service1.png",
    title: "Web Development",
    counter: 35,
  },
  {
    id: 2,
    img: "/service2.png",
    title: "Product Design",
    counter: 23,
  },
  {
    id: 3,
    img: "/service3.png",
    title: "Branding",
    counter: 46,
  },
];
const Services = () => {
  const [currentServiceId, setCurrentServiceId] = useState(1);
  const ref = useRef();
  const isInview = useInView(ref, { margin: "-200px" });

  const currentModel =
    currentServiceId === 1 ? (
      <ComputerModelContainer key="computer" />
    ) : currentServiceId === 2 ? (
      <CoffeeModelContainer key="coffee" />
    ) : (
      <ConsoleModelContainer key="console" />
    );

  return (
    <div className="services" ref={ref}>
      <div className="sSection left">
        <motion.h1
          variants={textVariants}
          animate={isInview ? "animate" : "initial"}
          className="sTitle"
        >
          How do I help?
        </motion.h1>
        <motion.div
          variants={listVariants}
          animate={isInview ? "animate" : "initial"}
          className="serviceList"
        >
          {services.map((service) => (
            <motion.div
              className={`service ${currentServiceId === service.id ? "active" : ""}`}
              key={service.id}
              onClick={() => setCurrentServiceId(service.id)}
            >
              <div className="serviceIcon">
                <img src={service.img} alt="" />
              </div>
              <div className="serviceInfo">
                <h2>{service.title}</h2>
                <h3>{service.counter} Projects</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="counterList">
          <Counter from={0} to={87} text="Projects Completed" />
          <Counter from={0} to={12} text="Happy Clients" />
        </div>
      </div>
      <div className="sSection right">{currentModel}</div>
    </div>
  );
};

export default Services;
