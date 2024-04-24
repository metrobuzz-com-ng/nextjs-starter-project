"use client";

import { ChildrenProps, ModalBaseProps } from "@/types";

const Modal = ({
  opened,
  onClose = () => {},
  children,
}: ModalBaseProps & ChildrenProps) => {
  if (!opened) return <></>;

  return (
    <div
      className="fixed z-[999] top-0 w-screen h-screen overscroll-none flex justify-center items-center backdrop-blur-sm opacity-80 bg-slate-300"
      onClick={onClose}
      role="document"
    >
      <div
        className="bg-white p-4 w-[600px]"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
