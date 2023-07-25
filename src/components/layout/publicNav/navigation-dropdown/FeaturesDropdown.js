import { animated, useSpring } from '@react-spring/web';
import { Col, Row } from 'antd';
import {
  AiOutlineAppstoreAdd,
  AiOutlineBarChart,
  AiOutlineCalendar,
  AiOutlineCheckCircle,
  AiOutlineFlag,
  AiOutlineHeart,
  AiOutlineNotification,
} from 'react-icons/ai';
import {
  BiComment,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoReact,
} from 'react-icons/bi';
import { BsActivity } from 'react-icons/bs';
import { GoTasklist } from 'react-icons/go';
import { SiExpress } from 'react-icons/si';
import styles from './style.module.css';

const FeaturesDropdown = ({ active, navAnimation }) => {
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
              <h1>KEY FEATURES</h1>
              <Row>
                <Col span={8}>
                  <animated.div
                    style={
                      navAnimation === 'slide' ? firstTopFade : firstLeftFade
                    }
                  >
                    <ul>
                      <li>
                        <h2>
                          <AiOutlineAppstoreAdd /> Quick Add
                        </h2>
                        <p>Lets you capture and organize tasks in seconds</p>
                      </li>
                      <li>
                        <h2>
                          <AiOutlineCalendar /> Recurring due dates
                        </h2>
                        <p>Help you remember deadlines and build habits</p>
                      </li>
                      <li>
                        <h2>
                          <GoTasklist /> Sections & subtasks
                        </h2>
                        <p>Ensure tht your projects stay neatly organized</p>
                      </li>
                      <li>
                        <h2>
                          <AiOutlineNotification /> Notifications
                        </h2>
                        <p>Let you know when people post comments and more</p>
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
                    <Row>
                      <Col>
                        <ul>
                          <li>
                            <h2>
                              <AiOutlineFlag />
                              Priority Levels
                            </h2>
                            <p>Highlight the day's most important tasks</p>
                          </li>
                          <li>
                            <h2>
                              <AiOutlineHeart />
                              Favorites
                            </h2>
                            <p>
                              Keep key projects, labels, or filters top of mind
                            </p>
                          </li>
                          <li>
                            <h2>
                              <BiComment />
                              Comments & file uploads
                            </h2>
                            <p>Give rich context to your tasks</p>
                          </li>
                          <li>
                            <h2>
                              <AiOutlineCalendar />
                              Calendar feeds
                            </h2>
                            <p>
                              Display your scheduled tasks inside your calendar
                              of choice
                            </p>
                          </li>
                        </ul>
                      </Col>
                      <Col xxl={4} xl={3} lg={1} />
                      <Col>
                        <ul>
                          <li>
                            <h2>
                              <AiOutlineBarChart />
                              Productivity visualization
                            </h2>
                            <p>Help you stay on track to achieve your goals</p>
                          </li>

                          <li>
                            <h2>
                              <BsActivity />
                              Activity History
                            </h2>
                            <p>
                              Snapshot of account activity filtered by project
                              or person
                            </p>
                          </li>

                          <li>
                            <h2>
                              <AiOutlineCheckCircle />
                              Complete tasks archive
                            </h2>
                            <p>
                              Paint a portrait of how small steps add up to big
                              accomplishments
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

export default FeaturesDropdown;
