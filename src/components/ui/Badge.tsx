import clsx from 'clsx';
import type { ReactNode } from 'react';

interface BadgeProps {
    children: ReactNode;
    className?: string;
}

export function Badge({ children, className }: BadgeProps) {
    return (
        <div className={clsx(
            "inline-flex items-center gap-2 px-3 py-1 rounded-full",
            "bg-white/5 border border-white/10",
            "text-slate-200 text-sm font-medium",
            className
        )}>
            {children}
        </div>
    );
}
