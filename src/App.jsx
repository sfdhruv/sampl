import React, { useState, useEffect } from 'react';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaEnvelope, 
  FaBars, 
  FaTimes,
  FaArrowRight,
  FaExternalLinkAlt
} from 'react-icons/fa';
import solar from './imges/solarsystem.png'
import rps from './imges/rps.png'
import todoreact from './imges/todolist react.png'


const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const projects = [
    {
      id: 1,
      title: "Solar Explorer",
      description: "A Html,css project view a solar system",
      technologies: ["Html", "Css"],
      github: "https://github.com/sfdhruv/solarsystem",
      live: "https://sfdhruv.github.io/solarsystem/",
      image: solar
    },
    {
      id: 2,
      title: "Rock Paper Sssior",
      description: "A collaborative Game of rock paper scessior",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/sfdhruv/rps",
      live: "https://sfdhruv.github.io/rps/",
      image: rps
    },
    {
      id: 3,
      title: "Todolist",
      description: "Real-time TODO list",
      technologies: ["React", "Tailwind css"],
      github: "https://github.com/sfdhruv/todo-react",
      live: "https://todolist-reactwithjs.netlify.app/",
      image: todoreact
    }
  ];

  const skills = [
    { name: "Html", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "wordpress", level: 75 },
    { name: "Tailwind CSS", level: 88 },
    { name: "API", level: 70 },
    { name: "Git", level: 85 }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-blue-400">
              Yatrik Makwana
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-200 hover:text-blue-400 ${
                    activeSection === item ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800">
            <div className="px-4 py-2 space-y-4">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left capitalize py-2 px-4 rounded transition-colors duration-200 ${
                    activeSection === item
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600 blur-3xl opacity-20 rounded-full"></div>
            <div className="relative">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Hi, I'm <span className="text-blue-400">Yatrik Makwana</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                A passionate Full Stack Developer specializing in modern web technologies. 
                I create exceptional digital experiences that make an impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  View My Work <FaArrowRight />
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="border border-gray-600 hover:border-blue-400 text-gray-300 hover:text-blue-400 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            About <span className="text-blue-400">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <div className="w-72 h-72 bg-gray-700 rounded-full flex items-center justify-center text-6xl">
                  👨‍💻
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Crafting Digital Excellence</h3>
              <p className="text-gray-300 mb-6">
                With over 5 years of experience in web development, I specialize in creating 
                responsive, user-friendly applications using modern technologies. My passion 
                lies in solving complex problems and delivering high-quality solutions.
              </p>
              <p className="text-gray-300 mb-8">
                When I'm not coding, you can find me exploring new technologies, contributing 
                to open-source projects, or enjoying outdoor activities. I believe in continuous 
                learning and staying updated with the latest industry trends.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-gray-700 px-4 py-2 rounded-lg">
                  <span className="text-blue-400 font-semibold">1</span> Years Experience
                </div>
                <div className="bg-gray-700 px-4 py-2 rounded-lg">
                  <span className="text-blue-400 font-semibold">5</span> Projects Completed
                </div>
                <div className="bg-gray-700 px-4 py-2 rounded-lg">
                  <span className="text-blue-400 font-semibold">3</span> Happy Clients
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            My <span className="text-blue-400">Skills</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-8">Technical Expertise</h3>
              {skills.map((skill, index) => (
                <div key={index} className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">{skill.name}</span>
                    <span className="text-blue-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-8">What I Do</h3>
              <div className="space-y-6">
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-3 text-blue-400">Frontend Development</h4>
                  <p className="text-gray-300">
                    Creating responsive and interactive user interfaces using wordpress frameworks. Focus on performance and user experience.
                  </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-3 text-blue-400">Backend Development</h4>
                  <p className="text-gray-300">
                    Building robust server-side applications with responsive various 
                    databases. Implementing RESTful APIs and authentication systems.
                  </p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-3 text-blue-400">UI/UX Design</h4>
                  <p className="text-gray-300">
                    Designing intuitive user interfaces with a focus on usability and accessibility. 
                    Creating wireframes and prototypes using modern design tools.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            My <span className="text-blue-400">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <FaGithub /> Code
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Talk</h3>
              <p className="text-gray-300 mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-blue-400" />
                  <span>yatrikmakwana969@gmail.com</span>
                </div>
                <div className="flex gap-6">
                  <a
                    href="https://github.com/sfdhruv?tab=repositories"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <FaGithub size={24} />
                  </a>
                  {/* <a
                    href="https://linkedin.com"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href="https://twitter.com"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <FaTwitter size={24} />
                  </a> */}
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows="5"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Yatrik Makwana. Built with React, Vite, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;