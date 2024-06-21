import { Dispatch, SetStateAction, createContext } from "react";

type themeContextType = {
  darkTheme: boolean;
  setDarkTheme: Dispatch<SetStateAction<boolean>>;
};

const themeContext = createContext<themeContextType>({
  darkTheme: false,
  setDarkTheme: () => null,
});

export default themeContext;
