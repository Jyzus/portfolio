import { cn } from "../../../../../utils/cn";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const CardDescription = ({ className, children }: Props) => {
  return (
    <p
      className={cn(
        "line-clamp-2 mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
