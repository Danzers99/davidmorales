import { Container } from '../ui/Container';

export function Footer() {
    return (
        <footer className="py-8 bg-surface border-t border-white/5 mt-20">
            <Container className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-text-secondary text-sm">
                    © {new Date().getFullYear()} David Morales. Built with React + Vite.
                </p>
                <div className="flex gap-6">
                    <a href="https://www.linkedin.com/in/david-m-30a5b4224/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors text-sm">LinkedIn</a>
                    <a href="mailto:dmorales53@hawkmail.hccfl.edu" className="text-text-secondary hover:text-primary transition-colors text-sm">Email</a>
                </div>
            </Container>
        </footer>
    );
}
