import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

function App() {
  return (
    <div className="portfolio">
      <header className="header">
        <div className="container">
          <h1>Thanmayi Kondreddy</h1>
          <p className="tagline">Full Stack Developer | React | Node.js | AWS</p>
          <div className="contact-info">
            <a href="mailto:thanmayikondreddy01@gmail.com"><FaEnvelope /> thanmayikondreddy01@gmail.com</a>
            <a href="tel:+12023996901"><FaPhone /> +1 202-399-6901</a>
            <span><FaMapMarkerAlt /> Washington DC</span>
            <a href="https://linkedin.com/in/thanmayi-kondreddy" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a>
            <a href="https://github.com/thanmayi01" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
          </div>
        </div>
      </header>

      <section id="about" className="section">
        <div className="container">
          <h2>About Me</h2>
          <p>
            Full Stack Developer with expertise in React, Node.js, and cloud technologies. 
            Currently pursuing Master's in Computer Science at George Washington University. 
            Passionate about building scalable web applications and solving complex problems.
          </p>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="container">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend</h3>
              <ul>
                <li>React.js, Next.js</li>
                <li>JavaScript, TypeScript</li>
                <li>HTML5, CSS3, SASS</li>
                <li>Redux, Context API</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <ul>
                <li>Node.js, Express.js</li>
                <li>Python, Django</li>
                <li>RESTful APIs</li>
                <li>GraphQL</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Database</h3>
              <ul>
                <li>MongoDB</li>
                <li>PostgreSQL, MySQL</li>
                <li>Redis</li>
                <li>DynamoDB</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Cloud & DevOps</h3>
              <ul>
                <li>AWS (EC2, S3, Lambda)</li>
                <li>Docker, Kubernetes</li>
                <li>CI/CD (Jenkins, GitHub Actions)</li>
                <li>Git, GitHub</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="section">
        <div className="container">
          <h2>Education</h2>
          <div className="education-item">
            <h3>George Washington University</h3>
            <p className="degree">Master of Science in Computer Science</p>
            <p className="date">Expected May 2026 | Washington DC</p>
            <p>GPA: 3.8/4.0</p>
          </div>
          <div className="education-item">
            <h3>JNTUH College of Engineering</h3>
            <p className="degree">Bachelor of Technology in Computer Science</p>
            <p className="date">May 2023 | Hyderabad, India</p>
            <p>GPA: 3.6/4.0</p>
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="container">
          <h2>Experience</h2>
          <div className="experience-item">
            <h3>Software Developer Intern</h3>
            <p className="company">Tech Solutions Inc. | Summer 2023</p>
            <ul>
              <li>Developed responsive web applications using React.js and Node.js</li>
              <li>Implemented RESTful APIs and integrated third-party services</li>
              <li>Collaborated with cross-functional teams using Agile methodologies</li>
              <li>Improved application performance by 40% through code optimization</li>
            </ul>
          </div>
          <div className="experience-item">
            <h3>Full Stack Developer</h3>
            <p className="company">Freelance | 2022 - Present</p>
            <ul>
              <li>Built custom web applications for various clients</li>
              <li>Designed and implemented database schemas</li>
              <li>Deployed applications on AWS and managed cloud infrastructure</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <h2>Projects</h2>
          <div className="project-card">
            <h3>E-Commerce Platform</h3>
            <p className="tech-stack">React, Node.js, MongoDB, AWS</p>
            <p>Full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration using Stripe API.</p>
            <a href="https://github.com/thanmayi01" target="_blank" rel="noopener noreferrer">View on GitHub →</a>
          </div>
          <div className="project-card">
            <h3>Task Management System</h3>
            <p className="tech-stack">Next.js, TypeScript, PostgreSQL, Docker</p>
            <p>Collaborative task management tool with real-time updates, user roles, and project tracking features.</p>
            <a href="https://github.com/thanmayi01" target="_blank" rel="noopener noreferrer">View on GitHub →</a>
          </div>
          <div className="project-card">
            <h3>Weather Dashboard</h3>
            <p className="tech-stack">React, REST APIs, Chart.js</p>
            <p>Interactive weather dashboard with data visualization, location-based forecasts, and historical weather data analysis.</p>
            <a href="https://github.com/thanmayi01" target="_blank" rel="noopener noreferrer">View on GitHub →</a>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <h2>Contact Me</h2>
          <p>I'm always open to discussing new projects and opportunities.</p>
          <div className="contact-links">
            <a href="mailto:thanmayikondreddy01@gmail.com" className="btn">Email Me</a>
            <a href="https://linkedin.com/in/thanmayi-kondreddy" target="_blank" rel="noopener noreferrer" className="btn">LinkedIn</a>
            <a href="https://github.com/thanmayi01" target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Thanmayi Kondreddy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
