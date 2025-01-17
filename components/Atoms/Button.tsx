"use client";

interface ButtonProps {
  id?: string;
  label: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

export default function Button({
  label,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  return (
    <button type={type} onClick={onClick} className={className}>
      {label}
    </button>
  );
}
