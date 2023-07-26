import { Button, Collapse, Divider, Drawer, Row } from 'antd';
import { useState } from 'react';

import FeatureDrodown from './FeatureDrodown';
import ResourcesDropdown from './ResourcesDropdown';
import WhyDropdown from './WhyDropdown';

import { Link } from 'react-router-dom';
import styles from './style.module.css';

const NavigationMobile = ({ open, handleClose }) => {
  const [activeNav, setActiveNav] = useState();

  const links = [
    {
      key: 'why',
      label: 'Why Todire?',
      children: <WhyDropdown active={activeNav} />,
    },
    {
      key: 'features',
      label: 'Features',
      children: <FeatureDrodown active={activeNav} />,
    },
    {
      key: 'resources',
      label: 'Resources',
      children: <ResourcesDropdown active={activeNav} />,
    },
  ];

  return (
    <Drawer
      rootClassName={styles.nav_drawer}
      title={null}
      placement="top"
      closable={false}
      onClose={handleClose}
      open={open}
      zIndex={2}
      height={window.innerHeight}
      footer={
        <Row justify="center" className={styles.footer}>
          <a href="https://jjuanzo.github.io/portfolio/" target="_self">
            Contact Me
          </a>
          <a
            href="https://jjuanzo.github.io/portfolio/"
            target="_blank"
            rel="noreferrer"
          >
            My Portfolio
          </a>

          <a
            href="https://jjuanzo.github.io/portfolio/"
            target="_blank"
            rel="noreferrer"
          >
            View Full Résumé
          </a>
        </Row>
      }
      footerStyle={{
        padding: 0,
      }}
    >
      <div className={styles.nav_wrapper}>
        <Collapse
          style={{ background: 'transparent' }}
          items={links}
          bordered={false}
          expandIconPosition="end"
          onChange={(value) => setActiveNav(value[0])}
        />

        <Divider className={styles.divider} />
        <Link to="#" className={styles.link}>
          <div>Support</div>
        </Link>
        <Divider className={styles.divider} />

        <br />
        <br />

        <Button className={styles.start_btn} block>
          Get Started
        </Button>

        <br />
        <br />

        <Button className={styles.login_btn} block>
          Log In
        </Button>
      </div>
    </Drawer>
  );
};

export default NavigationMobile;
