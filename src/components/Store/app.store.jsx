import { createStore } from "zustand";
import zukeeper from "zukeeper";

const useStoreApp = createStore(
  zukeeper((set) => ({
    // initial state
    currentSection: '',
    homeAnimated: false,

    // actions
    setCurrentSection: (value) => set(() => ({ currentSection: value })),
    removeCurrentSection: () => set({ currentSection: "" }),
    setHomeAnimated: () =>
      set((state) => ({ homeAnimated: !state.homeAnimated })),
  }))
);

export default useStoreApp;
