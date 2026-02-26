import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowRight, Package, AlertTriangle,
    LogOut, Bell, PawPrint, Search, Filter,
    CheckCircle2, Clock, Truck,
    TrendingUp, BarChart3,
    LayoutDashboard, Settings, Globe,
    Activity, Plus, User
} from 'lucide-react';

interface UserDashboardProps {
    onNavigate: (view: 'landing' | 'login' | 'register' | 'dashboard' | 'customer_dashboard') => void;
}

const UserDashboard = ({ onNavigate }: UserDashboardProps) => {
    const [activeTab, setActiveTab] = useState<'overview' | 'orders' | 'inventory' | 'finances'>('overview');
    const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
    const [selectedInventoryItems, setSelectedInventoryItems] = useState<string[]>([]);

    return (
        <div className="flex h-screen bg-[#FDFBF7] font-sans text-[#2D2A26] overflow-hidden">
            {/* Sidebar Navigation */}
            <aside className="w-72 bg-[#2D2A26] text-white flex flex-col p-8 shadow-2xl z-50">
                {/* Brand Logo */}
                <div className="flex items-center gap-4 mb-16 group cursor-pointer">
                    <div className="bg-[#E88D67] p-2.5 rounded-2xl shadow-lg group-hover:rotate-12 transition-transform duration-500">
                        <PawPrint className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <span className="font-black text-2xl tracking-[0.1em] block">HI-VET</span>
                        <span className="text-[10px] font-bold text-[#E88D67] uppercase tracking-[0.3em] -mt-1 block opacity-80">Logistics Pro</span>
                    </div>
                </div>

                {/* Primary Tabs */}
                <nav className="flex-1 space-y-3">
                    {[
                        { id: 'overview', label: 'Dashboard', icon: LayoutDashboard },
                        { id: 'orders', label: 'Supply Chain', icon: Truck },
                        { id: 'inventory', label: 'Inventory', icon: Package },
                        { id: 'finances', label: 'Financials', icon: BarChart3 },
                    ].map((link) => (
                        <button
                            key={link.id}
                            onClick={() => setActiveTab(link.id as any)}
                            className={`w-full flex items-center gap-4 px-5 py-4 rounded-[1.25rem] transition-all duration-300 relative overflow-hidden group
                                ${activeTab === link.id
                                    ? 'bg-[#E88D67] text-white shadow-xl shadow-[#E88D67]/20 scale-[1.02]'
                                    : 'hover:bg-white/5 text-white/50 hover:text-white'}`}
                        >
                            <link.icon className={`w-5 h-5 transition-transform duration-300 ${activeTab === link.id ? 'scale-110' : 'group-hover:scale-110'}`} />
                            <span className="font-bold text-sm tracking-wide">{link.label}</span>
                            {activeTab === link.id && (
                                <motion.div
                                    layoutId="navGlow"
                                    className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent pointer-events-none"
                                />
                            )}
                        </button>
                    ))}
                </nav>

                {/* Sidebar Footer */}
                <div className="pt-8 border-t border-white/10 space-y-4">
                    <button className="flex items-center gap-4 px-5 py-3 rounded-xl text-white/40 hover:text-white hover:bg-white/5 transition-all w-full text-left group">
                        <Settings className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                        <span className="font-bold text-xs uppercase tracking-widest">Settings</span>
                    </button>
                    <button
                        onClick={() => onNavigate('landing')}
                        className="flex items-center gap-4 px-5 py-3 rounded-xl text-white/40 hover:text-red-400 hover:bg-red-400/10 transition-all w-full text-left group"
                    >
                        <LogOut className="w-5 h-5" />
                        <span className="font-bold text-xs uppercase tracking-widest">Sign Out</span>
                    </button>
                </div>
            </aside>

            {/* Main Display Area */}
            <div className="flex-1 flex flex-col relative overflow-hidden">
                {/* Global Header */}
                <header className="h-24 bg-white/40 backdrop-blur-xl border-b border-[#E88D67]/10 px-10 flex items-center justify-between z-40">
                    <div className="flex items-center gap-6">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-[#E88D67]/10 blur-xl group-hover:bg-[#E88D67]/20 transition-all rounded-full" />
                            <div className="relative bg-white/60 px-6 py-2.5 rounded-2xl border border-[#E88D67]/10 flex items-center gap-3 w-80 shadow-sm">
                                <Search className="w-4 h-4 text-[#E88D67]" />
                                <input
                                    type="text"
                                    placeholder="Search logistics network..."
                                    className="bg-transparent outline-none text-sm w-full font-sans font-medium text-[#2D2A26] placeholder-[#2D2A26]/40"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-10">
                        <div className="hidden lg:flex items-center gap-8">
                            <div className="flex flex-col items-end">
                                <span className="text-[10px] font-black text-[#E88D67] uppercase tracking-[0.2em] opacity-80">Network Status</span>
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                    <span className="text-xs font-bold text-[#2D2A26]">Operational</span>
                                </div>
                            </div>
                            <div className="h-10 w-[1px] bg-[#E88D67]/10" />
                        </div>

                        <div className="flex items-center gap-4">
                            <button className="relative p-2.5 bg-white/60 rounded-xl border border-[#E88D67]/10 hover:shadow-lg transition-all text-[#2D2A26] group">
                                <Bell className="w-5 h-5 group-hover:translate-y-[-1px] transition-transform" />
                                <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-4 border-white transform translate-x-1/3 -translate-y-1/3" />
                            </button>
                            <div className="flex items-center gap-4 pl-4">
                                <div className="text-right hidden sm:block">
                                    <p className="text-sm font-black text-[#2D2A26] leading-none uppercase tracking-wider">Dr. Smith</p>
                                    <p className="text-[9px] font-bold text-[#E88D67] uppercase tracking-[0.2em] mt-1.5 opacity-70">Senior Admin</p>
                                </div>
                                <div className="relative group p-0.5 bg-gradient-to-tr from-[#E88D67] to-[#2D2A26] rounded-2xl shadow-lg">
                                    <img
                                        src="https://images.unsplash.com/photo-1544568100-847a948585b9?w=100&h=100&fit=crop"
                                        alt="User"
                                        className="w-11 h-11 object-cover rounded-[0.9rem] border-2 border-white"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent rounded-2xl transition-all" />
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Tabbed Content View */}
                <main className="flex-1 overflow-y-auto p-12 scroll-smooth">
                    <div className="max-w-7xl mx-auto">
                        <AnimatePresence mode="wait">
                            {activeTab === 'overview' && (
                                <motion.div
                                    key="overview"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="space-y-12"
                                >
                                    {/* Advanced Hub Header */}
                                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                                        <div>
                                            <h1 className="text-4xl font-black text-[#2D2A26] mb-3">Logistics Hub</h1>
                                            <p className="text-[#E88D67] font-sans font-bold uppercase tracking-[0.2em] text-xs mb-6">
                                                Real-time Supply Chain Monitoring • Dr. Smith
                                            </p>
                                            <p className="text-[#5A5A5A] font-sans text-lg mb-8 leading-relaxed max-w-lg">
                                                Centralized control for global veterinary supply chains. Monitor real-time status, manage procurement, and maintain cross-network operational efficiency.
                                            </p>
                                            <div className="flex gap-4">
                                                <button className="flex items-center gap-3 px-8 py-3.5 bg-[#2D2A26] text-white rounded-[1.25rem] font-black text-sm hover:translate-y-[-4px] transition-all shadow-xl active:scale-95 group">
                                                    <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                                                    Initiate Bulk Procurement
                                                </button>
                                            </div>
                                        </div>
                                        <div className="relative group">
                                            <div className="absolute inset-0 bg-[#E88D67]/10 blur-[60px] rounded-full scale-125 opacity-40 translate-x-1/4" />
                                            <img
                                                src="/images/logistics_hub.png"
                                                alt="Logistics Hub"
                                                className="relative z-10 w-full h-80 object-cover rounded-[4rem] shadow-2xl border-4 border-white transition-transform duration-700 hover:scale-[1.03]"
                                            />
                                            <div className="absolute bottom-6 right-6 z-20 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl border border-[#E88D67]/20 shadow-xl">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                                    <span className="text-[10px] font-black uppercase tracking-widest text-[#2D2A26]">Satellite Linked</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Main Infrastructure Stats */}
                                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                        {[
                                            { label: 'Active Pipeline', value: '18', icon: Truck, trend: '+3', color: '#E88D67' },
                                            { label: 'Inventory Health', value: '92%', icon: Activity, trend: 'Stable', color: '#10b981' },
                                            { label: 'Critical Shortages', value: '04', icon: AlertTriangle, trend: 'Action Required', color: '#ef4444' },
                                            { label: 'Operational Spend', value: '$84.5k', icon: BarChart3, trend: 'This Month', color: '#2D2A26' },
                                        ].map((kpi, i) => (
                                            <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-[#E88D67]/10 shadow-xl shadow-[#E88D67]/5 group hover:border-[#E88D67]/30 transition-all cursor-default relative overflow-hidden">
                                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                                    <kpi.icon className="w-24 h-24 -mr-8 -mt-8" />
                                                </div>
                                                <div className="flex justify-between items-start mb-6 relative z-10">
                                                    <div className="p-4 rounded-2xl" style={{ backgroundColor: `${kpi.color}10`, color: kpi.color }}>
                                                        <kpi.icon className="w-6 h-6" />
                                                    </div>
                                                    <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-[#FDFBF7] rounded-full text-[#2D2A26]/40 border border-[#2D2A26]/5">{kpi.trend}</span>
                                                </div>
                                                <div className="relative z-10">
                                                    <p className="text-sm font-bold text-[#2D2A26]/40 uppercase tracking-widest mb-1">{kpi.label}</p>
                                                    <h3 className="text-4xl font-black text-[#2D2A26] tracking-tighter">{kpi.value}</h3>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Midview Analytics & Action Panel */}
                                    <div className="grid lg:grid-cols-3 gap-12">
                                        <div className="lg:col-span-2 space-y-12">
                                            {/* Supply Flow Analysis */}
                                            <div className="bg-[#2D2A26] p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                                                <div className="absolute inset-0 bg-gradient-to-br from-[#E88D67]/20 to-transparent opacity-50" />
                                                <div className="relative z-10">
                                                    <div className="flex justify-between items-center mb-10">
                                                        <div>
                                                            <h3 className="text-2xl font-black tracking-tight mb-2">Network Inflow Distribution</h3>
                                                            <p className="text-white/50 text-xs font-bold uppercase tracking-widest">Global Sourcing • Last 7 Days Performance</p>
                                                        </div>
                                                        <div className="flex gap-2">
                                                            <span className="p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors cursor-pointer"><ArrowRight className="w-4 h-4" /></span>
                                                        </div>
                                                    </div>

                                                    {/* Micro-Visualization (Bars) */}
                                                    <div className="flex items-end justify-between gap-4 h-48 px-2">
                                                        {[60, 40, 85, 30, 95, 55, 75].map((h, i) => (
                                                            <div key={i} className="flex-1 group/bar relative">
                                                                <motion.div
                                                                    initial={{ height: 0 }}
                                                                    animate={{ height: `${h}%` }}
                                                                    transition={{ delay: i * 0.1, duration: 1 }}
                                                                    className="bg-white/10 rounded-t-xl hover:bg-[#E88D67]/40 transition-all relative overflow-hidden"
                                                                >
                                                                    <div className="absolute inset-x-0 bottom-0 bg-[#E88D67] h-1.5 shadow-[0_0_20px_#E88D67]" />
                                                                </motion.div>
                                                                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] font-black text-white/40 opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap">DAY 0{i + 1}</div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Alerts & Critical Assets Section */}
                                            <div className="grid md:grid-cols-2 gap-8">
                                                <div className="bg-white p-8 rounded-[2.5rem] border border-[#E88D67]/10 shadow-lg group hover:shadow-xl transition-all">
                                                    <div className="flex items-center gap-3 mb-6">
                                                        <div className="p-2 bg-red-500/10 rounded-lg">
                                                            <AlertTriangle className="w-5 h-5 text-red-500" />
                                                        </div>
                                                        <h4 className="font-black text-xs uppercase tracking-[0.2em] text-[#2D2A26]">Urgent Actions</h4>
                                                    </div>
                                                    <div className="space-y-4">
                                                        <div className="p-5 bg-[#FDFBF7] rounded-3xl border border-[#E88D67]/5 flex items-center justify-between group/alert">
                                                            <div>
                                                                <p className="text-[11px] font-black text-[#2D2A26] uppercase">Low Level: Surgical Sets</p>
                                                                <p className="text-[10px] font-bold text-red-500/60 uppercase mt-0.5">8 units left</p>
                                                            </div>
                                                            <button className="text-[10px] font-black text-white bg-[#2D2A26] px-4 py-2 rounded-xl uppercase tracking-widest hover:bg-[#E88D67] transition-colors">Restock</button>
                                                        </div>
                                                        <div className="p-5 bg-[#FDFBF7] rounded-3xl border border-[#E88D67]/5 flex items-center justify-between">
                                                            <div>
                                                                <p className="text-[11px] font-black text-[#2D2A26] uppercase">Customs Hold: #HV-9122</p>
                                                                <p className="text-[10px] font-bold text-orange-500/60 uppercase mt-0.5">Awaiting Docs</p>
                                                            </div>
                                                            <button className="text-[10px] font-black text-[#2D2A26] border border-[#2D2A26]/10 px-4 py-2 rounded-xl uppercase tracking-widest hover:bg-[#2D2A26] hover:text-white transition-all">Resolve</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="bg-white p-8 rounded-[2.5rem] border border-[#E88D67]/10 shadow-lg group hover:shadow-xl transition-all">
                                                    <div className="flex items-center gap-3 mb-6">
                                                        <div className="p-2 bg-green-500/10 rounded-lg">
                                                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                                                        </div>
                                                        <h4 className="font-black text-xs uppercase tracking-[0.2em] text-[#2D2A26]">Procured Recently</h4>
                                                    </div>
                                                    <div className="space-y-4">
                                                        {[
                                                            { name: 'Pharma Batch Premium', meta: '140 Units • Processed', img: 'https://images.unsplash.com/photo-1576091160550-217359f4ecf8?w=100&h=100&fit=crop' },
                                                            { name: 'Cold-Chain Vaccines', meta: '45 Units • In WH B', img: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=100&h=100&fit=crop' },
                                                        ].map((asset, i) => (
                                                            <div key={i} className="flex items-center gap-4 p-4 hover:bg-[#FDFBF7] rounded-2xl transition-all border border-transparent hover:border-[#E88D67]/10">
                                                                <div className="w-12 h-12 bg-[#F9F6F0] rounded-xl overflow-hidden border border-[#2D2A26]/5">
                                                                    <img src={asset.img} className="w-full h-full object-cover" />
                                                                </div>
                                                                <div className="flex-1">
                                                                    <p className="text-[11px] font-black text-[#2D2A26] uppercase">{asset.name}</p>
                                                                    <p className="text-[10px] text-[#2D2A26]/40 font-bold uppercase mt-0.5">{asset.meta}</p>
                                                                </div>
                                                                <ArrowRight className="w-4 h-4 text-[#2D2A26]/20 group-hover:text-[#E88D67] transition-all" />
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Sidebar Feeds and Actions */}
                                        <div className="space-y-12">
                                            <div className="bg-white p-8 rounded-[3rem] border border-[#E88D67]/10 shadow-xl overflow-hidden relative group">
                                                <div className="absolute top-0 right-0 p-6">
                                                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                                                </div>
                                                <h4 className="font-black text-xs uppercase tracking-[0.3em] text-[#E88D67] mb-10">System Pulse</h4>
                                                <div className="space-y-10">
                                                    {[
                                                        { time: '12m ago', msg: 'Bulk order HV-291 shipped', icon: Truck, color: 'text-blue-500' },
                                                        { time: '1h ago', msg: 'Stock audit complete: Main WH', icon: CheckCircle2, color: 'text-green-500' },
                                                        { time: '4h ago', msg: 'Price adjustment: Gloves', icon: AlertTriangle, color: 'text-orange-500' },
                                                    ].map((log, i) => (
                                                        <div key={i} className="flex gap-5 group/item cursor-default">
                                                            <div className="flex flex-col items-center">
                                                                <div className={`p-3 rounded-2xl bg-[#FDFBF7] border border-[#E88D67]/10 shadow-sm transition-all group-hover/item:border-[#E88D67]/40 ring-4 ring-transparent group-hover/item:ring-[#FDFBF7]`}>
                                                                    <log.icon className={`w-4 h-4 ${log.color}`} />
                                                                </div>
                                                                {i < 2 && <div className="w-[1.5px] flex-1 bg-gradient-to-b from-[#E88D67]/20 to-transparent my-3" />}
                                                            </div>
                                                            <div className="pt-1">
                                                                <p className="text-xs font-black text-[#2D2A26] leading-snug group-hover/item:text-[#E88D67] transition-colors">{log.msg}</p>
                                                                <p className="text-[10px] font-bold text-[#2D2A26]/30 uppercase mt-1.5 tracking-[0.1em]">{log.time}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="bg-[#2D2A26] p-10 rounded-[3.5rem] text-white shadow-2xl relative group overflow-hidden border border-white/5">
                                                <div className="absolute inset-0 bg-[#E88D67]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                <h4 className="font-bold text-[10px] uppercase tracking-[0.4em] mb-8 text-white/50 text-center">Infrastructure Controls</h4>
                                                <div className="grid grid-cols-2 gap-4">
                                                    {[
                                                        { label: 'Export', icon: ArrowRight },
                                                        { label: 'Network', icon: Globe },
                                                        { label: 'Analytics', icon: TrendingUp },
                                                        { label: 'Profile', icon: User },
                                                    ].map((btn, i) => (
                                                        <button key={i} className="flex flex-col items-center gap-3 p-5 bg-white/5 rounded-[2rem] hover:bg-white/10 transition-all border border-white/5 group/btn active:scale-95">
                                                            <btn.icon className="w-5 h-5 group-hover/btn:scale-110 transition-transform text-[#E88D67]" />
                                                            <span className="text-[9px] font-black uppercase tracking-[0.15em]">{btn.label}</span>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === 'orders' && (
                                <motion.div
                                    key="orders"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-12"
                                >
                                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                                        <div>
                                            <h2 className="text-4xl font-black text-[#2D2A26] mb-4 tracking-tighter">Network Pipeline</h2>
                                            <p className="text-[#5A5A5A] font-sans text-lg mb-8 leading-relaxed max-w-lg">
                                                Monitor global shipments from origin to your doorstep. Use Satellite Tracking to view real-time customs status and transit milestones.
                                            </p>
                                            <div className="flex gap-4">
                                                <div className="relative group flex-1">
                                                    <div className="absolute inset-0 bg-[#E88D67]/5 blur-lg rounded-2xl" />
                                                    <div className="relative flex items-center gap-3 px-6 py-3.5 bg-white border border-[#E88D67]/20 rounded-2xl shadow-sm focus-within:border-[#E88D67] transition-all">
                                                        <Search className="w-4 h-4 text-[#E88D67]" />
                                                        <input type="text" placeholder="Trace Shipment ID..." className="bg-transparent outline-none text-sm font-bold w-full text-[#2D2A26] placeholder-[#2D2A26]/30" />
                                                    </div>
                                                </div>
                                                <button className="px-6 py-3.5 bg-white border border-[#E88D67]/20 rounded-2xl text-[#2D2A26] hover:bg-[#FDFBF7] transition-all flex items-center gap-2 group shadow-sm font-bold text-sm">
                                                    <Filter className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                                                    <span className="hidden sm:inline">Advanced Filter</span>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="relative group">
                                            <div className="absolute inset-0 bg-[#E88D67]/20 blur-[60px] opacity-30 group-hover:opacity-50 transition-opacity" />
                                            <img
                                                src="/images/supply_chain.png"
                                                alt="Order Logistics"
                                                className="relative z-10 w-full h-64 object-cover rounded-[3rem] shadow-2xl border-4 border-white transition-transform duration-700 hover:scale-[1.02]"
                                            />
                                            <div className="absolute bottom-6 left-6 z-20 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl border border-[#E88D67]/20 shadow-xl">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
                                                    <span className="text-[10px] font-black uppercase tracking-widest text-[#2D2A26]">Satellite Live</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Selected Order Timeline */}
                                    <AnimatePresence>
                                        {selectedOrderId && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0, marginBottom: 0 }}
                                                animate={{ height: 'auto', opacity: 1, marginBottom: 48 }}
                                                exit={{ height: 0, opacity: 0, marginBottom: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="bg-[#2D2A26] p-10 rounded-[3rem] text-white shadow-2xl relative group border border-white/5">
                                                    <div className="absolute top-0 right-0 p-8">
                                                        <button
                                                            onClick={() => setSelectedOrderId(null)}
                                                            className="p-3 hover:bg-white/10 rounded-2xl transition-all group/close"
                                                        >
                                                            <Plus className="w-5 h-5 rotate-45 text-white/50 group-hover:text-white transition-colors" />
                                                        </button>
                                                    </div>

                                                    <div className="flex items-center gap-6 mb-12">
                                                        <div className="p-4 bg-[#E88D67] rounded-2xl shadow-[0_0_30px_rgba(232,141,103,0.3)]">
                                                            <Truck className="w-8 h-8 text-white" />
                                                        </div>
                                                        <div>
                                                            <h3 className="text-2xl font-black tracking-tight flex items-center gap-3">
                                                                Tracking ID:
                                                                <span className="text-[#E88D67] font-mono">{selectedOrderId}</span>
                                                            </h3>
                                                            <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em] mt-1.5 flex items-center gap-2">
                                                                <Globe className="w-3 h-3" /> Origin: PH Terminal A
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-5 relative px-4">
                                                        <div className="absolute top-7 left-[10%] right-[10%] h-[2px] bg-white/10" />
                                                        {[
                                                            { label: 'Origin Received', date: 'Feb 10', done: true },
                                                            { label: 'Sort Facility', date: 'Feb 11', done: true },
                                                            { label: 'In Transit', date: 'Feb 12', done: true, current: true },
                                                            { label: 'Local Depot', date: 'Est Feb 13', done: false },
                                                            { label: 'Destination', date: 'Est Feb 14', done: false },
                                                        ].map((step, i) => (
                                                            <div key={i} className="flex flex-col items-center gap-6 relative z-10 text-center group/step">
                                                                <div className={`w-14 h-14 rounded-[1.5rem] border-4 flex items-center justify-center transition-all duration-700 
                                                                    ${step.done ? 'bg-[#E88D67] border-[#2D2A26] shadow-[0_0_30px_rgba(232,141,103,0.4)]' : 'bg-[#2D2A26] border-white/5'}
                                                                    ${step.current ? 'ring-4 ring-[#E88D67]/20 scale-125' : ''}`}>
                                                                    {step.done ? <CheckCircle2 className="w-6 h-6 text-white" /> : <Clock className="w-6 h-6 text-white/10" />}
                                                                </div>
                                                                <div className="space-y-1">
                                                                    <p className={`text-[10px] font-black uppercase tracking-widest ${step.done ? 'text-white' : 'text-white/20'} group-hover/step:text-white transition-colors`}>{step.label}</p>
                                                                    <p className="text-[9px] font-bold text-white/30 uppercase tracking-tighter">{step.date}</p>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-[#E88D67]/5 border border-[#E88D67]/10 overflow-hidden">
                                        <div className="p-8 border-b border-[#E88D67]/5 bg-[#FDFBF7]/50 flex justify-between items-center">
                                            <h4 className="font-black text-xs uppercase tracking-[0.2em] text-[#2D2A26]">Global Transit Log</h4>
                                            <span className="text-[10px] font-bold text-[#E88D67] uppercase tracking-widest px-4 py-1.5 bg-[#E88D67]/5 rounded-full border border-[#E88D67]/10">4 Active Loads</span>
                                        </div>
                                        <div className="overflow-x-auto">
                                            <table className="w-full font-sans text-left border-collapse">
                                                <thead className="bg-[#2D2A26] text-white/50 text-[10px] uppercase tracking-[0.2em] font-black">
                                                    <tr>
                                                        <th className="px-10 py-6">Reference ID</th>
                                                        <th className="px-10 py-6">Network Node</th>
                                                        <th className="px-10 py-6">Cargo Summary</th>
                                                        <th className="px-10 py-6">Milestone</th>
                                                        <th className="px-10 py-6 text-right">Valuation</th>
                                                        <th className="px-10 py-6 text-center">Protocol</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="text-sm">
                                                    {[
                                                        { id: '#49221', supplier: 'PharmaVet Inc.', items: 'Surgical Kits', date: 'Feb 12', status: 'In Transit', total: '$4,250.00', color: '#E88D67' },
                                                        { id: '#49218', supplier: 'NutraPaws Co.', items: 'Bulk Kibble', date: 'Feb 10', status: 'Delivered', total: '$1,820.00', color: '#10b981' },
                                                        { id: '#49215', supplier: 'VetGear Global', items: 'Diagnostics', date: 'Feb 08', status: 'Pending', total: '$12,400.00', color: '#f59e0b' },
                                                        { id: '#49210', supplier: 'CleanVet Ltd.', items: 'Sanitizers', date: 'Feb 05', status: 'Delivered', total: '$640.00', color: '#10b981' },
                                                    ].map((order, i) => (
                                                        <tr key={i} className="group border-b border-[#E88D67]/5 hover:bg-[#FDFBF7] transition-all cursor-pointer" onClick={() => setSelectedOrderId(order.id)}>
                                                            <td className="px-10 py-8 font-black text-[#2D2A26] group-hover:text-[#E88D67] transition-colors">
                                                                <div className="flex items-center gap-2">
                                                                    <div className={`w-1.5 h-1.5 rounded-full ${order.status === 'Delivered' ? 'bg-green-500' : 'bg-[#E88D67]'}`} />
                                                                    {order.id}
                                                                </div>
                                                            </td>
                                                            <td className="px-10 py-8 font-bold text-[#2D2A26]/60 uppercase text-[11px] tracking-wider">{order.supplier}</td>
                                                            <td className="px-10 py-8 text-[#5A5A5A] font-medium">{order.items}</td>
                                                            <td className="px-10 py-8 italic font-serif text-[#2D2A26]/40">{order.date}</td>
                                                            <td className="px-10 py-8 text-right font-black text-[#2D2A26]">{order.total}</td>
                                                            <td className="px-10 py-8 text-center">
                                                                <button className="px-5 py-2.5 bg-[#2D2A26]/5 rounded-xl text-[10px] font-black uppercase tracking-widest text-[#2D2A26] group-hover:bg-[#E88D67] group-hover:text-white transition-all">
                                                                    Track Satellite
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === 'inventory' && (
                                <motion.div
                                    key="inventory"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-12"
                                >
                                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                                        <div>
                                            <h2 className="text-4xl font-black text-[#2D2A26] mb-3 tracking-tighter">Live Inventory</h2>
                                            <p className="text-[#E88D67] font-sans font-black uppercase tracking-[0.2em] text-[10px] mb-4">
                                                Predictive Stock Monitoring • Regional Node A
                                            </p>
                                            <p className="text-[#5A5A5A] font-sans text-lg mb-8 leading-relaxed max-w-lg">
                                                AI-driven supply monitoring. Predict stock depletion timelines and coordinate automated bulk restocking with absolute precision.
                                            </p>
                                            <div className="flex gap-4">
                                                <AnimatePresence>
                                                    {selectedInventoryItems.length > 0 && (
                                                        <motion.button
                                                            initial={{ x: 20, opacity: 0 }}
                                                            animate={{ x: 0, opacity: 1 }}
                                                            exit={{ x: 20, opacity: 0 }}
                                                            className="px-8 py-4 bg-[#2D2A26] text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl flex items-center gap-3 border-2 border-white/10 hover:bg-[#E88D67] transition-all"
                                                        >
                                                            <Plus className="w-4 h-4" />
                                                            Dispatch Restock ({selectedInventoryItems.length})
                                                        </motion.button>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </div>
                                        <div className="relative group">
                                            <div className="absolute inset-0 bg-[#E88D67]/10 blur-[60px] rounded-[3rem] opacity-30 group-hover:opacity-50 transition-opacity" />
                                            <img
                                                src="/images/inventory.png"
                                                alt="Inventory Management"
                                                className="relative z-10 w-full h-80 object-cover rounded-[4rem] shadow-2xl border-4 border-white transition-transform duration-700 hover:scale-[1.03]"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {[
                                            { name: 'Distemper Vaccines', stock: 15, total: 100, unit: 'vials', daysLeft: 4, type: 'Medical' },
                                            { name: 'Surgical Gloves (M)', stock: 85, total: 200, unit: 'boxes', daysLeft: 22, type: 'Apparel' },
                                            { name: 'Antibiotic Ointment', stock: 42, total: 60, unit: 'tubes', daysLeft: 14, type: 'Pharma' },
                                            { name: 'Bulk Dog Food', stock: 120, total: 500, unit: 'kg', daysLeft: 5, type: 'Consumable' },
                                            { name: 'IV Fluid Bags', stock: 210, total: 300, unit: 'units', daysLeft: 45, type: 'Medical' },
                                            { name: 'Catheter Kits', stock: 12, total: 50, unit: 'sets', daysLeft: 3, type: 'Medical' },
                                        ].map((item, i) => (
                                            <div
                                                key={i}
                                                onClick={() => {
                                                    setSelectedInventoryItems(prev =>
                                                        prev.includes(item.name) ? prev.filter(n => n !== item.name) : [...prev, item.name]
                                                    )
                                                }}
                                                className={`group relative bg-white p-8 rounded-[3rem] border transition-all cursor-pointer overflow-hidden
                                                    ${selectedInventoryItems.includes(item.name)
                                                        ? 'border-[#E88D67] ring-4 ring-[#E88D67]/5 shadow-2xl'
                                                        : 'border-[#E88D67]/10 shadow-xl shadow-[#E88D67]/5 hover:border-[#E88D67]/40'}`}
                                            >
                                                {/* Selection Overlay */}
                                                <div className={`absolute top-0 right-0 p-6 transition-opacity duration-300 ${selectedInventoryItems.includes(item.name) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                                                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all
                                                        ${selectedInventoryItems.includes(item.name) ? 'bg-[#E88D67] border-[#E88D67]' : 'border-[#2D2A26]/10'}`}>
                                                        {selectedInventoryItems.includes(item.name) && <Plus className="w-4 h-4 text-white rotate-45" />}
                                                    </div>
                                                </div>

                                                <div className="flex flex-col h-full">
                                                    <div className="mb-6">
                                                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#E88D67] opacity-60 px-3 py-1 bg-[#E88D67]/5 rounded-full border border-[#E88D67]/10">{item.type}</span>
                                                        <h3 className="text-xl font-black text-[#2D2A26] mt-4 leading-tight group-hover:text-[#E88D67] transition-colors">{item.name}</h3>
                                                    </div>

                                                    <div className="flex-1 space-y-6">
                                                        <div className="flex justify-between items-end mb-2">
                                                            <div>
                                                                <p className="text-[10px] font-bold text-[#2D2A26]/30 uppercase tracking-widest mb-1">Current Stock</p>
                                                                <div className="flex items-baseline gap-1">
                                                                    <span className="text-2xl font-black text-[#2D2A26]">{item.stock}</span>
                                                                    <span className="text-[10px] font-bold text-[#2D2A26]/40 uppercase">{item.unit}</span>
                                                                </div>
                                                            </div>
                                                            <div className="text-right">
                                                                <p className="text-[10px] font-bold text-[#E88D67] uppercase tracking-widest mb-1">Depletion Risk</p>
                                                                <span className={`text-lg font-black ${item.daysLeft <= 7 ? 'text-red-500' : 'text-[#2D2A26]'}`}>
                                                                    {item.daysLeft} <span className="text-[10px] opacity-40">DAYS</span>
                                                                </span>
                                                            </div>
                                                        </div>

                                                        {/* Visual Progress */}
                                                        <div className="relative h-2 w-full bg-[#FDFBF7] rounded-full overflow-hidden border border-[#2D2A26]/5">
                                                            <motion.div
                                                                initial={{ width: 0 }}
                                                                animate={{ width: `${(item.stock / item.total) * 100}%` }}
                                                                transition={{ duration: 1.5, ease: "easeOut" }}
                                                                className={`h-full rounded-full ${item.daysLeft <= 7 ? 'bg-red-500' : 'bg-[#E88D67]'}`}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="mt-8 pt-6 border-t border-[#E88D67]/5 flex justify-between items-center">
                                                        <div className="flex -space-x-2">
                                                            {[1, 2, 3].map(i => (
                                                                <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-[#2D2A26]/5" />
                                                            ))}
                                                        </div>
                                                        <p className="text-[9px] font-bold text-[#2D2A26]/30 tracking-widest uppercase">Last Batch: 4d ago</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === 'finances' && (
                                <motion.div
                                    key="finances"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-16"
                                >
                                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                                        <div>
                                            <h2 className="text-4xl font-black text-[#2D2A26] mb-6 tracking-tighter">Financial Ecosystem</h2>
                                            <p className="text-[#5A5A5A] font-sans text-lg mb-10 leading-relaxed max-w-lg">
                                                Optimize your operational liquidity. Monitor real-time spend against projected budgets and visualize savings generated through HIVET's bulk procurement network.
                                            </p>
                                            <div className="grid grid-cols-2 gap-6">
                                                <div className="p-8 bg-white rounded-[2.5rem] border border-[#E88D67]/10 shadow-xl shadow-[#E88D67]/5">
                                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#E88D67] mb-3">Est. Quarterly Savings</p>
                                                    <h4 className="text-3xl font-black text-[#2D2A26] tracking-tighter">$12,482.00</h4>
                                                    <div className="flex items-center gap-2 mt-4 text-green-500 font-bold text-xs">
                                                        <TrendingUp className="w-4 h-4" /> +14.2% optimized
                                                    </div>
                                                </div>
                                                <div className="p-8 bg-[#2D2A26] rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
                                                    <div className="absolute inset-0 bg-[#E88D67]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#E88D67] mb-3">Total Asset Value</p>
                                                    <h4 className="text-3xl font-black text-white tracking-tighter">$284,900</h4>
                                                    <p className="text-white/30 text-[9px] font-bold uppercase tracking-widest mt-4">Inventory & Logistics</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative group">
                                            <div className="absolute inset-0 bg-[#E88D67]/10 blur-[60px] rounded-full scale-125 opacity-40" />
                                            <img
                                                src="/images/finances.png"
                                                alt="Financial Analytics"
                                                className="relative z-10 w-full h-80 object-cover rounded-[4rem] shadow-2xl border-4 border-white transition-transform duration-700 hover:scale-[1.03]"
                                            />
                                            <div className="absolute top-8 -right-8 z-20 bg-white p-6 rounded-3xl shadow-2xl border border-[#E88D67]/10 max-w-[200px]">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <BarChart3 className="w-5 h-5 text-[#E88D67]" />
                                                    <span className="text-[10px] font-black uppercase tracking-widest">Growth Node</span>
                                                </div>
                                                <div className="space-y-3">
                                                    <div className="h-1.5 w-full bg-[#FDFBF7] rounded-full overflow-hidden">
                                                        <div className="h-full w-[85%] bg-[#E88D67] rounded-full" />
                                                    </div>
                                                    <div className="h-1.5 w-full bg-[#FDFBF7] rounded-full overflow-hidden">
                                                        <div className="h-full w-[45%] bg-[#2D2A26] rounded-full" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-8">
                                        <div className="flex justify-between items-center px-4">
                                            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-[#2D2A26]">Budget Allocation Profile</h4>
                                            <button className="text-[10px] font-black uppercase tracking-widest text-[#E88D67] hover:underline underline-offset-8 transition-all">Details Protocol</button>
                                        </div>
                                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                            {[
                                                { label: 'Supply Procurement', spent: 45200, budget: 60000, color: '#E88D67' },
                                                { label: 'Logistics & Freight', spent: 18400, budget: 22000, color: '#2D2A26' },
                                                { label: 'Storage Infrastructure', spent: 8900, budget: 15000, color: '#E88D67' },
                                                { label: 'Quality Assurance', spent: 4200, budget: 5000, color: '#2D2A26' },
                                            ].map((stat, i) => (
                                                <div key={i} className="bg-white p-8 rounded-[3rem] border border-[#E88D67]/10 shadow-xl shadow-[#E88D67]/5 hover:shadow-2xl transition-all relative group overflow-hidden">
                                                    <div className="absolute inset-0 bg-[#E88D67]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    <div className="relative z-10">
                                                        <h4 className="font-black text-[#2D2A26] mb-6 text-sm tracking-tight">{stat.label}</h4>
                                                        <div className="space-y-4">
                                                            <div className="flex justify-between items-end">
                                                                <span className="text-2xl font-black text-[#2D2A26]">${(stat.spent / 1000).toFixed(1)}k</span>
                                                                <span className="text-[10px] font-bold text-[#2D2A26]/30 uppercase tracking-widest">Budget: ${(stat.budget / 1000).toFixed(0)}k</span>
                                                            </div>
                                                            <div className="h-2 w-full bg-[#FDFBF7] rounded-full overflow-hidden border border-[#2D2A26]/5">
                                                                <motion.div
                                                                    initial={{ width: 0 }}
                                                                    animate={{ width: `${(stat.spent / stat.budget) * 100}%` }}
                                                                    transition={{ duration: 1.5, delay: i * 0.1 }}
                                                                    className="h-full rounded-full"
                                                                    style={{ backgroundColor: stat.color }}
                                                                />
                                                            </div>
                                                            <p className="text-[9px] font-bold text-[#2D2A26]/40 uppercase tracking-tighter">
                                                                {Math.round((stat.spent / stat.budget) * 100)}% Consumed
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-[#2D2A26] p-12 rounded-[4rem] text-white shadow-2xl relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E88D67] rounded-full blur-[150px] opacity-10 -mr-20 -mt-20" />
                                        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-12">
                                            <div className="max-w-md">
                                                <h3 className="text-3xl font-black mb-4 tracking-tighter leading-tight">Financial Projections & Risk Assessment</h3>
                                                <p className="text-white/50 font-sans leading-relaxed">
                                                    Based on current procurement velocity, your logistics spend is projected to decrease by 8% next quarter due to network expansion.
                                                </p>
                                            </div>
                                            <div className="flex gap-6">
                                                <button className="px-10 py-5 bg-[#E88D67] text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] shadow-[0_0_40px_rgba(232,141,103,0.3)] hover:scale-105 active:scale-95 transition-all">
                                                    Download Ledger
                                                </button>
                                                <button className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] hover:bg-white/10 transition-all">
                                                    Audit Protocol
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default UserDashboard;
