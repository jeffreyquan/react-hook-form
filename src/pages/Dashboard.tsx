import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import { AppDrawer } from "../components/AppDrawer";
import { useDrawer } from "../utils/useDrawer";
import { useSupport } from "../utils/useSupport";
import { SupportForm } from "../components/SupportForm";

export const Dashboard = () => {
  const { setChildren, openDrawer } = useDrawer();

  const { resetSupportRequest } = useSupport();

  useEffect(() => {
    setChildren(<SupportForm />);
  }, [setChildren]);

  return (
    <div>
      <h1>Dashboard</h1>
      <Button
        onClick={() => {
          resetSupportRequest();
          openDrawer();
        }}
      >
        Open Support
      </Button>
      <AppDrawer></AppDrawer>
    </div>
  );
};
