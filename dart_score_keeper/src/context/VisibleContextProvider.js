import { createContext, useContext, useState } from 'react';

const VisibleContext = createContext({
  isVisible: false,
  toggleIsVisible: () => {},
});

export const useVisibilityStatus = () => useContext(VisibleContext);

const VisibleContextProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleIsVisible = () => setIsVisible(isVisible => !isVisible);

  return (
    <VisibleContext.Provider value={{ isVisible, toggleIsVisible }}>
      {children}
    </VisibleContext.Provider>
  );
};

export default VisibleContextProvider;