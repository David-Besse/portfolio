import { create } from "zustand";

export const useStoreApp = create((set) => ({
  //initial state
  selectedSection: "",
  homeAnimated: false,

  //actions
  setSelectedSection: (value) => set(() => ({ selectedSection: value })),
  removeSelectedSection: () => set({ selectedSection: "" }),
  setHomeAnimated: () => set((state) => ({ homeAnimated: !state.homeAnimated }))
}));

