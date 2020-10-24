import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import { AppDrawer } from "../components/AppDrawer";
import { useDrawer } from "../utils/useDrawer";
import { SupportForm } from "../components/SupportForm";

export const Home = () => {
  const { setChildren, openDrawer } = useDrawer();

  useEffect(() => {
    setChildren(<SupportForm />);
  }, [setChildren]);

  return (
    <div>
      <h1>Home Page</h1>
      <Button onClick={() => openDrawer()}>Open Support</Button>
      <AppDrawer></AppDrawer>
    </div>
  );
};
