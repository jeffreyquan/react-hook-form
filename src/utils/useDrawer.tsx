import React, { createContext, useState, useContext } from "react";

const initialDrawerState = {
  drawerOpen: false,
  toggleDrawer: () => {},
  closeDrawer: () => {},
  openDrawer: () => {},
  injectedChildren: null as React.ReactNode,
  setChildren: (children: React.ReactNode) => {},
};

const DrawerContext = createContext(initialDrawerState);

const DrawerProvider: React.FC = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const [injectedChildren, setChildren] = useState<React.ReactNode>();

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const openDrawer = () => {
    setDrawerOpen(true);
  };

  const value = {
    drawerOpen,
    toggleDrawer,
    closeDrawer,
    openDrawer,
    injectedChildren,
    setChildren,
  };

  return (
    <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>
  );
};

const useDrawer = () => useContext(DrawerContext);

export { useDrawer, DrawerProvider, DrawerContext };
