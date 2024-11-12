"use client";

interface InputProps {
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function Input({ type = "text", value, onChange }: InputProps) {
  return <input type={type} value={value} onChange={onChange} />;
}
