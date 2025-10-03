import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaReact, 
  FaJava, 
  FaPython, 
  FaDatabase,
  FaCode,
  FaRocket
} from 'react-icons/fa'
import { 
  SiTailwindcss, 
  SiMysql, 
  SiExpress, 
  SiNodedotjs,
  SiMongodb,
  SiTypescript
} from 'react-icons/si'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce web application with user authentication, shopping cart, payment integration, and admin panel. Built with modern technologies for optimal performance.",
      longDescription: "Complete e-commerce solution featuring user registration/login, product catalog with search and filtering, shopping cart functionality, secure payment processing, order management, and comprehensive admin dashboard for inventory and user management.",
      technologies: [
        { name: 'React', icon: FaReact, color: '#61DAFB' },
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'Express', icon: SiExpress, color: '#000000' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' }
      ],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      github: "https://github.com/ronaksain/ecommerce-platform",
      demo: "https://ecommerce-demo.vercel.app",
      status: "Completed",
      category: "Full Stack"
    },
    {
      id: 2,
      title: "Task Management System",
      description: "A collaborative task management application with real-time updates, team collaboration features, and project tracking capabilities.",
      longDescription: "Comprehensive project management tool featuring task creation and assignment, team collaboration, real-time notifications, progress tracking, file sharing, and deadline management with interactive dashboards.",
      technologies: [
        { name: 'React', icon: FaReact, color: '#61DAFB' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'Express', icon: SiExpress, color: '#000000' },
        { name: 'MySQL', icon: SiMysql, color: '#4479A1' }
      ],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      github: "https://github.com/ronaksain/task-manager",
      demo: "https://task-manager-demo.vercel.app",
      status: "In Development",
      category: "Web Application"
    },
    {
      id: 3,
      title: "Weather Analytics Dashboard",
      description: "A data visualization dashboard that displays weather analytics with interactive charts, forecasting, and location-based weather tracking.",
      longDescription: "Advanced weather analytics platform featuring real-time weather data, interactive charts and graphs, 7-day forecasting, location-based tracking, historical data analysis, and customizable dashboard widgets.",
      technologies: [
        { name: 'Python', icon: FaPython, color: '#3776AB' },
        { name: 'React', icon: FaReact, color: '#61DAFB' },
        { name: 'Database', icon: FaDatabase, color: '#336791' }
      ],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      github: "https://github.com/ronaksain/weather-dashboard",
      demo: "https://weather-dashboard-demo.vercel.app",
      status: "Completed",
      category: "Data Visualization"
    },
    {
      id: 4,
      title: "Smart Attendance System",
      description: "IoT-based attendance management system using facial recognition technology for automated attendance tracking in educational institutions.",
      longDescription: "Intelligent attendance system combining facial recognition AI, IoT sensors, and web dashboard for automated student attendance tracking, reporting, and analytics with real-time notifications to parents and administrators.",
      technologies: [
        { name: 'Python', icon: FaPython, color: '#3776AB' },
        { name: 'Java', icon: FaJava, color: '#ED8B00' },
        { name: 'MySQL', icon: SiMysql, color: '#4479A1' }
      ],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop",
      github: "https://github.com/ronaksain/smart-attendance",
      demo: null,
      status: "Prototype",
      category: "IoT & AI"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website with futuristic design, smooth animations, and glassmorphism effects to showcase projects and skills.",
      longDescription: "Personal portfolio website featuring futuristic design aesthetics, smooth animations, glassmorphism UI elements, responsive design, interactive components, and optimized performance for showcasing professional work.",
      technologies: [
        { name: 'React', icon: FaReact, color: '#61DAFB' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' }
      ],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      github: "https://github.com/ronaksain/portfolio",
      demo: "https://ronaksain.vercel.app",
      status: "Completed",
      category: "Frontend"
    },
    {
      id: 6,
      title: "Government e-Marketplace Study",
      description: "Comprehensive research and analysis project on Government e-Marketplace (GeM) portal, completed during AAI internship.",
      longDescription: "Detailed study of India's Government e-Marketplace platform, analyzing procurement processes, vendor registration, order management, and digital transformation in government purchasing with recommendations for optimization.",
      technologies: [
        { name: 'Research', icon: FaCode, color: '#4A90E2' },
        { name: 'Analysis', icon: FaDatabase, color: '#50C878' }
      ],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
      github: null,
      demo: null,
      status: "Completed",
      category: "Research"
    }
  ]

  const categories = [...new Set(projects.map(p => p.category))]

  const [activeFilter, setActiveFilter] = useState('All')
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const projectVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'var(--neon-green)'
      case 'In Development': return 'var(--neon-cyan)'
      case 'Prototype': return 'var(--neon-purple)'
      default: return 'var(--text-muted)'
    }
  }

  return (
    <section id="projects" style={{ padding: '6rem 0' }}>
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="futuristic-heading"
            variants={itemVariants}
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              textAlign: 'center',
              marginBottom: '2rem'
            }}
          >
            Featured Projects
          </motion.h2>

          <motion.p
            variants={itemVariants}
            style={{
              textAlign: 'center',
              color: 'var(--text-secondary)',
              fontSize: '1.1rem',
              maxWidth: '600px',
              margin: '0 auto 4rem',
              lineHeight: '1.6'
            }}
          >
            A showcase of my recent work, ranging from full-stack web applications to IoT solutions and research projects
          </motion.p>

          {/* Filter Buttons */}
          <motion.div
            variants={itemVariants}
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '3rem'
            }}
          >
            {['All', ...categories].map((category) => (
              <motion.button
                key={category}
                className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                onClick={() => setActiveFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: activeFilter === category 
                    ? 'var(--neon-cyan)'
                    : 'transparent',
                  border: '2px solid var(--neon-cyan)',
                  color: activeFilter === category 
                    ? '#ffffff' 
                    : 'var(--neon-cyan)',
                  padding: '0.6rem 1.2rem',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: activeFilter === category 
                    ? '0 0 20px rgba(0, 242, 254, 0.4)'
                    : 'none'
                }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="projects-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '2.5rem'
            }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                variants={projectVariants}
                whileHover={{ 
                  scale: 1.03,
                  rotateY: 2,
                  z: 50
                }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                style={{
                  background: 'var(--glass-bg)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                  position: 'relative'
                }}
              >
                {/* Project Image */}
                <div style={{
                  height: '200px',
                  background: `linear-gradient(135deg, var(--neon-cyan)20, var(--neon-purple)20), url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <motion.div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.1), rgba(118, 75, 162, 0.1))',
                      opacity: hoveredProject === project.id ? 1 : 0,
                      transition: 'opacity 0.3s ease'
                    }}
                  />
                  
                  {/* Status Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: getStatusColor(project.status),
                    color: '#ffffff',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '15px',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    boxShadow: `0 0 10px ${getStatusColor(project.status)}50`
                  }}>
                    {project.status}
                  </div>

                  {/* Category Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: 'var(--text-primary)',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '15px',
                    fontSize: '0.8rem',
                    fontWeight: '500',
                    backdropFilter: 'blur(10px)'
                  }}>
                    {project.category}
                  </div>
                </div>

                {/* Project Content */}
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{
                    fontSize: '1.4rem',
                    color: 'var(--text-primary)',
                    marginBottom: '0.8rem',
                    fontWeight: '600'
                  }}>
                    {project.title}
                  </h3>

                  <p style={{
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6',
                    marginBottom: '1.5rem',
                    fontSize: '0.95rem'
                  }}>
                    {hoveredProject === project.id 
                      ? project.longDescription 
                      : project.description}
                  </p>

                  {/* Technologies */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.8rem',
                    marginBottom: '1.5rem'
                  }}>
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          background: 'rgba(255, 255, 255, 0.05)',
                          padding: '0.4rem 0.8rem',
                          borderRadius: '15px',
                          border: `1px solid ${tech.color}30`,
                          color: tech.color,
                          fontSize: '0.8rem',
                          fontWeight: '500'
                        }}
                        whileHover={{
                          scale: 1.1,
                          borderColor: tech.color,
                          boxShadow: `0 0 10px ${tech.color}40`
                        }}
                      >
                        <tech.icon style={{ fontSize: '1rem' }} />
                        {tech.name}
                      </motion.div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div style={{
                    display: 'flex',
                    gap: '1rem',
                    justifyContent: 'space-between'
                  }}>
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          color: 'var(--text-primary)',
                          textDecoration: 'none',
                          fontSize: '0.9rem',
                          fontWeight: '500',
                          transition: 'all 0.3s ease'
                        }}
                        whileHover={{
                          color: 'var(--neon-cyan)',
                          scale: 1.05
                        }}
                      >
                        <FaGithub />
                        Code
                      </motion.a>
                    )}

                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          color: 'var(--text-primary)',
                          textDecoration: 'none',
                          fontSize: '0.9rem',
                          fontWeight: '500',
                          transition: 'all 0.3s ease'
                        }}
                        whileHover={{
                          color: 'var(--neon-green)',
                          scale: 1.05
                        }}
                      >
                        <FaExternalLinkAlt />
                        Live Demo
                      </motion.a>
                    )}

                    <motion.div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: 'var(--neon-purple)',
                        fontSize: '0.9rem',
                        fontWeight: '500'
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <FaRocket />
                      View Details
                    </motion.div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <motion.div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, var(--neon-cyan), transparent)',
                    opacity: hoveredProject === project.id ? 1 : 0,
                    transition: 'opacity 0.3s ease'
                  }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* More Projects Button */}
          <motion.div
            variants={itemVariants}
            style={{
              textAlign: 'center',
              marginTop: '4rem'
            }}
          >
            <motion.a
              href="https://github.com/ronaksain"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub style={{ marginRight: '0.5rem' }} />
              View More on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects