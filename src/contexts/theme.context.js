import { createContext, useState } from "react";

const ThemeContext = createContext(null);
export default ThemeContext;

//
export const ThemeContextProvider = (props) => {
 const [theme, setTheme] = useState("default");
 //
 //
 const multipleValues = {
   themeState: [theme, setTheme]
 };
 //
 //
 return (
   <ThemeContext.Provider value={multipleValues}>
     {props.children}
   </ThemeContext.Provider>
 );
};
