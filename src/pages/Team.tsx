import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const Team = () => {
  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Executive Director',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
      bio: 'With over 15 years in education, Dr. Johnson leads our organization with passion and vision.',
    },
    {
      name: 'Michael Chen',
      role: 'Program Coordinator',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
      bio: 'Michael specializes in developing innovative educational programs for students.',
    },
    {
      name: 'Priya Patel',
      role: 'Events Manager',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
      bio: 'Priya brings creativity and excellence to our event planning and execution.',
    },
    {
      name: 'David Wilson',
      role: 'Academic Advisor',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
      bio: 'David guides students in their academic journey with expertise and care.',
    },
    {
      name: 'Lisa Zhang',
      role: 'Community Outreach',
      image:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80',
      bio: 'Lisa builds strong relationships with schools and community partners.',
    },
    {
      name: 'James Anderson',
      role: 'Volunteer Coordinator',
      image:
        'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80',
      bio: 'James manages our dedicated team of volunteers who make our events possible.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section with Gradient Background */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">
              Our Team
              <span className="absolute bottom-0 left-0 w-full h-1 bg-white/20 rounded-full"></span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-indigo-100">
              Meet the dedicated professionals who make our mission possible
            </p>
          </div>
        </div>
      </div>

      {/* Team Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center">
                {/* Profile Image */}
                <div className="mb-4 relative">
                  <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-indigo-50 group-hover:border-indigo-100 transition-colors duration-300 shadow-md">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-b from-indigo-500/0 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Member Info */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full inline-block">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="pt-3 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors duration-300">
                      <Linkedin size={18} />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors duration-300">
                      <Mail size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Optional Stats Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-indigo-600">15+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-indigo-600">1000+</div>
              <div className="text-sm text-gray-600">Students Mentored</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-indigo-600">50+</div>
              <div className="text-sm text-gray-600">Active Programs</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-indigo-600">25+</div>
              <div className="text-sm text-gray-600">Partner Schools</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;