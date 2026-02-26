import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, ArrowRight, PawPrint, Building2, User, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

interface RegisterViewProps {
    onNavigate: (view: 'landing' | 'login' | 'register' | 'dashboard' | 'customer_dashboard') => void;
}

const RegisterView = ({ onNavigate }: RegisterViewProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleRegisterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');
        setTimeout(() => {
            setFormStatus('success');
            setTimeout(() => {
                onNavigate('dashboard');
                console.log("Registration successful");
            }, 2000);
        }, 1500);
    };

    return (
        <div className="min-h-screen grid lg:grid-cols-2 bg-[#F9F6F0] font-serif text-[#2D2A26]">
            {/* Left Side - Form */}
            <div className="flex flex-col justify-center px-4 sm:px-6 lg:px-20 xl:px-24 py-12 lg:py-0 relative order-2 lg:order-1">
                <button
                    onClick={() => onNavigate('landing')}
                    className="absolute top-8 left-8 flex items-center gap-2 text-[#2D2A26]/60 hover:text-[#E88D67] transition-colors font-bold text-sm tracking-wide uppercase group font-sans"
                >
                    <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </button>

                <div className="w-full max-w-xl mx-auto">
                    <div className="mb-8">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="bg-[#E88D67] p-2 rounded-full text-white shadow-md">
                                <PawPrint className="w-6 h-6" />
                            </div>
                            <span className="text-2xl font-bold text-[#2D2A26] tracking-wide">
                                HI-VET
                            </span>
                        </div>
                        <h1 className="text-5xl font-bold text-[#2D2A26] mb-4 text-left leading-tight">
                            Join our<br />
                            <span className="text-[#E88D67]">Network.</span>
                        </h1>
                        <p className="text-[#5A5A5A] text-xl font-medium font-sans">
                            Create an account to start sourcing premium supplies.
                        </p>
                    </div>

                    {formStatus === 'success' ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="py-16 text-center bg-white rounded-xl shadow-sm border border-[#E88D67]/20"
                        >
                            <div className="bg-[#E88D67]/10 text-[#E88D67] w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle2 className="w-12 h-12" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#2D2A26] mb-2">Application Received!</h3>
                            <p className="text-[#5A5A5A] font-sans">We'll review your business details shortly.</p>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleRegisterSubmit} className="space-y-6 font-sans">
                            <div className="space-y-5">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-[#2D2A26]/80 uppercase tracking-widest ml-1">Business Name</label>
                                    <div className="relative group">
                                        <Building2 className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2D2A26]/30 group-focus-within:text-[#E88D67] transition-colors" />
                                        <input
                                            required
                                            type="text"
                                            className="w-full bg-white border-2 border-[#E88D67]/10 rounded-lg py-5 pl-14 pr-6 focus:border-[#E88D67] focus:ring-4 focus:ring-[#E88D67]/10 outline-none transition-all placeholder:text-[#2D2A26]/20 font-medium text-[#2D2A26] text-lg hover:border-[#E88D67]/30"
                                            placeholder="Pet Clinic Ltd."
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-[#2D2A26]/80 uppercase tracking-widest ml-1">Contact Name</label>
                                    <div className="relative group">
                                        <User className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2D2A26]/30 group-focus-within:text-[#E88D67] transition-colors" />
                                        <input
                                            required
                                            type="text"
                                            className="w-full bg-white border-2 border-[#E88D67]/10 rounded-lg py-5 pl-14 pr-6 focus:border-[#E88D67] focus:ring-4 focus:ring-[#E88D67]/10 outline-none transition-all placeholder:text-[#2D2A26]/20 font-medium text-[#2D2A26] text-lg hover:border-[#E88D67]/30"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-[#2D2A26]/80 uppercase tracking-widest ml-1">Work Email</label>
                                    <div className="relative group">
                                        <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2D2A26]/30 group-focus-within:text-[#E88D67] transition-colors" />
                                        <input
                                            required
                                            type="email"
                                            className="w-full bg-white border-2 border-[#E88D67]/10 rounded-lg py-5 pl-14 pr-6 focus:border-[#E88D67] focus:ring-4 focus:ring-[#E88D67]/10 outline-none transition-all placeholder:text-[#2D2A26]/20 font-medium text-[#2D2A26] text-lg hover:border-[#E88D67]/30"
                                            placeholder="name@company.com"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-[#2D2A26]/80 uppercase tracking-widest ml-1">Password</label>
                                    <div className="relative group">
                                        <Lock className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2D2A26]/30 group-focus-within:text-[#E88D67] transition-colors" />
                                        <input
                                            required
                                            type={showPassword ? "text" : "password"}
                                            className="w-full bg-white border-2 border-[#E88D67]/10 rounded-lg py-5 pl-14 pr-14 focus:border-[#E88D67] focus:ring-4 focus:ring-[#E88D67]/10 outline-none transition-all placeholder:text-[#2D2A26]/20 font-medium text-[#2D2A26] text-lg hover:border-[#E88D67]/30"
                                            placeholder="••••••••"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-6 top-1/2 -translate-y-1/2 text-[#2D2A26]/30 hover:text-[#2D2A26] transition-colors p-1"
                                        >
                                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <button
                                disabled={formStatus === 'submitting'}
                                type="submit"
                                className="w-full bg-[#E88D67] text-white py-5 rounded-lg font-bold text-xl hover:bg-[#D67C55] transition-all shadow-lg shadow-[#E88D67]/20 flex items-center justify-center gap-3 group disabled:opacity-70 mt-8 active:scale-[0.99] active:shadow-md"
                            >
                                {formStatus === 'submitting' ? (
                                    <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : (
                                    <>
                                        Create Account
                                        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>

                            <p className="text-center text-sm font-medium text-[#2D2A26]/60 mt-8">
                                Already have an account?{' '}
                                <button
                                    type="button"
                                    onClick={() => onNavigate('login')}
                                    className="text-[#E88D67] font-bold hover:underline"
                                >
                                    Log in
                                </button>
                            </p>
                        </form>
                    )}
                </div>
            </div>

            {/* Right Side - Image/Testimonial */}
            <div className="hidden lg:block relative bg-[#2D2A26] overflow-hidden order-1 lg:order-2">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=2074&auto=format&fit=crop"
                        alt="Dog looking happy"
                        className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2D2A26] via-[#2D2A26]/40 to-transparent" />
                </div>

                <div className="relative z-10 h-full flex flex-col justify-end p-20 text-white">
                    <div className="bg-[#E88D67] rounded-full w-20 h-2 mb-10 shadow-lg" />
                    <blockquote className="text-5xl font-bold leading-tight mb-10 tracking-tight">
                        "The wholesale network has simplified our inventory management. We can focus on <span className="text-[#E88D67]">what matters.</span>"
                    </blockquote>
                    <div>
                        <div className="font-bold text-2xl mb-1">Dr. Sarah L.</div>
                        <div className="text-white/60 font-bold uppercase tracking-widest text-sm font-sans">Chief Veterinarian, Paws & Claws</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterView;
