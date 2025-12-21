import { Container } from "../ui/Container";

export function ProofOfWork() {
    return (
        <section id="philosophy" className="py-32 bg-surface/30">
            <Container>
                <div className="text-center md:text-left mb-16">
                    <h2 className="text-4xl font-heading font-bold mb-4 text-slate-100">Philosophy</h2>
                    <p className="text-slate-300 max-w-xl">
                        My work is defined not just by the code I write, but by the operational problems I solve.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Problem First",
                            desc: "I don't start with a tech stack. I start with the support ticket queue, the training manual friction, and the hardware constraints.",
                            icon: "01"
                        },
                        {
                            title: "User Centric",
                            desc: "My tools are built for the agents on the phone. If it needs a user manual, I've probably failed. Usability is my primary metric.",
                            icon: "02"
                        },
                        {
                            title: "Systems Thinking",
                            desc: "Software doesn't exist in a vacuum. I build with an understanding of physical cabling, network layers, and operational workflow.",
                            icon: "03"
                        }
                    ].map((item, i) => (
                        <div key={i} className="p-8 rounded-2xl bg-background border border-white/5 hover:border-primary/30 transition-colors group relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-5 text-6xl font-heading font-bold group-hover:opacity-10 transition-opacity">
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
