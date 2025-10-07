'use client'

import { useEffect } from 'react'

const events = [
  { time: '9:00 AM', title: 'Check-in Starts', day: 'Day 1', special: false },
  { time: '10:00 AM', title: 'Opening Ceremony', day: 'Day 1', special: false },
  { time: '10:30 AM', title: 'Workshop Session', day: 'Day 1', special: false },
  { time: '12:00 PM', title: 'Lunch Break', day: 'Day 1', special: false },
  { time: '1:00 PM', title: 'Hackathon Begins', day: 'Day 1', special: true },
  { time: '4:00 PM', title: 'Checkpoint 1', day: 'Day 1', special: false },
  { time: '5:00 PM', title: 'Snacks Break', day: 'Day 1', special: false },
  { time: '8:00 PM', title: 'Dinner', day: 'Day 1', special: false },
  { time: '10:00 PM', title: 'Checkpoint 2', day: 'Day 1', special: false },
  { time: '11:00 PM', title: 'ChitChat + Open Mic', day: 'Day 1', special: false },
  { time: '12:00 AM', title: 'Night Coding Session', day: 'Night', special: false },
  { time: '7:30 AM', title: 'Breakfast', day: 'Day 2', special: false },
  { time: '8:30 AM', title: 'Checkpoint 3', day: 'Day 2', special: false },
  { time: '11:00 AM', title: 'Submissions Close', day: 'Day 2', special: true },
  { time: '1:00 PM', title: 'Presentations & Judging', day: 'Day 2', special: false },
  { time: '2:30 PM', title: 'Results & Prize Distribution', day: 'Day 2', final: true },
]

export default function Timeline() {
  useEffect(() => {
    function initHorizontalTimeline() {
      const stickyContainer = document.querySelector('.timeline-sticky-container')
      const timelineWrapper = document.querySelector('.timeline-wrapper')
      if (!stickyContainer || !timelineWrapper) return

      const car = timelineWrapper.querySelector('.timeline-car')
      let horizontalScrollLength = 0

      function setTimelineHeight() {
        horizontalScrollLength = timelineWrapper.scrollWidth - timelineWrapper.clientWidth
        stickyContainer.style.height = `${horizontalScrollLength + timelineWrapper.offsetHeight}px`
      }

      function updateTimelineOnScroll() {
        if (horizontalScrollLength <= 0) return

        const scrollFromTop = window.pageYOffset
        const stickyTop = stickyContainer.getBoundingClientRect().top + scrollFromTop
        const scrollAmount = Math.max(0, scrollFromTop - stickyTop)

        if (scrollAmount > 0 && scrollAmount <= horizontalScrollLength) {
          timelineWrapper.scrollLeft = scrollAmount
        } else if (scrollAmount > horizontalScrollLength) {
          timelineWrapper.scrollLeft = horizontalScrollLength
        } else {
          timelineWrapper.scrollLeft = 0
        }

        const progress = timelineWrapper.scrollLeft / horizontalScrollLength
        const timelineContainer = timelineWrapper.querySelector('.timeline-container')
        const startOffset = timelineContainer.offsetLeft
        const carPosition = startOffset + progress * (timelineWrapper.clientWidth - car.offsetWidth - startOffset)
        car.style.left = `${carPosition}px`
      }

      setTimelineHeight()
      window.addEventListener('scroll', updateTimelineOnScroll)
      window.addEventListener('resize', setTimelineHeight)

      return () => {
        window.removeEventListener('scroll', updateTimelineOnScroll)
        window.removeEventListener('resize', setTimelineHeight)
      }
    }

    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -30px 0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.classList.contains('timeline-event')) {
          entry.target.classList.add('in-view')
        }
      })
    }, observerOptions)

    const timelineEvents = document.querySelectorAll('.timeline-event')
    timelineEvents.forEach((event) => {
      observer.observe(event)
    })

    const cleanup = initHorizontalTimeline()

    return () => {
      observer.disconnect()
      if (cleanup) cleanup()
    }
  }, [])

  return (
    <section id="timeline" className="timeline">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">RACE SCHEDULE</h2>
          <p className="section-subtitle">30 hours of non-stop coding action</p>
        </div>
        <div className="timeline-sticky-container">
          <div className="timeline-wrapper">
            <div className="timeline-track-container">
              <div className="timeline-track"></div>
              <div id="timeline-car-emoji" className="timeline-car">🏎️</div>
            </div>
            <div className="timeline-container">
              {events.map((event, index) => (
                <div key={index} className="timeline-event">
                  <div className={`event-card ${event.special ? 'special' : ''} ${event.final ? 'final' : ''}`}>
                    <div className="event-time">{event.time}</div>
                    <div className="event-title">{event.title}</div>
                    <div className="event-day">{event.day}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
