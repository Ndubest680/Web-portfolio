import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Contact from './components/Contact';

export default function Index() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              Emmanuel Ndubuisi Sunday
            </h3>
            <p className="text-gray-400 mb-4">Creative Graphic Designer & Visual Storyteller</p>
            <div className="flex justify-center space-x-6 mb-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                Behance
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                Dribbble
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              © 2024 Emmanuel Ndubuisi Sunday. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}