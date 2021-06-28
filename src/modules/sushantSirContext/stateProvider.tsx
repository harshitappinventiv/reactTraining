import { createContext, useReducer, useState, useContext } from "react";
import { initialState } from "./reducer";

type AppProps = {
  children: React.ReactNode;
  initialState: any;
  reducer: any;
};

const StateContext = createContext(initialState);

function StateProvider({ initialState, reducer, children }: AppProps) {
  const [mode, setTheme] = useState("light");
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider
      value={{
        state,
        dispatch,
        mode,
        setTheme: () => setTheme(mode === "dark" ? "light" : "dark"),
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

export default StateProvider;

export const useStateValue = () => useContext(StateContext);
