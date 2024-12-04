import React from 'react';

const Project = ({ title, description, image, deployedLink, githubLink }) => {
  return (
    <div className="project-card">
      <img 
        src={image || "/project-placeholder.jpg"} 
        alt={title} 
        className="project-image"
      />
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-links">
          <a href={deployedLink} className="project-link" target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
          <a href={githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

const PortfolioSection = () => {
  const projects = [
    {
      title: "Wisl Work Project",
      description: "A comprehensive work project demonstrating technical and analytical capabilities.",
      image: "/wisl-project.jpg", // You'll need to add this image
      deployedLink: "#", // Add your deployed link
      githubLink: "#" // Add your GitHub link
    },
    {
      title: "Happy Hour App",
      description: "An application helping users find the best happy hour deals in their area.",
      image: "/happy-hour.jpg", // You'll need to add this image
      deployedLink: "#", // Add your deployed link
      githubLink: "#" // Add your GitHub link
    }
  ];

  return (
    <div className="portfolio-section">
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioSection;