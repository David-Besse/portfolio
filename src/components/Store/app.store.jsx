import { create } from "zustand";
import zukeeper from "zukeeper";

export const useStoreApp = create(
  zukeeper((set) => ({
    // initial state
    selectedSection: "",
    homeAnimated: false,

    // actions
    setSelectedSection: (value) => set(() => ({ selectedSection: value })),
    removeSelectedSection: () => set({ selectedSection: "" }),
    setHomeAnimated: () =>
      set((state) => ({ homeAnimated: !state.homeAnimated })),
  }))
);
