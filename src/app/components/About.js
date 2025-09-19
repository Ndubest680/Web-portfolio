"use client";
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Palette, Code, Lightbulb, Target, Users, Laptop } from 'lucide-react';

export default function About() {
  const designSkills = [
    'Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'Figma',
    'Brand Identity', 'Logo Design', 'Print Design', 'Typography'
  ];

  const developmentSkills = [
    'HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Tailwind CSS',
    'Next.js', 'Responsive Design', 'UI/UX Implementation', 'Git/GitHub'
  ];

  const values = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Creative Excellence',
      description: 'Pushing creative boundaries to deliver unique and impactful visual solutions.'
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Technical Proficiency',
      description: 'Building responsive, modern web experiences with clean, efficient code.'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Staying ahead of design and development trends to create cutting-edge solutions.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Strategic Thinking',
      description: 'Every design and development decision is purposeful and user-centered.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaboration',
      description: 'Working closely with clients and teams to bring visions to life.'
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: 'Full-Stack Mindset',
      description: 'Understanding both design principles and development constraints for optimal results.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">
              Designer & Developer with Dual Expertise
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm Emmanuel Ndubuisi Sunday, a creative professional who bridges the gap between 
              design and development. As both a graphic designer and frontend developer, I bring 
              a unique perspective to every project, ensuring that beautiful designs translate 
              seamlessly into functional, user-friendly digital experiences.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My dual expertise allows me to create cohesive brand experiences from concept to 
              implementation. Whether it's designing a stunning logo or building a responsive 
              website, I understand both the creative vision and technical requirements needed 
              to deliver exceptional results.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 pt-4">
              <div>
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Palette className="w-5 h-5 text-purple-400 mr-2" />
                  Design Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {designSkills.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="bg-purple-900/50 text-purple-200 hover:bg-purple-800/50 transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Code className="w-5 h-5 text-pink-400 mr-2" />
                  Development Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {developmentSkills.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="bg-pink-900/50 text-pink-200 hover:bg-pink-800/50 transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20">
              <div className="text-center space-y-6">
                <div className="w-55 h-55 rounded-full mx-auto flex items-center justify-center overflow-hidden border-4 border-purple-500 shadow-lg">
                  <img
                    src="/emmanuel.jpg"
                    alt="Emmanuel Ndubuisi Sunday"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Emmanuel Ndubuisi Sunday</h3>
                  <p className="text-purple-300 text-lg">Graphic Designer & Frontend Developer</p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-white">3+</div>
                    <div className="text-gray-400">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">80+</div>
                    <div className="text-gray-400">Projects Completed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div>
          <h3 className="text-3xl font-bold text-center text-white mb-12">My Approach</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="relative rounded-2xl border border-purple-700/40 shadow-xl backdrop-blur-lg bg-gradient-to-br from-purple-900/70 to-pink-900/70 group hover:scale-[1.04] hover:shadow-2xl transition-all duration-300"
                  style={{ minHeight: '260px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}
                >
                  <div className="absolute inset-0 pointer-events-none rounded-2xl border-2 border-transparent group-hover:border-purple-500 transition-all duration-300" style={{ zIndex: 1 }}></div>
                  <CardContent className="relative p-8 text-center flex flex-col items-center justify-center h-full z-10">
                    <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 group-hover:shadow-pink-500/40 group-hover:scale-110 transition-transform duration-300 shadow-lg border-4 border-purple-700/40">
                      {value.icon}
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-purple-300 transition-colors duration-300">
                      {value.title}
                    </h4>
                    <div className="w-10 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-3"></div>
                    <p className="text-gray-300 text-base leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}