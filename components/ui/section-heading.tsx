import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
  titleClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  className,
  titleClassName
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", centered && "mx-auto text-center", className)}>
      <p className="mb-4 text-base font-medium uppercase tracking-[0.24em] text-sky-600 dark:text-sky-300">
        {eyebrow}
      </p>
      <h2 className={cn("text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl", titleClassName)}>
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">{description}</p>
      ) : null}
    </div>
  );
}
