import React, { useEffect } from 'react';
import { ArrowLeft, Shield, Lock, Eye, Server, UserCheck, Scale } from 'lucide-react';

interface PrivacyPolicyProps {
    onBack: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <article className="min-h-screen pt-32 pb-24 bg-white text-slate-900 relative z-20 font-sans">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Navigation / Back */}
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-slate-400 hover:text-slate-900 mb-12 group transition-colors duration-150"
                >
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="font-mono uppercase text-xs tracking-widest">Back to Terminal</span>
                </button>

                {/* Header */}
                <header className="mb-16">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="px-3 py-1 bg-blue-600 text-white font-mono text-[10px] uppercase font-bold">
                            Legal_Doc_v1.0
                        </span>
                        <div className="h-[1px] flex-grow bg-slate-100"></div>
                        <div className="flex items-center gap-4 text-slate-400">
                            <Shield size={16} className="text-blue-600" />
                        </div>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1] uppercase">
                        Privacy <br /> <span className="text-blue-600">Policy</span>
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 py-6 border-y border-slate-100">
                        <div className="flex items-center gap-8">
                            <div>
                                <div className="text-xs text-slate-400 font-mono uppercase tracking-widest leading-none mb-1">Last Updated</div>
                                <div className="text-sm font-bold text-slate-900">May 2026</div>
                            </div>
                        </div>
                        <div className="ml-auto inline-flex items-center gap-2 px-3 py-1 bg-slate-50 border border-slate-200 text-[10px] uppercase tracking-wider text-slate-500 font-mono">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                            Status: Verified
                        </div>
                    </div>
                </header>

                {/* Content Area */}
                <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-12">

                    {/* Sticky Icons Side */}
                    <aside className="hidden md:flex flex-col gap-8 sticky top-40 h-fit">
                        <div className="p-3 border border-slate-100 text-slate-300">
                            <Lock size={20} />
                        </div>
                        <div className="p-3 border border-slate-100 text-slate-300">
                            <Eye size={20} />
                        </div>
                        <div className="p-3 border border-slate-100 text-slate-300">
                            <Server size={20} />
                        </div>
                        <div className="p-3 border border-slate-100 text-slate-300">
                            <UserCheck size={20} />
                        </div>
                        <div className="p-3 border border-slate-100 text-slate-300">
                            <Scale size={20} />
                        </div>
                    </aside>

                    {/* Content */}
                    <div className="prose prose-slate max-w-none prose-headings:tracking-tight prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-16 prose-h2:mb-8 prose-p:text-slate-600 prose-p:leading-relaxed prose-p:text-lg prose-p:mb-8 prose-ul:my-8">
                        <p className="lead text-xl text-slate-500 italic mb-12 border-l-4 border-blue-500 pl-6">
                            Welcome to <a href="https://www.edwardkindo.in/" className="text-blue-600 hover:underline">https://www.edwardkindo.in/</a> <br />
                            (“Website”). Your privacy is important to us. This Privacy Policy explains how your information is collected, used, and protected when you visit or interact with this Website.
                        </p>

                        <h2 className="font-extrabold text-slate-900 mt-16 mb-8">1. Information We Collect</h2>
                        <p className="mb-6">We may collect the following types of information:</p>
                        <div className="space-y-8 mb-8">
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-4 font-mono uppercase text-sm tracking-wider">a) Personal Information</h3>
                                <ul className="space-y-4">
                                    <li className="flex gap-3"><span className="text-blue-500 font-bold font-mono">&bull;</span> Name</li>
                                    <li className="flex gap-3"><span className="text-blue-500 font-bold font-mono">&bull;</span> Email address</li>
                                    <li className="flex gap-3"><span className="text-blue-500 font-bold font-mono">&bull;</span> Any information you provide through contact forms</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-4 font-mono uppercase text-sm tracking-wider">b) Non-Personal Information</h3>
                                <ul className="space-y-4">
                                    <li className="flex gap-3"><span className="text-blue-500 font-bold font-mono">&bull;</span> Browser type</li>
                                    <li className="flex gap-3"><span className="text-blue-500 font-bold font-mono">&bull;</span> Device information</li>
                                    <li className="flex gap-3"><span className="text-blue-500 font-bold font-mono">&bull;</span> IP address</li>
                                    <li className="flex gap-3"><span className="text-blue-500 font-bold font-mono">&bull;</span> Pages visited and time spent on the Website</li>
                                </ul>
                            </div>
                        </div>

                        <h2 className="font-extrabold text-slate-900 mt-16 mb-8">2. How We Use Your Information</h2>
                        <p className="mb-6">We use your information to:</p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex gap-3"><span className="text-blue-500 font-bold font-mono">&gt;</span> Respond to your inquiries or messages</li>
                            <li className="flex gap-3"><span className="text-blue-500 font-bold font-mono">&gt;</span> Improve website performance and user experience</li>
                            <li className="flex gap-3"><span className="text-blue-500 font-bold font-mono">&gt;</span> Analyze traffic and user behavior</li>
                            <li className="flex gap-3"><span className="text-blue-500 font-bold font-mono">&gt;</span> Maintain security and prevent misuse</li>
                        </ul>

                        <h2 className="font-extrabold text-slate-900 mt-16 mb-8">3. Cookies and Tracking Technologies</h2>
                        <p className="mb-6">This Website may use cookies to:</p>
                        <ul className="space-y-4 mb-6">
                            <li className="flex gap-3"><span className="text-blue-500 font-bold font-mono">&bull;</span> Enhance your browsing experience</li>
                            <li className="flex gap-3"><span className="text-blue-500 font-bold font-mono">&bull;</span> Understand user behavior</li>
                            <li className="flex gap-3"><span className="text-blue-500 font-bold font-mono">&bull;</span> Store preferences</li>
                        </ul>
                        <p className="mb-8">You can disable cookies through your browser settings if you prefer.</p>

                        <h2 className="font-extrabold text-slate-900 mt-16 mb-8">4. Third-Party Services</h2>
                        <p className="mb-6">
                            We may use third-party tools (such as analytics services) that collect, monitor, and analyze data to improve the Website.
                        </p>
                        <p className="mb-8">
                            These third-party services have their own privacy policies, and we do not control their practices.
                        </p>

                        <h2 className="font-extrabold text-slate-900 mt-16 mb-8">5. Data Sharing</h2>
                        <p className="mb-6">We do not sell, trade, or rent your personal information to others.</p>
                        <p className="mb-6">Your data may only be shared:</p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex gap-3"><span className="text-blue-500 font-bold font-mono">&bull;</span> If required by law</li>
                            <li className="flex gap-3"><span className="text-blue-500 font-bold font-mono">&bull;</span> To protect rights and security</li>
                            <li className="flex gap-3"><span className="text-blue-500 font-bold font-mono">&bull;</span> With trusted services that help operate the Website</li>
                        </ul>

                        <h2 className="font-extrabold text-slate-900 mt-16 mb-8">6. Data Security</h2>
                        <p className="mb-8">
                            We take reasonable steps to protect your information. However, no method of transmission over the internet is 100% secure.
                        </p>

                        <h2 className="font-extrabold text-slate-900 mt-16 mb-8">7. Links to Other Websites</h2>
                        <p className="mb-8">
                            This Website may contain links to external sites. We are not responsible for the privacy practices or content of those websites.
                        </p>

                        <h2 className="font-extrabold text-slate-900 mt-16 mb-8">8. Your Rights</h2>
                        <p className="mb-6">You have the right to:</p>
                        <ul className="space-y-4 mb-6">
                            <li className="flex gap-3"><span className="text-blue-500 font-bold font-mono">&bull;</span> Request access to your data</li>
                            <li className="flex gap-3"><span className="text-blue-500 font-bold font-mono">&bull;</span> Request correction or deletion</li>
                            <li className="flex gap-3"><span className="text-blue-500 font-bold font-mono">&bull;</span> Withdraw consent at any time</li>
                        </ul>
                        <p className="mb-8">To do so, contact us using the details below.</p>

                        <h2 className="font-extrabold text-slate-900 mt-16 mb-8">9. Children’s Privacy</h2>
                        <p className="mb-8">
                            This Website does not knowingly collect personal information from children under 13. If such data is found, it will be removed.
                        </p>

                        <h2 className="font-extrabold text-slate-900 mt-16 mb-8">10. Changes to This Policy</h2>
                        <p className="mb-8">
                            We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised date.
                        </p>

                        <div className="mt-24 pt-12 border-t border-slate-100">
                            <h2 className="!mt-0 font-extrabold text-slate-900 mb-8">11. Contact Information</h2>
                            <p className="mb-8">If you have any questions about this Privacy Policy, you can contact:</p>
                            <a href="mailto:contact@edwardkindo.in" className="inline-block px-8 py-4 bg-slate-900 text-white font-mono text-xs uppercase tracking-[0.2em] hover:bg-blue-600 transition-colors">
                                contact@edwardkindo.in
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </article>
    );
};
