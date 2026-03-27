import { Container } from "../ui/Container";
import { Mail, Linkedin } from "lucide-react";

export function About() {
    return (
        <section id="about" className="py-24 border-t border-white/5">
            <Container className="text-center">
                <h2 className="text-4xl font-heading font-bold mb-6">Interested in support operations done well?</h2>
                <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-12">
                    I focus on agent support coordination and operational improvements that reduce friction and escalation.
                </p>

                <div className="flex justify-center gap-6">
                    <a href="mailto:dmorales53@hawkmail.hccfl.edu" className="p-4 rounded-full bg-surface hover:bg-primary/20 hover:text-primary transition-colors border border-white/10">
                        <Mail className="w-6 h-6" />
                    </a>
                    <a href="https://www.linkedin.com/in/david-m-30a5b4224/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-surface hover:bg-primary/20 hover:text-primary transition-colors border border-white/10">
                        <Linkedin className="w-6 h-6" />
                    </a>

                </div>
            </Container>
        </section>
    );
}
