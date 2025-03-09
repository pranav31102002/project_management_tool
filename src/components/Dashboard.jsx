import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectList from './ProjectList';
import ProjectDetails from './ProjectDetails';
import './Dashboard.css';

function Dashboard() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };

  return (
    <Container fluid className="dashboard-container">
      <Row>
        <Col md={3} className="sidebar">
        <h2>Dashboard</h2>
          <ProjectList onProjectSelect={handleProjectSelect} />
        </Col>
        <Col md={9} className="main-content">
          {selectedProject ? (
            <ProjectDetails project={selectedProject} />
          ) : (
            <div className="welcome-message">
              <h2>Welcome to Project Management Tool</h2>
              <p>Select a project from the Dashboard to view details</p>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
