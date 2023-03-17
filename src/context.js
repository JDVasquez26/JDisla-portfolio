import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

//at the beginning, it'll be light mode
const INITIAL_STATE = { darkMode: false};

//creating a reducer
const themeReducer = (state, action) => {
  //action is to switch to darkmode
  switch (action.type) {
    case "TOGGLE": //if it's toggle, return new state darkMode, if it's false not darkMode (since we're toggling)
      return { darkMode: !state.darkMode };
    default: //default is to return whatever state it is currently in
      return state;
  }
};

//exporting our 
export const ThemeProvider = (props) => {
  //using the themeReducer as useReducer
  const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);
//returns the 
  return (
    //themeCotext and Provider method will be used in index.js to cover entire application, if you want to do specific 
    <ThemeContext.Provider value={{state, dispatch}}>
        {props.children}
        </ThemeContext.Provider>
  );
};