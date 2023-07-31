import { VscChevronDown } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

import styles from './style.module.css';

const NavigationList = ({
  navAnimation,
  navOffset,
  activeNav,
  handleClickNav,
}) => {
  return (
    <div className={styles.nav_group}>
      <div
        className={
          navAnimation === 'slide'
            ? styles.nav_marker
            : styles.nav_marker_offset
        }
        style={{ left: navOffset.left, width: navOffset.width }}
      />
      <Link to="/">
        <img src="/image/logo_full.svg" alt="Logo" />
      </Link>
      <ul className={styles.nav_links}>
        <li
          className={activeNav === 'why' ? styles.nav_link_active : ''}
          onClick={(e) => handleClickNav('why', e.target)}
        >
          <span>
            Why Todire? <VscChevronDown />
          </span>
        </li>
        <li
          className={activeNav === 'features' ? styles.nav_link_active : ''}
          onClick={(e) => handleClickNav('features', e.target)}
        >
          <span>
            Features <VscChevronDown />
          </span>
        </li>
        <li
          className={activeNav === 'resources' ? styles.nav_link_active : ''}
          onClick={(e) => handleClickNav('resources', e.target)}
        >
          <span>
            Resources <VscChevronDown />
          </span>
        </li>
        <li>
          <Link to="#">Support</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationList;
