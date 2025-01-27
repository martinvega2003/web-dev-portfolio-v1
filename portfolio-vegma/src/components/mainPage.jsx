import React from 'react'
import HeroSection from './sections/HeroSection'
import BenefitsSection from './sections/BenefitsSection'
import MyServiceSection from './sections/MyService'
import MyOfferSection from './sections/MyOfferSection'
import ProcessSection from './sections/ProcessSection'
import { ProjectsSection } from './sections/CarouselSection'
import Footer from './Footer'
import AboutMe from './sections/AboutMe'

export const MainPage = () => {
  return (
    <>
        <HeroSection />
        <AboutMe />
        <BenefitsSection />
        <MyServiceSection />
        <MyOfferSection />
        <ProcessSection />
        <ProjectsSection />
        <Footer />
    </>
  )
}
