import { createContext, useContext } from "react";
import { doctors } from "../assets/assets";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const currencySynmbol = '$'
  const value = {
    doctors,
    currencySynmbol
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
