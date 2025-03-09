import React from 'react';
import { Card } from 'react-bootstrap';
import './ProjectDetails.css';

function ProjectDetails({ project }) {
  return (
    <Card className="project-details">
      <Card.Body>
        <Card.Title>{project.name}</Card.Title>
        <Card.Text>{project.description}</Card.Text>
        <Card.Text>
          <small className="text-muted">Project ID: {project.id}</small>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProjectDetails;
