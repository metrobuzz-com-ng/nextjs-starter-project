import { ReactNode } from "react";

export type ChildrenProps = {
  children: ReactNode;
};

export type PortalProps = ChildrenProps;

export type ModalBaseProps = {
  opened: boolean;
  onClose: () => void;
};
