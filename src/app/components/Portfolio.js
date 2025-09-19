'use client';
import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink, ZoomIn } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'branding', name: 'Branding' },
    { id: 'web', name: 'Web Development' },
    { id: 'print', name: 'Print Design' },
    { id: 'digital', name: 'Digital Design' },
    { id: 'seasonal', name: 'Seasonal' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Compliment of the Season',
      category: 'seasonal',
      description: 'Festive seasonal greeting design with elegant Christmas elements',
      image: '/Compiment_of_the_season.PNG',
      tags: ['Seasonal Design', 'Typography', 'Festive Graphics']
    },
    {
      id: 2,
      title: 'Church Flyer Design',
      category: 'seasonal',
      description: 'Church flyer design with beautiful and engaging visuals',
      image: '/WCF.JPG',
      tags: ['Church Design', 'Branding', 'Visual Identity']
    },
    {
      id: 3,
      title: 'E-commerce React Website',
      category: 'web',
      description: 'Modern e-commerce platform built with React and Tailwind CSS',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      tags: ['React', 'E-commerce', 'Responsive Design', 'Frontend']
    },
    {
      id: 4,
      title: 'Corporate Brand Identity',
      category: 'branding',
      description: 'Complete brand identity package for modern business',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      tags: ['Logo Design', 'Brand Identity', 'Corporate']
    },
    {
      id: 5,
      title: 'Portfolio Website Development',
      category: 'web',
      description: 'Custom portfolio website with modern animations and responsive design',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop',
      tags: ['Portfolio', 'React', 'Animation', 'UI/UX']
    },
    {
      id: 6,
      title: 'Magazine Layout Design',
      category: 'print',
      description: 'Editorial design for lifestyle magazine with modern typography',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=300&fit=crop',
      tags: ['Editorial', 'Typography', 'Layout']
    },
    {
      id: 7,
      title: 'SaaS Landing Page',
      category: 'web',
      description: 'High-converting landing page for SaaS product with modern design',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop',
      tags: ['Landing Page', 'SaaS', 'Conversion Optimization', 'React']
    },
    {
      id: 8,
      title: 'Digital Marketing Campaign',
      category: 'digital',
      description: 'Social media graphics and digital assets for marketing campaign',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      tags: ['Social Media', 'Digital Marketing', 'Graphics']
    },
    {
      id: 9,
      title: 'Restaurant Menu Design',
      category: 'print',
      description: 'Elegant menu design for upscale restaurant with custom illustrations',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=300&fit=crop',
      tags: ['Menu Design', 'Illustration', 'Print']
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            My Portfolio
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my creative journey through a collection of design and development projects 
            that showcase my passion for visual storytelling and modern web experiences.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="bg-gray-900 border-gray-800 overflow-hidden group hover:border-purple-500/50 transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors duration-200">
                        <ZoomIn className="w-6 h-6 text-white" />
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl bg-gray-900 border-gray-700">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto rounded-lg"
                      />
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="bg-purple-900/30 text-purple-300 text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}