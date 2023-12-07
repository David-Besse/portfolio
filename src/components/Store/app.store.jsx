import { create } from "zustand";

const useStoreApp = create((set) => ({
  // State
  contactModal: { isOpened: false, message: "" },
  activeSection: "",
  theme: "light",

  /**
   * Set the state of the contact modal.
   *
   * @param {any} value - The value to be assigned to the contact modal state.
   * @return {void} This function does not return anything.
   */
  setContactModal: (value = "") =>
    set((state) => ({
      contactModal: { isOpened: !state.contactModal.isOpened, message: value },
    })),

  /**
   * Sets the active section to the specified value.
   *
   * @param {type} value - The value to set the active section to.
   * @return {type} - The updated value of the active section.
   */
  setActiveSection: (value) => set({ activeSection: value }),

  /**
   * Sets the theme to the specified value.
   * 
   * @param {type} value - The value to set the theme to.
   * @return {type} - The updated value of the theme.
   */
  setTheme: (value) => set({ theme: value }),
}));

window.store = useStoreApp;

export default useStoreApp;
