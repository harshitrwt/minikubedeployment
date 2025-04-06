import React, { useEffect, useState } from 'react';
import { Palmtree as PalmTree, ShoppingBag, Phone, Mail, MapPin, ChevronDown, Star, Menu, X } from 'lucide-react';
import OrderConfirmation from './OrderConfirmation.tsx';

function App() {
  const [showOrder, setShowOrder] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.8) {
          element.classList.add('animate-fade-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (showOrder) {
    return <OrderConfirmation onClose={() => setShowOrder(false)} />;
  }

  return (
    <div className="min-h-screen bg-[#fcfcfc] relative">
      {/* Animated Background SVG */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-5">
        <div className="absolute inset-0 pattern-dots"></div>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="fixed inset-0 bg-green-800 z-50 lg:hidden">
          <div className="flex justify-end p-6">
            <button onClick={() => setShowMobileMenu(false)}>
              <X className="h-8 w-8 text-white" />
            </button>
          </div>
          <div className="flex flex-col items-center space-y-8 mt-20">
            <a href="#home" onClick={() => setShowMobileMenu(false)} className="text-white text-2xl hover:text-green-200 transition-colors">Home</a>
            <a href="#products" onClick={() => setShowMobileMenu(false)} className="text-white text-2xl hover:text-green-200 transition-colors">Products</a>
            <a href="#story" onClick={() => setShowMobileMenu(false)} className="text-white text-2xl hover:text-green-200 transition-colors">Our Story</a>
            <a href="#contact" onClick={() => setShowMobileMenu(false)} className="text-white text-2xl hover:text-green-200 transition-colors">Contact</a>
            <button 
              onClick={() => {
                setShowMobileMenu(false);
                setShowOrder(true);
              }}
              className="bg-white text-green-800 px-8 py-3 rounded-full hover:bg-green-100 transition-colors flex items-center"
            >
              <ShoppingBag className="h-5 w-5 mr-2" />
              Order Now
            </button>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="relative group cursor-pointer">
                <PalmTree className="h-8 w-8 text-green-600 transform group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute -inset-2 bg-green-100 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <span className="ml-2 text-xl font-bold text-green-800">Delhi Coconuts</span>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-green-800 hover:text-green-600 transition-colors">Home</a>
              <a href="#products" className="text-green-800 hover:text-green-600 transition-colors">Products</a>
              <a href="#story" className="text-green-800 hover:text-green-600 transition-colors">Our Story</a>
              <a href="#contact" className="text-green-800 hover:text-green-600 transition-colors">Contact</a>
              <button 
                onClick={() => setShowOrder(true)}
                className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-all transform hover:scale-105 flex items-center shadow-lg hover:shadow-green-200/50"
              >
                <ShoppingBag className="h-4 w-4 mr-2" />
                Order Now
              </button>
            </div>
            <button 
              className="lg:hidden"
              onClick={() => setShowMobileMenu(true)}
            >
              <Menu className="h-6 w-6 text-green-800" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-radial from-green-50/30 via-transparent to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000">
              <div className="relative">
                <h1 className="text-5xl lg:text-7xl font-bold text-green-800 leading-tight">
                  Fresh Coconuts
                  <span className="block text-green-600 mt-2">Straight from Nature</span>
                </h1>
                <div className="absolute -left-4 -top-4 w-20 h-20 text-green-200 animate-spin-slow">
                  <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
                    <path d="M50 0 A50 50 0 0 1 50 100 A50 50 0 0 1 50 0" className="stroke-current stroke-2 fill-none"/>
                  </svg>
                </div>
              </div>
              <p className="mt-8 text-xl text-gray-600 leading-relaxed">
                Experience the authentic taste of fresh coconuts, delivered straight from our farms to your doorstep in Delhi.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <button 
                  onClick={() => setShowOrder(true)}
                  className="bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-all transform hover:scale-105 flex items-center shadow-xl hover:shadow-green-200/50"
                >
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  Order Now
                </button>
                <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full hover:bg-green-50 transition-all flex items-center group">
                  Learn More
                  <ChevronDown className="h-5 w-5 ml-2 group-hover:translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
            <div className="relative animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 delay-300">
              <div className="relative">
                <img
                  src="https://i0.wp.com/coconutseller.in/wp-content/uploads/2024/11/coconut-farmer.webp?fit=1544%2C1024&ssl=1"
                  alt="Fresh Coconuts"
                  className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg animate-float">
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="font-bold text-gray-800">4.9/5 Rating</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">from 500+ happy customers</p>
                </div>
                <div className="absolute -top-6 -left-6 bg-white p-4 rounded-full shadow-lg animate-float-delay">
                  <div className="text-green-600 font-bold text-xl">100%</div>
                  <div className="text-sm text-gray-600">Natural</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fcfcfc] to-transparent"></div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-[#fcfcfc] relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="h-full w-full bg-gradient-to-b from-transparent via-green-50/30 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000">
            <h2 className="text-4xl lg:text-5xl font-bold text-green-800">Our Fresh Coconuts</h2>
            <p className="mt-4 text-xl text-gray-600">Choose from our selection of premium coconuts</p>
          </div>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Young Coconut",
                price: "₹60",
                description: "Sweet and refreshing coconut water",
                image: "https://images.unsplash.com/photo-1580984969071-a8da5656c2fb?q=80&w=800&auto=format&fit=crop"
              },
              {
                title: "Mature Coconut",
                price: "₹50",
                description: "Rich and creamy coconut",
                image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?q=80&w=800&auto=format&fit=crop"
              },
              {
                title: "Tender Coconut",
                price: "₹70",
                description: "Perfect blend of water and cream",
                image: "https://images.unsplash.com/photo-1624726175512-19b9baf9fbd1?q=80&w=800&auto=format&fit=crop"
              }
            ].map((product, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-lg overflow-hidden animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 hover:shadow-2xl"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-green-800">{product.title}</h3>
                  <p className="mt-2 text-gray-600">{product.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-600">{product.price}</span>
                    <button 
                      onClick={() => setShowOrder(true)}
                      className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-all transform hover:scale-105 flex items-center"
                    >
                      <ShoppingBag className="h-4 w-4 mr-2" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-20 bg-green-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <svg className="absolute h-full w-full" preserveAspectRatio="none">
            <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" className="fill-green-200/30" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000">
              <h2 className="text-4xl lg:text-5xl font-bold text-green-800">Our Story</h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                For over 20 years, we've been delivering the finest coconuts to Delhi's residents. What started as a small
                street-side stall has grown into Delhi's most trusted coconut supplier, thanks to our commitment to quality
                and customer satisfaction.
              </p>
              <div className="mt-12 grid grid-cols-3 gap-8">
                {[
                  { number: "5+", label: "Years Experience" },
                  { number: "500+", label: "Happy Customers" },
                  { number: "100%", label: "Natural" }
                ].map((stat, index) => (
                  <div key={index} className="text-center transform hover:scale-105 transition-transform">
                    <div className="text-3xl lg:text-4xl font-bold text-green-600">{stat.number}</div>
                    <div className="mt-2 text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 delay-300">
              <img
                src="https://images.unsplash.com/photo-1591005493328-11207150b341?q=80&w=1000&auto=format&fit=crop"
                alt="Our Story"
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-lg animate-float">
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                    <PalmTree className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-green-800">Family Owned</div>
                    <div className="text-sm text-gray-600">Since 2020</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#fcfcfc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-green-800">Contact Us</h2>
            <p className="mt-4 text-xl text-gray-600">Get in touch with us for orders and inquiries</p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              { icon: Phone, text: "+91 123456790", label: "Call us" },
              { icon: Mail, text: "info@delhicoconuts.com", label: "Email us" },
              { icon: MapPin, text: "Saket Area, Delhi", label: "Visit us" }
            ].map((contact, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-xl shadow-lg text-center animate-on-scroll opacity-0 transform translate-y-8 transition-all duration-1000 hover:shadow-2xl"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative inline-block">
                  <contact.icon className="h-10 w-10 text-green-600 transform group-hover:scale-110 transition-transform" />
                  <div className="absolute -inset-4 bg-green-100 rounded-full opacity-0 group-hover:opacity-30 transition-opacity"></div>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-green-800">{contact.label}</h3>
                <p className="mt-2 text-gray-600">{contact.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center">
                <PalmTree className="h-8 w-8" />
                <span className="ml-2 text-xl font-bold">Delhi Coconuts</span>
              </div>
              <p className="mt-4 text-green-200">
                Bringing nature's freshness to your doorstep.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#home" className="text-green-200 hover:text-white transition-colors">Home</a></li>
                <li><a href="#products" className="text-green-200 hover:text-white transition-colors">Products</a></li>
                <li><a href="#story" className="text-green-200 hover:text-white transition-colors">Our Story</a></li>
                <li><a href="#contact" className="text-green-200 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Contact</h3>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>info@delhicoconuts.com</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Chandni Chowk, Delhi</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Business Hours</h3>
              <ul className="mt-4 space-y-2">
                <li>Monday - Saturday</li>
                <li>8:00 AM - 8:00 PM</li>
                <li>Sunday</li>
                <li>9:00 AM - 6:00 PM</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-green-700 text-center">
            <p className="text-green-200">© 2024 Delhi Coconuts. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;