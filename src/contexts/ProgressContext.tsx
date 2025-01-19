import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the context and the state type
interface ProgressContextType {
  progress: number;
  setProgress: (progress: number) => void;
}

// Default context value
const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

// Create a provider component
export const ProgressProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState(0);

  return (
    <ProgressContext.Provider value={{ progress, setProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};

// Custom hook to use the progress context
export const useProgress = (): ProgressContextType => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
