import React, { useContext } from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import { CartScreen } from '../../components';
import { LoginFirstScreen } from '../../screens';
import { AuthContext } from '../../context';
import { AuthContexType } from '../../interfaces';

const Stack = createStackNavigator();

export const CartNavigator: React.FC = () => {
  const { state } = useContext<AuthContexType>(AuthContext);

  return (
    <Stack.Navigator
      initialRouteName="Cart"
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        headerMode: 'float',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerShown: false,
      }}
    >
      {!state.userToken
        ? (
          <Stack.Screen
            name="LoginFirst"
            component={LoginFirstScreen}
          />
        ) : (
          <Stack.Screen
            name="Cart"
            component={CartScreen}
          />
        )
      }
    </Stack.Navigator>
  );
};
