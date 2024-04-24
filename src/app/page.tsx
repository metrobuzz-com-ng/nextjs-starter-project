"use client";

import { useModals } from "@/wrappers";
import { Button, Group } from "@mantine/core";

export default function Home() {
  const { setShowDefaultModal } = useModals();

  return (
    <Group justify="center" mt="md">
      <Button variant-="filled" onClick={() => setShowDefaultModal(true)}>
        Open modal
      </Button>
    </Group>
  );
}
