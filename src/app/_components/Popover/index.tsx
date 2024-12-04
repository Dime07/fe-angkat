import { ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "../utils";

interface IPopover {
  children: ReactNode;
  content: ReactNode;
  className?: string;
  position?: "top" | "right" | "bottom" | "left";
}

const Popover = ({
  children,
  content,
  className,
  position = "left",
}: IPopover) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        contentRef.current &&
        !contentRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [contentRef]);

  return (
    <div className="relative">
      <button onClick={() => setIsOpen((prev) => !prev)}>{children}</button>
      {isOpen && (
        <div
          ref={contentRef}
          className={cn("absolute z-10 w-[120px]", className, {
            "right-0": position === "right",
            "top-full": position === "bottom",
            "left-0": position === "left",
            "bottom-full": position === "top",
          })}
          role="dialog"
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Popover;
