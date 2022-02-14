import {
  createContext,
  Dispatch,
} from 'react';

type stateType = {
  isLoading: boolean,
  isSignout: boolean,
  userToken: string | null,
};

const initialState: stateType = {
  isLoading: false,
  isSignout: false,
  userToken: null,
}

export const AuthContext = createContext<{
  state: stateType,
  dispatch: Dispatch<any>,
}>({
  state: initialState,
  dispatch: () => null,
});
