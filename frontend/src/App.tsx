import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Shield, Package, ArrowRight, Menu, X, PawPrint, Instagram, Twitter, Facebook, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import LoginView from './components/LoginView';
import RegisterView from './components/RegisterView';
import UserDashboard from './components/UserDashboard';

import CustomerDashboard from './components/CustomerDashboard';

const App = () => {
    const [currentView, setCurrentView] = useState<'landing' | 'login' | 'register' | 'dashboard' | 'customer_dashboard'>('landing');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // LANDING PAGE CAROUSEL DATA
    const carouselSlides = [
        {
            image: "/images/hero_1.png",
            title: "Professional Pet Care Logistics",
            description: "Elevate your projects with Hi-Vet's specialized supply chain platform. Premium materials, real-time tracking, and automated procurement for veterinary professionals."
        },
        {
            image: "/images/hero_2.png",
            title: "Global Supply Distribution",
            description: "Seamlessly manage your clinic's inventory with our worldwide logistics network and real-time tracking capabilities."
        },
        {
            image: "/images/hero_3.jpg",
            title: "Smart Stock Forecasting",
            description: "AI-driven inventory monitoring to ensure you never run out of critical supplies. Predictive analytics at your fingertips."
        },
        {
            image: "/images/hero_4.jpg",
            title: "Analytical Financial Clarity",
            description: "Maximize your clinic's efficiency with deep financial insights and automated budget allocation tracking."
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-advance carousel
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [carouselSlides.length]);

    // Scroll Listener
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const services = [
        {
            icon: <ShoppingCart className="w-8 h-8" />,
            title: "Wholesale Supplies",
            description: "Access premium pet supplies at competitive wholesale prices for your business.",
            details: ["Bulk discounts", "Tax-exempt pricing", "Direct from manufacturers"]
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Verified Quality",
            description: "All products are sourced from trusted manufacturers and quality-tested for pet safety.",
            details: ["ISO certified sourcing", "Safety lab testing", "Brand transparency"]
        },
        {
            icon: <PawPrint className="w-8 h-8" />,
            title: "Partner Support",
            description: "Our team of veterinary consultants is here to assist with your specialized needs.",
            details: ["24/7 dedicated support", "Clinic setup consulting", "Formulation advice"]
        },
        {
            icon: <Package className="w-8 h-8" />,
            title: "Bulk Logistics",
            description: "Streamlined bulk purchasing system designed specifically for pet care professionals.",
            details: ["Expedited shipping", "Real-time tracking", "Fragmented delivery"]
        }
    ];

    const catalogFeatured = [
        { name: "Premium Dog Kibble", price: "$49.99", image: "/images/cat_kibble_premium.png", tag: "Nutrition" },
        { name: "Surgical Kit Professional", price: "$299.99", image: "/images/surgical_kit_pro.png", tag: "Medical" },
        { name: "Organic Catnip Bulk", price: "$15.99", image: "/images/catnip_organic.jpg", tag: "Herbs" },
        { name: "Comfort Ortho Bed", price: "$89.99", image: "/images/ortho_bed_comfort.jpg", tag: "Care" }
    ];

    // Navigation handlers
    if (currentView === 'login') return <LoginView onNavigate={setCurrentView} />;
    if (currentView === 'register') return <RegisterView onNavigate={setCurrentView} />;
    if (currentView === 'dashboard') return <UserDashboard onNavigate={setCurrentView} />;
    if (currentView === 'customer_dashboard') return <CustomerDashboard onNavigate={setCurrentView} />;

    return (
        <div className="min-h-screen font-serif text-[#2D2A26] relative bg-[#F9F6F0] scroll-smooth">

            {/* Navigation - Fixed with Dynamic Background */}
            <nav className={`fixed top-0 left-0 right-0 z-[100] py-6 px-4 sm:px-8 transition-all duration-500 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-xl py-4" : "bg-transparent"}`}>
                <div className="max-w-7xl mx-auto flex justify-between items-center relative">
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <div className={`p-2 rounded-full shadow-md transition-colors duration-500 ${scrolled ? "bg-[#E88D67]" : "bg-white"}`}>
                            <PawPrint className={`w-6 h-6 ${scrolled ? "text-white" : "text-[#E88D67]"}`} />
                        </div>
                        <span className={`text-xl font-bold tracking-wide transition-colors duration-500 ${scrolled ? "text-[#2D2A26]" : "text-white"} drop-shadow-md`}>HI-VET</span>
                    </div>

                    <div className={`hidden md:flex items-center gap-8 text-sm font-bold tracking-widest uppercase transition-colors duration-500 ${scrolled ? "text-[#2D2A26]" : "text-white"} drop-shadow-md`}>
                        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-[#E88D67] transition-colors">Home</a>
                        <a href="#about" className="hover:text-[#E88D67] transition-colors">About Us</a>
                        <a href="#services" className="hover:text-[#E88D67] transition-colors">Services</a>
                        <a href="#catalog" className="hover:text-[#E88D67] transition-colors">Catalog</a>
                        <a href="#contact" className="hover:text-[#E88D67] transition-colors">Contact</a>
                        <a href="#login" className="hover:text-[#E88D67] transition-colors" onClick={(e) => { e.preventDefault(); setCurrentView('login'); }}>Log In</a>
                    </div>

                    <div className="hidden md:block">
                        <button
                            onClick={() => setCurrentView('register')}
                            className="bg-[#E88D67] text-white px-6 py-2 rounded-lg font-bold hover:bg-[#D67C55] transition-colors shadow-lg"
                        >
                            Partner With Us
                        </button>
                    </div>

                    <div className={`md:hidden ${scrolled ? "text-[#2D2A26]" : "text-white"}`}>
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="absolute top-20 left-4 right-4 bg-white p-8 rounded-2xl shadow-2xl z-50 flex flex-col gap-6 text-[#2D2A26] font-bold text-center border border-gray-100">
                        <a href="#" onClick={() => { setIsMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Home</a>
                        <a href="#about" onClick={() => setIsMenuOpen(false)}>About Us</a>
                        <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
                        <a href="#catalog" onClick={() => setIsMenuOpen(false)}>Catalog</a>
                        <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
                        <button onClick={() => setCurrentView('login')} className="text-[#E88D67]">Log In</button>
                        <button onClick={() => setCurrentView('register')} className="bg-[#E88D67] text-white py-3 rounded-lg">Register</button>
                    </div>
                )}
            </nav>

            {/* HERO SECTION - Animated Carousel */}
            <header className="relative w-full h-screen overflow-hidden bg-[#2D2A26]">
                <div className="absolute inset-0">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="w-full h-full relative"
                        >
                            <img
                                src={carouselSlides[currentSlide].image}
                                alt={carouselSlides[currentSlide].title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40" />
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-8 flex flex-col justify-center text-white">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide + '-text'}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.8 }}
                            className="max-w-2xl"
                        >
                            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 drop-shadow-xl uppercase tracking-tight">
                                {carouselSlides[currentSlide].title}
                            </h1>
                            <p className="text-lg md:text-xl mb-10 opacity-90 drop-shadow-md font-sans leading-relaxed max-w-xl">
                                {carouselSlides[currentSlide].description}
                            </p>
                            <div className="flex gap-4">
                                <button
                                    onClick={() => setCurrentView('register')}
                                    className="bg-[#E88D67] text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-[#D67C55] transition-all shadow-2xl flex items-center gap-2 group"
                                >
                                    Get Started Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <a href="#catalog" className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-10 py-5 rounded-lg font-bold text-lg hover:bg-white/20 transition-all shadow-2xl">
                                    Browse Catalog
                                </a>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Pagination Dots */}
                <div className="absolute bottom-12 left-0 right-0 z-20 flex justify-center gap-4">
                    {carouselSlides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            className={`h-2 transition-all duration-700 rounded-full ${currentSlide === idx ? "w-16 bg-[#E88D67]" : "w-4 bg-white/30 hover:bg-white/50"
                                }`}
                        />
                    ))}
                </div>
            </header>

            {/* ABOUT US SECTION */}
            <section id="about" className="py-32 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-[#E88D67] text-sm uppercase tracking-[0.4em] font-extrabold mb-6">Established 2014</h2>
                            <h3 className="text-5xl md:text-6xl font-bold text-[#2D2A26] mb-8 leading-[1.1]">
                                Empowering Your <br /> <span className="text-[#E88D67]">Veterinary Legacy.</span>
                            </h3>
                            <div className="space-y-6 text-[#5A5A5A] font-sans text-lg leading-relaxed max-w-lg">
                                <p>
                                    Hi-Vet was founded to modernize the veterinary supply chain. We believe that professional pet care starts with
                                    precision logistics and premium quality equipment.
                                </p>
                                <p>
                                    Our platform serves thousands of clinics globally, ensuring that life-saving supplies are delivered
                                    with 100% reliability and surgical precision.
                                </p>
                                <div className="grid grid-cols-2 gap-12 pt-10">
                                    <div>
                                        <h4 className="text-4xl font-bold text-[#2D2A26] mb-2 tracking-tight">12k+</h4>
                                        <p className="text-xs uppercase tracking-widest text-[#E88D67] font-bold">Successful Deliveries</p>
                                    </div>
                                    <div>
                                        <h4 className="text-4xl font-bold text-[#2D2A26] mb-2 tracking-tight">98%</h4>
                                        <p className="text-xs uppercase tracking-widest text-[#E88D67] font-bold">Client Satisfaction</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="relative"
                        >
                            <div className="absolute -inset-8 bg-[#F9F6F0] rounded-[4rem] -rotate-3 border border-[#E88D67]/10" />
                            <img
                                src="/images/logistics_hub_overview_hero_1770986182815.png"
                                alt="Professional Team"
                                className="relative rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] z-10 w-full object-cover h-[600px] border-4 border-white"
                            />
                            <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-3xl shadow-2xl z-20 max-w-[280px] border-l-8 border-[#E88D67]">
                                <PawPrint className="w-10 h-10 text-[#E88D67] mb-4" />
                                <p className="font-sans text-base font-bold text-[#2D2A26] italic leading-relaxed">
                                    "Quality is not an option; it's our standard in every pet care delivery."
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SERVICES SECTION */}
            <section id="services" className="py-32 bg-[#F9F6F0]">
                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                    <div className="text-center mb-24">
                        <h2 className="text-[#E88D67] text-sm uppercase tracking-[0.4em] font-extrabold mb-4">Our Expertise</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-[#2D2A26] mb-6">Comprehensive Fleet of Services</h3>
                        <p className="text-[#5A5A5A] font-sans max-w-2xl mx-auto text-lg">We provide the industrial-strength infrastructure required for modern pet care institutions.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {services.map((service, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.6 }}
                                className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 group border border-transparent hover:border-[#E88D67]/20 flex flex-col h-full"
                            >
                                <div className="mb-8 p-4 bg-[#F9F6F0] w-fit rounded-2xl group-hover:bg-[#E88D67] transition-colors duration-500">
                                    <div className="text-[#E88D67] group-hover:text-white transition-colors duration-500">
                                        {service.icon}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-[#2D2A26] mb-4">{service.title}</h3>
                                <p className="text-[#5A5A5A] font-sans mb-8 leading-relaxed">
                                    {service.description}
                                </p>
                                <ul className="space-y-3 mb-8 flex-grow">
                                    {service.details.map((detail, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-[#5A5A5A] font-sans">
                                            <CheckCircle2 className="w-4 h-4 text-[#E88D67]" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                                <button className="text-[#E88D67] text-sm font-bold uppercase tracking-widest hover:gap-3 flex items-center gap-2 transition-all">
                                    Explore Service <ArrowRight className="w-4 h-4" />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CATALOG SECTION */}
            <section id="catalog" className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div className="max-w-2xl">
                            <h2 className="text-[#E88D67] text-sm uppercase tracking-[0.4em] font-extrabold mb-4">Precision Inventory</h2>
                            <h3 className="text-4xl md:text-5xl font-bold text-[#2D2A26] mb-6">Featured Surgical & Care Supplies</h3>
                            <p className="text-[#5A5A5A] font-sans text-lg">A curated selection of our most requested professional-grade materials.</p>
                        </div>
                        <button className="bg-[#2D2A26] text-white px-8 py-4 rounded-xl font-bold hover:bg-black transition-all shadow-xl">
                            View Full Catalog
                        </button>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {catalogFeatured.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group cursor-pointer"
                            >
                                <div className="relative overflow-hidden rounded-3xl mb-6 shadow-md">
                                    <span className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm text-[#2D2A26] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">{item.tag}</span>
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="bg-[#E88D67] text-white p-4 rounded-full shadow-2xl">
                                            <ShoppingCart className="w-6 h-6" />
                                        </button>
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold text-[#2D2A26] mb-1">{item.name}</h4>
                                <p className="text-[#E88D67] font-sans font-bold">{item.price}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CONTACT SECTION */}
            <section id="contact" className="py-32 bg-[#2D2A26] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[50%] h-full bg-[#E88D67] opacity-5 -skew-x-12 translate-x-32" />

                <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-24">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-[#E88D67] text-sm uppercase tracking-[0.4em] font-extrabold mb-6">Partnership Inquiries</h2>
                            <h3 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">Ready to elevate your <br /> practice? Let's connect.</h3>

                            <div className="space-y-10">
                                <div className="flex gap-6 items-start">
                                    <div className="bg-[#E88D67] p-4 rounded-2xl">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Email Us</h4>
                                        <p className="opacity-70 font-sans">partnerships@hi-vet.com</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start">
                                    <div className="bg-[#E88D67] p-4 rounded-2xl">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Call Anywhere</h4>
                                        <p className="opacity-70 font-sans">+1 (800) 555-VETS</p>
                                    </div>
                                </div>
                                <div className="flex gap-6 items-start">
                                    <div className="bg-[#E88D67] p-4 rounded-2xl">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Headquarters</h4>
                                        <p className="opacity-70 font-sans">1200 Logistics Way, Suite 400<br />San Francisco, CA 94103</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/5 backdrop-blur-xl p-12 rounded-[3rem] border border-white/10"
                        >
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest font-bold opacity-50 ml-1">Full Name</label>
                                        <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 font-sans focus:border-[#E88D67] focus:outline-none transition-colors" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs uppercase tracking-widest font-bold opacity-50 ml-1">Email Address</label>
                                        <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 font-sans focus:border-[#E88D67] focus:outline-none transition-colors" placeholder="john@clinic.com" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest font-bold opacity-50 ml-1">Inquiry Type</label>
                                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 font-sans focus:border-[#E88D67] focus:outline-none transition-colors appearance-none">
                                        <option className="bg-[#2D2A26]">Wholesale Partnership</option>
                                        <option className="bg-[#2D2A26]">Technical Support</option>
                                        <option className="bg-[#2D2A26]">General Questions</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs uppercase tracking-widest font-bold opacity-50 ml-1">Message</label>
                                    <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 font-sans focus:border-[#E88D67] focus:outline-none transition-colors resize-none" placeholder="Tell us about your practice..."></textarea>
                                </div>
                                <button className="w-full bg-[#E88D67] text-white py-5 rounded-2xl font-bold text-lg hover:bg-[#D67C55] transition-all shadow-2xl">
                                    Send Inquiry
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-black text-white py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 items-start mb-20">
                        <div className="space-y-8">
                            <div className="flex items-center gap-3">
                                <div className="bg-[#E88D67] p-2 rounded-full">
                                    <PawPrint className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-2xl font-bold tracking-tight">HI-VET</span>
                            </div>
                            <p className="opacity-50 font-sans leading-relaxed text-sm">
                                Leading the world in professional pet care logistics and wholesale supply chain solutions since 2014.
                            </p>
                            <div className="flex gap-4">
                                <div className="w-10 h-10 bg-white/5 hover:bg-[#E88D67] rounded-full flex items-center justify-center transition-all cursor-pointer"><Facebook className="w-4 h-4" /></div>
                                <div className="w-10 h-10 bg-white/5 hover:bg-[#E88D67] rounded-full flex items-center justify-center transition-all cursor-pointer"><Twitter className="w-4 h-4" /></div>
                                <div className="w-10 h-10 bg-white/5 hover:bg-[#E88D67] rounded-full flex items-center justify-center transition-all cursor-pointer"><Instagram className="w-4 h-4" /></div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-[#E88D67]">Platform</h4>
                            <ul className="space-y-4 font-sans text-sm opacity-60">
                                <li><a href="#services" className="hover:opacity-100 transition-opacity">Wholesale Hub</a></li>
                                <li><a href="#services" className="hover:opacity-100 transition-opacity">Global Logistics</a></li>
                                <li><a href="#catalog" className="hover:opacity-100 transition-opacity">Product Catalog</a></li>
                                <li><a href="#" className="hover:opacity-100 transition-opacity">Smart Inventory</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-[#E88D67]">Company</h4>
                            <ul className="space-y-4 font-sans text-sm opacity-60">
                                <li><a href="#about" className="hover:opacity-100 transition-opacity">Our History</a></li>
                                <li><a href="#" className="hover:opacity-100 transition-opacity">Careers</a></li>
                                <li><a href="#contact" className="hover:opacity-100 transition-opacity">Contact Us</a></li>
                                <li><a href="#" className="hover:opacity-100 transition-opacity">Brand Assets</a></li>
                            </ul>
                        </div>

                        <div className="bg-white/5 p-8 rounded-3xl border border-white/5">
                            <h4 className="text-lg font-bold mb-4">Newsletter</h4>
                            <p className="text-xs opacity-50 font-sans mb-6 leading-relaxed">Get the latest on supply chain trends and stock arrivals.</p>
                            <div className="flex gap-2">
                                <input type="text" placeholder="Email..." className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs w-full focus:outline-none focus:border-[#E88D67]" />
                                <button className="bg-[#E88D67] p-2 rounded-lg hover:bg-white transition-all group">
                                    <Mail className="w-4 h-4 text-white group-hover:text-[#E88D67]" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs opacity-40 font-sans">
                        <p>© 2026 Hi-Vet Global Logistics. All surgical standards apply.</p>
                        <div className="flex gap-8">
                            <a href="#" className="hover:opacity-100 transition-opacity uppercase tracking-widest font-bold">Privacy</a>
                            <a href="#" className="hover:opacity-100 transition-opacity uppercase tracking-widest font-bold">Terms</a>
                            <a href="#" className="hover:opacity-100 transition-opacity uppercase tracking-widest font-bold">Compliance</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
