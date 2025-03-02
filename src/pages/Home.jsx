import React from 'react';
import { Element } from 'react-scroll';
import './Home.css';

const Home = () => {
    return (
        <Element name="home" className="home-section">
            <div className="home-container">
                {/* Left Column */}
                <div className="home-left">
                    <h1>Artem Bondar</h1>
                    <p className="description">
                        I'm a back-end developer with three years of hands-on experience working with Node.js, Nest.js, Express, and various databases including MongoDB, PostgreSQL, Firebase, and MySQL. My technical expertise is complemented by strong English communication skills, enabling seamless collaboration with international teams. I possess strong problem-solving abilities in back-end development and am highly self-organized. My goal is to contribute to the creation of innovative applications and to enhance and refine existing projects.
                    </p>
                    <div className="info-cards">
                        <div className="card education">
                            <h2>Education</h2>
                            <ul>
                                <li>
                                    <strong>Bachelor’s Degree in Computer Science</strong>
                                    <br />
                                    NTU “KHPI”
                                </li>
                                <li>
                                    <strong>Educational Program for IT Specialists</strong>
                                    <br />
                                    Innovation Campus based on NTU “KHPI”
                                </li>
                                <li>
                                    <strong>Professional Computer Education</strong>
                                    <br />
                                    ITStep Academy
                                </li>
                            </ul>
                        </div>
                        <div className="card languages">
                            <h2>Languages</h2>
                            <ul>
                                <li>
                                    <strong>Ukrainian:</strong> Native
                                </li>
                                <li>
                                    <strong>English:</strong> B2 (Upper-Intermediate)
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="home-right">
                    <div className="photo-wrapper">
                        <img src="abondar.png" alt="Profile" className="profile-photo" />
                    </div>
                    <div className="technologies">
                        <h2>Programming Languages</h2>
                        <ul className="tech-list">
                            <li>JavaScript</li>
                            <li>TypeScript</li>
                        </ul>
                        <h2>Technologies</h2>
                        <ul className="tech-list">
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>Nest.js</li>
                            <li>Firebase</li>
                            <li>GraphQL</li>
                            <li>Sequelize</li>
                            <li>TypeORM</li>
                            <li>Stripe</li>
                            <li>Twilio</li>
                            <li>SendGrid</li>
                            <li>RabbitMQ</li>
                            <li>socket.io</li>
                            <li>Websockets</li>
                            <li>Auth0</li>
                            <li>JWT</li>
                            <li>CI/CD</li>
                            <li>Mocha</li>
                            <li>Jest</li>
                            <li>Docker</li>
                            <li>Algolia</li>
                            <li>ElasticSearch</li>
                        </ul>
                        <h2>Servers/Databases</h2>
                        <ul className="tech-list">
                            <li>MySQL</li>
                            <li>MsSQL</li>
                            <li>PostgreSQL</li>
                            <li>MongoDB</li>
                            <li>Firebase</li>
                        </ul>
                        <h2>Cloud Platforms</h2>
                        <ul className="tech-list">
                            <li>AWS (EC2, Lambda, API Gateway, S3, RDS, Cognito, Elastic Beanstalk)</li>
                            <li>GCP (Cloud SQL, API Gateway, Cloud Build, Cloud Vision API, Artifact Registry)</li>
                        </ul>
                        <h2>Source Controls</h2>
                        <ul className="tech-list">
                            <li>GitHub</li>
                            <li>GitLab</li>
                        </ul>
                        <h2>Tracking System</h2>
                        <ul className="tech-list">
                            <li>Jira</li>
                            <li>Trello</li>
                            <li>Asana</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Element>
    );
};

export default Home;
