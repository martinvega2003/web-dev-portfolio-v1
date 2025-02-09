import './App.css'
import Form from './components/form'
import Header from './components/Header'
import { MainPage } from './components/mainPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ServicePage from './components/ServicePage'
import { servicesData } from './data/servicesData'
import ScrollToTop from './components/scrollToTop'
import bgImageUrl from "../src/images/my-offer-bg.webp"

function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop />
      {/* Background Image Layer */}
      <div
        className="fixed inset-0 bg-fixed bg-cover bg-center bg-no-repeat opacity-50"
        style={{
          backgroundImage: `url(${bgImageUrl})`,
          zIndex: -1,
          //backgroundAttachment: "scroll", // Ensures smooth scrolling
        }}
      ></div>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/form' element={<Form />} />
        <Route path='/services/maintenance' element={<ServicePage {...servicesData.maintenance} />} />
        <Route path='/services/blogging' element={<ServicePage {...servicesData.contentCreation} />} />
        <Route path='/services/seo' element={<ServicePage {...servicesData.seoOptimization} />} />
      </Routes>
    </ BrowserRouter>
  )
}

export default App
