import { createContext, useReducer } from "react";
import uiRed, { uiState } from "../reducers/ui-red";

export const uiCtx = createContext({
  state: uiState,
  dispatch: () => {},
});

const UiProvider = ({ children }) => {
  const [state, dispatch] = useReducer(uiRed, uiState);
  return (
    <uiCtx.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </uiCtx.Provider>
  );
};

export default UiProvider;
