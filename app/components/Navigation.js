'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [carPosition, setCarPosition] = useState(0)

  useEffect(() => {
    function updateNavbar() {
      const scrollTop = window.pageYOffset
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollProgress = (scrollTop / scrollHeight) * 100
      
      const navbar = document.getElementById('navbar')
      if (navbar) {
        const carTravelDistance = navbar.offsetWidth - 100
        const newCarPosition = (scrollProgress / 100) * carTravelDistance
        setCarPosition(newCarPosition)
      }
    }

    window.addEventListener('scroll', updateNavbar)
    return () => window.removeEventListener('scroll', updateNavbar)
  }, [])

  const handleLinkClick = (e, targetId) => {
    e.preventDefault()
    const targetSection = document.querySelector(targetId)
    setIsMenuOpen(false)
    document.body.style.overflow = 'auto'

    if (targetSection) {
      const navbar = document.getElementById('navbar')
      const navbarHeight = navbar ? navbar.offsetHeight + 40 : 100
      const offsetTop = targetSection.offsetTop - navbarHeight

      window.scrollTo({
        top: Math.max(0, offsetTop),
        behavior: 'smooth',
      })
    }
  }

  return (
    <nav className="navbar" id="navbar">
      <Image 
        src="/assets/CAR.png" 
        alt="Racing Car" 
        className="nav-race-car"
        width={100}
        height={50}
        style={{ transform: `translateX(${carPosition}px)` }}
      />
      <div className="nav-container">
        <div className="nav-logo">
          <Image 
            src="/assets/FH2025 Black Logo nav.png" 
            alt="Formula Hacks 2025 Logo" 
            width={120}
            height={24}
          />
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="nav-menu">
          <li><a href="#about" className="nav-link" onClick={(e) => handleLinkClick(e, '#about')}>About</a></li>
          <li><a href="#timeline" className="nav-link" onClick={(e) => handleLinkClick(e, '#timeline')}>Timeline</a></li>
          <li><a href="#mentors" className="nav-link" onClick={(e) => handleLinkClick(e, '#mentors')}>Mentors</a></li>
        </ul>
        <div 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
          id="hamburger"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen)
            document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden'
          }}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  )
}
