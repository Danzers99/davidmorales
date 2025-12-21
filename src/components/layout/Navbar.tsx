import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { Container } from '../ui/Container';
import { Menu, X, Terminal, FileText, ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'NetViz', href: '#netviz' },
    { label: 'CRA Scout', href: '#crascout' },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
            )}
        >
            <Container className="flex items-center justify-between">
                <a href="#top" className="flex items-center gap-2 group">
                    <div className="p-2 rounded-lg bg-surface group-hover:bg-primary/20 transition-colors">
                        <Terminal className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-heading font-bold text-xl tracking-tight text-text-primary">
                        David Morales
                    </span>
                </a>

                {/* Desktop Nav - Centered */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-sm font-medium text-text-secondary hover:text-primary transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-text-secondary hover:text-primary transition-colors flex items-center gap-1"
                    >
                        <FileText size={14} />
                        Resume
                    </a>
                </div>

                {/* Right Action */}
                <div className="hidden md:block">
                    <a
                        href="mailto:dmorales53@hawkmail.hccfl.edu"
                        className="px-4 py-2 rounded-md bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-colors"
                    >
                        Contact
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-text-primary"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </Container>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-surface border-t border-white/10 md:hidden p-4 flex flex-col gap-4 shadow-2xl">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-lg font-medium text-text-secondary hover:text-primary"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-medium text-text-secondary hover:text-primary flex items-center gap-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <FileText size={18} />
                        Resume
                        <ArrowUpRight size={14} className="opacity-50" />
                    </a>
                </div>
            )}
        </nav>
    );
}
