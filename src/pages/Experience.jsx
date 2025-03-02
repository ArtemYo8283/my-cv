import React from 'react';
import { Element } from 'react-scroll';
import './Experience.css';
import experienceData from '../data/experience.json';

const formatDate = (dateStr) => {
    if (dateStr.toLowerCase() === "present") return "Present";
    const date = new Date(dateStr + "-01");
    return date.toLocaleString("en-US", { month: "short", year: "numeric" });
};

const calculateDuration = (startDate, endDate) => {
    const start = new Date(startDate + "-01");
    const end = endDate.toLowerCase() === "present" ? new Date() : new Date(endDate + "-01");
    let months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    if (months < 0) months = 0;
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    let result = "";
    if (years > 0) result += `${years} yr${years > 1 ? "s" : ""}`;
    if (remainingMonths > 0) result += (years > 0 ? " " : "") + `${remainingMonths} mo.`;
    return result || "0 mo.";
};

const computeCompanyDateRange = (positions) => {
    let earliest = null, latest = null;
    positions.forEach(pos => {
        const start = new Date(pos.startDate + "-01");
        const end = pos.endDate.toLowerCase() === "present" ? new Date() : new Date(pos.endDate + "-01");
        if (!earliest || start < earliest) earliest = start;
        if (!latest || end > latest) latest = end;
    });
    return { earliest, latest };
};

const calculateDurationFromDates = (start, end) => {
    let months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    if (months < 0) months = 0;
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    let result = "";
    if (years > 0) result += `${years} yr${years > 1 ? "s" : ""}`;
    if (remainingMonths > 0) result += (years > 0 ? " " : "") + `${remainingMonths} mo.`;
    return result || "0 mo.";
};

const formatDateFromObject = (date) => {
    return date.toLocaleString("en-US", { month: "short", year: "numeric" });
};

const ExperienceItem = ({ experience }) => {
    const { earliest, latest } = computeCompanyDateRange(experience.positions);

    return (
        <div className="experience-item">
            <div className="experience-header">
                <div className="experience-left">
                    {experience.emblem && (
                        <div className="experience-emblem">
                            <a href={experience.companyLink} target="_blank" rel="noopener noreferrer">
                                <img src={`${process.env.PUBLIC_URL}/${experience.emblem}`} alt={`${experience.company} emblem`} />
                            </a>
                        </div>
                    )}
                    <div className="experience-info">
                        <h2>
                            <a href={experience.companyLink} target="_blank" rel="noopener noreferrer">
                                {experience.company}
                            </a>
                        </h2>
                        <p className="employment-type">{experience.employmentType}</p>
                        <p className="location">{experience.location}</p>
                    </div>
                </div>
                <div className="experience-overall">
                    {formatDateFromObject(earliest)} – {formatDateFromObject(latest)} · {calculateDurationFromDates(earliest, latest)}
                </div>
            </div>
            <div className="positions">
                {experience.positions.map((position, index) => (
                    <div key={index} className="position-item">
                        <h3 className="position-title">{position.title}</h3>
                        <span className="position-period">
                            {formatDate(position.startDate)} – {formatDate(position.endDate)} · {calculateDuration(position.startDate, position.endDate)}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Experience = () => {
    return (
        <Element name="experience" className="experience-section">
            <div className="experience-container">
                <h1>Experience</h1>
                {experienceData.map((exp, index) => (
                    <ExperienceItem key={index} experience={exp} />
                ))}
            </div>
        </Element>
    );
};

export default Experience;
