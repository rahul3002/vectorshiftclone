import React, { useState } from 'react';
import { Layout, Menu, Dropdown, Button } from 'antd';
import { Link } from 'react-router-dom';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons'; // Ant Design icons for caret
import './Header.css'; // Custom CSS for styling

const { Header: AntHeader } = Layout;

const Header = () => {
  const [platformVisible, setPlatformVisible] = useState(false); // State for Platform dropdown
  const [solutionsVisible, setSolutionsVisible] = useState(false); // State for Solutions dropdown

  // Dropdown menu for "Platform"
  const platformMenu = (
    <Menu>
      <Menu.Item key="pipeline">
        <Link to="/platform/pipeline">Pipeline</Link>
      </Menu.Item>
      <Menu.Item key="marketplace">
        <Link to="/platform/marketplace">Marketplace</Link>
      </Menu.Item>
      <Menu.Item key="knowledge">
        <Link to="/platform/knowledge">Knowledge</Link>
      </Menu.Item>
      <Menu.Item key="chat">
        <Link to="/platform/chat">Chat</Link>
      </Menu.Item>
      <Menu.Item key="agents">
        <Link to="/platform/agents">Agents</Link>
      </Menu.Item>
      <Menu.Item key="evaluations">
        <Link to="/platform/evaluations">Evaluations</Link>
      </Menu.Item>
      <Menu.Item key="automation">
        <Link to="/platform/automation">Automation</Link>
      </Menu.Item>
      <Menu.Item key="forms">
        <Link to="/platform/forms">Forms</Link>
      </Menu.Item>
    </Menu>
  );

  // Dropdown menu for "Solutions"
  const solutionsMenu = (
    <Menu>
      <Menu.Item key="solution1">
        <Link to="/solutions/solution1">Solution 1</Link>
      </Menu.Item>
      <Menu.Item key="solution2">
        <Link to="/solutions/solution2">Solution 2</Link>
      </Menu.Item>
      <Menu.Item key="solution3">
        <Link to="/solutions/solution3">Solution 3</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <AntHeader className="custom-header">
      {/* Left Section: Logo and Navigation Links */}
      <div className="header-left">
        <div className="logo">
          <Link to="/">Vectorshift</Link>
        </div>
        <Menu mode="horizontal" className="nav-menu">
          {/* Platform Dropdown */}
          <Menu.Item key="platform">
            <Dropdown
              overlay={platformMenu}
              onVisibleChange={(flag) => setPlatformVisible(flag)}
              visible={platformVisible}
            >
              <span>
                Platform {platformVisible ? <CaretUpOutlined /> : <CaretDownOutlined />}
              </span>
            </Dropdown>
          </Menu.Item>

          {/* Solutions Dropdown */}
          <Menu.Item key="solutions">
            <Dropdown
              overlay={solutionsMenu}
              onVisibleChange={(flag) => setSolutionsVisible(flag)}
              visible={solutionsVisible}
            >
              <span>
                Solutions {solutionsVisible ? <CaretUpOutlined /> : <CaretDownOutlined />}
              </span>
            </Dropdown>
          </Menu.Item>

          {/* Other Navigation Links */}
          <Menu.Item key="enterprise">
            <Link to="/enterprise">Enterprise</Link>
          </Menu.Item>
          <Menu.Item key="pricing">
            <Link to="/pricing">Pricing</Link>
          </Menu.Item>
          <Menu.Item key="resources">
            <Link to="/resources">Resources</Link>
          </Menu.Item>
          <Menu.Item key="security">
            <Link to="/security">Security</Link>
          </Menu.Item>
        </Menu>
      </div>

      {/* Right Section: Buttons */}
      <div className="header-right">
        <Button type="text" className="nav-button">
          <Link to="/talk-to-us">Talk to Us</Link>
        </Button>
        <Button type="text" className="nav-button">
          <Link to="/login">Log in</Link>
        </Button>
        <Button type="primary" className="get-started-button">
          <Link to="/get-started">Get started</Link>
        </Button>
      </div>
    </AntHeader>
  );
};

export default Header;