import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { 
  FaReact, 
  FaJava, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaPython, 
  FaGithub, 
  FaLinux, 
  FaNodeJs,
  FaDatabase 
} from 'react-icons/fa'
import { 
  SiSpring, 
  SiDocker, 
  SiMysql, 
  SiTailwindcss,
  SiTypescript,
  SiMongodb 
} from 'react-icons/si'

const techIcons = [
  { icon: FaReact, color: '#61DAFB' },
  { icon: FaJava, color: '#ED8B00' },
  { icon: FaHtml5, color: '#E34F26' },
  { icon: FaCss3Alt, color: '#1572B6' },
  { icon: FaJs, color: '#F7DF1E' },
  { icon: FaPython, color: '#3776AB' },
  { icon: SiSpring, color: '#6DB33F' },
  { icon: SiDocker, color: '#2496ED' },
  { icon: FaGithub, color: '#181717' },
  { icon: FaLinux, color: '#FCC624' },
  { icon: FaNodeJs, color: '#339933' },
  { icon: SiMysql, color: '#4479A1' },
  { icon: FaDatabase, color: '#336791' },
  { icon: SiTailwindcss, color: '#06B6D4' },
  { icon: SiTypescript, color: '#3178C6' },
  { icon: SiMongodb, color: '#47A248' }
]

const AnimatedBackground = () => {
  const [particles, setParticles] = useState([])
  const [floatingIcons, setFloatingIcons] = useState([])

  useEffect(() => {
    // Generate random particles
    const generateParticles = () => {
      const newParticles = []
      for (let i = 0; i < 100; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 6
        })
      }
      setParticles(newParticles)
    }

    // Generate floating tech icons
    const generateFloatingIcons = () => {
      const newIcons = []
      for (let i = 0; i < 12; i++) {
        const randomIcon = techIcons[Math.floor(Math.random() * techIcons.length)]
        newIcons.push({
          id: i,
          icon: randomIcon.icon,
          color: randomIcon.color,
          x: Math.random() * 90 + 5, // Keep icons within bounds
          y: Math.random() * 90 + 5,
          rotation: Math.random() * 360,
          scale: 0.8 + Math.random() * 0.4, // Random size between 0.8 and 1.2
          delay: Math.random() * 12
        })
      }
      setFloatingIcons(newIcons)
    }

    generateParticles()
    generateFloatingIcons()
  }, [])

  return (
    <>
      {/* Animated gradient background */}
      <div className="animated-background" />
      
      {/* Floating particles */}
      <div className="floating-particles">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Floating tech icons */}
      <div className="floating-tech-icons">
        {floatingIcons.map((iconData) => {
          const IconComponent = iconData.icon
          return (
            <motion.div
              key={iconData.id}
              className="tech-icon"
              style={{
                position: 'absolute',
                left: `${iconData.x}%`,
                top: `${iconData.y}%`,
                color: iconData.color,
                fontSize: `${1.5 + iconData.scale * 0.5}rem`,
                zIndex: -1
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, 20, -15, 10, 0],
                rotate: [0, 90, 180, 270, 360],
                scale: [iconData.scale, iconData.scale * 1.2, iconData.scale],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{
                duration: 12 + Math.random() * 6,
                repeat: Infinity,
                delay: iconData.delay,
                ease: "easeInOut"
              }}
              whileHover={{
                scale: iconData.scale * 1.5,
                opacity: 1,
                transition: { duration: 0.2 }
              }}
            >
              <IconComponent />
            </motion.div>
          )
        })}
      </div>

      {/* Circuit lines */}
      <svg 
        className="circuit-lines"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: -1,
          opacity: 0.1
        }}
      >
        <defs>
          <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4facfe" />
            <stop offset="50%" stopColor="#00f2fe" />
            <stop offset="100%" stopColor="#764ba2" />
          </linearGradient>
        </defs>
        
        {/* Animated circuit paths */}
        <motion.path
          d="M0,100 Q200,50 400,100 T800,100 L800,200 Q600,250 400,200 T0,200 Z"
          stroke="url(#circuitGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        
        <motion.path
          d="M800,300 Q600,350 400,300 T0,300 L0,400 Q200,450 400,400 T800,400 Z"
          stroke="url(#circuitGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        <motion.path
          d="M0,500 Q200,550 400,500 T800,500 L800,600 Q600,650 400,600 T0,600 Z"
          stroke="url(#circuitGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 4
          }}
        />
      </svg>

      {/* Glowing orbs */}
      <div className="glowing-orbs">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="glowing-orb"
            style={{
              position: 'absolute',
              width: `${50 + Math.random() * 100}px`,
              height: `${50 + Math.random() * 100}px`,
              borderRadius: '50%',
              background: `radial-gradient(circle, ${
                ['#4facfe', '#00f2fe', '#764ba2', '#f093fb', '#43e97b'][i]
              }20, transparent)`,
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              filter: 'blur(20px)',
              zIndex: -1
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [0, 50, -30, 0],
              y: [0, -40, 20, 0]
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </>
  )
}

export default AnimatedBackground