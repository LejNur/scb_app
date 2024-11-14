import React from "react";

interface ModalProps {
  message: string;
  className?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

function Modal({ message, className, onConfirm, onCancel }: ModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <p className="mb-4 text-center text-gray-700">{message}</p>
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={onConfirm}
            className="bg-dangerRed text-white px-4 py-2 rounded hover:bg-red-700 focus:outline-none"
          >
            Confirm
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 focus:outline-none"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
