import {
  createContext,
  useReducer,
  useContext,
  ReactNode,
  FC,
  Dispatch,
} from "react";

interface initialStateProps {
  cards: object[];
  count: number;
  error: null | object;
  searchTerm: string;
  isLoading: boolean;
  nextPageURL: string;
}

export const initialState = {
  cards: [],
  count: 0,
  error: null,
  searchTerm: "",
  isLoading: true,
  nextPageURL: "",
};

export const GlobalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "UPDATE_VALUE":
      return {
        ...state,
        ...payload,
      };
    case "TOGGLE_LOADING":
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    default:
      return state;
  }
};

interface GlobalContextProps {
  state: initialStateProps;
  dispatch: Dispatch<any>;
}

export const GlobalContext = createContext<GlobalContextProps>({
  state: initialState,
  dispatch: () => null,
});

interface GlobalContextProviderProps {
  children: ReactNode;
}

export const GlobalContextProvider: FC<GlobalContextProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);

export default useGlobalContext;
