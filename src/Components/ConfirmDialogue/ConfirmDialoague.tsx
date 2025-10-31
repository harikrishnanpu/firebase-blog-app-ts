

import React from "react";

interface ConfirmDialogProps {
  isOpen: boolean;
  title?: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  isOpen,
  title = "Confirm Action",
  message,
  confirmText = "Yes",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md animate-fadeIn">
        <div className="p-6 text-center">
          {title && <h2 className="text-xl font-bold text-gray-800 mb-3">{title}</h2>}
          <p className="text-gray-600 mb-6">{message}</p>

          <div className="flex justify-center gap-4">
            <button
              onClick={onCancel}
              className="px-5 py-2 rounded-lg bg-gray-200 text-gray-700 font-medium hover:bg-gray-300 transition"
            >
              {cancelText}
            </button>
            <button
              onClick={onConfirm}
              className="px-5 py-2 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition"
            >
              {confirmText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
