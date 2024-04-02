import { cn } from "../../../../../utils/cn";
import { GiExpand } from "react-icons/gi";

interface Props {
  className?: string;
  src: string;
}

export const CardBanner = ({ className, src }: Props) => {
  return (
    <div
      className={cn(
        "relative group/banner flex w-full items-center justify-center mt-4 rounded-lg overflow-hidden duration-200 cursor-pointer",
        className
      )}
    >
      <i className="absolute z-20 invisible group-hover/banner:visible duration-200 text-sm group-hover/banner:text-3xl text-white">
        <GiExpand />
      </i>
      <img
        src={src}
        alt={src}
        className={cn(
          "w-full h-56 object-cover z-10 object-top group-hover/banner:brightness-[.3] duration-200"
        )}
      />
    </div>
  );
};
