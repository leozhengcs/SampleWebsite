import './App.css'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import React, {useState} from 'react'
import MenuPage from './Menu.jsx'

function App() {

  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <MenuPage />;
      case 'menu':
        return <MenuPage />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <Header />
      {renderPage()}
      <Footer />
    </>
  )
}

export default App
