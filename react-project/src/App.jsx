import './App.css'
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import React, {useState} from 'react'
import MenuPage from './pages/menuPage/MenuPage.jsx'
import AboutPage from './pages/aboutPage/AboutPage.jsx'
import HomePage from './pages/homePage/HomePage.jsx'
import CareerPage from './pages/careerPage/CareerPage.jsx'

function App() {

  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'menu':
        return <MenuPage />;
      case 'about':
        return <AboutPage />;
      case 'career':
        return <CareerPage />;
    }
  };

  return (
    <>
      <Header selectedPage={setCurrentPage}/>
      {renderPage()}
      <Footer />
    </>
  )
}

export default App
