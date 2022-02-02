import React, { Reducer, useMemo } from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { NavigationContainer } from '@react-navigation/native';

import { SideMenuNavigator } from './src/navigators';
import { AuthContext } from './src/context';
import {
  AuthContexType,
} from './src/interfaces';

const queryClient = new QueryClient();

type stateType = {
  isLoading: boolean,
  isSignout: boolean,
  userToken: string | null,
};

type actionType = {
  type: string,
  userToken?: string | null,
}

const App: React.FC = () => {
  const reducer = (prevState: stateType, action: actionType) => {
    switch (action.type) {
      case 'RESTORE_TOKEN':
        return {
          ...prevState,
          userToken: action.userToken,
          isLoading: false,
        };
      case 'SIGN_IN':
        return {
          ...prevState,
          isSignout: false,
          userToken: action.userToken,
        };
      case 'SIGN_OUT':
        return {
          ...prevState,
          isSignout: true,
          userToken: null,
        };
      default: return prevState;
    };
  };

  const initialState = {
    isLoading: true,
    isSignout: false,
    userToken: null,
  };

  const [state, dispatch] = React.useReducer<Reducer<stateType, actionType>>(reducer, initialState);

  const authContext = useMemo<AuthContexType>(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <AuthContext.Provider value={authContext}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <SideMenuNavigator />
        </NavigationContainer>
      </QueryClientProvider>
    </AuthContext.Provider>
  );
};

export default App;
