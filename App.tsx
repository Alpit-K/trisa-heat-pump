import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, ArrowDown, CheckCircle2 } from 'lucide-react';
import { ABOUT_SECTIONS, COMPANY_NAME, TAGLINE, WARRANTY_ITEMS } from './constants';
import Features from './components/Features';
import SpecTable from './components/SpecTable';
import CostChart from './components/CostChart';
import HowItWorks from './components/HowItWorks';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Savings', href: '#savings' },
    { name: 'Specs', href: '#specs' },
    { name: 'About Us', href: '#about' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-green-100 selection:text-green-900">
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
             {/* Logo - Trisã */}
             <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-slate-500 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/20">
               <span className="pb-1">t</span>
             </div>
             <span className={`text-3xl font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-slate-900'} font-sans`}>
               tris<span className="text-red-500">ã</span>
             </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-slate-600 hover:text-green-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-5 py-2.5 bg-green-600 text-white text-sm font-semibold rounded-full hover:bg-green-700 transition-colors shadow-lg shadow-green-600/20"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-lg py-4 px-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-lg font-medium text-slate-700"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="text-lg font-medium text-green-600"
            >
              Get a Quote
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-green-50/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wide mb-6">
                Sustainable Technology
              </div>
              <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
                {TAGLINE.split(' ').map((word, i) => 
                  ['Economical,', 'Effective', 'Sustainable'].includes(word.replace('&', '')) ? 
                  <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">{word} </span> : 
                  `${word} `
                )}
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                Experience readily available running hot water with <b>trisã</b> air source heat pumps. Slash your energy bills while embracing an eco-friendly lifestyle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#savings" 
                  onClick={(e) => handleNavClick(e, '#savings')}
                  className="inline-flex justify-center items-center px-6 py-3.5 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-all"
                >
                  See Savings
                  <ChevronRight className="ml-2 w-4 h-4" />
                </a>
                <a 
                  href="#specs" 
                  onClick={(e) => handleNavClick(e, '#specs')}
                  className="inline-flex justify-center items-center px-6 py-3.5 bg-white text-slate-700 border border-slate-200 font-semibold rounded-lg hover:bg-slate-50 transition-all"
                >
                  View Specs
                </a>
              </div>
            </div>
            
            <div className="relative">
              {/* Product Image Placeholder */}
              <div className="relative z-10 bg-gradient-to-b from-slate-100 to-white rounded-3xl p-8 shadow-2xl border border-slate-100">
                <div className="aspect-[3/4] rounded-xl overflow-hidden bg-slate-200 relative group">
                   {/* Using placeholder for product image */}
                   <img 
                    src="https://picsum.photos/600/800?grayscale&blur=2" 
                    alt="Trisa Heat Pump Unit" 
                    className="w-full h-full object-cover mix-blend-overlay opacity-40 group-hover:scale-105 transition-transform duration-700"
                   />
                   
                   {/* Cylinder Mockup */}
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/5 h-4/5 bg-gradient-to-r from-slate-50 via-white to-slate-200 rounded-lg shadow-inner flex flex-col items-center justify-center border border-slate-300">
                      <div className="w-16 h-8 mb-12">
                         <div className="w-full h-full flex items-center justify-center text-slate-800 font-bold text-lg tracking-tighter">
                           tris<span className="text-red-500">ã</span>
                         </div>
                      </div>
                      <div className="text-[10px] text-slate-400 font-medium tracking-widest uppercase mt-20">Air Source</div>
                   </div>
                   
                   {/* Outdoor Unit Mockup Element */}
                   <div className="absolute bottom-8 right-8 w-32 h-24 bg-slate-100 rounded border border-slate-300 shadow-lg flex items-center justify-center">
                      <div className="w-24 h-16 border border-slate-300 grid grid-cols-6 gap-0.5 p-0.5">
                         {[...Array(24)].map((_, i) => <div key={i} className="bg-slate-300 rounded-sm"></div>)}
                      </div>
                   </div>
                </div>
              </div>
              
              {/* Decorative elements behind product */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-400">
          <ArrowDown className="w-6 h-6" />
        </div>
      </section>

      {/* Main Content Areas */}
      <Features />
      <HowItWorks />
      
      {/* Cost Comparison Section */}
      <section id="savings" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Why Pay More? <br/>
                <span className="text-green-600">Save up to 70%</span> on Heating.
              </h2>
              <p className="text-slate-600 text-lg mb-8">
                Trisã heat pumps are a smart investment. By utilizing ambient air heat, our systems operate at a fraction of the cost of traditional electric geysers, boilers, or gas heaters.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border border-slate-100">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-xl">₹</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Extremely Low Running Cost</h4>
                    <p className="text-sm text-slate-500">Only ₹9.90 relative cost unit compared to ₹34.65 for electric.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm border border-slate-100">
                   <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">%</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">High Efficiency (COP)</h4>
                    <p className="text-sm text-slate-500">Coefficient of Performance of 4. Get 4kW heat for 1kW input.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <CostChart />
          </div>

          {/* Warranty Section */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
             <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Comprehensive Warranty Protection</h3>
             <div className="grid md:grid-cols-3 gap-8">
               {WARRANTY_ITEMS.map((item, idx) => (
                 <div key={idx} className="flex flex-col items-center text-center group">
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                       <span className="text-3xl font-black text-green-600">{item.years}</span>
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">{item.label}</h4>
                    <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Warranty Included</span>
                    </div>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </section>

      <SpecTable />

      {/* About Us */}
      <section id="about" className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
             <h2 className="text-3xl font-bold text-slate-900 mb-4">About Kalegroup</h2>
             <p className="text-slate-600 max-w-3xl">
               Established in 1996, the Kalegroup of Industries has grown from a powder coating division to a pan-India presence across 11 locations. We excel in three main verticals.
             </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {ABOUT_SECTIONS.map((section, idx) => (
              <div key={idx} className={`p-8 rounded-2xl ${idx === 1 ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-900'}`}>
                <h3 className="text-xl font-bold mb-4">{section.title}</h3>
                <p className={`text-sm leading-relaxed ${idx === 1 ? 'text-slate-300' : 'text-slate-600'}`}>
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-slate-900 text-slate-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 lg:col-span-2">
               <div className="flex items-center gap-2 mb-6">
                 <span className="text-3xl font-bold text-white tracking-tight font-sans">
                   tris<span className="text-red-500">ã</span>
                 </span>
               </div>
              <p className="max-w-md text-slate-400 mb-6">
                Providing economical, effective, and sustainable heating solutions for residential and industrial needs across India.
              </p>
              <div className="flex space-x-4">
                 {/* Social placeholders */}
                 <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                    <Mail className="w-5 h-5" />
                 </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#features" onClick={(e) => handleNavClick(e, '#features')} className="hover:text-green-400 transition-colors">Features</a></li>
                <li><a href="#specs" onClick={(e) => handleNavClick(e, '#specs')} className="hover:text-green-400 transition-colors">Specifications</a></li>
                <li><a href="#savings" onClick={(e) => handleNavClick(e, '#savings')} className="hover:text-green-400 transition-colors">Cost Comparison</a></li>
                <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-green-400 transition-colors">About Kalegroup</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-sm">F14, MIDC, Waluj, Ch. Sambhajinagar 431136, Maharashtra, India</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-sm">marketing.group@kalegroup.co.in</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-sm">+91 90110 47457</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Kalegroup of Industries. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;