import { Container } from "../ui/Container";

export function ProofOfWork() {
    return (
        <section id="philosophy" className="py-24 bg-surface/30">
            <Container>
                <div className="text-center md:text-left mb-16">
                    <h2 className="text-4xl font-heading font-bold mb-4 text-slate-100">What I Optimize For</h2>
                    <p className="text-slate-300 max-w-xl">
                        I focus on improving how work actually gets done in real systems.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Reduce Friction",
                            desc: "I find what slows the operation down, like unclear workflows, knowledge base gaps, and clunky handoffs, and remove it so the right way is also the easy way.",
                            icon: "01"
                        },
                        {
                            title: "Lead From the Floor",
                            desc: "I've taken the calls, so I know what the job takes and what good looks like. That lets me set clear standards, spot problems early, and make the hard calls on quality when they're needed.",
                            icon: "02"
                        },
                        {
                            title: "Operational Leverage",
                            desc: "I build systems that multiply a team's effort: tracking that surfaces risks early, QA that coaches instead of just scoring, and tools that take repetitive work off people's plates.",
                            icon: "03"
                        }
                    ].map((item, i) => (
                        <div key={i} className="p-8 rounded-2xl bg-background border border-white/5 hover:border-primary/30 transition-colors group relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-6 opacity-[0.02] text-6xl font-heading font-bold group-hover:opacity-[0.04] transition-opacity">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-slate-100 mb-4 group-hover:text-primary-light transition-colors">{item.title}</h3>
                            <p className="text-slate-300 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
