import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGraduationCap, FaCode, FaBrain, FaRocket } from 'react-icons/fa'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

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

  const cardVariants = {
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

  const highlights = [
    {
      icon: FaGraduationCap,
      title: "Academic Excellence",
      description: "Final-year Electronics & Computer Science engineering student with a strong academic performance (7.5/10 CGPA).",
      color: "var(--neon-cyan)"
    },
    {
      icon: FaCode,
      title: "Full Stack Developer",
      description: "Proficient in Python, Java, and JavaScript, with hands-on experience building scalable applications using React.js and Node.js.",
      color: "var(--neon-purple)"
    },
    {
      icon: FaBrain,
      title: "Problem Solver",
      description: "Strong foundation in Data Structures, Algorithms, Computer Networks, and Operating Systems",
      color: "var(--neon-pink)"
    },
    {
      icon: FaRocket,
      title: "Industry Experience",
      description: "Gained hands-on experience in full-stack development, Agile workflows, and government IT systems through internships at Vedantra AI and AAI.",
      color: "var(--neon-green)"
    }
  ]

  return (
    <section id="about" style={{ padding: '6rem 0' }}>
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
              marginBottom: '4rem'
            }}
          >
            About Me
          </motion.h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem'
          }}>
            {/* Profile Section */}
            <motion.div 
              className="glass-card"
              variants={cardVariants}
            >
              <motion.div
                style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--neon-cyan), var(--neon-purple))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 2rem',
                  fontSize: '4rem',
                  color: 'white',
                  boxShadow: '0 0 30px rgba(0, 242, 254, 0.3)'
                }}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: '0 0 50px rgba(0, 242, 254, 0.5)'
                }}
              >
                R.S
              </motion.div>
              
              <h3 style={{
                fontSize: '1.5rem',
                color: 'var(--neon-cyan)',
                marginBottom: '1rem',
                textAlign: 'center'
              }}>
                Ronak Sain
              </h3>
              
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.6',
                textAlign: 'center',
                marginBottom: '1.5rem'
              }}>
                B.Tech, Computer & Electronics Engineering
              </p>
              
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1rem',
                flexWrap: 'wrap'
              }}>
                <span style={{
                  background: 'rgba(0, 242, 254, 0.1)',
                  color: 'var(--neon-cyan)',
                  padding: '0.3rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.9rem'
                }}>
                  📧 ronaksain0408@gmail.com
                </span>
                <span style={{
                  background: 'rgba(118, 75, 162, 0.1)',
                  color: 'var(--neon-purple)',
                  padding: '0.3rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.9rem'
                }}>
                  📱 +91 8595872543
                </span>
              </div>
            </motion.div>

            {/* Story Section */}
            <motion.div 
              className="glass-card"
              variants={cardVariants}
            >
              <h3 style={{
                fontSize: '1.8rem',
                color: 'var(--neon-purple)',
                marginBottom: '1.5rem',
                textAlign: 'center'
              }}>
                My Journey
              </h3>
              
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.8',
                marginBottom: '1.5rem'
              }}>
                I'm a final-year B.Tech student pursuing Computer and Electronics Engineering (Computer Science) at 
                Dronacharya College of Engineering, where I've built a strong foundation in scalable system design
                and software architecture.
              </p>
              
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.8',
                marginBottom: '1.5rem'
              }}>
                My passion lies in creating innovative solutions through code. I gained valuable enterprise
                experience during my internship at the Airports Authority of India (AAI), analyzing digital
                procurement workflows. More recently, as a Software Developer Intern at Vedantra AI, I engineered
                full-stack web applications, optimized performance via REST API integrations, and implemented
                robust CI/CD workflows within an Agile environment.
              </p>
              
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: '1.8'
              }}>
                I am actively seeking a Software Development Engineer (SDE) role where I can leverage my skills
                to contribute to high-impact engineering teams.
              </p>
            </motion.div>
          </div>

          {/* Highlights Grid */}
          <motion.div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem'
            }}
            variants={containerVariants}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="glass-card"
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  borderColor: highlight.color
                }}
                style={{
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                <motion.div
                  style={{
                    fontSize: '3rem',
                    color: highlight.color,
                    marginBottom: '1rem',
                    filter: `drop-shadow(0 0 20px ${highlight.color})`
                  }}
                  whileHover={{ scale: 1.2 }}
                >
                  <highlight.icon />
                </motion.div>
                
                <h4 style={{
                  fontSize: '1.3rem',
                  color: highlight.color,
                  marginBottom: '1rem',
                  fontWeight: '600'
                }}>
                  {highlight.title}
                </h4>
                
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6',
                  fontSize: '0.95rem'
                }}>
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Fun Facts */}
          <motion.div
            className="glass-card"
            variants={itemVariants}
            style={{
              marginTop: '3rem',
              textAlign: 'center'
            }}
          >
            <h3 style={{
              fontSize: '1.8rem',
              color: 'var(--neon-green)',
              marginBottom: '2rem'
            }}>
              Quick Facts
            </h3>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem'
            }}>
              {[
                { label: "Lines of Code Written", value: "10,000+", color: "var(--neon-cyan)" },
                { label: "Technologies Learned", value: "15+", color: "var(--neon-purple)" },
                { label: "Projects Completed", value: "5+", color: "var(--neon-pink)" },
                { label: "Coffee Cups Consumed", value: "∞", color: "var(--neon-green)" }
              ].map((fact, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  style={{ cursor: 'pointer' }}
                >
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    color: fact.color,
                    marginBottom: '0.5rem',
                    textShadow: `0 0 20px ${fact.color}`
                  }}>
                    {fact.value}
                  </div>
                  <div style={{
                    color: 'var(--text-muted)',
                    fontSize: '0.9rem'
                  }}>
                    {fact.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
