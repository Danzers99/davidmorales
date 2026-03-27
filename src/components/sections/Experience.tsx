import { Container } from "../ui/Container";
import { Badge } from "../ui/Badge";

export function Experience() {
    const roles = [
        {
            company: "ShyftOff",
            role: "Agent Support Coordinator",
            period: "Mar 2026 - Present",
            description: "Coordinating agent support operations and workforce performance."
        },
        {
            company: "Mad Mobile",
            role: "Senior Technical Support Specialist",
            period: "Jun 2025 - Mar 2026",
            description: "Technical Support"
        },
        {
            company: "Mad Mobile",
            role: "Support Operations Coordinator",
            period: "Apr 2024 - Mar 2026",
            description: "Blending technical support and support operations to improve platform reliability."
        },
        {
            company: "Mad Mobile",
            role: "Technical Support Specialist",
            period: "Oct 2023 - Jun 2025",
            description: "Technical Support for CAKE restaurant technology platform."
        },
        {
            company: "Foundever",
            role: "Customer Service Representative",
            period: "Jul 2022 - Oct 2023",
            description: "Customer Service and Support."
        }
    ];

    return (
        <section id="experience" className="py-24 border-t border-white/5 bg-background">
            <Container>
                <h2 className="text-3xl font-heading font-bold mb-12 text-center text-slate-100">
                    Experience
                </h2>

                <div className="max-w-3xl mx-auto space-y-8">
                    {roles.map((job, idx) => (
                        <div key={idx} className="flex flex-col md:flex-row gap-4 md:items-baseline justify-between p-6 rounded-xl bg-white/5 border border-white/5 hover:border-primary/20 transition-colors group">
                            <div className="flex-1">
                                <h3 className="text-lg font-bold text-slate-100 group-hover:text-primary transition-colors">
                                    {job.role}
                                </h3>
                                <p className="text-sm font-medium text-slate-400 mt-1">
                                    {job.company}
                                </p>
                            </div>

                            <div className="flex-1 md:text-right">
                                <Badge className="mb-2">
                                    {job.period}
                                </Badge>
                                <p className="text-sm text-slate-300 leading-relaxed mt-2">
                                    {job.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
