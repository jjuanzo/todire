import { Row } from 'antd';
import { useEffect, useState } from 'react';

import NavigationAuth from './navigation-auth';
import NavigationDropdown from './navigation-dropdown';
import NavigationList from './navigation-list';

import styles from './style.module.css';

const PublicNav = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeNav, setActiveNav] = useState('');

  const [navAnimation, setNavAnimation] = useState('');
  const [navOffset, setNavOffset] = useState({
    left: 0,
    width: 0,
  });
  const [openNav, setOpenNav] = useState(false);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  const handleResetNav = () => {
    setNavAnimation('slide');
    setActiveNav('');
    setOpenNav(false);
    setNavOffset((state) => ({
      left: state.left,
      width: 0,
    }));
  };

  const handleClickNav = (nav, target) => {
    const openNavTemp = openNav && nav === activeNav ? false : true;

    setNavAnimation(!activeNav || nav === activeNav ? 'slide' : 'offset');

    setActiveNav(openNavTemp ? nav : '');
    setOpenNav(openNavTemp);
    setNavOffset((state) =>
      openNavTemp
        ? {
            left: target.offsetLeft,
            width: target.offsetWidth,
          }
        : { left: state.left, width: 0 }
    );
  };

  const handleClose = () => {
    setActiveNav('');
    setOpenNav(false);
    setNavAnimation('slide');
    setNavOffset((state) => ({
      left: state.left,
      width: 0,
    }));
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResetNav, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResetNav);
    };
  }, []);

  return (
    <div
      className={
        scrollPosition === 0 && !openNav
          ? styles.container
          : styles.sticky_container
      }
      onResize={handleResetNav}
    >
      <NavigationDropdown
        open={openNav}
        handleClose={handleClose}
        navAnimation={navAnimation}
        activeNav={activeNav}
      />

      <Row justify="center" className={styles.wrapper}>
        <nav className={styles.nav}>
          <Row justify="space-between">
            <NavigationList
              navAnimation={navAnimation}
              navOffset={navOffset}
              activeNav={activeNav}
              handleClickNav={handleClickNav}
            />

            <NavigationAuth />
          </Row>
        </nav>
      </Row>
    </div>
  );
};

export default PublicNav;
