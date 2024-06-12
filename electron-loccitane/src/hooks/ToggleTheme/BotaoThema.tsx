import { useContext, useState } from "react";
import { ThemeContext } from "../../hooks/ToggleTheme/toggleTheme";


function BotaoTema() {
    const [menuOpen, setMenuOpen] = useState(false);
    const themeContext = useContext(ThemeContext);
  
    if (!themeContext) {
      // Se o contexto for undefined, você pode tratar isso aqui, se necessário.
      // Por exemplo, retornar uma mensagem de erro ou renderizar um componente de fallback.
      return <div>Error: ThemeContext not available</div>;
    }
  
    const { toggleTheme, theme } = themeContext;
  
    
    return <button onClick={toggleTheme}>Toggle Theme</button>;
  }
  
  export default BotaoTema;