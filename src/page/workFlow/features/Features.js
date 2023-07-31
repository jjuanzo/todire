import { Button, Col, Collapse, Row } from 'antd';
import { useState } from 'react';
import {
  BsBookmarkCheckFill,
  BsFillClockFill,
  BsFillPatchCheckFill,
} from 'react-icons/bs';
import { FaClipboardList } from 'react-icons/fa';
import { SiTarget } from 'react-icons/si';
import { Fade } from 'react-reveal';

import styles from './style.module.css';

const Features = () => {
  const [activeNav, setActiveNav] = useState();

  const collapseItem = [
    {
      key: '1',
      label: <h6>Risk Severity and Impact</h6>,
      children: (
        <p>
          Enable users to assess and assign severity levels and potential impact
          for each identified risk. This information helps prioritize risk
          mitigation efforts. Offer the ability to create and attach risk
          mitigation actions directly to the tasks or projects. These actions
          outline the steps to address and minimize the identified risks.
        </p>
      ),
    },
    {
      key: '2',
      label: <h6>Risk Reporting and Tracking</h6>,
      children: (
        <p>
          Implement a reporting dashboard that displays an overview of all
          identified risks, their current status, and any completed mitigation
          actions. This feature allows users to monitor the progress of risk
          resolution.
        </p>
      ),
    },
    {
      key: '3',
      label: <h6>Collaboration on Risk Management</h6>,
      children: (
        <span>
          Allow users to share risk-related information with team members or
          stakeholders, fostering collaborative efforts in fixing risks
          effectively. Enable users to adjust task deadlines based on the
          identified risks and the time needed for mitigation. This ensures
          realistic timelines and reduces the chance of project delays.
        </span>
      ),
    },
  ];

  return (
    <div>
      <Row justify="center">
        <div className={styles.container}>
          <div id="solution">
            <h1>A solution for every use case.</h1>

            <p>
              Empower Your Productivity with Our Cutting-Edge Todo App! From
              Dynamic Task Management and Collaborative Workflows to Seamless
              Syncing and Intuitive Design, We've Got You Covered.
            </p>

            <div className={styles.section_1}>
              <div>
                <img src="/image/solution_workflow_1.svg" alt="Logo" />

                <h2>Task Organization & Due Date and Reminders</h2>

                <p>
                  Allow users to create, edit, and categorize tasks, enabling
                  them to prioritize and organize their to-do lists effectively.
                  Incorporate the ability to set due dates for tasks and send
                  reminders to users, ensuring they stay on track with
                  deadlines.
                </p>
              </div>
              <div>
                <img src="/image/solution_workflow_2.svg" alt="Logo" />

                <h2>Task Progress Tracking & Collaboration and Sharing</h2>

                <p>
                  Implement a feature that allows users to mark tasks as "in
                  progress" or "completed" to monitor their progress easily.
                  Enable users to share tasks and collaborate on projects with
                  colleagues or family members, fostering teamwork and
                  productivity.
                </p>
              </div>
              <div>
                <img src="/image/solution_workflow_3.svg" alt="Logo" />

                <h2>Tags and Labels & Notes and Attachments</h2>

                <p>
                  Provide users with the option to add tags or labels to tasks,
                  making it simpler to filter and search for specific items.
                  Allow users to attach notes or files to tasks, offering a
                  central place for all related information.
                </p>
              </div>
            </div>
          </div>

          <br />
          <br />
          <br />

          <div id="risk" className={styles.section_2}>
            <h1>Identify risks before they become critical blockers</h1>

            <p>
              Task Security at Its Best: Identifying Risks, Preventing Delays,
              and Ensuring Smooth Productivity - Our Todo App is Your Shield of
              Preparedness. With Risk Management Built-In, You Can Focus on
              Progress, Not Hurdles - Experience Efficiency and Peace of Mind,
              Every Step of the Way
            </p>

            <Row>
              <Col xxl={12} xl={12} lg={12} md={0} xs={0}>
                <Collapse
                  accordion
                  style={{ background: 'transparent' }}
                  defaultActiveKey={'1'}
                  items={collapseItem}
                  bordered={false}
                  expandIconPosition="end"
                  onChange={(value) => setActiveNav(value[0])}
                />
              </Col>

              <Col xxl={12} xl={12} lg={12} md={0} xs={0}>
                {activeNav === '1' ? (
                  <Fade key="1" top>
                    <img key="1" src="/image/todo_home.svg" alt="Logo" />
                  </Fade>
                ) : activeNav === '2' ? (
                  <Fade key="2" top>
                    <img key="2" src="/image/get_home.svg" alt="Logo" />
                  </Fade>
                ) : (
                  <Fade key="3" top>
                    <img key="3" src="/image/focus_home.svg" alt="Logo" />
                  </Fade>
                )}
              </Col>

              <Col xxl={0} xl={0} lg={0} md={24} xs={24}>
                <div className={styles.section_3}>
                  <div>
                    <img src="/image/todo_home.svg" alt="Logo" />

                    <h2>Risk Severity and Impact</h2>

                    <p>
                      Enable users to assess and assign severity levels and
                      potential impact for each identified risk. This
                      information helps prioritize risk mitigation efforts.
                      Offer the ability to create and attach risk mitigation
                      actions directly to the tasks or projects. These actions
                      outline the steps to address and minimize the identified
                      risks.
                    </p>
                  </div>
                  <div>
                    <img src="/image/get_home.svg" alt="Logo" />

                    <h2>Risk Reporting and Tracking</h2>

                    <p>
                      Implement a reporting dashboard that displays an overview
                      of all identified risks, their current status, and any
                      completed mitigation actions. This feature allows users to
                      monitor the progress of risk resolution.
                    </p>
                  </div>
                  <div>
                    <img src="/image/focus_home.svg" alt="Logo" />

                    <h2>Collaboration on Risk Management</h2>

                    <p>
                      Allow users to share risk-related information with team
                      members or stakeholders, fostering collaborative efforts
                      in fixing risks effectively. Enable users to adjust task
                      deadlines based on the identified risks and the time
                      needed for mitigation. This ensures realistic timelines
                      and reduces the chance of project delays.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          <br />
          <br />
          <br />

          <div id="start" className={styles.section_4}>
            <Row>
              <Col xxl={12} xl={12} lg={12} md={24} xs={24}>
                <h2>GET STARTED TODAY</h2>
                <h1>Supercharge your Campaigns</h1>

                <p>
                  Hit the ground running with templates designed for your use
                  case, or build a workflow customized to your teams’ specific
                  needs
                </p>

                <br />
                <Button className={styles.start_btn}>Get Started</Button>
              </Col>

              <Col xxl={12} xl={12} lg={12} md={24} xs={24}>
                <br />
                <Row>
                  <ul>
                    <li>
                      <BsFillPatchCheckFill /> Campaign Plan
                    </li>
                    <li>
                      <BsFillPatchCheckFill /> Event Planning
                    </li>
                    <li>
                      <BsFillPatchCheckFill /> Return to Office
                    </li>
                    <li>
                      <BsFillPatchCheckFill /> Objectives Planning
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <BsFillPatchCheckFill /> RFP Process
                    </li>
                    <li>
                      <BsFillPatchCheckFill /> Social Media Calendar
                    </li>
                    <li>
                      <BsFillPatchCheckFill /> Meeting Agenda
                    </li>
                    <li>
                      <BsFillPatchCheckFill /> Onboarding
                    </li>
                  </ul>
                </Row>
              </Col>
            </Row>
          </div>

          <br />
          <br />
          <br />

          <div id="remote" className={styles.section_5}>
            <h1>A remote work software solution to keep your team connected</h1>

            <br />
            <br />
            <br />

            <Row>
              <Col xxl={12} xl={12} lg={12} md={0} xs={0}>
                {activeNav === '1' ? (
                  <Fade key="1" top>
                    <img key="1" src="/image/todo_home.svg" alt="Logo" />
                  </Fade>
                ) : activeNav === '2' ? (
                  <Fade key="2" top>
                    <img key="2" src="/image/get_home.svg" alt="Logo" />
                  </Fade>
                ) : (
                  <Fade key="3" top>
                    <img key="3" src="/image/focus_home.svg" alt="Logo" />
                  </Fade>
                )}
              </Col>

              <Col xxl={12} xl={12} lg={12} md={0} xs={0}>
                <Collapse
                  accordion
                  style={{ background: 'transparent' }}
                  defaultActiveKey={'1'}
                  items={collapseItem}
                  bordered={false}
                  expandIconPosition="end"
                  onChange={(value) => setActiveNav(value[0])}
                />
              </Col>

              <Col xxl={0} xl={0} lg={0} md={24} xs={24}>
                <div className={styles.section_3}>
                  <div>
                    <img src="/image/todo_home.svg" alt="Logo" />

                    <h2>Risk Severity and Impact</h2>

                    <p>
                      Enable users to assess and assign severity levels and
                      potential impact for each identified risk. This
                      information helps prioritize risk mitigation efforts.
                      Offer the ability to create and attach risk mitigation
                      actions directly to the tasks or projects. These actions
                      outline the steps to address and minimize the identified
                      risks.
                    </p>
                  </div>
                  <div>
                    <img src="/image/get_home.svg" alt="Logo" />

                    <h2>Risk Reporting and Tracking</h2>

                    <p>
                      Implement a reporting dashboard that displays an overview
                      of all identified risks, their current status, and any
                      completed mitigation actions. This feature allows users to
                      monitor the progress of risk resolution.
                    </p>
                  </div>
                  <div>
                    <img src="/image/focus_home.svg" alt="Logo" />

                    <h2>Collaboration on Risk Management</h2>

                    <p>
                      Allow users to share risk-related information with team
                      members or stakeholders, fostering collaborative efforts
                      in fixing risks effectively. Enable users to adjust task
                      deadlines based on the identified risks and the time
                      needed for mitigation. This ensures realistic timelines
                      and reduces the chance of project delays.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          <br />
          <br />
          <br />

          <div id="productivity" className={styles.section_6}>
            <h1>Unlock Your Full Potential</h1>

            <p>
              Our Todo App Fuels Productivity to New Heights! From Smart Task
              Prioritization to Efficient Time Management, We Keep You
              Laser-Focused and On Track. Harness the Power of Productivity:
              Seamlessly Collaborate, Streamline Workflows, and Achieve More in
              Less Time. Take Control of Your Day, Every Day: Our Todo App -
              Your Gateway to Peak Performance!
            </p>

            <Row
              className={styles.section_6_wrapper}
              justify="center"
              gutter={[16, 16]}
            >
              <Col xxl={8} xl={8} lg={8} md={24} xs={24}>
                <BsBookmarkCheckFill color="#7e5bf6" />
                <h2>Centralized Information</h2>

                <p>
                  A todo app serves as a central hub for all tasks and related
                  information, reducing time wasted searching for scattered
                  notes or tasks.
                </p>
              </Col>
              <Col xxl={4} xl={4} lg={4} md={0} xs={0} />
              <Col xxl={8} xl={8} lg={8} md={24} xs={24}>
                <FaClipboardList color="#fd74b0" />
                <h2>Recurring Tasks</h2>

                <p>
                  The app can handle recurring tasks, eliminating the need to
                  repeatedly create the same tasks manually, saving time and
                  effort.
                </p>
              </Col>
              <Col xxl={8} xl={8} lg={8} md={24} xs={24}>
                <BsFillClockFill color="#fbb355" />
                <h2>Time Management</h2>

                <p>
                  By setting due dates and reminders, users can stay on top of
                  deadlines and allocate time efficiently, ensuring tasks are
                  completed on time.
                </p>
              </Col>
              <Col xxl={4} xl={4} lg={4} md={0} xs={0} />
              <Col xxl={8} xl={8} lg={8} md={24} xs={24}>
                <SiTarget color="#60d4fc" />
                <h2>Focus and Reduced Stress</h2>

                <p>
                  With a clear overview of tasks and deadlines, users can reduce
                  mental clutter, stay focused on their goals, and minimize
                  stress associated with forgetting important tasks.
                </p>
              </Col>
            </Row>
          </div>

          <br />
          <br />
          <br />
          <div id="agile" className={styles.section_6}>
            <h1>Why use Todire for agile project management?</h1>

            <br />
            <br />
            <br />

            <br />
            <br />
            <br />

            <Row
              className={styles.section_6_wrapper}
              justify="center"
              gutter={[16, 16]}
            >
              <Col xxl={8} xl={8} lg={8} md={24} xs={24}>
                <h2>Integration with Version Control</h2>

                <p>
                  Todo apps can integrate with version control systems and issue
                  tracking tools, providing seamless traceability and visibility
                  across the development process.
                </p>
              </Col>

              <Col xxl={8} xl={8} lg={8} md={24} xs={24}>
                <h2>Changing Requirements</h2>

                <p>
                  Agile todo apps are designed to accommodate changes and
                  updates, aligning well with the dynamic nature of agile
                  development.
                </p>
              </Col>
              <Col xxl={8} xl={8} lg={8} md={24} xs={24}>
                <h2>Daily Stand-ups and Updates</h2>

                <p>
                  Teams can use the app to share daily updates during stand-up
                  meetings, ensuring everyone is informed about the current
                  status of tasks.
                </p>
              </Col>
            </Row>
          </div>
        </div>
      </Row>

      <br />
      <br />
      <br />
    </div>
  );
};

export default Features;
