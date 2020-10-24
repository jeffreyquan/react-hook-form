import React, { createContext, useState, useContext } from "react";

interface RequestType {
  name: string;
  message: string;
}

interface InputType {
  [name: string]: string;
}

const initialSupportState = {
  supportRequest: {
    name: "",
    message: "",
  },
  setSupportRequest: (request: InputType) => {},
  resetSupportRequest: () => {},
};

const SupportContext = createContext(initialSupportState);

const SupportProvider: React.FC = ({ children }) => {
  const [request, setRequest] = useState<RequestType>({
    name: "",
    message: "",
  });

  const setSupportRequest = (request: InputType) => {
    setRequest((prevRequest) => ({
      ...prevRequest,
      ...request,
    }));
  };

  const resetSupportRequest = () => {
    setSupportRequest({
      ...initialSupportState.supportRequest,
    });
  };

  const value = {
    supportRequest: request,
    setSupportRequest,
    resetSupportRequest,
  };

  return (
    <SupportContext.Provider value={value}>{children}</SupportContext.Provider>
  );
};

const useSupport = () => useContext(SupportContext);

export { useSupport, SupportProvider, SupportContext };
