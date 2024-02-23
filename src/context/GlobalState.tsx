import { createContext, useContext, useState, useEffect, FC, ReactNode } from "react";

const GlobalStateContext = createContext<any | undefined>(undefined);



export const GlobalProvider: FC<any> = ({ children }) => {
    const [selectedState, setSelectedState] = useState(null);
    const [theme, setTheme] = useState('light'); 

    const contextValue = {
        selectedState,
        setSelectedState,
        theme,
        setTheme 
    };

    useEffect(() => {
        console.log("Selected state changed:", selectedState);
    }, [selectedState]);

    return (
        <GlobalStateContext.Provider value={contextValue}>
            {children}
        </GlobalStateContext.Provider>
    );
};

export const useSelectedState = () => {
    const context = useContext(GlobalStateContext);
  
    return context;
};
