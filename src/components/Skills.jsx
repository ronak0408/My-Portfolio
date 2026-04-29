import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { 
  FaReact, 
  FaJava, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaPython, 
  FaDatabase,
  FaLinux,
  FaGithub,
  FaCode, 
  FaServer, 
  FaBrain, 
  FaInfinity, 
  FaSync
} from 'react-icons/fa'
import { 
  SiTailwindcss,
  SiMysql,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiAmazon,
  SiVercel,
  SiNetlify,
  SiSpring,
  SiVisualstudiocode,
  SiPostman
} from 'react-icons/si'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [activeCategory, setActiveCategory] = useState('languages')

  const skillCategories = {
    languages: {
      title: 'Programming Languages',
      color: 'var(--neon-cyan)',
      skills: [
        { name: 'Python', icon: FaPython, level: 85, color: '#3776AB' },
        { name: 'Java', icon: FaJava, level: 80, color: '#ED8B00' },
        { name: 'C', icon: FaCode, level: 70, color: '#A8B9CC' }, 
        { name: 'JavaScript', icon: FaJs, level: 85, color: '#F7DF1E' },
        { name: 'SQL', icon: FaDatabase, level: 80, color: '#4479A1' },
        { name: 'HTML5', icon: FaHtml5, level: 90, color: '#E34F26' },
        { name: 'CSS3', icon: FaCss3Alt, level: 85, color: '#1572B6' }
      ]
    },
    frameworks: {
      title: 'Frameworks & Libraries',
      color: 'var(--neon-purple)',
      skills: [
        { name: 'React.js', icon: FaReact, level: 85, color: '#61DAFB' },
        { name: 'Node.js', icon: SiNodedotjs, level: 75, color: '#339933' },
        { name: 'Spring', icon: SiSpring, level: 70, color: '#6DB33F' },
        { name: 'REST APIs', icon: FaServer, level: 80, color: '#FF4500' },
        { name: 'Gen AI', icon: FaBrain, level: 65, color: '#8A2BE2' }
      ]
    },
    databases: {
      title: 'Databases',
      color: 'var(--neon-pink)',
      skills: [
        { name: 'MySQL', icon: SiMysql, level: 80, color: '#4479A1' },
        { name: 'MongoDB', icon: SiMongodb, level: 70, color: '#47A248' },
        { name: 'PostgreSQL', icon: SiPostgresql, level: 65, color: '#336791' }
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      color: 'var(--neon-green)',
      skills: [
        { name: 'Git & GitHub', icon: FaGithub, level: 85, color: '#181717' },
        { name: 'VS Code', icon: SiVisualstudiocode, level: 90, color: '#007ACC' },
        { name: 'Postman', icon: SiPostman, level: 80, color: '#FF6C37' },
        { name: 'CI/CD', icon: FaInfinity, level: 75, color: '#4285F4' },
        { name: 'Agile', icon: FaSync, level: 80, color: '#0052CC' }
      ]
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (delay) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: delay * 0.1,
        ease: "easeOut"
      }
    })
  }

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        delay: 0.5
      }
    })
  }

  return (
    <section id="skills" style={{ padding: '6rem 0' }}>
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
              marginBottom: '3rem'
            }}
          >
            Skills & Technologies
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
            A comprehensive overview of my technical expertise and the technologies I work with
          </motion.p>

          {/* Category Tabs */}
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
            {Object.keys(skillCategories).map((category) => (
              <motion.button
                key={category}
                className={`category-tab ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: activeCategory === category 
                    ? skillCategories[category].color
                    : 'transparent',
                  border: `2px solid ${skillCategories[category].color}`,
                  color: activeCategory === category 
                    ? '#ffffff' 
                    : skillCategories[category].color,
                  padding: '0.8rem 1.5rem',
                  borderRadius: '25px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  boxShadow: activeCategory === category 
                    ? `0 0 20px ${skillCategories[category].color}40`
                    : 'none'
                }}
              >
                {skillCategories[category].title}
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            key={activeCategory}
            className="skills-grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}
          >
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-card"
                variants={skillVariants}
                custom={index}
                whileHover={{ 
                  scale: 1.05,
                  borderColor: skill.color,
                  boxShadow: `0 10px 30px ${skill.color}30`
                }}
                style={{
                  background: 'var(--glass-bg)',
                  backdropFilter: 'blur(15px)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '20px',
                  padding: '2rem',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Skill Icon */}
                <motion.div
                  style={{
                    fontSize: '3.5rem',
                    color: skill.color,
                    marginBottom: '1rem',
                    filter: `drop-shadow(0 0 20px ${skill.color}50)`
                  }}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <skill.icon />
                </motion.div>

                {/* Skill Name */}
                <h3 style={{
                  fontSize: '1.3rem',
                  color: 'var(--text-primary)',
                  marginBottom: '1rem',
                  fontWeight: '600'
                }}>
                  {skill.name}
                </h3>

                {/* Progress Bar */}
                <div style={{
                  width: '100%',
                  height: '6px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '3px',
                  overflow: 'hidden',
                  marginBottom: '0.5rem'
                }}>
                  <motion.div
                    variants={progressVariants}
                    custom={skill.level}
                    style={{
                      height: '100%',
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
                      borderRadius: '3px',
                      boxShadow: `0 0 10px ${skill.color}50`
                    }}
                  />
                </div>

                {/* Skill Level */}
                <motion.div
                  style={{
                    color: 'var(--text-muted)',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  {skill.level}% Proficiency
                </motion.div>

                {/* Hover Effect */}
                <motion.div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: `linear-gradient(90deg, transparent, ${skill.color}, transparent)`,
                    opacity: 0
                  }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            className="glass-card"
            variants={itemVariants}
            style={{
              marginTop: '4rem',
              textAlign: 'center'
            }}
          >
            <h3 style={{
              fontSize: '1.5rem',
              color: skillCategories[activeCategory].color,
              marginBottom: '1rem'
            }}>
              Course Work & Certifications
            </h3>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              marginTop: '2rem'
            }}>
              {[
                'Data Structures & Algorithms',
                'Automata Theory',
                'Database Management',
                'Object-Oriented Programming',
                'Compiler Design',
                'Operating Systems',
                'Computer Networks',
                'Computer Architecture',
                'Web Development',
                'Software Engineering'
              ].map((course, index) => (
                <motion.div
                  key={index}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '1rem',
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem'
                  }}
                  whileHover={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderColor: skillCategories[activeCategory].color
                  }}
                >
                  {course}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
