import { animate } from "motion";
import "./portfolio.css";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const items = [
  {
    id: 1,
    img: "/proj0.png",
    title: "University Application",
    desc: "As MIS Director, my role is not limited to managing technology and maintaining information systems. It is to provide strategic technology leadership--ensuring that our digital initiatives are aligned with the university's vision, institutional priorities, and long-term goals. This means leading the development of systems that are secure, reliable, scalable, user-centered, and capable of supporting evidence-based decision-making at every level of the institution.",
    link: "/",
  },
  {
    id: 2,
    img: "/proj1.png",
    title: "Human Resource Information System",
    desc: "is a computer system that helps an organization manage employee information and HR activities in one place. It can hep manage employee records, attendance, leave, payroll, recruitment, performance, and reports, making HR work faster, easier, and more organized",
    link: "/",
  },
  {
    id: 3,
    img: "/proj2.png",
    title: "Inventory Information System",
    desc: "is a computer system that helps an organization keep track of its supplies, products, and equipment. It records items received, issued, available stocks, and inventory levels, making it easier to monitor resources, avoid shortages, and maintain accurate inventory records.",
    link: "/",
  },
  {
    id: 4,
    img: "/proj4.png",
    title: "Purchased Request System",
    desc: "is a digital system that makes it easier to request and process the purchase of supplies,equipment, and other needed items. It allows users to submit requests, track approvals, and monitor the status of purchases, making the proces faster, more organized, and transparent.",
    link: "/",
  },
  {
    id: 5,
    img: "/proj5.png",
    title: "Smart Card Attendance System",
    desc: "using RFID card and Biometrics is a digital system that records employee or student attendance using RFID card and Biometrics identification. It automatically records time-in and time-out, allowing authorized users to access attendance records online from any branch or location. The system makes attendance monitoring faster, more accurate, and easier to manage while reducing manual recording and errors.",
    link: "/",
  },
];
const imgVariants = {
    initial: {
        x: -500,
        y: 500,
        opacity: 0,
    },
    animate:{
        x:0,
        y:0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        },
    },
};

const textVariants = {
    initial: {
        x: 500,
        y: 500,
        opacity: 0,
    },
    animate:{
        x:0,
        y:0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
            staggerChildren:0.05,
        },
    },
};

const ListItems = ({item}) => {
    const ref = useRef();

    const isInView = useInView(ref, {margin:"-100px"});
    return (
        <div className="pItem" ref={ref}>
        <motion.div
            variants={imgVariants}
            animate={isInView ? "animate" : "initial"}
            className="pImg"
        >
            <img src={item.img} alt="" />
        </motion.div>
        <motion.div
            variants={textVariants}
            animate={isInView ? "animate" : "initial"}
            className="pText"
        >
        <motion.h1 variants={textVariants}>{item.title}</motion.h1>
        <motion.p variants={textVariants}>{item.desc}</motion.p>
        <motion.a variants={textVariants} href={item.link}>
          <button>View Project</button>
        </motion.a>
        </motion.div>
        </div>
    );
};


const Portfolio = () => {
    const ref = useRef(null);

    const {scrollYProgress} = useScroll({target:ref});

    const xTranslate = useTransform(
        scrollYProgress, 
        [0,1],
      [0, -window.innerWidth * (items.length - 1)]
    );

    return (
        <div className="portfolio" ref={ref}>
            <motion.div className="pList" style={{x:xTranslate}}>
                {items.map(item=>(
                    <ListItems item={item} key={item.id}/>
                ))}
            </motion.div>
            <section/>
            <section/>
            <section/>
            <section/>
            <section/>
            <div className="pProgress">
            <svg width="100%" height="100%" viewBox="0 0 160 160">
            <circle
                cx="80"
                cy="80"
                r="70"
                fill="none"
                stroke="#ddd"
                strokeWidth={20}
            />
            <motion.circle
                cx="80"
                cy="80"
                r="70"
                fill="none"
                stroke="#dd4c62"
                strokeWidth={20}
                style={{ pathLength: scrollYProgress }}
                transform="rotate(-90 80 80)"
            />
            </svg>
        </div>
    </div>
    );
};

export default Portfolio;