import { animated, useSpring } from '@react-spring/web';
import { Col, Row, Tag } from 'antd';
import { BiLogoMongodb, BiLogoNodejs, BiLogoReact } from 'react-icons/bi';
import { SiExpress } from 'react-icons/si';
import { HashLink } from 'react-router-hash-link';
import styles from './style.module.css';

const WhyDropdown = ({ active, handleClose }) => {
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

  return (
    <div className={styles.nav_content}>
      <Row>
        <Col span={24}>
          <Row>
            <Col span={24}>
              <animated.div style={firstTopFade}>
                <h1>WHY TODIRE</h1>

                <ul>
                  <li>
                    <HashLink to="/#overview" onClick={handleClose}>
                      <h2>Overview</h2>
                      <p>Unleash Productivity, and Conquer Every Goal.</p>
                    </HashLink>
                  </li>
                  <li>
                    <HashLink to="/#clear" onClick={handleClose}>
                      <h2>Clear your mind</h2>
                      <p>Your Personal Taskmaster.</p>
                    </HashLink>
                  </li>
                  <li>
                    <HashLink to="/#focus" onClick={handleClose}>
                      <h2>Focus on what’s important</h2>
                      <p>Unlock Your Full Productivity Potential.</p>
                    </HashLink>
                  </li>
                  <li>
                    <HashLink to="/#get" onClick={handleClose}>
                      <h2>Get it all done</h2>
                      <p>Where work and personal tasks can finally coexist.</p>
                    </HashLink>
                  </li>
                </ul>
              </animated.div>
            </Col>
            <Col span={24}>
              <animated.div style={secondTopFade}>
                <h1>FOR YOUR WORKFLOW</h1>

                <Row>
                  <Col>
                    <ul>
                      <li>
                        <HashLink to="/workflow#project" onClick={handleClose}>
                          <h2>Project Management</h2>
                          <p>
                            Plan, track, and manage team projects from start to
                            finish
                          </p>
                        </HashLink>
                      </li>
                      <li>
                        <HashLink to="/workflow#solution" onClick={handleClose}>
                          <h2>Solution</h2>
                          <p>Empower Your Productivity</p>
                        </HashLink>
                      </li>
                      <li>
                        <HashLink to="/workflow#risk" onClick={handleClose}>
                          <h2>Identify Risks</h2>
                          <p>Task Security at Its Best: Identifying Risks</p>
                        </HashLink>
                      </li>
                      <li>
                        <HashLink to="/workflow#start" onClick={handleClose}>
                          <h2>Campaigns</h2>
                          <p>
                            Hit the ground running with templates designed for
                            your use case
                          </p>
                        </HashLink>
                      </li>
                    </ul>
                  </Col>
                  <Col xxl={4} xl={3} lg={1} />
                  <Col>
                    <ul>
                      <li>
                        <HashLink to="/workflow#remote" onClick={handleClose}>
                          <h2>
                            Remote teams <Tag color="#7e5bf6">POPULAR</Tag>
                          </h2>
                          <p>Collaborate and manage work from anywhere</p>
                        </HashLink>
                      </li>
                      <li>
                        <HashLink
                          to="/workflow#productivity"
                          onClick={handleClose}
                        >
                          <h2>Productivity</h2>
                          <p>
                            Be more deliberate about how you manage your time
                          </p>
                        </HashLink>
                      </li>
                      <li>
                        <HashLink to="/workflow#agile" onClick={handleClose}>
                          <h2>Agile Management</h2>
                          <p>
                            Build fast, ship often, and track it all in one
                            place
                          </p>
                        </HashLink>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </animated.div>
            </Col>
          </Row>
        </Col>

        <Col span={24} className={styles.nav_section}>
          <animated.div style={thirdTopFade}>
            <h1>TECHNOLOGY</h1>

            <ul>
              <li>
                <h2>Use Technology</h2>
                <p>
                  This web app was built using latest technology (MERN) Stack
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
  );
};

export default WhyDropdown;
