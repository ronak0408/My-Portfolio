import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBriefcase, FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaCertificate, FaTrophy } from 'react-icons/fa'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const timelineData = [
    {
      id: 1,
      type: 'experience',
      title: 'Software Developer Intern - Vedantra AI (OPC) Private Limited',
      company: 'Vedantra AI (OPC) Private Limited',
      location: 'Gurugram, Haryana',
      period: 'June 2025 - January 2026',
      description: 'Engineered full stack web applications and optimized performance through REST API integrations and efficient data handling within an Agile team environment.',
      achievements: [
        'Engineered 3+ full stack web applications using React.js and Node.js, improving performance via REST API integrations and component-level optimizations.',
        'Collaborated in an Agile team of 4 developers to debug and optimize applications, reducing load time by 20% through code profiling and asynchronous data handling.',
        'Implemented Git-based CI/CD workflows, improving version control efficiency and reducing merge conflicts by 30%.',
        'Delivered 2+ production-ready solutions meeting all client requirements.'
      ],
      skills: ['React.js', 'Node.js', 'REST APIs', 'Agile Methodologies', 'CI/CD', 'Git', 'Performance Optimization'],
      icon: FaBriefcase,
      color: 'var(--neon-purple)'
    },
    {
      id: 2,
      type: 'experience',
      title: 'Internship - Airports Authority of India (AAI)',
      company: 'Airports Authority of India',
      location: 'New Delhi',
      period: 'June 2024 - July 2024',
      description: 'Conducted a detailed study on GEM (Government e-Marketplace) and prepared a comprehensive report. Gained hands-on experience in managing IT needs in an organization.',
      achievements: [
        'Analyzed Government e-Marketplace (GeM) procurement workflows and documented findings in a 20+ page technical report covering system architecture, process efficiency, and optimization opportunities.',
        'Studied enterprise-level IT infrastructure supporting 1000+ users.',
        'Gained exposure to large-scale distributed systems and digital procurement operations.',
        'Successfully completed internship project and received certification.'
      ],
      skills: ['Government Systems', 'IT Infrastructure', 'Research & Analysis', 'Technical Report Writing'],
      icon: FaBriefcase,
      color: 'var(--neon-cyan)'
    },
    {
      id: 3,
      type: 'education',
      title: 'B.Tech, Computer and Electronics Engineering (Computer Science)',
      company: 'Dronacharya College of Engineering',
      location: 'Gurugram, Haryana',
      period: '2022 - 2026',
      description: 'Pursuing a Bachelor of Technology with a strong focus on core computer science methodologies, system design, and software engineering.',
      achievements: [
        'Current CGPA: 7.5/10',
        'Core Coursework: Data Structures & Algorithms, Automata Theory, Database Management',
        'Core Coursework: Object-Oriented Programming, Compiler Design, Operating Systems',
        'Core Coursework: Computer Networks, Computer Architecture'
      ],
      skills: ['Data Structures & Algorithms', 'Computer Networks', 'Operating Systems', 'Database Management', 'OOP'],
      icon: FaGraduationCap,
      color: 'var(--neon-green)'
    }
  ]

  const certifications = [
    {
      title: 'Software Developer Internship Certificate',
      issuer: 'Vedantra AI (OPC) Private Limited',
      date: '2026',
      description: 'Successfully completed software development internship, engineering full stack web applications and implementing Git-based CI/CD workflows.'
    },
    {
      title: 'Hackathon KRMU 3.0 - Semi-Finalist',
      issuer: 'Hackathon KRMU 3.0',
      date: 'March 2024',
      description: 'Advanced to semi-finals among 200+ teams by leading frontend development and UI/UX design for the YogaNest wellness platform.'
    },
    {
      title: 'AAI Internship Certificate',
      issuer: 'Airports Authority of India',
      date: 'July 2024',
      description: 'Successfully completed internship project analyzing Government e-Marketplace procurement workflows and IT infrastructure.'
    }
  ]

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

  const timelineVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.2,
        ease: "easeOut"
      }
    })
  }

  return (
    <section id="experience" style={{ padding: '6rem 0' }}>
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
            Experience & Education
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
            My academic journey and professional experience that shaped my skills and expertise
          </motion.p>

          {/* Timeline */}
          <div className="timeline-container" style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto' }}>
            {/* Timeline Line */}
            <motion.div
              style={{
                position: 'absolute',
                left: '50%',
                top: '0',
                bottom: '0',
                width: '4px',
                background: 'linear-gradient(to bottom, var(--neon-cyan), var(--neon-purple), var(--neon-green))',
                transform: 'translateX(-50%)',
                borderRadius: '2px',
                boxShadow: '0 0 20px rgba(0, 242, 254, 0.3)',
                zIndex: 1
              }}
              initial={{ height: 0 }}
              animate={inView ? { height: '100%' } : { height: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />

            {/* Timeline Items */}
            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                className="timeline-item"
                variants={timelineVariants}
                custom={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '4rem',
                  position: 'relative',
                  flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'
                }}
              >
                {/* Timeline Dot */}
                <motion.div
                  style={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: `linear-gradient(135deg, ${item.color}, ${item.color}80)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    color: '#ffffff',
                    boxShadow: `0 0 30px ${item.color}50`,
                    zIndex: 10,
                    border: '4px solid rgba(255, 255, 255, 0.1)'
                  }}
                  whileHover={{
                    scale: 1.2,
                    boxShadow: `0 0 50px ${item.color}70`
                  }}
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.2 + 0.5,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  <item.icon />
                </motion.div>

                {/* Timeline Content */}
                <motion.div
                  className="glass-card"
                  style={{
                    width: '45%',
                    margin: index % 2 === 0 ? '0 5% 0 0' : '0 0 0 5%',
                    textAlign: index % 2 === 0 ? 'right' : 'left'
                  }}
                  whileHover={{
                    scale: 1.02,
                    borderColor: item.color,
                    boxShadow: `0 10px 40px ${item.color}20`
                  }}
                >
                  {/* Header */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginBottom: '0.5rem',
                      justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start'
                    }}>
                      <span style={{
                        background: item.color,
                        color: '#ffffff',
                        padding: '0.2rem 0.8rem',
                        borderRadius: '15px',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        textTransform: 'uppercase'
                      }}>
                        {item.type}
                      </span>
                    </div>

                    <h3 style={{
                      fontSize: '1.4rem',
                      color: 'var(--text-primary)',
                      marginBottom: '0.5rem',
                      fontWeight: '600'
                    }}>
                      {item.title}
                    </h3>

                    <h4 style={{
                      fontSize: '1.1rem',
                      color: item.color,
                      marginBottom: '0.5rem',
                      fontWeight: '500'
                    }}>
                      {item.company}
                    </h4>

                    <div style={{
                      display: 'flex',
                      gap: '1rem',
                      color: 'var(--text-muted)',
                      fontSize: '0.9rem',
                      marginBottom: '1rem',
                      justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start',
                      flexWrap: 'wrap'
                    }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <FaCalendarAlt />
                        {item.period}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <FaMapMarkerAlt />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p style={{
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6',
                    marginBottom: '1.5rem'
                  }}>
                    {item.description}
                  </p>

                  {/* Achievements */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h5 style={{
                      color: item.color,
                      marginBottom: '1rem',
                      fontSize: '1rem',
                      fontWeight: '600'
                    }}>
                      Key Highlights:
                    </h5>
                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0
                    }}>
                      {item.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          style={{
                            color: 'var(--text-secondary)',
                            marginBottom: '0.5rem',
                            paddingLeft: '1.5rem',
                            position: 'relative',
                            fontSize: '0.9rem',
                            lineHeight: '1.4'
                          }}
                          initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                          transition={{ 
                            duration: 0.5, 
                            delay: index * 0.2 + achIndex * 0.1 + 1
                          }}
                        >
                          <span style={{
                            position: 'absolute',
                            left: '0',
                            top: '0.2rem',
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            background: item.color,
                            boxShadow: `0 0 10px ${item.color}50`
                          }} />
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div>
                    <h5 style={{
                      color: item.color,
                      marginBottom: '1rem',
                      fontSize: '1rem',
                      fontWeight: '600'
                    }}>
                      Skills Gained:
                    </h5>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                      justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start'
                    }}>
                      {item.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          style={{
                            background: `${item.color}20`,
                            color: item.color,
                            padding: '0.3rem 0.8rem',
                            borderRadius: '15px',
                            fontSize: '0.8rem',
                            fontWeight: '500',
                            border: `1px solid ${item.color}30`
                          }}
                          whileHover={{
                            scale: 1.1,
                            borderColor: item.color,
                            boxShadow: `0 0 10px ${item.color}40`
                          }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ 
                            duration: 0.3, 
                            delay: index * 0.2 + skillIndex * 0.1 + 1.5
                          }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Certifications Section */}
          <motion.div
            variants={itemVariants}
            style={{ marginTop: '6rem' }}
          >
            <motion.h3
              className="futuristic-heading"
              style={{
                fontSize: '2.5rem',
                textAlign: 'center',
                marginBottom: '3rem',
                color: 'var(--neon-pink)'
              }}
            >
              Certifications & Awards
            </motion.h3>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}>
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="glass-card"
                  whileHover={{
                    scale: 1.05,
                    borderColor: 'var(--neon-pink)',
                    boxShadow: '0 10px 30px rgba(245, 87, 108, 0.3)'
                  }}
                  style={{
                    textAlign: 'center',
                    cursor: 'pointer'
                  }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <motion.div
                    style={{
                      fontSize: '3rem',
                      color: 'var(--neon-pink)',
                      marginBottom: '1rem'
                    }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <FaCertificate />
                  </motion.div>

                  <h4 style={{
                    fontSize: '1.2rem',
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem',
                    fontWeight: '600'
                  }}>
                    {cert.title}
                  </h4>

                  <p style={{
                    color: 'var(--neon-pink)',
                    fontWeight: '500',
                    marginBottom: '0.5rem'
                  }}>
                    {cert.issuer}
                  </p>

                  <p style={{
                    color: 'var(--text-muted)',
                    fontSize: '0.9rem',
                    marginBottom: '1rem'
                  }}>
                    {cert.date}
                  </p>

                  <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem',
                    lineHeight: '1.5'
                  }}>
                    {cert.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .timeline-item {
            flex-direction: row !important;
            margin-left: 80px !important;
          }

          .timeline-item .glass-card {
            width: calc(100% - 80px) !important;
            margin: 0 !important;
            text-align: left !important;
          }

          .timeline-container::before {
            left: 40px !important;
          }

          .timeline-dot {
            left: 40px !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Experience
