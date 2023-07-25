import { animated, useSpring } from '@react-spring/web';
import { Col, Row, Tag } from 'antd';
import { BiLogoMongodb, BiLogoNodejs, BiLogoReact } from 'react-icons/bi';
import { SiExpress } from 'react-icons/si';
import styles from './style.module.css';

const WhyDropdown = ({ active, navAnimation }) => {
  const firstTopFade = useSpring({
    delay: 150,
    from: { opacity: 0, marginTop: -20, marginBottom: 20 },
    to: {
      opacity: active ? 1 : 0,
      marginTop: active ? 0 : -20,
      marginBottom: active ? 0 : 20,
    },
  });

  const secondTopFade = useSpring({
    delay: 250,
    from: { opacity: 0, marginTop: -20, marginBottom: 20 },
    to: {
      opacity: active ? 1 : 0,
      marginTop: active ? 0 : -20,
      marginBottom: active ? 0 : 20,
    },
  });

  const thirdTopFade = useSpring({
    delay: 350,
    from: { opacity: 0, marginTop: -20, marginBottom: 20 },
    to: {
      opacity: active ? 1 : 0,
      marginTop: active ? 0 : -20,
      marginBottom: active ? 0 : 20,
    },
  });

  const firstLeftFade = useSpring({
    delay: 200,
    from: { opacity: 0, marginLeft: -20, marginRight: 20 },
    to: {
      opacity: active ? 1 : 0,
      marginLeft: active ? 0 : -20,
      marginRight: active ? 0 : 20,
    },
  });

  const secondLeftFade = useSpring({
    delay: 300,
    from: { opacity: 0, marginLeft: -20, marginRight: 20 },
    to: {
      opacity: active ? 1 : 0,
      marginLeft: active ? 0 : -20,
      marginRight: active ? 0 : 20,
    },
  });

  const thirdLeftFade = useSpring({
    delay: 400,
    from: { opacity: 0, marginLeft: -20, marginRight: 20 },
    to: {
      opacity: active ? 1 : 0,
      marginLeft: active ? 0 : -20,
      marginRight: active ? 0 : 20,
    },
  });

  return (
    <div className={styles.nav_wrapper}>
      <Row justify="center">
        <div className={styles.nav_content}>
          <Row>
            <Col span={17}>
              <Row>
                <Col span={8}>
                  <animated.div
                    style={
                      navAnimation === 'slide' ? firstTopFade : firstLeftFade
                    }
                  >
                    <h1>WHY TODIRE</h1>

                    <ul>
                      <li>
                        <h2>Overview</h2>
                        <p>Become focused, organized, and calm with Todire</p>
                      </li>
                      <li>
                        <h2>Clear your mind</h2>
                        <p>The fastest way to get tasks out of your head</p>
                      </li>
                      <li>
                        <h2>Focus on what’s important</h2>
                        <p>Reach that mental clarity you’ve been longing for</p>
                      </li>
                      <li>
                        <h2>Get it all done</h2>
                        <p>Where work and personal tasks can finally coexist</p>
                      </li>
                      <li>
                        <h2>In it for the long haul</h2>
                        <p>A task manager you can trust for life</p>
                      </li>
                    </ul>
                  </animated.div>
                </Col>
                <Col span={16}>
                  <animated.div
                    style={
                      navAnimation === 'slide' ? secondTopFade : secondLeftFade
                    }
                  >
                    <h1>FOR YOUR WORKFLOW</h1>

                    <Row>
                      <Col>
                        <ul>
                          <li>
                            <h2>Project Management</h2>
                            <p>
                              Plan, track, and manage team projects from start
                              to finish
                            </p>
                          </li>
                          <li>
                            <h2>Campaign Management</h2>
                            <p>
                              Create, launch, and track your marketing campaigns
                            </p>
                          </li>
                          <li>
                            <h2>Creative Production</h2>
                            <p>Design, review and ship inspirational work</p>
                          </li>
                          <li>
                            <h2>Request Tracking</h2>
                            <p>
                              Track, prioritize, and fulfill the task of your
                              teams
                            </p>
                          </li>
                        </ul>
                      </Col>
                      <Col xxl={4} xl={3} lg={1} />
                      <Col>
                        <ul>
                          <li>
                            <h2>
                              Remote teams <Tag color="#7e5bf6">POPULAR</Tag>
                            </h2>
                            <p>Collaborate and manage work from anywhere</p>
                          </li>
                          <li>
                            <h2>Productivity</h2>
                            <p>
                              Be more deliberate about how you manage your time
                            </p>
                          </li>
                          <li>
                            <h2>Agile Management</h2>
                            <p>
                              Build fast, ship often, and track it all in one
                              place
                            </p>
                          </li>
                        </ul>
                      </Col>
                    </Row>
                  </animated.div>
                </Col>
              </Row>
            </Col>

            <Col span={7} className={styles.nav_section}>
              <animated.div
                style={navAnimation === 'slide' ? thirdTopFade : thirdLeftFade}
              >
                <h1>TECHNOLOGY</h1>

                <ul>
                  <li>
                    <h2>Use Technology</h2>
                    <p>
                      This web app was built using latest technology (MERN)
                      Stack
                    </p>
                  </li>
                </ul>

                <h1>LIST OF TECHNOLOGY</h1>

                <ul className={styles.tech_list}>
                  <li>
                    <Row>
                      <span>
                        <BiLogoMongodb />
                      </span>
                      <h2>MongoDB</h2>
                    </Row>
                  </li>
                  <li>
                    <Row>
                      <span>
                        <SiExpress />
                      </span>
                      <h2>Express</h2>
                    </Row>
                  </li>
                  <li>
                    <Row>
                      <span>
                        <BiLogoReact />
                      </span>
                      <h2>React JS</h2>
                    </Row>
                  </li>
                  <li>
                    <Row>
                      <span>
                        <BiLogoNodejs />
                      </span>
                      <h2>Node JS</h2>
                    </Row>
                  </li>
                </ul>
              </animated.div>
            </Col>
          </Row>
        </div>
      </Row>
    </div>
  );
};

export default WhyDropdown;
