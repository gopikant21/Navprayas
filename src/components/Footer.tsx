import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, Linkedin, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const AnimatedLink = ({ to, children, delay }) => {
  return (
    <Link
      to={to}
      className="text-sm hover:text-white transition-all duration-300 flex items-center group animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <span className="h-1 w-1 bg-indigo-400 rounded-full mr-2 transition-all duration-300 group-hover:w-2"></span>
      <span className="relative overflow-hidden">
        {children}
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
      </span>
    </Link>
  );
};

const SocialIcon = ({ Icon, href, label, delay }) => {
  return (
    <a
      href={href}
      aria-label={label}
      className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <Icon size={22} className="hover:animate-pulse" />
    </a>
  );
};

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'Youtube' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  const keyReferences = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Certificate', path: '/certificate' },
    { name: 'Terms And Conditions', path: '/terms' }
  ];

  const importantLinks = [
    { name: 'Result', path: '/result' },
    { name: 'Suggestion', path: '/suggestion' },
    { name: 'FAQ', path: '/faq' }
  ];

  return (
    <footer className={`bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300 relative overflow-hidden ${
      isVisible ? 'animate-fade-in' : 'opacity-0'
    }`}>
      {/* Animated Background Effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-32 right-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-float-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Organization Info */}
          <div className="space-y-6 animate-fade-in-up">
            <div>
              <div className="flex flex-col space-y-2">
                <h3 className="text-white text-xl font-bold tracking-wide hover:text-indigo-400 transition-colors duration-300">
                  NAVPRAYAS
                </h3>
                <span className="text-sm text-indigo-400 font-medium animate-pulse">
                  A GROUP OF INNOVATIVE THOUGHTS
                </span>
              </div>
              <p className="text-sm mt-4 leading-relaxed text-gray-400 animate-fade-in-up" 
                 style={{ animationDelay: '200ms' }}>
                Navprayas, established in 2000, promotes education, awareness, and
                humanitarian activities by bringing together students and professionals
                around society to create growth and positive change.
              </p>
            </div>
            <div className="flex space-x-5">
              {socialLinks.map((social, index) => (
                <SocialIcon
                  key={social.label}
                  Icon={social.icon}
                  href={social.href}
                  label={social.label}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>

          {/* Contact Us */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <h3 className="text-white text-lg font-semibold relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-indigo-500 after:transition-all after:duration-300 hover:after:w-24">
              Contact Us
            </h3>
            <div className="space-y-4">
              <a href="tel:+919153223740" className="flex items-center group hover:-translate-y-0.5 transition-transform duration-300">
                <Phone size={18} className="mr-3 text-indigo-400 group-hover:text-white transition-colors duration-300 group-hover:rotate-12 transform" />
                <span className="text-sm group-hover:text-white transition-colors duration-300">+91 9153223740</span>
              </a>
              <a href="mailto:navprayas.np2000@gmail.com" className="flex items-center group hover:-translate-y-0.5 transition-transform duration-300">
                <Mail size={18} className="mr-3 text-indigo-400 group-hover:text-white transition-colors duration-300 group-hover:rotate-12 transform" />
                <span className="text-sm group-hover:text-white transition-colors duration-300">navprayas.np2000@gmail.com</span>
              </a>
              <div className="flex items-start group hover:-translate-y-0.5 transition-transform duration-300">
                <MapPin size={18} className="mr-3 mt-1 text-indigo-400 flex-shrink-0 group-hover:text-white transition-colors duration-300 group-hover:rotate-12 transform" />
                <span className="text-sm group-hover:text-white transition-colors duration-300">
                  Navprayas, Main Office, House No. GE0090733, Ground Floor, Manpur
                  Patwatoli, PO + PS Buniyadganj, Gaya-823003, Bihar, India
                </span>
              </div>
            </div>
          </div>

          {/* Key References */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <h3 className="text-white text-lg font-semibold relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-indigo-500 after:transition-all after:duration-300 hover:after:w-24">
              Key References
            </h3>
            <ul className="space-y-3">
              {keyReferences.map((link, index) => (
                <li key={link.path}>
                  <AnimatedLink to={link.path} delay={index * 100}>
                    {link.name}
                  </AnimatedLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <h3 className="text-white text-lg font-semibold relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-indigo-500 after:transition-all after:duration-300 hover:after:w-24">
              Important Links
            </h3>
            <ul className="space-y-3">
              {importantLinks.map((link, index) => (
                <li key={link.path}>
                  <AnimatedLink to={link.path} delay={index * 100}>
                    {link.name}
                  </AnimatedLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700/50 mt-12 pt-8">
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '800ms' }}>
            <p className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
              Copyright ©2024 by Navprayas Inc. All Rights Reserved
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(-5deg); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </footer>
  );
};

export default Footer;