import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { MyProfileScreen } from '../../screens';

const Stack = createStackNavigator();

export const MyAccountNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        headerMode: 'float',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        name="My Profile"
        component={MyProfileScreen}
      />
      {/*TODO
      <Stack.Screen
        name="My Wish List"
        component={ProductDetailsPage}
      />
      <Stack.Screen
        name="My Cart"
        component={ProductDetailsPage}
      />
      <Stack.Screen
        name="My Orders"
        component={ProductDetailsPage}
      />*/}
    </Stack.Navigator>
  );
};

