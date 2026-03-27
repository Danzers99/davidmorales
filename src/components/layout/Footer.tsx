import { Container } from '../ui/Container';
import { Mail, Linkedin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="py-8 bg-surface border-t border-white/5 mt-20">
            <Container className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left">
                    <p className="text-text-secondary text-sm">
                        © {new Date().getFullYear()} David Morales. Built with React + Vite.
                    </p>
                    <p className="text-text-secondary/60 text-xs mt-1">
                        Based in Tampa, FL. Focused on agent support coordination and operations.
                    </p>
                </div>
                <div className="flex gap-6">
                    <a href="https://www.linkedin.com/in/david-m-30a5b4224/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors text-sm">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:dmorales53@hawkmail.hccfl.edu" className="text-text-secondary hover:text-primary transition-colors text-sm">
                        <Mail size={20} />
                    </a>
                </div>
            </Container>
        </footer>
    );
}
