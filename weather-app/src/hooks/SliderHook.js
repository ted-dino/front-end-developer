import create from "zustand";

const useStore = create((set) => ({
  isOpen: true,

  closeSlider: () =>
    set((state) => {
      isOpen: state.isOpen = false;
    }),
  openSlider: () =>
    set((state) => {
      isOpen: state.isOpen = true;
    }),
}));

export default useStore;
