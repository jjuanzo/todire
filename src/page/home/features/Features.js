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
              <h1>From overwhelmed to on top of it.</h1>

              <p>
                Todire gives you the confidence that everything’s organized and
                accounted for, so you can make progress on the things that are
                important to you.
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
              <h1>The fastest way to get tasks out of your head.</h1>

              <p>
                Type just about anything into the task field and Todire
                one-of-its-kind natural language recognition will instantly fill
                your to-do list.
              </p>
            </Col>
          </Row>

          <Row id="focus" justify="space-between" className={styles.wrapper}>
            <Col xxl={12} lg={12} md={24} xs={24}>
              <h2>Focus on what’s important</h2>
              <h1>Reach that mental clarity you’ve been longing for.</h1>

              <p>
                Your tasks are automatically sorted into Today, Upcoming, and
                custom Filter views to help you prioritize your most important
                work.
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
