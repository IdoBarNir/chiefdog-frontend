import { createContext } from "react";

import { ThemeContextType } from "@theme/types";

const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleTheme: () => {},
});

export default ThemeContext;
