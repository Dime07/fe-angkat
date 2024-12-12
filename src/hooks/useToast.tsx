"use client";

import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";

interface Toast {
  message: string;
  type: "success" | "error";
}

interface IToastContext {
  toasts: Toast[];
  addToast: (toast: Toast) => Promise<void>;
}

export const ToastContext = createContext<IToastContext | undefined>(undefined);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = ({ message, type }: Toast): Promise<void> => {
    return new Promise((resolve) => {
      setToasts([...toasts, { message, type }]);
      setTimeout(() => {
        resolve();
      }, 500);
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setToasts(toasts.slice(1));
    }, 2000);

    return () => clearTimeout(timer);
  }, [toasts]);

  return (
    <ToastContext.Provider value={{ toasts, addToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
