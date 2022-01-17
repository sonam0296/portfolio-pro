import React, { useState } from 'react'
import './Resume.css'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'

const Resume = (props) => {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
    const [carouselOffSetStyle, setCarouselOffSetStyle] = useState({})

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeScreen !== props.id)
            return
        Animations.animations.fadeInScreen(props.id)
    }

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const ResumeHeading = (props) => {
        return (
            <div className="resume-heading">
                <div className="resume-main-heading">
                    <div className="heading-bullet"></div>
                    <span>{props.heading ? props.heading : ""}</span>
                    {props.fromDate && props.toDate ? (
                        <div className="heading-date">
                            {props.fromDate + "-" + props.toDate}
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
                <div className="resume-sub-heading">
                    <span>{props.subHeading ? props.subHeading : ""}</span>
                </div>
                <div className="resume-heading-description">
                    <span>{props.description ? props.description : ""}</span>
                </div>
            </div>
        );
    };

    const resumeBullets = [
        {
            label: "Education",
            logoSrc: "education.svg"
        },
        {
            label: "Work History",
            logoSrc: "work-history.svg"
        },
        {
            label: "Programming Skills",
            logoSrc: "programming-skills.svg"
        },
        {
            label: "Projects",
            logoSrc: "projects.svg"
        },
        {
            label: "Interests",
            logoSrc: "interests.svg"
        },
    ]

    const programmingSkillDetails = [
        { skill: "JavaScript", ratingPercentage: 80 },
        { skill: "React Js", ratingPercentage: 85 },
        { skill: "Node Js", ratingPercentage: 85 },
        { skill: "Mongo DB", ratingPercentage: 70 },
        { skill: "Python", ratingPercentage: 50 },
        { skill: "HTML", ratingPercentage: 80 },
        { skill: "CSS", ratingPercentage: 80 },
        // { skill: "Bootstrap", ratingPercentage: 80 },
        { skill: "Core Java", ratingPercentage: 70 },
    ]

    const projectDetails = [
        {
            title: "Personal Portfolio Website",
            duration: { fromDate: "2020", toDate: "2021" },
            description: "A Personal Portfolio website to showcase my skills and projects in one place.",
            subHeading: "Technologies Used: React Js, Bootstrap"
        },
        {
            title: "CryptoVerse Website",
            duration: { fromDate: "2021", toDate: "2022" },
            description: "Build CryptoCurrency website using CryptoApi to show all the current new and its categories.",
            subHeading: "Technologies Used: React Js, Redux, Ant Design"
        },
        {
            title: "E-commerce Website",
            duration: { fromDate: "2021", toDate: "2022" },
            description: "Online E-Commerce Website showing all the products & its categories.",
            subHeading: "Technologies Used: React Js, Redux, Node Js, MongoDB, Express Js, Bootstrap"
        },
    ]

    const resumeDetails = [
        <div className="resume-screen-container" key="education">
            <ResumeHeading
                heading={"AppxBuild Technologies Pvt Ltd"}
                subHeading={"INTERNSHIP AS SOFTWARE DEVELOPER"}
                fromDate={"2020"}
                toDate={"2020"}
            />
            <ResumeHeading
                heading={"University of Mumbai, Maharastra"}
                subHeading={"BACHELOR OF ENGINEERING IN COMPUTER SCIENCE"}
                fromDate={"2016"}
                toDate={"2020"}
            />
            <ResumeHeading
                heading={"HSC, Maharastra Board"}
                subHeading={"HSC IN SCIENCE"}
                fromDate={"2014"}
                toDate={"2016"}
            />
        </div>,
        /* WORK EXPERIENCE */
        <div className="resume-screen-container" key="work-experience">
            <div className="experience-container">
                <ResumeHeading
                    heading={"Arrk Group Pvt Ltd"}
                    subHeading={"SOFTWARE DEVELOPER"}
                    fromDate={"2021"}
                    toDate={"present"}
                />
                <div className="experience-description">
                    <span className="resume-description-text">
                        Currently working as Software Developer.                    </span>
                </div>
                <div className="experience-description">
                    <span className="resume-description-text">
                        Developing an web-app application for client where worked in a team
                        and developed PAP application also dashboard for managing datas. Also solved bugs
                        raised by the client in given period of time.
                    </span>
                    <br />
                    <span className="resume-description-text">
                        - Integrated the frontend in React Js and for the backend used Python
                        in which I have mostly worked in frontend. Also taking training in Python.                    </span>
                    <br />
                    <span className="resume-description-text">
                        - I tried my best to use my mental capacity to develop UI as per the given designs                    </span>
                    <br />
                </div>
            </div>
        </div>,
        /* PROGRAMMING SKILLS */
        <div className="resume-screen-container programming-skills-container" key="programming-skills">
            {programmingSkillDetails.map((skill, index) => (
                <div className="skill-parent" key={index}>
                    <div className="heading-bullet"></div>
                    <span>{skill.skill}</span>
                    <div className="skill-percentage">
                        <div
                            style={{ width: skill.ratingPercentage + "%" }}
                            className="active-percentage-bar"
                        ></div>
                    </div>
                </div>
            ))}
        </div>,

        /* Application SKILLS */
        //    <div className="resume-screen-container application-skills-container" key="application-skills">
        //      {applicationSkillsDetails.map((skill, index) => (
        //        <div className="skill-parent" key={index}>
        //          <div className="heading-bullet"></div>
        //          <span>{skill.skill}</span>
        //          <div className="skill-percentage">
        //            <div
        //              style={{ width: skill.ratingPercentage + "%" }}
        //              className="active-percentage-bar"
        //            ></div>
        //          </div>
        //        </div>
        //      ))}
        //    </div>,

        /* PROJECTS */
        <div className="resume-screen-container" key="projects">
            {
                projectDetails.map((projectsDetails, index) => (
                    <ResumeHeading
                        key={index}
                        heading={projectsDetails.title}
                        subHeading={projectsDetails.subHeading}
                        description={projectsDetails.description}
                        fromDate={projectsDetails.duration.fromDate}
                        toDate={projectsDetails.duration.toDate}
                    />
                ))
            }
        </div>,

        /* Interests */
        <div className="resume-screen-container" key="interests">
            <ResumeHeading
                heading="Music"
                description="Listening to music feels better and energetic while doing work."
            />
            <ResumeHeading
                heading="Travelling"
                description="Exploring new places, cultures, traditions. Travelling freshen-ups the mind."
            />
        </div>,
    ];


    const handleCarousal = (index) => {
        let offsetHeight = 360;

        let newCarousalOffset = {
            style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
        };

        setCarouselOffSetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
    };

    const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
            <div
                onClick={() => handleCarousal(index)}
                className={
                    index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
                }
                key={index}
            >
                <img
                    className="bullet-logo"
                    src={require(`../../assets/Resume/${bullet.logoSrc}`)}
                    alt="B"
                />
                <span className="bullet-label">{bullet.label}</span>
            </div>
        ));
    };

    const getResumeScreens = () => {
        return (
            <div
                style={carouselOffSetStyle.style}
                className="resume-details-carousal"
            >
                {resumeDetails.map((ResumeDetail) => ResumeDetail)}
            </div>
        );
    };
    return (
        <>
            <div className="resume-container screen-container " id={props.id || ""}>
                <div className="resume-content">
                    <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
                    <div className="resume-card">
                        <div className="resume-bullets">
                            <div className="bullet-container">
                                <div className="bullet-icons"></div>
                                <div className="bullets">{getBullets()}</div>
                            </div>
                        </div>
                        <div className="resume-bullet-details">{getResumeScreens()}</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Resume
