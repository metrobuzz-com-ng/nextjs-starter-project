"use client";

import { useModals } from "@/wrappers";
import { Button, Box } from "@mui/material";

export default function Home() {
  const { setShowDefaultModal } = useModals();
  return (
    <Box justifyContent="center" mt={4} display="flex">
      <Button variant="contained" onClick={() => setShowDefaultModal(true)}>
        Hello world
      </Button>
    </Box>
  );
}
