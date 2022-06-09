import { createContext, useState } from "react";

const DrawerContext = createContext();
export function DrawerProvider({ children }) {
  const [state, setState] = useState({
    animation: "overlay",
    direction: "top",
    dimmed: true,
    visible: false,
  });

  const showDrawer = () => {
    setState((prevState) => ({
      ...prevState,
      visible: !state?.visible,
    }));
  };
  return (
    <DrawerContext.Provider value={{ state, showDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
}

export default DrawerContext;
