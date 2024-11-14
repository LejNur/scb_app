import React from "react";

interface Props {
  message: string;
}

const ErrorComponent = ({ message }: Props) => {
  return (
    <div className="bg-dangerRed text-#DC3545 h-full flex items-center justify-center">
      <p className="text-lg font-bold">{message}</p>
    </div>
  );
};

export default ErrorComponent;
