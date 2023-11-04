import { createStore } from "zustand";
import zukeeper from "zukeeper";

const useStoreApp = createStore(
  zukeeper((set) => ({
    // initial state
    currentSection: "",
    homeAnimated: false,
    contactModalisOpened: false, // Modal.jsx
    contactModalMessage: "message à lire",

    // actions
    setCurrentSection: (value) => set({ currentSection: value }),
    removeCurrentSection: () => set({ currentSection: "" }),
    setHomeAnimated: () =>
      set((state) => ({ homeAnimated: !state.homeAnimated })),
    setContactModalisOpened: () =>
      set((state) => ({ contactModalisOpened: !state.contactModalisOpened })),
    setContactModalMessage: (value) => set({ contactModalMessage: value }),
  }))
);

export default useStoreApp;
