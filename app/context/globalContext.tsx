"use client";
import React, { useState, createContext, ReactNode } from 'react';

interface IGlobalContextProps {
  wallet: string;
  id: string;
  setWallet: (wallet: string) => void;
  setId: (id: string) => void;
}

export const GlobalContext = createContext<IGlobalContextProps>({
  wallet: "",
  id: "",
  setWallet: () => {},
  setId: () => {},
});

interface IGlobalContextProviderProps {
  children: ReactNode;
}

export const GlobalContextProvider: React.FC<IGlobalContextProviderProps> = (props) => {
  const [currentWallet, setCurrentWallet] = useState<string>("MASTER");
  const [currentId, setCurrentId] = useState<string>("0.03065441");

  return (
    <GlobalContext.Provider
      value={{
        wallet: currentWallet,
        id: currentId,
        setWallet: setCurrentWallet,
        setId: setCurrentId,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
