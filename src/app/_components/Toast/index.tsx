"use client";
import { useToast } from "@/hooks/useToast";
import { Icon } from "@iconify/react/dist/iconify.js";
import { cn } from "../utils";

const Toast = () => {
  const { toasts } = useToast();
  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 z-50 p-4 space-y-2">
      {toasts.map((toast, index) => (
        <div
          key={toast.message + index}
          className={cn(
            "bg-white border border-neutral-100 rounded py-1 px-3 shadow-sm flex gap-2 items-start",
            {
              "border-green-500": toast.type === "success",
              "border-red-500": toast.type === "error",
            },
            "animate-enter"
          )}
        >
          <Icon
            icon="material-symbols:info-outline"
            className={cn("mt-[2px]", {
              "text-green-500": toast.type === "success",
              "text-red-500": toast.type === "error",
            })}
          />
          <p className="font-medium text-sm">{toast.message}</p>
        </div>
      ))}
    </div>
  );
};

export default Toast;
