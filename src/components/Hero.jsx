import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload, FaChevronDown } from 'react-icons/fa'

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  const roles = [
    'Electronics & Computer Engineering Student',
    'Frontend Developer',
    'Full Stack Developer',
    'Java Developer', 
    'React Developer',
    'Python Enthusiast',
    'Tech Innovation Explorer'
  ]

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]
    let timeout

    if (isTyping) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1))
        }, 100)
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false)
        }, 2000)
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 50)
      } else {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
        setIsTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, isTyping, currentRoleIndex, roles])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
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

  const handleDownloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a')
    link.href = 'https://drive.google.com/file/d/1vwxv7zYIyAWRrx_J7xh2G6gnF-wsGW1B/view?usp=drive_link'
    link.download = 'ReSuMe-RoNaK.pdf'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="hero-text"
            variants={itemVariants}
          >
            <motion.h1 
              className="futuristic-heading hero-name"
              style={{
                fontSize: 'clamp(3rem, 8vw, 6rem)',
                marginBottom: '1rem',
                lineHeight: '1.1'
              }}
            >
              RONAK SAIN
            </motion.h1>
            
            <motion.div 
              className="typing-container"
              variants={itemVariants}
              style={{
                height: '3rem',
                display: 'flex',
                alignItems: 'center',
                marginBottom: '2rem'
              }}
            >
              <span 
                className="typing-text"
                style={{
                  fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                  color: 'var(--text-secondary)',
                  fontWeight: '500'
                }}
              >
                {displayText}
                <motion.span
                  className="cursor"
                  animate={{ opacity: [1, 0] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  style={{
                    borderRight: '3px solid var(--neon-cyan)',
                    marginLeft: '2px'
                  }}
                />
              </span>
            </motion.div>

            <motion.p 
              className="hero-description"
              variants={itemVariants}
              style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
                color: 'var(--text-muted)',
                maxWidth: '600px',
                marginBottom: '3rem',
                lineHeight: '1.6'
              }}
            >
              Passionate about creating innovative solutions through code. 
              Electronics & Computer Engineering student with hands-on experience 
              in full-stack development and emerging technologies.
            </motion.p>
          </motion.div>

          <motion.div 
            className="hero-actions"
            variants={itemVariants}
            style={{
              display: 'flex',
              gap: '1.5rem',
              marginBottom: '3rem',
              flexWrap: 'wrap'
            }}
          >
            <motion.button
              className="neon-button pulse-button"
              onClick={handleDownloadResume}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload style={{ marginRight: '0.5rem' }} />
              Download Resume
            </motion.button>

            <motion.a
              href="#contact"
              className="neon-button"
              onClick={() => {
                const contact = document.getElementById('contact')
                if (contact) contact.scrollIntoView({ behavior: 'smooth' })
              }}
              style={{
                borderColor: 'var(--neon-purple)',
                color: 'var(--neon-purple)'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope style={{ marginRight: '0.5rem' }} />
              Get In Touch
            </motion.a>
          </motion.div>

          <motion.div 
            className="social-links"
            variants={itemVariants}
            style={{
              display: 'flex',
              gap: '2rem',
              marginBottom: '4rem'
            }}
          >
            {[
              { 
                icon: FaLinkedin, 
                href: 'https://linkedin.com/in/ronak-sain-633960255', 
                color: '#0077B5' 
              },
              { 
                icon: FaGithub, 
                href: 'https://github.com/ronak0408', 
                color: '#333' 
              },
              { 
                icon: FaEnvelope, 
                href: 'mailto:ronaksain0408@gmail.com', 
                color: '#EA4335' 
              }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                style={{
                  fontSize: '2rem',
                  color: 'var(--text-muted)',
                  transition: 'all 0.3s ease'
                }}
                whileHover={{
                  scale: 1.2,
                  color: social.color,
                  textShadow: `0 0 20px ${social.color}`
                }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="scroll-indicator"
            variants={itemVariants}
            style={{
              position: 'absolute',
              bottom: '2rem',
              left: '50%',
              transform: 'translateX(-50%)',
              cursor: 'pointer',
              textAlign: 'center'
            }}
            onClick={scrollToNext}
            animate={{
              y: [0, 10, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <p style={{ 
              color: 'var(--text-muted)', 
              marginBottom: '0.5rem',
              fontSize: '0.9rem'
            }}>
              Scroll to explore
            </p>
            <FaChevronDown 
              style={{ 
                color: 'var(--neon-cyan)', 
                fontSize: '1.5rem' 
              }} 
            />
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          text-align: center;
        }

        .hero-content {
          z-index: 2;
          position: relative;
        }

        .social-icon:hover {
          filter: drop-shadow(0 0 20px currentColor);
        }

        @media (max-width: 768px) {
          .hero-actions {
            flex-direction: column;
            align-items: center;
          }
          
          .social-links {
            justify-content: center;
          }
          
          .scroll-indicator {
            position: relative !important;
            transform: none !important;
            margin-top: 2rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero
