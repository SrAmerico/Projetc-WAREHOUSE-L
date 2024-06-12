// toggleTheme.tsx

import React, { useState, ReactNode, createContext } from "react";
import light from "../../styles/themes/light";
import dark from "../../styles/themes/dark";
import { ThemeProvider as StyledThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from "../../utils/usePersistedState";

// Definindo a interface para as props do ProviderTheme
interface ProviderThemeProps {
  children: ReactNode;
}

// Definindo a interface para o contexto do ProviderTheme
interface ThemeContextProps {
  toggleTheme: () => void;
  theme: DefaultTheme;
}

// Criando um contexto para o tema
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

// Definindo o componente ProviderTheme
const ProviderTheme: React.FC<ProviderThemeProps> = ({ children }) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  // Fornecendo o contexto para os componentes filhos
  const contextValue: ThemeContextProps = {
    toggleTheme,
    theme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ProviderTheme, ThemeContext };