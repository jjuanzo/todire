import { AiOutlineFacebook } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { FaGoogle, FaLinkedinIn } from 'react-icons/fa';

import styles from './style.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src="/image/logo_full_white.svg" alt="Logo" />
      <h1>Empower Your Day, Organize Your Way!</h1>

      <h2>
        Thank you for visiting my Todire web application. If you have any
        inquiries or potential collaborations, I would be thrilled to discuss
        how my expertise can contribute to your vision.
      </h2>

      <ul>
        <li>
          <a href="https://github.com/jjuanzo" target="_blank" rel="noreferrer">
            <BsGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/jajuanzo/"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineFacebook />
          </a>
        </li>
        <li>
          <a
            href="mailto:juanzojosh@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaGoogle />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/joshua-juanzo-401025219/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </li>
      </ul>

      <p>© 2023 Todire™. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
