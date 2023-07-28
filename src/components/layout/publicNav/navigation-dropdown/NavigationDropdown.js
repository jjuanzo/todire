import { Drawer, Row } from 'antd';

import FeaturesDropdown from './FeaturesDropdown';
import ResourcesDropdown from './ResourcesDropdown';
import WhyDropdown from './WhyDropdown';

import styles from './style.module.css';

const NavigationDropdown = ({ open, handleClose, navAnimation, activeNav }) => {
  return (
    <Drawer
      rootClassName={styles.nav_drawer}
      title={null}
      placement="top"
      closable={false}
      onClose={handleClose}
      open={open}
      zIndex={2}
      height={activeNav === 'why' ? 620 : activeNav === 'features' ? 600 : 560}
      footer={
        <Row justify="center" className={styles.footer}>
          <div>
            <ul>
              <li>
                <a href="https://jjuanzo.github.io/portfolio/" target="_self">
                  Contact Me
                </a>
              </li>
              <li>
                <a
                  href="https://jjuanzo.github.io/portfolio/"
                  target="_blank"
                  rel="noreferrer"
                >
                  My Portfolio
                </a>
              </li>
              <li>
                <a
                  href="https://jjuanzo.github.io/portfolio/"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Full Résumé
                </a>
              </li>
            </ul>
          </div>
        </Row>
      }
      footerStyle={{
        padding: 0,
      }}
    >
      {activeNav === 'why' ? (
        <WhyDropdown
          active={activeNav === 'why'}
          navAnimation={navAnimation}
          handleClose={handleClose}
        />
      ) : null}
      {activeNav === 'features' ? (
        <FeaturesDropdown
          active={activeNav === 'features'}
          navAnimation={navAnimation}
        />
      ) : null}
      {activeNav === 'resources' ? (
        <ResourcesDropdown
          active={activeNav === 'resources'}
          navAnimation={navAnimation}
        />
      ) : null}
    </Drawer>
  );
};

export default NavigationDropdown;
