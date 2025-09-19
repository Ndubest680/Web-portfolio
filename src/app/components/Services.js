import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { 
  Palette, 
  Layout, 
  Printer, 
  Smartphone, 
  Package, 
  Camera,
  Code,
  Globe,
  ArrowRight
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Brand Identity Design',
      description: 'Complete brand identity packages including logo design, color schemes, typography, and brand guidelines.',
      features: ['Logo Design', 'Brand Guidelines', 'Color Palette', 'Typography Selection'],
      price: 'Starting at $50'
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: 'Graphic Design',
      description: 'Creative graphic design solutions for all your visual communication needs.',
      features: ['Poster Design', 'Flyer Design', 'Banner Design', 'Infographics'],
      price: 'Starting at $20'
    },
    {
      icon: <Printer className="w-8 h-8" />,
      title: 'Print Design',
      description: 'Professional print design services for business cards, brochures, magazines, and more.',
      features: ['Business Cards', 'Brochures', 'Magazine Layout', 'Packaging Design'],
      price: 'Starting at $30'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Frontend Development',
      description: 'Modern, responsive websites built with the latest technologies and best practices.',
      features: ['React Development', 'Responsive Design', 'UI/UX Implementation', 'Performance Optimization'],
      price: 'Starting at $350'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Website Design & Development',
      description: 'Complete website solutions from design concept to fully functional web application.',
      features: ['Custom Website Design', 'Full-Stack Development', 'CMS Integration', 'SEO Optimization'],
      price: 'Starting at $700'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Digital Design',
      description: 'Modern digital design for web, social media, and digital marketing campaigns.',
      features: ['Social Media Graphics', 'Web Graphics', 'Email Templates', 'Digital Ads'],
      price: 'Starting at $40'
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: 'Packaging Design',
      description: 'Eye-catching packaging design that makes your products stand out on the shelf.',
      features: ['Product Packaging', 'Label Design', '3D Mockups', 'Print Ready Files'],
      price: 'Starting at $90'
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Photo Editing',
      description: 'Professional photo editing and retouching services for all your visual content needs.',
      features: ['Photo Retouching', 'Background Removal', 'Color Correction', 'Image Enhancement'],
      price: 'Starting at $15'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            My Services
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I offer comprehensive design and development services to help bring your creative vision to life. 
            From concept to completion, I'm here to make your brand shine both visually and digitally.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:border-purple-500/50 group"
            >
              <CardHeader className="text-center">
                <div className="text-purple-400 mb-4 flex justify-center group-hover:text-pink-400 transition-colors duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-lg text-white mb-2">{service.title}</CardTitle>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-300 text-sm flex items-center">
                      <ArrowRight className="w-3 h-3 text-purple-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-gray-700">
                  <div className="flex items-center justify-between">
                    <span className="text-purple-400 font-semibold text-sm">{service.price}</span>
                    {/* <Button 
                      size="sm" 
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-xs px-3 py-1"
                    >
                      Get Quote
                    </Button> */}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Need a Complete Solution?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Combine my design and development expertise for a complete brand experience. 
              From logo design to fully functional websites, I can handle your entire project from start to finish.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
                <a
                href="https://wa.me/2348167947233"
                target="_blank"
                rel="noopener noreferrer">
              Let's Discuss Your Complete Project
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}