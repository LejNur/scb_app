import React, { useEffect } from "react";

interface ToastProps {
  message: string;
  onClose?: () => void;
  className: string;
}

function Toast({ message, onClose, className }: ToastProps) {
  return (
    <div className="flex justify-self-end mr-4 animate-fade-left animate-once animate-ease-linear">
      <div
        id="toast"
        className={`flex items-top w-full max-w-xs p-4 mb-4 ${className} rounded-sm shadow  `}
        role="alert"
      >
        <div className="ms-3 text-md font-medium">{message}</div>

        <button
          type="button"
          className={`ms-auto -mx-1.5 -my-1.5 bg-transparent inline-flex items-center justify-center h-8 w-8 ${className}`}
          onClick={onClose}
        >
          <span className="sr-only">Close</span>
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Toast;
