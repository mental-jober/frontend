import { create } from "zustand";

export type ModalType =
  | "NotFoundMember"
  | "DeletePermission"
  | "ExitPage"
  | "AddLink"
  | "DeletePage"
  | "GetLayout"
  | "Logout";

export interface MemberType {
  id: number;
  username: string;
  email: string;
  auths: string;
}

interface ModalData {
  data: string;
  onDeleteConfirm?: () => void;
}

interface ModalStore {
  type: ModalType | null;
  isOpen: boolean;
  data: ModalData | null;
  onOpenModal: (type: ModalType, data?: ModalData) => void;
  onCloseModal: () => void;
}

export const useModal = create<ModalStore & { Callback?: () => void }>(
  (set) => ({
    type: null,
    isOpen: false,
    data: null,
    onOpenModal: (type, data) => set({ isOpen: true, type, data }),
    onCloseModal: () => set({ isOpen: false, type: null, data: null }),
  }),
);
