import React from 'react';
import { ListGroup } from 'react-bootstrap';
import './ProjectList.css';

const projects = [
  { id: 1, name: 'Project Alpha', description: 'First project description' },
  { id: 2, name: 'Project Beta', description: 'Second project description' },
  { id: 3, name: 'Project Gamma', description: 'Third project description' }
];

function ProjectList({ onProjectSelect }) {
  return (
    <ListGroup className="project-list">
      {projects.map(project => (
        <ListGroup.Item
          key={project.id}
          action
          onClick={() => onProjectSelect(project)}
          className="project-item"
        >
          {project.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default ProjectList;
