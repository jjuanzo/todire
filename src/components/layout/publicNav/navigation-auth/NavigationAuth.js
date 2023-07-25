import { Button, Tooltip } from 'antd';
import { CiMenuBurger } from 'react-icons/ci';
import { VscAccount, VscGlobe, VscMail } from 'react-icons/vsc';

import styles from './style.module.css';

const NavigationAuth = () => {
  return (
    <div className={styles.nav_group}>
      <ul>
        <li>
          <Tooltip title="My portfolio">
            <Button
              className={styles.portfolio_btn}
              icon={<VscGlobe />}
              type="link"
              href="https://jjuanzo.github.io/portfolio/"
              target="_blank"
            />
          </Tooltip>
        </li>
        <li>
          <Tooltip title="Contact Me">
            <Button
              className={styles.contact_btn_icn}
              icon={<VscMail />}
              type="link"
              href="https://jjuanzo.github.io/portfolio/"
              target="_blank"
            />
          </Tooltip>
        </li>
        <li>
          <Tooltip title="Log In">
            <Button
              className={styles.login_btn_icn}
              icon={<VscAccount />}
              type="link"
              href="https://jjuanzo.github.io/portfolio/"
              target="_blank"
            />
          </Tooltip>
        </li>
        <li>
          <Button className={styles.contact_btn} type="link">
            Contact Me
          </Button>
        </li>
        <li>
          <Button className={styles.login_btn} type="link">
            Log in
          </Button>
        </li>
        <li>
          <Button className={styles.start_btn}>Get Started</Button>
        </li>
        <li>
          <Button
            className={styles.burger_btn}
            icon={<CiMenuBurger />}
            type="link"
          />
        </li>
      </ul>
    </div>
  );
};

export default NavigationAuth;
