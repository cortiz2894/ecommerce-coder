import React, { createContext,useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
    //Custom Provider

    const [theme, setTheme] = useState('light')

    const handleTheme = (e) => {
        console.log("Funcion desde context: ",e.target.checked)
        e.target.checked ? setTheme('light') : setTheme('dark')
    }

    const data = {
        theme,
        handleTheme
    }
    
    return(
        <ThemeContext.Provider  value={data}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeProvider }
export default ThemeContext;