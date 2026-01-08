import React from 'react';
import { Check, Users, Award, Target, Heart, Globe } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop",
      experience: "25+ years"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Head of Development",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop",
      experience: "18+ years"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Sales Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&auto=format&fit=crop",
      experience: "15+ years"
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Property Manager",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop",
      experience: "12+ years"
    }
  ];

  const milestones = [
    { year: "1998", title: "Company Founded", description: "Started with a single office in New York" },
    { year: "2005", title: "First Major Development", description: "Completed 500-unit residential complex" },
    { year: "2012", title: "National Expansion", description: "Expanded to 10 states across USA" },
    { year: "2018", title: "International Presence", description: "Opened offices in 5 countries" },
    { year: "2023", title: "Digital Transformation", description: "Launched comprehensive digital platform" }
  ];

  return (
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About PrimeEstates</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Leading the property industry with innovation and integrity for over 25 years
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 1998, PrimeEstates began as a small real estate agency with a simple mission: 
              to make property transactions seamless and transparent for everyone. What started as a 
              three-person team has grown into one of the most trusted names in property development 
              and management.
            </p>
            <p className="text-gray-600 mb-4">
              Over the years, we've expanded our services to cover every aspect of the property 
              lifecycle - from land acquisition and development to management and sales. Our 
              commitment to quality and customer satisfaction has helped us build lasting 
              relationships with clients across the globe.
            </p>
            <div className="flex items-center space-x-4 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">25+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">1000+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-gray-600">Cities Served</div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop"
              alt="Our Office"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do at PrimeEstates
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Integrity First</h3>
              <p className="text-gray-600">
                We believe in transparent, honest dealings in every transaction. 
                Our clients trust us because we always put their interests first.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Excellence</h3>
              <p className="text-gray-600">
                From property development to customer service, we strive for 
                excellence in every detail. Quality is never compromised.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We embrace technology and innovative solutions to stay ahead 
                in the dynamic real estate market and provide better services.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Leadership Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experienced professionals dedicated to your property success
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
              <p className="text-primary font-semibold">{member.role}</p>
              <p className="text-gray-600 text-sm mt-1">{member.experience} experience</p>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline/Milestones */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-gray-300">Key milestones in our 25-year history</p>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/30"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Year */}
                  <div className="w-24 h-24 bg-white text-primary rounded-full flex items-center justify-center text-2xl font-bold mb-4 md:mb-0 z-10">
                    {milestone.year}
                  </div>
                  
                  {/* Content */}
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-gray-300">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Awards & Recognition */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Awards & Recognition</h2>
          <p className="text-gray-600">Our commitment to excellence has been recognized industry-wide</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center p-6">
            <Award className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="font-bold text-gray-800">Best Property Developer 2023</h3>
            <p className="text-gray-600 text-sm">Real Estate Excellence Awards</p>
          </div>
          <div className="text-center p-6">
            <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h3 className="font-bold text-gray-800">Top Employer 2022</h3>
            <p className="text-gray-600 text-sm">Forbes Business Council</p>
          </div>
          <div className="text-center p-6">
            <Check className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h3 className="font-bold text-gray-800">Customer Excellence Award</h3>
            <p className="text-gray-600 text-sm">Property Management Association</p>
          </div>
          <div className="text-center p-6">
            <Award className="h-12 w-12 text-purple-500 mx-auto mb-4" />
            <h3 className="font-bold text-gray-800">Innovation Leader 2021</h3>
            <p className="text-gray-600 text-sm">Real Estate Tech Awards</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-accent to-accent/90 text-white text-center py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Join Our Success Story</h2>
          <p className="text-xl mb-8">
            Whether you're looking to buy, sell, develop, or manage property, 
            we have the expertise to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-accent px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Partner With Us
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              View Careers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;