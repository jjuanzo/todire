import { Button, Col, Row } from 'antd';

import styles from './style.module.css';

const Header = () => {
  return (
    <div style={{ background: '#f5f3f3' }}>
      <Row justify="center">
        <div className={styles.container} id="project">
          <Row>
            <Col
              xxl={12}
              xl={12}
              lg={12}
              md={24}
              className={styles.header_section}
            >
              <h1>Empowering Projects to Soar Beyond Expectations</h1>
              <h2>
                Driving Success through Seamless Collaboration. Your Project,
                Our Expertise – A Winning Combination!
              </h2>

              <Row>
                <Button className={styles.start_btn}>Get Started</Button>
                <p>
                  FREE FOREVER
                  <br />
                  NO CREDIT CARD
                </p>
              </Row>
            </Col>

            <Col xxl={12} xl={12} lg={12} md={24}>
              <img
                className={styles.guide_img}
                src="/image/project_workflow.svg"
                alt="Logo"
              />
            </Col>
          </Row>
        </div>
      </Row>
    </div>
  );
};

export default Header;
