import React from "react";

interface ModalProps {
  message: string;

  onConfirm: () => void;
  onCancel: () => void;
}

function Modal({ message, onConfirm, onCancel }: ModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
      <div className="bg-smokyBlack rounded-sm shadow-lg p-6 w-96">
        <p className="mb-4 text-center text-softWhite">{message}</p>
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={onConfirm}
            className="bg-dangerRed text-softWhite px-4 py-2  hover:bg-red-700 focus:outline-none"
          >
            Confirm
          </button>
          <button
            onClick={onCancel}
            className="bg-chartreuse text-smokyBlack px-4 py-2  hover:bg-chartreuseDarker focus:outline-none"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
