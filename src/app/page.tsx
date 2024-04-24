"use client";

import { useModals } from "@/wrappers";
import Button from "react-bootstrap/Button";

export default function Home() {
  const { setShowDefaultModal } = useModals();
  return (
    <main className="d-flex justify-content-center align-items-center mt-4">
      <Button variant="primary" onClick={() => setShowDefaultModal(true)}>
        Open modal
      </Button>
    </main>
  );
}
