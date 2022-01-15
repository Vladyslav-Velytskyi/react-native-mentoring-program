import React from 'react';
import { Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { CustomDrawer } from '../../components';
import {
  StackNavigator,
  MyAccountNavigator,
} from '..';

const Drawer = createDrawerNavigator();

export const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Main"
      drawerContent={CustomDrawer}  
    >
      <Drawer.Screen
        name="Main"
        component={StackNavigator}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="MyProfile"
        component={MyAccountNavigator}
        options={{
          drawerLabel: 'My Profile',
          groupName: 'My Account',
          drawerIcon: () => (
            <Image source={require('../../assets/icon-person.png')} />
          ),
        }}
      />
      <Drawer.Screen
        name="MyWishList"
        component={MyAccountNavigator}
        options={{
          drawerLabel: 'My Wish List',
          groupName: 'My Account',
          drawerIcon: () => (
            <Image source={require('../../assets/icon-heart-blue.png')} />
          ),
        }}
      /> 
      <Drawer.Screen
        name="MyCart"
        component={MyAccountNavigator}
        options={{
          drawerLabel: 'My Cart',
          groupName: 'My Account',
          drawerIcon: () => (
            <Image source={require('../../assets/icon-cart-blue.png')} />
          ),
        }}
      />
      <Drawer.Screen
        name="MyOrders"
        component={MyAccountNavigator}
        options={{
          drawerLabel: 'My Orders',
          groupName: 'My Account',
          drawerIcon: () => (
            <Image source={require('../../assets/icon-cart-full.png')} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
