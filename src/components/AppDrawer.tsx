import React from "react";
import Drawer from "@material-ui/core/Drawer";
import { useDrawer } from "../utils/useDrawer";

export const AppDrawer: React.FC = () => {
  const { injectedChildren, drawerOpen, closeDrawer } = useDrawer();

  return (
    <React.Fragment>
      <Drawer anchor={"right"} open={drawerOpen} onClose={() => closeDrawer()}>
        {injectedChildren}
      </Drawer>
    </React.Fragment>
  );
};
