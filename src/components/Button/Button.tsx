import React, { forwardRef, type ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  icon?: ReactNode;
  classes?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, icon, classes, ...props }, ref) => {
    return (
      <div className="relative inline-block">
        <button
          ref={ref}
          className={` flex items-center gap-2 ${classes ?? ""}`}
          {...props}
        >
          {icon && <span>{icon}</span>}

          {children && (
            <span
              className={`text-[#858585] transition-all duration-300 ease-in-out truncate whitespace-nowrap  `}
            >
              {children}
            </span>
          )}
        </button>
      </div>
    );
  },
);
