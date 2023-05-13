import { createContext, useState } from "react";

export const ShortlistedContext = createContext();

// eslint-disable-next-line react/prop-types
export const ShortlistProvider = ({ children }) => {
  const [shortlisted, setShortlisted] = useState([]);

  return (
    <ShortlistedContext.Provider value={{ shortlisted, setShortlisted }}>
      {children}
    </ShortlistedContext.Provider>
  );
};
