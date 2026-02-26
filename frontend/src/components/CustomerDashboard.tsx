import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ShoppingCart, Package, Truck,
    User, Settings, LogOut,
    Search, Bell,
    ChevronRight, Clock,
    MapPin,
    RefreshCcw, PawPrint, CheckCircle2
} from 'lucide-react';

interface CustomerDashboardProps {
    onNavigate: (view: 'landing' | 'login' | 'register' | 'dashboard' | 'customer_dashboard') => void;
}

const CustomerDashboard = ({ onNavigate }: CustomerDashboardProps) => {
    const [activeTab, setActiveTab] = useState<'home' | 'orders' | 'account' | 'subscriptions'>('home');
    const [searchQuery, setSearchQuery] = useState('');

    const buyAgainItems = [
        { name: "Premium Dog Kibble", price: "$49.99", image: "/images/cat_kibble_premium.png", lastOrdered: "2 weeks ago" },
        { name: "Organic Catnip", price: "$15.99", image: "/images/catnip_organic.jpg", lastOrdered: "1 month ago" },
        { name: "Surgical Gloves (M)", price: "$85.00", image: "/images/supply_chain.png", lastOrdered: "3 days ago" }
    ];

    const recentOrders = [
        { id: "#10924", status: "Delivered", date: "Feb 10, 2026", total: "$124.50", items: 3 },
        { id: "#10882", status: "In Transit", date: "Feb 12, 2026", total: "$89.99", items: 1 },
        { id: "#10751", status: "Processing", date: "Feb 13, 2026", total: "$315.20", items: 5 }
    ];

    return (
        <div className="min-h-screen bg-[#FDFBF7] font-sans text-[#2D2A26]">
            {/* Amazon-style Top Header */}
            <header className="bg-[#2D2A26] text-white py-4 px-6 md:px-12 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6">
                    {/* Brand Logo */}
                    <div className="flex items-center gap-3 cursor-pointer group" onClick={() => onNavigate('landing')}>
                        <div className="bg-[#E88D67] p-2 rounded-xl group-hover:rotate-12 transition-transform">
                            <PawPrint className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-black text-xl tracking-tighter">HI-VET</span>
                    </div>

                    {/* Search Bar */}
                    <div className="flex-1 w-full relative group">
                        <input
                            type="text"
                            placeholder="Search your orders, supplies, or account..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white text-[#2D2A26] pl-12 pr-4 py-3 rounded-xl border-none focus:ring-2 focus:ring-[#E88D67] transition-all font-medium"
                        />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2D2A26]/40" />
                    </div>

                    {/* Quick Info & Actions */}
                    <div className="flex items-center gap-8 text-sm font-bold">
                        <div className="hidden lg:block cursor-pointer hover:text-[#E88D67] transition-colors">
                            <p className="text-[10px] opacity-60 uppercase tracking-widest leading-none mb-1 text-white">Welcome back,</p>
                            <p className="leading-none flex items-center gap-1 text-white">Dr. Amelia <ChevronRight className="w-3 h-3" /></p>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="relative cursor-pointer hover:text-[#E88D67] transition-colors">
                                <Bell className="w-6 h-6" />
                                <span className="absolute -top-1 -right-1 bg-[#E88D67] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center border-2 border-[#2D2A26]">2</span>
                            </div>
                            <div className="relative cursor-pointer hover:text-[#E88D67] transition-colors">
                                <ShoppingCart className="w-6 h-6" />
                                <span className="absolute -top-1 -right-1 bg-[#E88D67] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center border-2 border-[#2D2A26]">4</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Sub-Header Tabs */}
            <div className="bg-[#3D3A36] text-white/80 py-2 px-6 md:px-12 border-t border-white/5">
                <div className="max-w-7xl mx-auto flex gap-8 text-xs font-black uppercase tracking-[0.15em]">
                    <button onClick={() => setActiveTab('home')} className={`hover:text-white transition-colors pb-1 border-b-2 ${activeTab === 'home' ? 'border-[#E88D67] text-white' : 'border-transparent'}`}>Overview</button>
                    <button onClick={() => setActiveTab('orders')} className={`hover:text-white transition-colors pb-1 border-b-2 ${activeTab === 'orders' ? 'border-[#E88D67] text-white' : 'border-transparent'}`}>Your Orders</button>
                    <button onClick={() => setActiveTab('subscriptions')} className={`hover:text-white transition-colors pb-1 border-b-2 ${activeTab === 'subscriptions' ? 'border-[#E88D67] text-white' : 'border-transparent'}`}>Subscriptions</button>
                    <button onClick={() => setActiveTab('account')} className={`hover:text-white transition-colors pb-1 border-b-2 ${activeTab === 'account' ? 'border-[#E88D67] text-white' : 'border-transparent'}`}>Account Settings</button>
                </div>
            </div>

            <main className="max-w-7xl mx-auto py-12 px-6 md:px-12">
                <AnimatePresence mode="wait">
                    {activeTab === 'home' && (
                        <motion.div
                            key="home"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-12"
                        >
                            {/* Feature Cards Grid */}
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-[#E88D67]/10 flex flex-col justify-between hover:shadow-xl transition-all group">
                                    <div className="bg-[#F9F6F0] w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#E88D67] transition-colors">
                                        <Package className="w-6 h-6 text-[#E88D67] group-hover:text-white" />
                                    </div>
                                    <h3 className="text-xl font-black mb-2">Your Orders</h3>
                                    <p className="text-sm text-[#5A5A5A] font-medium leading-relaxed mb-6">Track, return, or buy items again with ease.</p>
                                    <button onClick={() => setActiveTab('orders')} className="text-[#E88D67] text-xs font-black uppercase tracking-widest flex items-center gap-2">View History <ChevronRight className="w-4 h-4" /></button>
                                </div>
                                <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-[#E88D67]/10 flex flex-col justify-between hover:shadow-xl transition-all group">
                                    <div className="bg-[#F9F6F0] w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#E88D67] transition-colors">
                                        <Truck className="w-6 h-6 text-[#E88D67] group-hover:text-white" />
                                    </div>
                                    <h3 className="text-xl font-black mb-2">Sub & Save</h3>
                                    <p className="text-sm text-[#5A5A5A] font-medium leading-relaxed mb-6">Manage your monthly veterinary supply kits.</p>
                                    <button onClick={() => setActiveTab('subscriptions')} className="text-[#E88D67] text-xs font-black uppercase tracking-widest flex items-center gap-2">Manage Re-stock <ChevronRight className="w-4 h-4" /></button>
                                </div>
                                <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-[#E88D67]/10 flex flex-col justify-between hover:shadow-xl transition-all group">
                                    <div className="bg-[#F9F6F0] w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#E88D67] transition-colors">
                                        <User className="w-6 h-6 text-[#E88D67] group-hover:text-white" />
                                    </div>
                                    <h3 className="text-xl font-black mb-2">Help Center</h3>
                                    <p className="text-sm text-[#5A5A5A] font-medium leading-relaxed mb-6">Browse FAQs or speak with clinical support.</p>
                                    <button className="text-[#E88D67] text-xs font-black uppercase tracking-widest flex items-center gap-2">Get Support <ChevronRight className="w-4 h-4" /></button>
                                </div>
                            </div>

                            {/* Buy Again Carousel-style Grid */}
                            <section>
                                <div className="flex justify-between items-end mb-8">
                                    <h2 className="text-3xl font-black tracking-tight">Buy It Again</h2>
                                    <button className="text-[#E88D67] font-bold text-sm">View all recommendations</button>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                                    {buyAgainItems.map((item, i) => (
                                        <motion.div
                                            key={i}
                                            whileHover={{ y: -5 }}
                                            className="bg-white p-4 rounded-3xl border border-[#E88D67]/5 shadow-sm hover:shadow-lg transition-all cursor-pointer group"
                                        >
                                            <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-[#F9F6F0]">
                                                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                            </div>
                                            <h4 className="font-bold text-sm line-clamp-1 mb-1">{item.name}</h4>
                                            <p className="text-[#E88D67] font-black text-xs mb-2">{item.price}</p>
                                            <button className="w-full py-2 bg-[#F9F6F0] hover:bg-[#E88D67] hover:text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-colors flex items-center justify-center gap-2">
                                                <RefreshCcw className="w-3 h-3" /> Reorder
                                            </button>
                                        </motion.div>
                                    ))}
                                </div>
                            </section>

                            {/* Tracking Widget */}
                            <section className="bg-white p-10 rounded-[3rem] border border-[#E88D67]/10 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                                    <Truck className="w-64 h-64 text-[#E88D67]" />
                                </div>
                                <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-12">
                                    <div className="max-w-md">
                                        <div className="flex items-center gap-2 text-[#E88D67] font-black text-[10px] uppercase tracking-[0.2em] mb-4">
                                            <Clock className="w-4 h-4" /> Logistics Update
                                        </div>
                                        <h2 className="text-4xl font-black mb-3">Arriving tomorrow</h2>
                                        <p className="text-[#5A5A5A] font-medium mb-8">Your clinical package with items like **Surgical Kit Pro** is estimated to arrive by 8 PM tomorrow.</p>
                                        <button className="bg-[#2D2A26] text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl hover:bg-black transition-all">Track your package</button>
                                    </div>
                                    <div className="flex-1 w-full max-w-lg">
                                        <div className="flex justify-between mb-4 px-2">
                                            <CheckCircle2 className="w-6 h-6 text-[#E88D67]" />
                                            <Truck className="w-6 h-6 text-[#E88D67]" />
                                            <MapPin className="w-6 h-6 text-[#2D2A26]/20" />
                                        </div>
                                        <div className="h-2 bg-[#F9F6F0] rounded-full overflow-hidden border border-[#2D2A26]/5">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: '65%' }}
                                                transition={{ duration: 1.5, ease: "easeOut" }}
                                                className="h-full bg-[#E88D67]"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </motion.div>
                    )}

                    {activeTab === 'orders' && (
                        <motion.div
                            key="orders"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-8"
                        >
                            <h2 className="text-4xl font-black tracking-tight mb-12">Your Orders</h2>
                            <div className="space-y-6">
                                {recentOrders.map((order) => (
                                    <div key={order.id} className="bg-white rounded-[2.5rem] border border-[#E88D67]/10 shadow-sm overflow-hidden hover:shadow-xl transition-all">
                                        <div className="bg-[#F9F6F0] px-10 py-6 flex flex-wrap justify-between items-center gap-6 border-b border-[#2D2A26]/5">
                                            <div className="flex gap-12">
                                                <div>
                                                    <p className="text-[10px] font-black text-[#5A5A5A] uppercase tracking-widest opacity-50 mb-1">Order Placed</p>
                                                    <p className="text-sm font-bold">{order.date}</p>
                                                </div>
                                                <div>
                                                    <p className="text-[10px] font-black text-[#5A5A5A] uppercase tracking-widest opacity-50 mb-1">Total</p>
                                                    <p className="text-sm font-bold">{order.total}</p>
                                                </div>
                                                <div>
                                                    <p className="text-[10px] font-black text-[#5A5A5A] uppercase tracking-widest opacity-50 mb-1">Ship to</p>
                                                    <p className="text-sm font-bold text-[#E88D67] hover:underline cursor-pointer">Dr. Amelia Brown <ChevronRight className="w-3 h-3 inline" /></p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-[10px] font-black text-[#5A5A5A] uppercase tracking-widest opacity-50 mb-1">Order {order.id}</p>
                                                <p className="text-xs font-bold text-[#E88D67] hover:underline cursor-pointer">View details</p>
                                            </div>
                                        </div>
                                        <div className="p-10 flex flex-col md:flex-row justify-between items-center gap-8">
                                            <div className="flex items-center gap-6">
                                                <div className={`p-4 rounded-2xl ${order.status === 'Delivered' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'}`}>
                                                    <Package className="w-8 h-8" />
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl font-black mb-1">{order.status}</h3>
                                                    <p className="text-sm text-[#5A5A5A] font-medium">Estimated Feb 14, 2026</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <button className="px-8 py-3 rounded-xl border border-[#2D2A26]/10 font-black text-[10px] uppercase tracking-widest hover:bg-[#F9F6F0] transition-colors">Track</button>
                                                <button className="px-8 py-3 rounded-xl bg-[#2D2A26] text-white font-black text-[10px] uppercase tracking-widest hover:bg-black transition-colors shadow-lg">Reorder</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {(activeTab === 'account' || activeTab === 'subscriptions') && (
                        <motion.div
                            key="placeholder"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="h-96 flex flex-col items-center justify-center text-center bg-white rounded-[4rem] border-2 border-dashed border-[#E88D67]/20"
                        >
                            <div className="p-10 bg-[#F9F6F0] rounded-full mb-8">
                                <Settings className="w-12 h-12 text-[#E88D67]" />
                            </div>
                            <h2 className="text-3xl font-black mb-4">Under Modernization</h2>
                            <p className="text-[#5A5A5A] max-w-sm font-medium">Updating clinical preferences. Check back tomorrow.</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>

            {/* Global Account Footer */}
            <footer className="max-w-7xl mx-auto py-12 px-6 border-t border-[#2D2A26]/5 flex flex-col items-center gap-6">
                <button
                    onClick={() => onNavigate('landing')}
                    className="flex items-center gap-3 text-[#2D2A26]/40 hover:text-red-500 font-black text-xs uppercase tracking-widest transition-all group"
                >
                    <LogOut className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Sign out of Hi-Vet
                </button>
            </footer>
        </div>
    );
};

export default CustomerDashboard;
