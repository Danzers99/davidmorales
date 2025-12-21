import { useState } from 'react';
import { Container } from "../ui/Container";
import { Badge } from "../ui/Badge";
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Database, Table2, Code2 } from 'lucide-react';
import clsx from 'clsx';
import craImg from '../../assets/cra-scout-img.png';

export function CRAScout() {
    const [isDetailsOpen, setDetailsOpen] = useState(false);

    return (
        <section id="crascout" className="py-32 border-t border-white/5 relative bg-background">

            <Container>
                <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">

                    {/* Content Side */}
                    <div className="flex-1">
                        <Badge className="mb-6">
                            <Table2 size={14} />
                            <span>Decision Support</span>
                        </Badge>

                        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-slate-100">
                            CRA Scout
                        </h2>

                        <p className="text-xl text-slate-300 font-normal mb-8 leading-relaxed">
                            A personal tool built to solve the "Zillow Gap." I needed to identify homes eligible for CRA (Community Reinvestment Act) incentives, but existing platforms made this data impossible to cross-reference.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {[
                                "Solved a personal housing search problem that Zillow couldn't.",
                                "Overlaid complex CRA zoning maps directly onto property listings.",
                                "Automated the discovery of hidden financial incentives."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400" />
                                    <span className="text-slate-300 font-normal">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-3 mb-8">
                            {["Visualizes Zoning Data", "Solves the 'Zillow Gap'", "Locally Run"].map((badge) => (
                                <Badge key={badge}>
                                    {badge}
                                </Badge>
                            ))}
                        </div>

                        <div className="mb-10">
                            <button
                                disabled
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/10 text-slate-400 font-medium opacity-50 cursor-not-allowed hover:bg-white/5"
                            >
                                <Code2 size={18} /> Source (Available on Request)
                            </button>
                        </div>

                        {/* Expandable Technical Details */}
                        <div className="border border-white/10 rounded-xl overflow-hidden bg-white/5">
                            <button
                                onClick={() => setDetailsOpen(!isDetailsOpen)}
                                className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors text-left"
                            >
                                <div className="flex items-center gap-3 text-slate-200 font-medium">
                                    <Database size={20} className="text-slate-400" />
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
                                                <strong className="block text-slate-100 mb-1">1. Data Ingestion Pipeline (Backend)</strong>
                                                <ul className="list-disc pl-4 space-y-1">
                                                    <li><strong>Source:</strong> Automated watcher for property alert emails (Gmail API).</li>
                                                    <li><strong>Processing:</strong> Parses email content &rarr; Geocodes address &rarr; Checks point-in-polygon against CRA districts.</li>
                                                    <li><strong>Storage:</strong> Persists validated listings to SQLite via Prisma.</li>
                                                </ul>
                                            </div>

                                            <div>
                                                <strong className="block text-slate-100 mb-1">2. Visualization (Frontend)</strong>
                                                <ul className="list-disc pl-4 space-y-1">
                                                    <li><strong>Map Engine:</strong> MapLibre GL JS with vector tiles & clustering for performance.</li>
                                                    <li><strong>Overlays:</strong> GeoJSON layers for CRA Districts & FEMA Flood Zones.</li>
                                                </ul>
                                            </div>

                                            <div>
                                                <strong className="block text-slate-100 mb-1">3. Data Model</strong>
                                                <p>Prisma schema with <code>Listing</code> (core property data), <code>IngestLog</code> (traceability), and <code>GeocodeCache</code> (API optimization).</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Visual Side */}
                    <div className="flex-1 w-full">
                        <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 bg-surface shadow-md">
                            <img
                                src={craImg}
                                alt="CRA Scout Dashboard"
                                className="w-full h-auto block"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
