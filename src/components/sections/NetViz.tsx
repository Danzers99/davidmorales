import { useState } from 'react';
import { Container } from "../ui/Container";
import { Badge } from "../ui/Badge";
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Code2, Network, ExternalLink } from 'lucide-react';
import clsx from 'clsx';
import netvizImg from '../../assets/net-viz-img.png';

export function NetViz() {
    const [isDetailsOpen, setDetailsOpen] = useState(false);

    return (
        <section id="netviz" className="py-32 border-t border-white/5 relative overflow-hidden">
            <Container>
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Content Side */}
                    <div className="flex-1 order-2 lg:order-1">
                        <Badge className="mb-6">
                            <Network size={14} />
                            <span>Network Visualization</span>
                        </Badge>

                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-slate-100">
                            NetViz Sandbox
                        </h2>

                        <p className="text-xl text-slate-300 font-normal mb-8 leading-relaxed">
                            Visualizing invisible network topologies for 20+ support agents.
                            The sandbox reduced hardware shipping costs by virtualization and improved training speed by providing a safe environment to fail.
                        </p>

                        <div className="mb-10 flex flex-wrap gap-4">
                            <a
                                href="https://netviz.pages.dev/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/10 text-slate-200 font-medium hover:bg-white/5 transition-colors"
                            >
                                Try the Tool <ExternalLink size={18} />
                            </a>
                            <a
                                href="https://github.com/Danzers99/NetViz"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/10 text-slate-200 font-medium hover:bg-white/5 transition-colors"
                            >
                                <Code2 size={18} /> Source Code
                            </a>
                        </div>

                        <div className="flex flex-wrap gap-3 mb-10">
                            {["Built for Support Training", "No HW Required", "100% Safe Simulation"].map((badge) => (
                                <Badge key={badge}>
                                    {badge}
                                </Badge>
                            ))}
                        </div>

                        {/* Expandable Technical Details */}
                        <div className="border border-white/10 rounded-xl overflow-hidden bg-white/5">
                            <button
                                onClick={() => setDetailsOpen(!isDetailsOpen)}
                                className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors text-left"
                            >
                                <div className="flex items-center gap-3 text-slate-200 font-medium">
                                    <Code2 size={20} className="text-slate-400" />
                                    <span>Technical Implementation</span>
                                </div>
                                <ChevronDown
                                    size={20}
                                    className={clsx("text-slate-400 transition-transform duration-300", isDetailsOpen && "rotate-180")}
                                />
                            </button>

                            <AnimatePresence>
                                {isDetailsOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="p-4 pt-0 border-t border-white/5 text-slate-300 text-sm space-y-4">
                                            <div>
                                                <strong className="block text-slate-100 mb-1">1. Frontend Core</strong>
                                                <p>Built with React 19 and TypeScript, bundled using Vite 7. Styled with Tailwind CSS v4.</p>
                                            </div>

                                            <div>
                                                <strong className="block text-slate-100 mb-1">2. Visualization & State</strong>
                                                <ul className="list-disc pl-4 space-y-1">
                                                    <li><strong>Visualization:</strong> React Three Fiber (R3F) for the 3D "Sandbox" environment.</li>
                                                    <li><strong>State:</strong> Zustand store acts as the single source of truth for network graph and device state.</li>
                                                </ul>
                                            </div>

                                            <div>
                                                <strong className="block text-slate-100 mb-1">3. Simulation Logic</strong>
                                                <ul className="list-disc pl-4 space-y-1">
                                                    <li><strong>Registry:</strong> Strict hardware definitions (ports, power, size) in <code>deviceDefinitions.ts</code>.</li>
                                                    <li><strong>Propagation:</strong> BFS algorithm calculates power flow and link status updates.</li>
                                                    <li><strong>Validation:</strong> Enforces rules like "No Power to Data connections".</li>
                                                </ul>
                                            </div>

                                            <div>
                                                <strong className="block text-slate-100 mb-1">4. Deployment</strong>
                                                <p>Compiled to static assets and deployed to Cloudflare Workers via Wrangler.</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Visual Side */}
                    <div className="flex-1 w-full order-1 lg:order-2">
                        <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 bg-surface shadow-md group">
                            <img
                                src={netvizImg}
                                alt="NetViz Project Screenshot"
                                className="w-full h-auto block"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
