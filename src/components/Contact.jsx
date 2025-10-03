import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaEnvelope, 
  FaPhone, 
  FaLinkedin, 
  FaGithub, 
  FaMapMarkerAlt,
  FaPaperPlane,
  FaUser,
  FaComment,
  FaHeart,
  FaDownload
} from 'react-icons/fa'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission (no backend)
    setTimeout(() => {
      setSubmitStatus('Thank you for your message! I\'ll get back to you soon.')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitting(false)
      
      setTimeout(() => {
        setSubmitStatus('')
      }, 5000)
    }, 2000)
  }

  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = 'https://page.gensparksite.com/get_upload_url/8a57f7fc29ee1892f35bb1409ef04fe3091acff69f5afc87a3f2df76ddf80a8a/default/708e368c-07f1-4b09-9fcc-f66a56f8e23d'
    link.download = 'Ronak_Sain_Resume.pdf'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'ronaksain0408@gmail.com',
      href: 'mailto:ronaksain0408@gmail.com',
      color: 'var(--neon-cyan)'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 8595872543',
      href: 'tel:+918595872543',
      color: 'var(--neon-purple)'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/ronak',
      href: 'https://linkedin.com/in/ronak',
      color: '#0077B5'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'github.com/ronaksain',
      href: 'https://github.com/ronaksain',
      color: '#333333'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'India',
      href: null,
      color: 'var(--neon-green)'
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

  return (
    <section id="contact" style={{ padding: '6rem 0' }}>
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
            Get In Touch
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
            I'm always excited to connect with fellow developers, potential collaborators, and amazing opportunities. 
            Let's create something incredible together!
          </motion.p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem'
          }}>
            {/* Contact Information */}
            <motion.div
              className="glass-card"
              variants={itemVariants}
            >
              <h3 style={{
                fontSize: '2rem',
                color: 'var(--neon-cyan)',
                marginBottom: '2rem',
                textAlign: 'center',
                fontWeight: '700'
              }}>
                Let's Connect
              </h3>

              <div style={{ marginBottom: '2rem' }}>
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1rem',
                      marginBottom: '1rem',
                      background: 'rgba(255, 255, 255, 0.03)',
                      borderRadius: '15px',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.3s ease',
                      cursor: info.href ? 'pointer' : 'default'
                    }}
                    whileHover={info.href ? {
                      scale: 1.02,
                      borderColor: info.color,
                      boxShadow: `0 5px 20px ${info.color}20`
                    } : {}}
                    onClick={() => info.href && window.open(info.href, '_blank')}
                  >
                    <motion.div
                      style={{
                        fontSize: '1.5rem',
                        color: info.color,
                        filter: `drop-shadow(0 0 10px ${info.color}50)`
                      }}
                      whileHover={{ scale: 1.2 }}
                    >
                      <info.icon />
                    </motion.div>
                    
                    <div>
                      <div style={{
                        color: 'var(--text-muted)',
                        fontSize: '0.9rem',
                        marginBottom: '0.2rem'
                      }}>
                        {info.label}
                      </div>
                      <div style={{
                        color: 'var(--text-primary)',
                        fontWeight: '500'
                      }}>
                        {info.value}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Resume Download */}
              <motion.button
                className="neon-button pulse-button"
                onClick={handleDownloadResume}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  width: '100%',
                  marginBottom: '2rem',
                  justifyContent: 'center'
                }}
              >
                <FaDownload style={{ marginRight: '0.5rem' }} />
                Download My Resume
              </motion.button>

              {/* Fun Message */}
              <motion.div
                style={{
                  textAlign: 'center',
                  padding: '1.5rem',
                  background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.1), rgba(118, 75, 162, 0.1))',
                  borderRadius: '15px',
                  border: '1px solid rgba(0, 242, 254, 0.2)'
                }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  style={{
                    fontSize: '2rem',
                    marginBottom: '1rem'
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <FaHeart style={{ color: 'var(--neon-pink)' }} />
                </motion.div>
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.95rem',
                  lineHeight: '1.5'
                }}>
                  "Code is like humor. When you have to explain it, it's bad." 
                  <br />
                  <span style={{ color: 'var(--neon-cyan)', fontStyle: 'italic' }}>
                    Let's write some good code together!
                  </span>
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="glass-card"
              variants={itemVariants}
            >
              <h3 style={{
                fontSize: '2rem',
                color: 'var(--neon-purple)',
                marginBottom: '2rem',
                textAlign: 'center',
                fontWeight: '700'
              }}>
                Send Message
              </h3>

              <form onSubmit={handleSubmit}>
                {/* Name Input */}
                <motion.div
                  style={{ marginBottom: '1.5rem', position: 'relative' }}
                  whileFocus={{ scale: 1.02 }}
                >
                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '0.5rem',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>
                    <FaUser />
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '1rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '10px',
                      color: 'var(--text-primary)',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--neon-cyan)'
                      e.target.style.boxShadow = '0 0 20px rgba(0, 242, 254, 0.3)'
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'
                      e.target.style.boxShadow = 'none'
                    }}
                    placeholder="Enter your full name"
                  />
                </motion.div>

                {/* Email Input */}
                <motion.div
                  style={{ marginBottom: '1.5rem', position: 'relative' }}
                  whileFocus={{ scale: 1.02 }}
                >
                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '0.5rem',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>
                    <FaEnvelope />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '1rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '10px',
                      color: 'var(--text-primary)',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--neon-purple)'
                      e.target.style.boxShadow = '0 0 20px rgba(118, 75, 162, 0.3)'
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'
                      e.target.style.boxShadow = 'none'
                    }}
                    placeholder="your.email@example.com"
                  />
                </motion.div>

                {/* Subject Input */}
                <motion.div
                  style={{ marginBottom: '1.5rem', position: 'relative' }}
                  whileFocus={{ scale: 1.02 }}
                >
                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '0.5rem',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>
                    <FaPaperPlane />
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '1rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '10px',
                      color: 'var(--text-primary)',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--neon-green)'
                      e.target.style.boxShadow = '0 0 20px rgba(56, 249, 215, 0.3)'
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'
                      e.target.style.boxShadow = 'none'
                    }}
                    placeholder="What's this about?"
                  />
                </motion.div>

                {/* Message Textarea */}
                <motion.div
                  style={{ marginBottom: '2rem', position: 'relative' }}
                  whileFocus={{ scale: 1.02 }}
                >
                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '0.5rem',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>
                    <FaComment />
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    style={{
                      width: '100%',
                      padding: '1rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '10px',
                      color: 'var(--text-primary)',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                      resize: 'vertical',
                      fontFamily: 'inherit'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--neon-pink)'
                      e.target.style.boxShadow = '0 0 20px rgba(245, 87, 108, 0.3)'
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'
                      e.target.style.boxShadow = 'none'
                    }}
                    placeholder="Tell me about your project, idea, or just say hello!"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="neon-button"
                  disabled={isSubmitting}
                  whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    opacity: isSubmitting ? 0.7 : 1,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    borderColor: 'var(--neon-green)',
                    color: 'var(--neon-green)'
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        style={{ marginRight: '0.5rem' }}
                      >
                        ⏳
                      </motion.div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane style={{ marginRight: '0.5rem' }} />
                      Send Message
                    </>
                  )}
                </motion.button>

                {/* Submit Status */}
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                      marginTop: '1rem',
                      padding: '1rem',
                      background: 'rgba(56, 249, 215, 0.1)',
                      border: '1px solid rgba(56, 249, 215, 0.3)',
                      borderRadius: '10px',
                      color: 'var(--neon-green)',
                      textAlign: 'center',
                      fontWeight: '500'
                    }}
                  >
                    {submitStatus}
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>

          {/* Footer Message */}
          <motion.div
            variants={itemVariants}
            style={{
              textAlign: 'center',
              marginTop: '3rem'
            }}
          >
            <p style={{
              color: 'var(--text-muted)',
              fontSize: '1rem',
              lineHeight: '1.6'
            }}>
              Thank you for visiting my portfolio! 
              <br />
              <span style={{ color: 'var(--neon-cyan)' }}>
                Built with ❤️ using React + Vite
              </span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact