import { Col, Row } from 'antd';
import Fade from 'react-reveal/Fade';

import styles from './style.module.css';

const Features = () => {
  return (
    <div>
      <Row justify="center">
        <div className={styles.container}>
          <Row id="overview" justify="space-between" className={styles.wrapper}>
            <Col xxl={12} lg={12} md={24} xs={24}>
              <h2>OVERVIEW</h2>
              <h1>Unleash Productivity, and Conquer Every Goal.</h1>

              <p>
                Your Ultimate Companion to Seamless Task Management - Stay
                Organized, Stay Focused, and Stay Ahead with Our Intuitive
                Todire App, Redefining the Way You Tackle Tasks and Achieve
                Success!
              </p>
            </Col>
            <Col xxl={12} lg={12} md={24} xs={24}>
              <Fade right>
                <img src="/image/todo_home.svg" alt="To-do" />
              </Fade>
            </Col>
          </Row>

          <Row id="clear" justify="space-between" className={styles.wrapper}>
            <Col
              xxl={{ span: 12, order: 1 }}
              lg={{ span: 12, order: 1 }}
              md={{ span: 24, order: 2 }}
              xs={{ span: 24, order: 2 }}
            >
              <Fade left>
                <img src="/image/clear_home.svg" alt="To-do" />
              </Fade>
            </Col>

            <Col
              xxl={{ span: 12, order: 2 }}
              lg={{ span: 12, order: 2 }}
              md={{ span: 24, order: 1 }}
              xs={{ span: 24, order: 1 }}
            >
              <h2>CLEAR YOUR MIND</h2>
              <h1>Your Personal Taskmaster.</h1>

              <p>
                The All-in-One Todire App Designed to Optimize Your Time,
                Amplify Your Productivity, and Elevate Your Life - Simplify Your
                To-Dos, Conquer Your Day, and Unlock Your Full Potential,
                Embrace the Future of Task Management with Us!"
              </p>
            </Col>
          </Row>

          <Row id="focus" justify="space-between" className={styles.wrapper}>
            <Col xxl={12} lg={12} md={24} xs={24}>
              <h2>Focus on what’s important</h2>
              <h1>Unlock Your Full Productivity Potential.</h1>

              <p>
                Seamlessly Organize Your Daily Endeavors, Prioritize with
                Precision, and Celebrate the Art of Accomplishment - Todire,
                Your Trusted Task Companion, Revolutionizing the Way You Work,
                Live, and Thrive!"
              </p>
            </Col>
            <Col xxl={12} lg={12} md={24} xs={24}>
              <Fade right>
                <img src="/image/focus_home.svg" alt="To-do" />
              </Fade>
            </Col>
          </Row>

          <Row id="get" justify="space-between" className={styles.wrapper}>
            <Col
              xxl={{ span: 12, order: 1 }}
              lg={{ span: 12, order: 1 }}
              md={{ span: 24, order: 2 }}
              xs={{ span: 24, order: 2 }}
            >
              <Fade left>
                <img src="/image/get_home.svg" alt="To-do" />
              </Fade>
            </Col>

            <Col
              xxl={{ span: 12, order: 2 }}
              lg={{ span: 12, order: 2 }}
              md={{ span: 24, order: 1 }}
              xs={{ span: 24, order: 1 }}
            >
              <h2>GET IT ALL DONE</h2>
              <h1>Where work and personal tasks can finally coexist.</h1>

              <p>
                Tons of tasks, just one app. With workspaces, your personal,
                work, and team tasks can all live harmoniously under the same
                roof. (Sigh of relief).
              </p>
            </Col>
          </Row>
        </div>
      </Row>

      <br />
    </div>
  );
};

export default Features;
