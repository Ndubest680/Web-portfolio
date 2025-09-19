"use client";
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    toast.success('Message sent successfully! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'immanuelndubest680@gmail.com',
      link: 'mailto:immanuelndubest680@gmail.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      value: '+234 (0) 816 794 7233',
      link: 'tel:+2348167947233'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'Nigeria',
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Let's Work Together
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to bring your creative vision to life? I'd love to hear about your project 
            and discuss how we can create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center">
                <MessageCircle className="w-6 h-6 text-purple-400 mr-2" />
                Send Me a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form
                action="https://formspree.io/f/xdklrven"
                method="POST"
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 mb-2">Your Name:</label>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Your Email:</label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-purple-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Subject:</label>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Your Message:</label>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    required
                    rows={6}
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-purple-500 resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 gap-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-purple-900/60 to-pink-900/60 rounded-2xl p-8 shadow-xl border border-purple-700/30 flex flex-col items-center text-center mb-8">
              <h3 className="text-3xl font-extrabold text-white mb-4 tracking-tight bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Get In Touch</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-xl">
                I'm always excited to work on new projects and collaborate with creative minds. 
                Whether you need a complete brand identity, stunning graphics, or any design solution, 
                I'm here to help bring your ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <a
                  href="mailto:immanuelndubest680@gmail.com"
                  className="inline-block px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105"
                >
                  Send Email
                </a>
                <a
                  href="/Ndubest_CV_Portfolio.pdf"
                  download
                  className="inline-block px-6 py-3 rounded-lg font-semibold border-2 border-purple-500 text-purple-200 bg-black/40 hover:bg-gradient-to-r hover:from-purple-700 hover:to-pink-700 hover:text-white transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Download CV
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-4 justify-center items-center mb-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="bg-gray-900/50 border-gray-800 hover:bg-gray-900/70 transition-colors duration-300 w-64">
                    <CardContent className="p-6 flex flex-col items-center">
                      <div className="text-purple-400 mb-2">
                        {info.icon}
                      </div>
                      <h4 className="text-white font-semibold mb-1">{info.title}</h4>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-400">{info.value}</p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
              <a
                href="/Ndubest_CV_Portfolio.pdf"
                download
                className="inline-block px-6 py-3 rounded-lg font-semibold border-2 border-purple-500 text-purple-200 bg-gradient-to-r from-purple-900/40 to-pink-900/40 relative overflow-hidden hover:bg-gradient-to-r hover:from-purple-700 hover:to-pink-700 hover:text-white transition-all duration-300 hover:scale-105 shadow-lg"
                style={{ position: 'relative' }}
              >
                <span className="absolute inset-0 pointer-events-none opacity-30" style={{ background: 'radial-gradient(circle at 30% 70%, #a78bfa 0%, transparent 60%), radial-gradient(circle at 70% 30%, #f472b6 0%, transparent 60%)' }}></span>
                <span className="relative z-10">Download CV</span>
              </a>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}