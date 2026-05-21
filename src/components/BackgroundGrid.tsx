import { cn } from "@/lib/utils";

type BackgroundGridProps = {
  className?: string;
};

export const BackgroundGrid = ({ className }: BackgroundGridProps) => {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:80px_80px]",
        className
      )}
    />
  );
};
