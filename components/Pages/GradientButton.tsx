import { BiArrowToRight } from "react-icons/bi";
import { twMerge } from "tailwind-merge";

export function GradientButton({
  text,
  onClick,
  className,
}: {
  text: string;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      className={twMerge(
        `self-center text-xs relative px-6 py-[6px] font-semibold text-white/90
      rounded-lg group/btn overflow-hidden flex items-center`,
        className,
      )}
      onClick={onClick}
    >
      <span className="z-10 whitespace-nowrap group-hover/btn:-translate-x-2 transition-all duration-300">
        {text}
      </span>
      <div
        className="
        absolute inset-0 bg-gradient-to-r 
        from-red-800 via-red-950 to-red-800
        bg-[length:200%_auto] bg-[position:0%_0]
        group-hover/btn:bg-[position:-100%_0] transition-all duration-500 ease-in-out
      "
      />
      <BiArrowToRight
        className="absolute right-3 translate-x-full opacity-0 
        group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-500"
      />
    </button>
  );
}
