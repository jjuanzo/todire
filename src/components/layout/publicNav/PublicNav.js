import { Button, Row } from 'antd';

const PublicNav = () => {
  return (
    <nav>
      <Row justify="space-between">
        {/* Logo & Links */}
        <div>
          <img src="/image/logo_full.svg" alt="Logo" />

          <ul>
            <li>
              <span>Why Todire?</span>
            </li>
            <li>
              <span>Features</span>
            </li>
            <li>
              <span>Resources</span>
            </li>
            <li>
              <span>Pricing</span>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              <Button>Log in</Button>
            </li>
            <li>
              <Button>Get Started</Button>
            </li>
          </ul>
        </div>
      </Row>
    </nav>
  );
};

export default PublicNav;
