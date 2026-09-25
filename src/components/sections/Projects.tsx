import { useState, type ReactNode } from 'react';
import { Container } from "../ui/Container";
import { Badge } from "../ui/Badge";
import { motion, AnimatePresence, type PanInfo } from 'framer-motion';
import { ChevronDown, ChevronLeft, ChevronRight, Code2, ExternalLink, Network, Rocket, Table2, type LucideIcon } from 'lucide-react';
import clsx from 'clsx';
import netvizImg from '../../assets/net-viz-img.png';
import craImg from '../../assets/cra-scout-img.png';
import shyftpathImg from '../../assets/shyftpath-img.jpg';

type Project = {
    id: string;
    name: string;
    category: string;
    icon: LucideIcon;
    summary: string;
    points?: string[];
    tags: string[];
    links: { label: string; href?: string; icon: LucideIcon }[];
    details: { heading: string; body: ReactNode }[];
    image: string;
    alt: string;
};

const projects: Project[] = [
    {
        id: "shyftpath",
        name: "ShyftPath",
        category: "Agent Onboarding",
        icon: Rocket,
        summary: "A self-serve tracker for agents onboarding onto a call center program. Six yes/no questions place an agent in one of six onboarding phases and show exactly what to do next, so they don't have to ask.",
        tags: ["Built for Agents", "6 Questions, 6 Phases", "No Login Required"],
        links: [{ label: "Try the Tool", href: "https://shyftpath.pages.dev/", icon: ExternalLink }],
        details: [
            { heading: "1. Single-File App", body: <p>One static HTML page with Tailwind and vanilla JavaScript. No build step, so updates ship as fast as the process changes.</p> },
            {
                heading: "2. Phase Logic", body: (
                    <ul className="list-disc pl-4 space-y-1">
                        <li><strong>Quiz:</strong> Yes/no answers map to a phase, including sub-states like the navigation meeting.</li>
                        <li><strong>Results:</strong> Each phase shows next steps, what's in the agent's control vs. not, and where to get help.</li>
                    </ul>
                )
            },
            { heading: "3. Content", body: <p>Full checklist, FAQ, login checklist, and glossary built from the official program roadmap.</p> },
            { heading: "4. Deployment", body: <p>Static hosting on Cloudflare Pages.</p> }
        ],
        image: shyftpathImg,
        alt: "ShyftPath onboarding tracker landing page"
    },
    {
        id: "netviz",
        name: "NetViz Sandbox",
        category: "Network Visualization",
        icon: Network,
        summary: "Visualizing invisible network topologies for 20+ support agents. The sandbox reduced hardware shipping costs by virtualization and improved training speed by providing a safe environment to fail.",
        tags: ["Built for Support Training", "No HW Required", "100% Safe Simulation"],
        links: [
            { label: "Try the Tool", href: "https://netviz.pages.dev/", icon: ExternalLink },
            { label: "Source Code", href: "https://github.com/Danzers99/NetViz", icon: Code2 }
        ],
        details: [
            { heading: "1. Frontend Core", body: <p>Built with React 19 and TypeScript, bundled using Vite 7. Styled with Tailwind CSS v4.</p> },
            {
                heading: "2. Visualization & State", body: (
                    <ul className="list-disc pl-4 space-y-1">
                        <li><strong>Visualization:</strong> React Three Fiber (R3F) for the 3D "Sandbox" environment.</li>
                        <li><strong>State:</strong> Zustand store acts as the single source of truth for network graph and device state.</li>
                    </ul>
                )
            },
            {
                heading: "3. Simulation Logic", body: (
                    <ul className="list-disc pl-4 space-y-1">
                        <li><strong>Registry:</strong> Strict hardware definitions (ports, power, size) in <code>deviceDefinitions.ts</code>.</li>
                        <li><strong>Propagation:</strong> BFS algorithm calculates power flow and link status updates.</li>
                        <li><strong>Validation:</strong> Enforces rules like "No Power to Data connections".</li>
                    </ul>
                )
            },
            { heading: "4. Deployment", body: <p>Compiled to static assets and deployed to Cloudflare Workers via Wrangler.</p> }
        ],
        image: netvizImg,
        alt: "NetViz Project Screenshot"
    },
    {
        id: "crascout",
        name: "CRA Scout",
        category: "Decision Support",
        icon: Table2,
        summary: "A personal tool built to solve the \"Zillow Gap.\" I needed to identify homes eligible for CRA (Community Reinvestment Act) incentives, but existing platforms made this data impossible to cross-reference.",
        points: [
            "Solved a personal housing search problem that Zillow couldn't.",
            "Overlaid complex CRA zoning maps directly onto property listings.",
            "Automated the discovery of hidden financial incentives."
        ],
        tags: ["Visualizes Zoning Data", "Solves the 'Zillow Gap'", "Locally Run"],
        links: [{ label: "Source (Available on Request)", icon: Code2 }],
        details: [
            {
                heading: "1. Data Ingestion Pipeline (Backend)", body: (
                    <ul className="list-disc pl-4 space-y-1">
                        <li><strong>Source:</strong> Automated watcher for property alert emails (Gmail API).</li>
                        <li><strong>Processing:</strong> Parses email content &rarr; Geocodes address &rarr; Checks point-in-polygon against CRA districts.</li>
                        <li><strong>Storage:</strong> Persists validated listings to SQLite via Prisma.</li>
                    </ul>
                )
            },
            {
                heading: "2. Visualization (Frontend)", body: (
                    <ul className="list-disc pl-4 space-y-1">
                        <li><strong>Map Engine:</strong> MapLibre GL JS with vector tiles & clustering for performance.</li>
                        <li><strong>Overlays:</strong> GeoJSON layers for CRA Districts & FEMA Flood Zones.</li>
                    </ul>
                )
            },
            { heading: "3. Data Model", body: <p>Prisma schema with <code>Listing</code> (core property data), <code>IngestLog</code> (traceability), and <code>GeocodeCache</code> (API optimization).</p> }
        ],
        image: craImg,
        alt: "CRA Scout Dashboard"
    }
];

const slideVariants = {
    enter: (dir: number) => ({ x: dir * 60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir * -60, opacity: 0 })
};

function ProjectSlide({ project }: { project: Project }) {
    const [isDetailsOpen, setDetailsOpen] = useState(false);
    const Icon = project.icon;

    return (
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            {/* Content Side */}
            <div className="flex-1 w-full order-2 lg:order-1">
                <Badge className="mb-6">
                    <Icon size={14} />
                    <span>{project.category}</span>
                </Badge>

                <h3 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-slate-100">
                    {project.name}
                </h3>

                <p className="text-xl text-slate-300 font-normal mb-8 leading-relaxed">
                    {project.summary}
                </p>

                {project.points && (
                    <ul className="space-y-4 mb-8">
                        {project.points.map(point => (
                            <li key={point} className="flex items-start gap-3">
                                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                <span className="text-slate-300 font-normal">{point}</span>
                            </li>
                        ))}
                    </ul>
                )}

                <div className="mb-8 flex flex-wrap gap-4">
                    {project.links.map(link => {
                        const LinkIcon = link.icon;
                        return link.href ? (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/10 text-slate-200 font-medium hover:bg-white/5 transition-colors"
                            >
                                {link.label} <LinkIcon size={18} />
                            </a>
                        ) : (
                            <button
                                key={link.label}
                                disabled
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/10 text-slate-400 font-medium opacity-50 cursor-not-allowed"
                            >
                                <LinkIcon size={18} /> {link.label}
                            </button>
                        );
                    })}
                </div>

                <div className="flex flex-wrap gap-3 mb-8">
                    {project.tags.map(tag => <Badge key={tag}>{tag}</Badge>)}
                </div>

                {/* Expandable Technical Details */}
                <div className="border border-white/10 rounded-xl overflow-hidden">
                    <button
                        onClick={() => setDetailsOpen(!isDetailsOpen)}
                        aria-expanded={isDetailsOpen}
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

                    <AnimatePresence initial={false}>
                        {isDetailsOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                <div className="p-4 border-t border-white/5 text-slate-300 text-sm space-y-4">
                                    {project.details.map(d => (
                                        <div key={d.heading}>
                                            <strong className="block text-slate-100 mb-1">{d.heading}</strong>
                                            {d.body}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Visual Side */}
            <div className="flex-1 w-full order-1 lg:order-2">
                <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden border border-white/10 bg-surface shadow-md">
                    <img
                        src={project.image}
                        alt={project.alt}
                        className="w-full h-full object-cover object-top block"
                        draggable={false}
                    />
                </div>
            </div>
        </div>
    );
}

export function Projects() {
    const [[index, direction], setSlide] = useState<[number, number]>([0, 0]);

    const goTo = (next: number) => {
        const wrapped = (next + projects.length) % projects.length;
        setSlide([wrapped, next > index ? 1 : -1]);
    };

    // Swipe on touch screens; vertical page scrolling still works (touch-action: pan-y).
    const onPanEnd = (_: PointerEvent, info: PanInfo) => {
        if (Math.abs(info.offset.x) < 80 || Math.abs(info.offset.x) < Math.abs(info.offset.y)) return;
        goTo(index + (info.offset.x < 0 ? 1 : -1));
    };

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowRight") goTo(index + 1);
        if (e.key === "ArrowLeft") goTo(index - 1);
    };

    const arrowClass = "p-3 rounded-full border border-white/10 text-slate-300 hover:bg-white/5 hover:text-primary-light transition-colors";

    return (
        <section id="projects" className="py-32 border-t border-white/5 relative overflow-hidden">
            <Container>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                    <div className="text-center md:text-left">
                        <h2 className="text-4xl font-heading font-bold mb-4 text-slate-100">Projects</h2>
                        <p className="text-slate-300 max-w-xl">Tools I've built to solve real problems for agents, teams, and myself.</p>
                    </div>

                    <div className="flex items-center justify-center gap-3">
                        <button onClick={() => goTo(index - 1)} aria-label="Previous project" className={arrowClass}>
                            <ChevronLeft size={20} />
                        </button>
                        <span className="text-sm text-slate-400 tabular-nums w-12 text-center">
                            {index + 1} / {projects.length}
                        </span>
                        <button onClick={() => goTo(index + 1)} aria-label="Next project" className={arrowClass}>
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Project tabs */}
                <div role="tablist" aria-label="Projects" onKeyDown={onKeyDown} className="flex flex-wrap justify-center md:justify-start gap-2 mb-12">
                    {projects.map((p, i) => (
                        <button
                            key={p.id}
                            role="tab"
                            aria-selected={i === index}
                            tabIndex={i === index ? 0 : -1}
                            onClick={() => goTo(i)}
                            className={clsx(
                                "px-4 py-2 rounded-full text-sm font-medium border transition-colors",
                                i === index
                                    ? "bg-brand border-primary/40 text-slate-50"
                                    : "border-white/10 text-slate-400 hover:text-slate-200 hover:bg-white/5"
                            )}
                        >
                            {p.name}
                        </button>
                    ))}
                </div>

                <motion.div onPanEnd={onPanEnd} style={{ touchAction: "pan-y" }}>
                    <AnimatePresence mode="wait" custom={direction} initial={false}>
                        <motion.div
                            key={projects[index].id}
                            role="tabpanel"
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.25, ease: "easeOut" }}
                        >
                            <ProjectSlide project={projects[index]} />
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            </Container>
        </section>
    );
}
