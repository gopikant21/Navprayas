const About = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Mission Section */}
      <div className="bg-indigo-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Our Mission</h1>
            <p className="text-xl max-w-3xl mx-auto">
              At Navprayas, we organize awareness programs, competitions, and
              seminars to educate, empower, and inspire individuals for societal
              betterment. By fostering collaboration, creativity, and critical
              thinking, we aim to equip communities with the knowledge and
              skills needed for sustainable growth, building a brighter, more
              innovative future for all.
            </p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>

              <p className="text-gray-600 mb-4 leading-relaxed">
                Navprayas was established in April 2000 with a vision to create
                meaningful social change and contribute to the upliftment of our
                society. The founding members, driven by a shared commitment to
                improve the social, economic, and educational standards of their
                communities, laid the foundation for what would become a
                transformative force in local development.
              </p>

              <p className="text-gray-600 mb-4 leading-relaxed">
                Navprayas was initiated by Tejnarayan Prasad, Lalmani Prasad,
                Hari Shankar Nath, Jitendra Prasad, and Kauleshwar
                Prasad—individuals who had been deeply involved in community
                work even before the formation of the organization. With years
                of experience and a strong desire to foster positive change,
                they came together to form Navprayas with the mission of raising
                awareness, providing educational opportunities, and empowering
                communities.
              </p>

              <p className="text-gray-600 mb-4 leading-relaxed">
                In 1999, the vision took form with the involvement of the other
                founding members, each contributing their unique skills and
                expertise. Their collective dedication and innovative approach
                allowed Navprayas to grow into a respected organization
                committed to improving the lives of individuals and communities
                across the region.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Now, after 25 years of dedicated service, Navprayas Foundation
                has had over 2000+ participants in its various programs and
                initiatives. The foundation has also built a strong network of
                over 700+ alumni, who continue to make significant contributions
                to their communities and serve as ambassadors of positive
                change. Since its inception, Navprayas Foundation has organized
                numerous programs in social development, economic empowerment,
                education, and awareness, striving to make a lasting and
                impactful difference in the lives of those in need.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80"
                alt="Students learning together"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, encouraging our
                students to push their boundaries and achieve their best.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-600">
                We embrace new ideas and approaches to learning, staying at the
                forefront of educational advancement.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Inclusivity</h3>
              <p className="text-gray-600">
                We believe in creating opportunities for all students,
                regardless of their background or circumstances.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
