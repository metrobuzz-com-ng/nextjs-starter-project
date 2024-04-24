"use client";

import { useModals } from "@/wrappers";

export default function Home() {
  const { setShowDefaultModal } = useModals();
  return (
    <main className="flex justify-center mt-4">
      <button
        type="button"
        className="border-none rounded-md bg-slate-900 p-md text-white cursor-pointer"
        onClick={() => setShowDefaultModal(true)}
      >
        Open modal
      </button>
    </main>
  );
}
