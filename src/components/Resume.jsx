import React from 'react';

const Resume = () => {
  const proficiencies = [
    'React.js',
    'Node.js',
    'JavaScript (ES6+)',
    'HTML5 & CSS3',
    'MongoDB',
    'SQL',
    'Git',
    'REST APIs'
  ];

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Resume</h2>
      <div className="mb-6">
        <a 
          href="/resume.pdf" 
          download 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Download Resume
        </a>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">Technical Proficiencies</h3>
        <ul className="grid grid-cols-2 gap-2">
          {proficiencies.map((skill, index) => (
            <li key={index} className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Resume;