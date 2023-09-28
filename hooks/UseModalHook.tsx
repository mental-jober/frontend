import { create } from "zustand";

export type ModalType =
  | "NotFoundMember"
  | "DeletePermission"
  | "ExitPage"
  | "AddLink"
  | "DeletePage"
  | "GetLayout"
  | "Logout";

interface ModalStore {
  type: ModalType | null;
  isOpen: boolean;
  onOpenModal: (type: ModalType) => void;
  onCloseModal: () => void;
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  isOpen: false,
  onOpenModal: (type) => set({ isOpen: true, type }),
  onCloseModal: () => set({ isOpen: false, type: null }),
}));
