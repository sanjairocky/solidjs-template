import { createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";

export const AppContext = createContext();

export const useApp = () => useContext(AppContext);

export const AppContextProvider = (props) => {
  const [state, setState] = createStore({
    header: true,
    footer: true,
  });
  const appState = [
    state,
    {
      setState,
      toogleHeader: () => setState("header", (prev) => !prev),
      toogleFooter: () => setState("footer", (prev) => !prev),
    },
  ];

  return (
    <AppContext.Provider value={appState}>{props.children}</AppContext.Provider>
  );
};
