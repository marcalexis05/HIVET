import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, ArrowRight, PawPrint, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

interface LoginViewProps {
    onNavigate: (view: 'landing' | 'login' | 'register' | 'dashboard' | 'customer_dashboard') => void;
}

const LoginView = ({ onNavigate }: LoginViewProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const [loginStatus, setLoginStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLoginSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoginStatus('submitting');
        setError('');

        setTimeout(() => {
            // Hardcoded Credentials Logic
            if (email === 'partner@hivet.com' && password === 'hi-partner') {
                setLoginStatus('success');
                setTimeout(() => onNavigate('dashboard'), 1500);
            } else if (email === 'customer@hivet.com' && password === 'hi-customer') {
                setLoginStatus('success');
                setTimeout(() => onNavigate('customer_dashboard'), 1500);
            } else {
                setLoginStatus('idle');
                setError('Invalid professional credentials. Please try again.');
            }
        }, 1200);
    };

    return (
        <div className="min-h-screen grid lg:grid-cols-2 bg-[#F9F6F0] font-serif text-[#2D2A26]">
            {/* Left Side - Form */}
            <div className="flex flex-col justify-center px-4 sm:px-6 lg:px-20 xl:px-24 py-12 lg:py-0 relative">
                <button
                    onClick={() => onNavigate('landing')}
                    className="absolute top-8 left-8 flex items-center gap-2 text-[#2D2A26]/60 hover:text-[#E88D67] transition-colors font-bold text-sm tracking-wide uppercase group font-sans"
                >
                    <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </button>

                <div className="w-full max-w-xl mx-auto">
                    <div className="mb-12">
                        <div className="flex items-center gap-2 mb-8">
                            <div className="bg-[#E88D67] p-2 rounded-full text-white shadow-md">
                                <PawPrint className="w-6 h-6" />
                            </div>
                            <span className="text-2xl font-bold text-[#2D2A26] tracking-wide">
                                HI-VET
                            </span>
                        </div>
                        <h1 className="text-5xl font-bold text-[#2D2A26] mb-4 text-left leading-tight">
                            Welcome back,<br />
                            <span className="text-[#E88D67]">Partner.</span>
                        </h1>
                        <p className="text-[#5A5A5A] text-xl font-medium font-sans">
                            Log in to access your project logistics dashboard.
                        </p>
                    </div>

                    {loginStatus === 'success' ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="py-16 text-center bg-white rounded-xl shadow-sm border border-[#E88D67]/20"
                        >
                            <div className="bg-[#E88D67]/10 text-[#E88D67] w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle2 className="w-12 h-12" />
                            </div>
                            <h3 className="text-2xl font-bold text-[#2D2A26] mb-2">Login Successful</h3>
                            <p className="text-[#5A5A5A] font-sans">Redirecting to your dashboard...</p>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleLoginSubmit} className="space-y-8 font-sans">
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-[#2D2A26]/80 uppercase tracking-widest ml-1">Work Email</label>
                                    <div className="relative group">
                                        <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2D2A26]/30 group-focus-within:text-[#E88D67] transition-colors" />
                                        <input
                                            required
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full bg-white border-2 border-[#E88D67]/10 rounded-lg py-5 pl-14 pr-6 focus:border-[#E88D67] focus:ring-4 focus:ring-[#E88D67]/10 outline-none transition-all placeholder:text-[#2D2A26]/20 font-medium text-[#2D2A26] text-lg hover:border-[#E88D67]/30"
                                            placeholder="name@company.com"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center ml-1">
                                        <label className="text-xs font-bold text-[#2D2A26]/80 uppercase tracking-widest">Password</label>
                                        <button type="button" className="text-xs font-bold text-[#E88D67] hover:text-[#D67C55] uppercase tracking-wide">Forgot?</button>
                                    </div>
                                    <div className="relative group">
                                        <Lock className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2D2A26]/30 group-focus-within:text-[#E88D67] transition-colors" />
                                        <input
                                            required
                                            type={showPassword ? "text" : "password"}
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
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

                            {error && (
                                <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-red-500 text-sm font-bold bg-red-50 p-4 rounded-lg border border-red-100 flex items-center gap-2"
                                >
                                    <ArrowRight className="w-4 h-4 rotate-180" /> {error}
                                </motion.p>
                            )}

                            <button
                                disabled={loginStatus === 'submitting'}
                                type="submit"
                                className="w-full bg-[#E88D67] text-white py-5 rounded-lg font-bold text-xl hover:bg-[#D67C55] transition-all shadow-lg shadow-[#E88D67]/20 flex items-center justify-center gap-3 group disabled:opacity-70 mt-6 active:scale-[0.99] active:shadow-md"
                            >
                                {loginStatus === 'submitting' ? (
                                    <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : (
                                    <>
                                        Sign In
                                        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>

                            <p className="text-center text-sm font-medium text-[#2D2A26]/60 mt-8">
                                Don't have an account?{' '}
                                <button
                                    type="button"
                                    onClick={() => onNavigate('register')}
                                    className="text-[#E88D67] font-bold hover:underline"
                                >
                                    Partner with us
                                </button>
                            </p>
                        </form>
                    )}
                </div>
            </div>

            {/* Right Side - Image/Testimonial */}
            <div className="hidden lg:block relative bg-[#2D2A26] overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=1917&auto=format&fit=crop"
                        alt="Pug in forest"
                        className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2D2A26] via-[#2D2A26]/40 to-transparent" />
                </div>

                <div className="relative z-10 h-full flex flex-col justify-end p-20 text-white">
                    <div className="bg-[#E88D67] rounded-full w-20 h-2 mb-10 shadow-lg" />
                    <blockquote className="text-5xl font-bold leading-tight mb-10 tracking-tight">
                        "Hi-Vet completely transformed how we source materials. We're building <span className="text-[#E88D67]">30% faster.</span>"
                    </blockquote>
                    <div>
                        <div className="font-bold text-2xl mb-1">Alex R.</div>
                        <div className="text-white/60 font-bold uppercase tracking-widest text-sm font-sans">Project Director, Apex Construction</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginView;
