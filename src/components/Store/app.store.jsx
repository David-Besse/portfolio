import { createStore } from "zustand";
import zukeeper from "zukeeper";

const useStoreApp = createStore(
  zukeeper((set) => ({
    // initial state
    currentSection: "",
    contactModalisOpened: false, // Modal.jsx
    contactModalMessage: "message à lire", // Modal.jsx

    // actions
    setCurrentSection: (value) => set({ currentSection: value }),
    removeCurrentSection: () => set({ currentSection: "" }),
    setContactModalisOpened: () =>
      set((state) => ({ contactModalisOpened: !state.contactModalisOpened })),
    setContactModalMessage: (value) => set({ contactModalMessage: value }),
  }))
);

export default useStoreApp;
