import { animated, useSpring } from '@react-spring/web';
import { Col, Row } from 'antd';
import { BiLogoMongodb, BiLogoNodejs, BiLogoReact } from 'react-icons/bi';
import { SiExpress } from 'react-icons/si';
import styles from './style.module.css';

const ResourcesDropdown = ({ active, navAnimation }) => {
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
                    <h1>LEARN</h1>
                    <ul>
                      <li>
                        <h2>Integrations</h2>
                        <p>
                          Connect Todire with tools like IFTTT, Alexa, Google
                          Calendar, and more
                        </p>
                      </li>
                      <li>
                        <h2>Getting Started Guide</h2>
                        <p>
                          Everything you need to know to get your Todire up and
                          running in minutes
                        </p>
                      </li>
                      <li>
                        <h2>Help Center</h2>
                        <p>
                          Find answers to your questions and tips for getting
                          the most out of your Todire
                        </p>
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
                    <h1>CONNECT</h1>
                    <Row>
                      <Col>
                        <ul>
                          <li>
                            <h2>Support</h2>
                            <p>
                              Need help? Contact the Todire support team, get
                              how-to help and step by step instructions
                            </p>
                          </li>
                          <li>
                            <h2>Community Programs</h2>
                            <p>
                              Connect with and learn from Todire customers
                              around the world
                            </p>
                          </li>
                          <li>
                            <h2>Developer</h2>
                            <p>
                              Learn more about building appson the Todire
                              platform
                            </p>
                          </li>
                        </ul>
                      </Col>
                      <Col xxl={4} xl={3} lg={1} />
                      <Col>
                        <ul>
                          <li>
                            <h2>For Teams</h2>
                            <p>
                              Todire is the simplest way to keep track of your
                              shared tasks, projects, and deadlines. Period. For
                              teams who don’t have the time or patience to
                              overcomplicate it.
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

export default ResourcesDropdown;
