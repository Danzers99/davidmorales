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
                            desc: "I build tools that shorten resolution times for high-frequency tasks.",
                            icon: "01"
                        },
                        {
                            title: "Unblock Teammates",
                            desc: "I remove blockers and clarify systems so issues don’t compound and the support floor keeps moving.",
                            icon: "02"
                        },
                        {
                            title: "Operational Leverage",
                            desc: "I build force multipliers for repetitive work, reducing cognitive load and increasing reliability for the entire team.",
                            icon: "03"
                        }
                    ].map((item, i) => (
                        <div key={i} className="p-8 rounded-2xl bg-background border border-white/5 hover:border-primary/30 transition-colors group relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-6 opacity-[0.02] text-6xl font-heading font-bold group-hover:opacity-[0.04] transition-opacity">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-slate-100 mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                            <p className="text-slate-300 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
