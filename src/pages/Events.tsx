import { Calendar, MapPin, Clock, Users, Trophy, BookOpen, Target, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  eligibility: string[];
  registrationFee: string;
  mode: string;
  groups: string[];
  importantDates: Array<{
    title: string;
    date: string;
  }>;
}

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const events: Event[] = [
    {
      id: 'puzzle-race-2024',
      title: 'Puzzle Race 2024',
      date: 'June 9, 2024',
      time: '9:00 AM - 4:00 PM',
      location: 'Durga Asthan',
      description: 'A level-based competition where participants are given puzzles and riddles to solve. The difficulty increases with each level, testing logical thinking and problem-solving abilities.',
      image: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?auto=format&fit=crop&q=80',
      eligibility: [
        'Students should be a citizen of India',
        'Participants should be enrolled in any Educational Institution',
        'Students currently studying in class 7/8/9/10'
      ],
      registrationFee: '₹45/- per team',
      mode: 'Offline',
      groups: ['Junior: VII & VIII', 'Senior: IX & X'],
      importantDates: [
        { title: 'Registration Starts', date: 'May 8, 2024' },
        { title: 'Registration Deadline', date: 'June 3, 2024' },
        { title: 'Admit Card Distribution', date: 'June 7, 2024' },
        { title: 'Exam Date', date: 'June 9, 2024' },
        { title: 'Answer Key Release', date: 'June 10, 2024' },
        { title: 'Final Result', date: 'June 28, 2024' }
      ]
    },
    {
      id: 'spell-bee-2024',
      title: 'Spell Bee Competition',
      date: 'July 15, 2024',
      time: '10:00 AM - 2:00 PM',
      location: 'Central School Auditorium',
      description: 'An exciting spelling competition designed to enhance vocabulary and language skills. Multiple rounds of increasing difficulty test participants\' spelling abilities.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80',
      eligibility: [
        'Open to students from grades 5-10',
        'Must be enrolled in a recognized school',
        'Maximum 2 participants per school'
      ],
      registrationFee: '₹30/- per participant',
      mode: 'Offline',
      groups: ['Junior: V & VI', 'Middle: VII & VIII', 'Senior: IX & X'],
      importantDates: [
        { title: 'Registration Starts', date: 'June 15, 2024' },
        { title: 'Registration Deadline', date: 'July 10, 2024' },
        { title: 'Competition Date', date: 'July 15, 2024' },
        { title: 'Results Declaration', date: 'July 16, 2024' }
      ]
    },
    {
      id: 'science-fair-2024',
      title: 'Young Scientists Fair',
      date: 'August 20, 2024',
      time: '9:00 AM - 5:00 PM',
      location: 'City Convention Center',
      description: 'Annual science exhibition showcasing innovative projects from young minds. Features interactive demonstrations, expert talks, and hands-on experiments.',
      image: 'https://images.unsplash.com/photo-1564066379009-41978b561a5d?auto=format&fit=crop&q=80',
      eligibility: [
        'Students from grades 5-10',
        'Projects can be individual or team-based (max 3 members)',
        'One project entry per team/individual'
      ],
      registrationFee: '₹100/- per project',
      mode: 'Offline',
      groups: ['Junior: V-VI', 'Middle: VII-VIII', 'Senior: IX-X'],
      importantDates: [
        { title: 'Project Proposal Submission', date: 'July 1, 2024' },
        { title: 'Proposal Acceptance', date: 'July 15, 2024' },
        { title: 'Registration Deadline', date: 'August 10, 2024' },
        { title: 'Exhibition Date', date: 'August 20, 2024' }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="bg-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Upcoming Events</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Join us for exciting educational events designed to inspire and
              challenge young minds
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {selectedEvent ? (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <button
              onClick={() => setSelectedEvent(null)}
              className="ml-4 mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-700"
            >
              <ChevronRight className="rotate-180 mr-1" size={20} />
              Back to Events
            </button>
            
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <img
                    src={selectedEvent.image}
                    alt={selectedEvent.title}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                </div>
                
                <div>
                  <h2 className="text-3xl font-bold mb-4">{selectedEvent.title}</h2>
                  <p className="text-gray-600 mb-6">{selectedEvent.description}</p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Calendar size={20} className="mr-2" />
                      <span>{selectedEvent.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock size={20} className="mr-2" />
                      <span>{selectedEvent.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin size={20} className="mr-2" />
                      <span>{selectedEvent.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <BookOpen size={20} className="mr-2" />
                      <span>Mode: {selectedEvent.mode}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users size={20} className="mr-2" />
                      <span>Registration Fee: {selectedEvent.registrationFee}</span>
                    </div>
                  </div>

                  <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-200">
                    Register Now
                  </button>
                </div>
              </div>

              <div className="mt-12 grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Eligibility</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {selectedEvent.eligibility.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-semibold mt-6 mb-4">Age Groups</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {selectedEvent.groups.map((group, index) => (
                      <li key={index}>{group}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Important Dates</h3>
                  <div className="space-y-4">
                    {selectedEvent.importantDates.map((date, index) => (
                      <div key={index} className="flex items-center text-gray-600">
                        <Calendar size={20} className="mr-2" />
                        <span>
                          <strong>{date.title}:</strong> {date.date}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-200"
                onClick={() => setSelectedEvent(event)}
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{event.title}</h3>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar size={20} className="mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock size={20} className="mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin size={20} className="mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
                  <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;