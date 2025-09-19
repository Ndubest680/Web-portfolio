import { Button } from './ui/button';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              <span className="block bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Emmanuel
              </span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Ndubuisi Sunday
              </span>
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-light">
            <span className="text-purple-400 font-semibold">Graphic Designer</span> & 
            <span className="text-pink-400 font-semibold"> Frontend Developer</span>
          </p>

          {/* Description */}
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Bridging creativity and technology to deliver stunning visual experiences and 
            interactive web solutions. From brand identity to responsive websites, 
            I bring ideas to life through design and code.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 justify-center items-center pt-8">
            <div className="flex flex-row gap-4 justify-center items-center w-full">
              <a
                href="mailto:immanuelndubest680@gmail.com"
                className="flex items-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                style={{ textDecoration: 'none' }}
              >
                <Mail className="w-5 h-5 mr-2" />
                <span>Get In Touch</span>
              </a>
              <a
                href="https://wa.me/2348167947233"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
                style={{ textDecoration: 'none' }}
              >
                <FaWhatsapp className="w-5 h-5 mr-2" />
                <span>WhatsApp</span>
              </a>
            </div>
            <a
              href="/Ndubest_CV_Portfolio.pdf"
              download
              className="relative flex items-center px-8 py-3 rounded-full font-semibold border-2 border-purple-500 text-purple-400 bg-gradient-to-r from-purple-900/40 to-pink-900/40 transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-700 hover:to-pink-700 hover:text-white hover:scale-105 shadow-lg overflow-hidden mt-2"
              style={{ position: 'relative' }}
            >
              <span className="absolute inset-0 pointer-events-none opacity-30" style={{ background: 'radial-gradient(circle at 30% 70%, #a78bfa 0%, transparent 60%), radial-gradient(circle at 70% 30%, #f472b6 0%, transparent 60%)' }}></span>
              <span className="relative z-10 flex items-center">
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </span>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
}