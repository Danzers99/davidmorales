import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { Container } from "../ui/Container";
import { Badge } from "../ui/Badge";

type Role = {
    company: string;
    role: string;
    start: string;
    end?: string;
    description: string;
};

// Oldest first; the timeline reads left to right toward the present.
const roles: Role[] = [
    {
        company: "Savvas Learning Company",
        role: "Technical Support Specialist",
        start: "Aug 2022",
        end: "Dec 2022",
        description: "Achieved a 95% first-contact resolution rate."
    },
    {
        company: "Capital One",
        role: "Customer Service Representative",
        start: "Jan 2023",
        end: "Oct 2023",
        description: "Resolved account and technical issues within established service targets."
    },
    {
        company: "Mad Mobile",
        role: "Technical Support Specialist",
        start: "Oct 2023",
        end: "Apr 2024",
        description: "Technical support for the CAKE restaurant technology platform."
    },
    {
        company: "Mad Mobile",
        role: "Support Operations Coordinator",
        start: "Apr 2024",
        end: "Jun 2025",
        description: "Audited cases, documented workflows, and coordinated escalations. Triaged and resolved CAKE platform issues across support channels."
    },
    {
        company: "Mad Mobile",
        role: "Senior Technical Support Specialist",
        start: "Jun 2025",
        end: "Mar 2026",
        description: "Promoted after two years of meeting SLA targets. Audited case workflows, tracked SLA/KPI metrics, and mentored new agents."
    },
    {
        company: "ShyftOff",
        role: "Agent Support Coordinator",
        start: "Mar 2026",
        end: "Jul 2026",
        description: "Built issue-tracking workflows, training materials, and AI-enabled QA and mock-call tools. Supported operational readiness for the NationsBenefits campaign."
    },
    {
        company: "ShyftOff",
        role: "Operations Manager",
        start: "Aug 2026",
        description: "Operations management for the PhyNet Dermatology campaign: production readiness, escalation review, root-cause analysis, and quality tracking across 9,400+ interactions."
    }
];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function toMonthIndex(label: string) {
    const [mon, year] = label.split(" ");
    return Number(year) * 12 + MONTHS.indexOf(mon);
}

function duration(start: string, end?: string) {
    const now = new Date();
    const endIdx = end ? toMonthIndex(end) : now.getFullYear() * 12 + now.getMonth();
    const months = Math.max(1, endIdx - toMonthIndex(start) + 1);
    const y = Math.floor(months / 12);
    const m = months % 12;
    return [y && `${y} yr${y > 1 ? "s" : ""}`, m && `${m} mo${m > 1 ? "s" : ""}`].filter(Boolean).join(" ");
}

// Consecutive roles at the same company share one label above the line.
const companyGroups = roles.reduce<{ company: string; span: number }[]>((groups, r) => {
    const last = groups[groups.length - 1];
    if (last && last.company === r.company) last.span++;
    else groups.push({ company: r.company, span: 1 });
    return groups;
}, []);

export function Experience() {
    const [active, setActive] = useState(roles.length - 1);
    const trackRef = useRef<HTMLDivElement>(null);
    const job = roles[active];

    // On narrow screens the track scrolls; keep the selected role in view (starts at the present).
    useEffect(() => {
        const track = trackRef.current;
        const node = track?.querySelectorAll<HTMLElement>('[role="tab"]')[active];
        if (!track || !node) return;
        const target = node.offsetLeft - (track.clientWidth - node.offsetWidth) / 2;
        track.scrollTo({ left: target, behavior: "smooth" });
    }, [active]);

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowRight") setActive(i => Math.min(roles.length - 1, i + 1));
        if (e.key === "ArrowLeft") setActive(i => Math.max(0, i - 1));
    };

    const cols = { gridTemplateColumns: `repeat(${roles.length}, minmax(150px, 1fr))` };

    return (
        <section id="experience" className="py-24 border-t border-white/5 bg-background">
            <Container>
                <h2 className="text-3xl font-heading font-bold mb-4 text-center text-slate-100">
                    Experience
                </h2>
                <p className="text-center text-slate-400 mb-12">
                    {roles[0].start.split(" ")[1]} to today. Select a role for details.
                </p>

                <div ref={trackRef} className="relative overflow-x-auto pb-4 -mx-6 px-6 sm:mx-0 sm:px-0 [scrollbar-width:thin]">
                    <div style={{ minWidth: roles.length * 158 }}>
                        {/* Company bands */}
                        <div className="grid gap-x-2 mb-6" style={cols}>
                            {companyGroups.map(g => (
                                <div
                                    key={g.company + g.span}
                                    style={{ gridColumn: `span ${g.span}` }}
                                    className={clsx(
                                        "text-center text-xs font-semibold uppercase tracking-wider pb-2 border-b-2 transition-colors",
                                        g.company === job.company ? "text-primary-light border-primary/60" : "text-slate-500 border-white/10"
                                    )}
                                >
                                    {g.company}
                                </div>
                            ))}
                        </div>

                        {/* Line + nodes */}
                        <div className="relative" role="tablist" aria-label="Career timeline" onKeyDown={onKeyDown}>
                            <div className="absolute left-0 right-0 top-[9px] h-[2px] bg-white/10" />
                            <motion.div
                                className="absolute left-0 top-[9px] h-[2px] bg-gradient-to-r from-primary/20 to-primary"
                                animate={{ width: `${((active + 0.5) / roles.length) * 100}%` }}
                                transition={{ type: "spring", stiffness: 200, damping: 30 }}
                            />
                            <div className="grid gap-x-2 relative" style={cols}>
                                {roles.map((r, i) => {
                                    const isActive = i === active;
                                    const isCurrent = !r.end;
                                    return (
                                        <button
                                            key={r.role + r.start}
                                            role="tab"
                                            aria-selected={isActive}
                                            tabIndex={isActive ? 0 : -1}
                                            onClick={() => setActive(i)}
                                            className="group flex flex-col items-center text-center px-2 focus:outline-none"
                                        >
                                            <span className="relative flex h-5 w-5 items-center justify-center">
                                                {isCurrent && (
                                                    <span className="absolute inline-flex h-full w-full rounded-full bg-primary/40 animate-ping" />
                                                )}
                                                <span
                                                    className={clsx(
                                                        "relative rounded-full border-2 transition-all",
                                                        isActive
                                                            ? "h-5 w-5 bg-primary border-primary shadow-[0_0_16px_rgba(121,78,194,0.7)]"
                                                            : i < active
                                                                ? "h-3.5 w-3.5 bg-primary/40 border-primary/60 group-hover:bg-primary/70"
                                                                : "h-3.5 w-3.5 bg-background border-white/30 group-hover:border-primary/60",
                                                        "group-focus-visible:ring-2 group-focus-visible:ring-primary/60 group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-background"
                                                    )}
                                                />
                                            </span>
                                            <span className={clsx(
                                                "mt-4 text-xs font-medium transition-colors",
                                                isActive ? "text-primary-light" : "text-slate-500"
                                            )}>
                                                {r.start.split(" ")[1]}
                                            </span>
                                            <span className={clsx(
                                                "mt-1 text-sm font-semibold leading-snug transition-colors",
                                                isActive ? "text-slate-50" : "text-slate-400 group-hover:text-slate-200"
                                            )}>
                                                {r.role}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Detail card */}
                <div className="max-w-3xl mx-auto mt-10 min-h-[190px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            role="tabpanel"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.2 }}
                            className="p-6 md:p-8 rounded-xl bg-white/5 border border-white/5"
                        >
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-slate-100">{job.role}</h3>
                                    <p className="text-sm font-medium text-slate-400 mt-1">{job.company}</p>
                                </div>
                                <div className="flex flex-wrap gap-2 md:justify-end shrink-0">
                                    <Badge>{job.start} - {job.end ?? "Present"}</Badge>
                                    <Badge className="text-slate-400">{duration(job.start, job.end)}</Badge>
                                </div>
                            </div>
                            <p className="text-slate-300 leading-relaxed">{job.description}</p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </Container>
        </section>
    );
}
