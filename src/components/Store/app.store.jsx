import { createStore } from "zustand";
import zukeeper from "zukeeper";

const useStoreApp = createStore(
  zukeeper((set) => ({
    // initial state
    contactModalisOpened: false, // Modal.jsx
    contactModalMessage: "message à lire", // Modal.jsx

    // actions
    setContactModalisOpened: () =>
      set((state) => ({ contactModalisOpened: !state.contactModalisOpened })),
    setContactModalMessage: (value) => set({ contactModalMessage: value }),
  }))
);

export default useStoreApp;
