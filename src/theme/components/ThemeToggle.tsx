import Switch from "@mui/material/Switch";

import { useThemeContext } from "@theme/index";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useThemeContext();

  return (
    <div style={{ position: "fixed", top: 10, right: 10, zIndex: 1000 }}>
      <Switch checked={isDarkMode} onChange={toggleTheme} />
    </div>
  );
};

export default ThemeToggle;
