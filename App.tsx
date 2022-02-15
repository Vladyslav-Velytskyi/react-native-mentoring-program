import React, {
  Reducer,
  useMemo,
} from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import {
  View,
  Image,
} from 'react-native';
import {
  NavigationContainer,
  useNavigation,
} from '@react-navigation/native';
import { useNetInfo } from "@react-native-community/netinfo";

import { SideMenuNavigator } from './src/navigators';
import { AuthContext } from './src/context';
import {
  AuthContexType,
  Navigation,
} from './src/interfaces';
import {
  ModalView,
  Button,
} from './src/components';

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

  const netInfo = useNetInfo();
  const navigation: Navigation = useNavigation();

  if(!netInfo.isConnected) {
    <ModalView
      visible={true}
      icon={<Image source={require('./src/assets/icon-warning-circle.png')} />}
      title=""
      navigation={navigation}
      buttonGroup={(
        <View>
          <Button
            title='TRY AGAIN'
            onPress={() => {}}
            type='blue'
          />
          <Button
            title='CLOSE'
            onPress={() => {}}
            type='blue'
          />
        </View>
      )}
    />
  }

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
