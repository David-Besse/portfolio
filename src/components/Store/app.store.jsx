import { create } from "zustand";

const useStoreApp = create((set) => ({
  contactModalisOpened: false,
  contactModalMessage: "message à lire",
  activeSection: "",

  /**
   * Sets the value of contactModalisOpened in the state to the opposite of its current value.
   *
   * @return {void} No return value
   */
  setContactModalisOpened: () =>
    set((state) => ({
      contactModalisOpened: !state.contactModalisOpened,
    })),

  /**
   * Sets the value of the `contactModalMessage` property in the state.
   *
   * @param {any} value - The new value for the `contactModalMessage` property.
   * @return {void} This function does not return a value.
   */
  setContactModalMessage: (value) => set({ contatModalMessage: value }),

  /**
   * Sets the active section to the specified value.
   *
   * @param {type} value - The value to set the active section to.
   * @return {type} - The updated value of the active section.
   */
  setActiveSection: (value) => set({ activeSection: value }),
}));

window.store = useStoreApp;

export default useStoreApp;
