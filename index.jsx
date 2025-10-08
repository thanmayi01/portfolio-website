import React from 'react';
import { Mail, MapPin, Github, Linkedin, Phone, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const personalInfo = {
    name: "Thanmayi Kondreddy",
    title: "Software Developer",
    email: "thanmayikondreddy@gmail.com",
    phone: "+91-9494859838",
    location: "Tirupati, India",
    github: "https://github.com/thanmayi01",
    linkedin: "https://linkedin.com/in/thanmayi-kondreddy",
    bio: "Passionate software developer with expertise in full-stack development, machine learning, and modern web technologies. Experienced in building scalable applications using React, Node.js, Python, and cloud platforms. Strong problem-solving skills with a focus on creating efficient, user-centric solutions."
  };

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Vignan's Institute of Information Technology",
      location: "Visakhapatnam, India",
      period: "2020 - 2024",
      gpa: "8.5/10"
    }
  ];

  const experience = [
    {
      title: "Software Developer Intern",
      company: "Tech Innovations Pvt Ltd",
      period: "June 2023 - December 2023",
      location: "Remote",
      responsibilities: [
        "Developed and maintained web applications using React.js and Node.js",
        "Implemented RESTful APIs and integrated with MongoDB databases",
        "Collaborated with cross-functional teams using Agile methodologies",
        "Optimized application performance, reducing load times by 30%"
      ]
    }
  ];

  const skills = {
    "Programming Languages": ["JavaScript", "Python", "Java", "C++", "SQL"],
    "Frontend": ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
    "Backend": ["Node.js", "Express.js", "Django", "Flask", "RESTful APIs"],
    "Database": ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
    "Tools & Technologies": ["Git", "Docker", "AWS", "Vercel", "Postman", "VS Code"],
    "Machine Learning": ["TensorFlow", "Scikit-learn", "Pandas", "NumPy"]
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      github: "https://github.com/thanmayi01/ecommerce-platform",
      live: "#"
    },
    {
      title: "Weather Forecasting App",
      description: "Real-time weather application with location-based forecasts, interactive maps, and 7-day predictions.",
      technologies: ["React", "OpenWeather API", "Tailwind CSS"],
      github: "https://github.com/thanmayi01/weather-app",
      live: "#"
    },
    {
      title: "Machine Learning Price Predictor",
      description: "ML model to predict house prices using regression algorithms with data visualization and model comparison.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Flask"],
      github: "https://github.com/thanmayi01/ml-price-predictor",
      live: "#"
    },
    {
      title: "Task Management System",
      description: "Collaborative task management application with real-time updates, team collaboration, and progress tracking.",
      technologies: ["Next.js", "Firebase", "Tailwind CSS"],
      github: "https://github.com/thanmayi01/task-manager",
      live: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Header/Hero Section */}
      <header className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            {personalInfo.name}
          </h1>
          <p className="text-2xl md:text-3xl text-purple-300 mb-8">{personalInfo.title}</p>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">{personalInfo.bio}</p>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 hover:text-purple-400 transition">
              <Mail size={20} />
              {personalInfo.email}
            </a>
            <span className="flex items-center gap-2">
              <Phone size={20} />
              {personalInfo.phone}
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={20} />
              {personalInfo.location}
            </span>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" 
               className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition">
              <Github size={24} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
               className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </header>

      {/* Education Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 mb-6 hover:bg-white/15 transition">
              <h3 className="text-2xl font-semibold text-purple-300 mb-2">{edu.degree}</h3>
              <p className="text-xl text-gray-300 mb-2">{edu.institution}</p>
              <div className="flex flex-wrap gap-4 text-gray-400">
                <span>{edu.period}</span>
                <span>•</span>
                <span>{edu.location}</span>
                <span>•</span>
                <span>GPA: {edu.gpa}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
          {experience.map((exp, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 mb-6 hover:bg-white/15 transition">
              <h3 className="text-2xl font-semibold text-purple-300 mb-2">{exp.title}</h3>
              <p className="text-xl text-gray-300 mb-2">{exp.company}</p>
              <div className="flex flex-wrap gap-4 text-gray-400 mb-4">
                <span>{exp.period}</span>
                <span>•</span>
                <span>{exp.location}</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/15 transition">
                <h3 className="text-xl font-semibold text-purple-300 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-purple-500/30 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/15 transition">
                <h3 className="text-xl font-semibold text-purple-300 mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 bg-purple-500/30 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-1 text-purple-400 hover:text-purple-300 transition">
                    <Github size={16} />
                    Code
                  </a>
                  {project.live !== "#" && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                       className="flex items-center gap-1 text-purple-400 hover:text-purple-300 transition">
                      <ExternalLink size={16} />
                      Live
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 text-center text-gray-400">
        <p>© 2025 {personalInfo.name}. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
