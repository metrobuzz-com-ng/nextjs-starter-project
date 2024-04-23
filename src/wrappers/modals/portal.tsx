"use client";

import { FC, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { PortalProps } from "@/types";

const Portal: FC<PortalProps> = (props) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("#portal");
    setMounted(true);
  }, []);

  return mounted && ref.current
    ? createPortal(
        <div className="portal-root">{props.children}</div>,
        ref.current
      )
    : null;
};

export default Portal;
