import { ArrowRight, BookOpen, Calendar, Users, Bell, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const NotificationStripe = () => {
  const notifications = [
    {
      id: 1,
      text: "Registration for Science Innovation Contest 2024 is now open!",
      link: "/events/science-contest"
    },
    {
      id: 2,
      text: "New Mathematics Workshop Series starting next week - Limited seats available",
      link: "/workshops"
    },
    {
      id: 3,
      text: "Congratulations to our students for winning the National Science Olympiad",
      link: "/news"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % notifications.length);
    }, 4000); // Change notification every 4 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed top-16 left-0 right-0 z-50 bg-[#6366F1] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative flex items-center h-12 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center flex-shrink-0">
            <Bell size={16} className="animate-bounce" />
            <span className="ml-2 font-medium">Latest Updates:</span>
          </div>
          <div className="ml-4 flex-1 overflow-hidden">
            <div className="relative h-6">
              {notifications.map((notification, index) => (
                <Link
                  key={notification.id}
                  to={notification.link}
                  className={`absolute w-full transition-all duration-500 flex items-center justify-between hover:text-indigo-200 ${
                    index === currentIndex 
                      ? 'translate-y-0 opacity-100' 
                      : index < currentIndex
                      ? '-translate-y-8 opacity-0'
                      : 'translate-y-8 opacity-0'
                  }`}
                >
                  <span className="truncate pr-4">{notification.text}</span>
                  <ChevronRight size={16} className="flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>
          <div className="ml-4 flex-shrink-0">
            <Link
              to="/announcements"
              className="text-sm whitespace-nowrap hover:text-indigo-200 transition-colors duration-200"
            >
              View All →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const BackgroundSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 transform
            ${index === currentImageIndex 
              ? 'opacity-100 translate-x-0' 
              : index < currentImageIndex 
                ? 'opacity-0 -translate-x-full' 
                : 'opacity-0 translate-x-full'}`}
          style={{
            backgroundImage: `url(${image})`,
            zIndex: index === currentImageIndex ? 1 : 0
          }}
        />
      ))}
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-black/70 z-10" />
      
      {/* Animated particles */}
      <div className="absolute inset-0 z-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_50%_300px,rgba(99,102,241,0.1),transparent)] animate-pulse" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [perspective:1000px]" />
      </div>

      {/* Progress indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-16 h-1 rounded-full transition-all duration-500 
              ${index === currentImageIndex 
                ? 'bg-white scale-100' 
                : 'bg-white/30 scale-90'}`}
          />
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Notification Stripe */}
      <NotificationStripe />

      {/* Hero Section with Background Slider */}
      <div className="h-screen relative overflow-hidden">
        <BackgroundSlider />
        
        <div className="relative z-30 h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Empowering Young Minds
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in-up">
              Nurturing talent and creating opportunities for students in grades
              5-10 through innovative educational programs
            </p>
            <Link
              to="/events"
              className="inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-semibold 
                hover:bg-indigo-700 transition-all duration-300 hover:scale-105 animate-fade-in-up-delayed"
            >
              Explore Our Events
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What We Offer</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="text-indigo-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Educational Events</h3>
              <p className="text-gray-600">
                Regular workshops, competitions, and seminars designed to enhance
                learning
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="text-indigo-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Academic Support</h3>
              <p className="text-gray-600">
                Personalized guidance and resources to help students excel in their
                studies
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-indigo-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Building</h3>
              <p className="text-gray-600">
                Creating a supportive network of students, educators, and mentors
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;