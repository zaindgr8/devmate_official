import React, { useState } from "react";
import FormApp from "./FormApp";

const FormModal = () => {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="relative bg-white dark:bg-[#18181b] rounded-2xl shadow-lg flex flex-col w-full max-w-xl max-h-[90vh]"
        style={{ minWidth: 0 }}
      >
        {/* Header with Close Button */}
        <div className="flex items-center justify-end p-4 pb-0 sticky top-0 bg-white dark:bg-[#18181b] rounded-t-2xl z-10">
          <button
            className="text-gray-400 hover:text-red-500 text-2xl font-bold focus:outline-none transition"
            onClick={() => setOpen(false)}
            aria-label="Cancel lead form"
          >
            &times;
          </button>
        </div>
        {/* Scrollable Form Content */}
        <div
          className="overflow-y-auto px-6 pb-6 pt-2"
          style={{ maxHeight: "calc(90vh - 56px)" }}
        >
          <FormApp />
        </div>
      </div>
    </div>
  );
};

export default FormModal;
