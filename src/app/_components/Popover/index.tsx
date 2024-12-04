import { ReactNode, useEffect, useRef } from "react";
import { cn } from "../utils";

interface IPopover {
  children: ReactNode;
  content: ReactNode;
  className?: string;
  position?: "top" | "right" | "bottom" | "left";
  onOpen: () => void;
  onClose: () => void;
  open: boolean;
}

const Popover = ({
  children,
  content,
  className,
  position = "left",
  onOpen,
  onClose,
  open,
}: IPopover) => {
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        contentRef.current &&
        !contentRef.current.contains(event.target as Node)
      ) {
        onClose();
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
      <button onClick={onOpen}>{children}</button>
      {open && (
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
