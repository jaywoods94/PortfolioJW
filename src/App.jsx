import { useState } from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import PortfolioSection from './components/PortfolioSection';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [currentPage, setCurrentPage] = useState('About Me');

  const renderPage = () => {
    switch(currentPage) {
      case 'About Me':
        return <AboutMe />;
      case 'Portfolio':
        return <PortfolioSection />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} handlePageChange={setCurrentPage} />
      <main className="container mx-auto p-4">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;