import { Button, Col, Divider, Row } from 'antd';

import styles from './style.module.css';

const Header = () => {
  return (
    <div>
      <Row justify="center">
        <div className={styles.container}>
          <Row>
            <Col
              xxl={12}
              xl={12}
              lg={12}
              md={24}
              className={styles.header_section}
            >
              <h1>Empower Your Day, Organize Your Way!</h1>
              <h2>
                Unlock the Power of Productivity: Your Personalized Task
                Management Companion - Seamlessly Organize, Prioritize, and
                Conquer Your Day with Our Intuitive Todire App
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
              <img className={styles.guide_img} src="/gif/app.gif" alt="Logo" />
            </Col>
          </Row>
        </div>
      </Row>

      <Divider>
        <span className={styles.tech_divider}>
          BUILT USING LATEST TECHNOLOGIES
        </span>
      </Divider>

      <br />

      <Row justify="center" className={styles.tech_wrapper}>
        <img src="/image/mongo_logo_full_bw.svg" alt="Logo" />
        <img src="/image/react_logo_full_bw.svg" alt="Logo" />
        <img src="/image/node_logo_full_bw.svg" alt="Logo" />
      </Row>

      <br />
      <br />
      <br />
    </div>
  );
};

export default Header;
