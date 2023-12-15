import { create } from "zustand";

const useStoreApp = create((set) => ({
  /* States */
  contactModal: { isOpened: false, message: "" }, // contactModal
  activeSection: "", // homePage
  theme: "light", // darkmode

  /* Setters */
  setContactModal: (value = "") =>
    set((state) => ({
      contactModal: { isOpened: !state.contactModal.isOpened, message: value },
    })),

  setActiveSection: (value) => set({ activeSection: value }),

  setTheme: (value) => set({ theme: value }),
}));

window.store = useStoreApp;

export default useStoreApp;
