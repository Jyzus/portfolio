import { cn } from "../../../../../utils/cn";
import { TbExternalLink } from "react-icons/tb";

interface Props {
  className?: string;
  children: React.ReactNode;
  link?: string;
}

export const CardTitle = ({ className, children, link }: Props) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}{" "}
      {link && (
        <a href={link} target="_blank" className="inline-block cursor-pointer">
          <i>
            <TbExternalLink />
          </i>
        </a>
      )}
    </h4>
  );
};
