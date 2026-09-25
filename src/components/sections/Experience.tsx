import { Container } from "../ui/Container";
import { Badge } from "../ui/Badge";

export function Experience() {
    const roles = [
        {
            company: "ShyftOff",
            role: "Operations Manager",
            period: "Aug 2026 - Present",
            description: "Operations management for the PhyNet Dermatology campaign: production readiness, escalation review, root-cause analysis, and quality tracking across 9,400+ interactions."
        },
        {
            company: "ShyftOff",
            role: "Agent Support Coordinator",
            period: "Mar 2026 - Jul 2026",
            description: "Built issue-tracking workflows, training materials, and AI-enabled QA and mock-call tools. Supported operational readiness for the NationsBenefits campaign."
        },
        {
            company: "Mad Mobile",
            role: "Senior Technical Support Specialist",
            period: "Jun 2025 - Mar 2026",
            description: "Promoted after two years of meeting SLA targets. Audited case workflows, tracked SLA/KPI metrics, and mentored new agents."
        },
        {
            company: "Mad Mobile",
            role: "Support Operations Coordinator",
            period: "Apr 2024 - Jun 2025",
            description: "Audited cases, documented workflows, and coordinated escalations. Triaged and resolved CAKE platform issues across support channels."
        },
        {
            company: "Mad Mobile",
            role: "Technical Support Specialist",
            period: "Oct 2023 - Apr 2024",
            description: "Technical support for the CAKE restaurant technology platform."
        },
        {
            company: "Capital One",
            role: "Customer Service Representative",
            period: "Jan 2023 - Oct 2023",
            description: "Resolved account and technical issues within established service targets."
        },
        {
            company: "Savvas Learning Company",
            role: "Technical Support Specialist",
            period: "Aug 2022 - Dec 2022",
            description: "Achieved a 95% first-contact resolution rate."
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
