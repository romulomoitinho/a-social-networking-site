import { createContext, useContext, useState, ReactNode } from 'react';

type MenuContextType = {
  menuOpen: boolean;
  toggleMenu: () => void;
};

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export function useMenu(): MenuContextType {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
}

type MenuProviderProps = {
  children: ReactNode;
};

export function MenuProvider({ children }: MenuProviderProps) {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  const value = { menuOpen, toggleMenu };

  return (
    <MenuContext.Provider value={value}>
      {children}
    </MenuContext.Provider>
  );
}
