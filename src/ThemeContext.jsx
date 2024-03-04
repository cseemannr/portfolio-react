import { useState, createContext, useContext, useEffect } from "react";

const getTheme = () => {
  const theme = localStorage.getItem("theme");

  if (!theme) {
    localStorage.setItem("theme", "light-theme");
    return "light-theme";
  } else {
    return theme;
  }
};

export const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "light-theme" ? "dark-theme" : "light-theme"
    );
  };

  useEffect(() => {
    const updateTheme = () => {
      localStorage.setItem("theme", theme);
    };

    updateTheme();
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app-container ${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
