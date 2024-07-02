import './App.css'
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import React, {useState} from 'react'
import MenuPage from './pages/menuPage/MenuPage.jsx'
import AboutPage from './pages/aboutPage/AboutPage.jsx'

function App() {

  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <></>;
      case 'menu':
        return <MenuPage />;
      case 'about':
        return <AboutPage />;
      default:
        return <Home />;
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
