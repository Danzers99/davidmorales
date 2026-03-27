import { Container } from "../ui/Container";
import { Badge } from "../ui/Badge";
import { ArrowDown, Cpu } from 'lucide-react';
import profilePic from '../../assets/mylinkedinpic.jpg';

export function Hero() {
    return (
        <section id="top" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
            {/* Background Pattern - Neutralized */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            </div>

            <Container className="relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="flex-1 max-w-4xl">
                        <Badge className="mb-6">
                            <Cpu size={16} className="text-slate-200" />
                            <span>Systems Thinking for Support Operations</span>
                        </Badge>

                        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-[1.1] text-slate-50">
                            Hello! I'm David Morales.
                        </h1>

                        <p className="text-2xl md:text-3xl text-slate-200 font-medium mb-6">
                            Agent Support Coordinator at ShyftOff.
                        </p>

                        <p className="text-lg text-slate-300 font-normal max-w-2xl mb-10 leading-relaxed">
                            I bridge the gap between hardware realities and software solutions by building reliable internal tools that create operational leverage.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="mailto:davidmorales.djm@gmail.com"
                                className="px-8 py-4 rounded-lg bg-primary text-white font-bold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
                            >
                                Email Me <ArrowDown size={18} className="rotate-[-45deg]" />
                            </a>
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 rounded-lg border border-white/10 text-slate-200 hover:bg-white/5 transition-colors font-medium text-center flex items-center justify-center gap-2"
                            >
                                Resume
                            </a>
                        </div>
                    </div>

                    <div className="flex-1 flex justify-center lg:justify-end">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                            <img
                                src={profilePic}
                                alt="David Morales"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
