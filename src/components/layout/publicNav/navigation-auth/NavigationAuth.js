import { Button, Tooltip } from 'antd';
import { useState } from 'react';
import { CiMenuBurger, CiMenuFries } from 'react-icons/ci';
import { VscAccount, VscGlobe, VscMail } from 'react-icons/vsc';
import NavigationMobile from '../navigation-mobile';

import styles from './style.module.css';

const NavigationAuth = () => {
  const [openMbNav, setOpenMbNav] = useState(false);

  return (
    <div className={styles.nav_group}>
      <NavigationMobile
        open={openMbNav}
        handleClose={() => setOpenMbNav(false)}
      />
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
            icon={openMbNav ? <CiMenuFries /> : <CiMenuBurger />}
            type="link"
            onClick={() => setOpenMbNav((state) => !state)}
          />
        </li>
      </ul>
    </div>
  );
};

export default NavigationAuth;
