import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

export const Section = ({ id, title, children, className }: SectionProps) => {
  return (
    <section id={id} className={cn("content-section", className)}>
      {title && (
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 pb-3 border-b-2 border-secondary">
          {title}
        </h2>
      )}
      <div className="prose prose-lg max-w-none">{children}</div>
    </section>
  );
};
