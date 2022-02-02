import React, {
  ReactNode,
  useContext,
} from 'react';
import {
  Image,
  Pressable,
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigationOptions } from '@react-navigation/stack';

import { Navigation } from '../../interfaces';
import { CustomDrawer } from '../../components';
import { AuthContext } from '../../context';
import { MainNavigator } from '..';
import {
  LoginFirstScreen,
  MyProfileScreen,
  MyWishListScreen,
  MyCartScreen,
  MyOrdersScreen,
} from '../../screens';
import styles from './styles';

const Drawer = createDrawerNavigator();

export const SideMenuNavigator: React.FC = () => {
  const { state } = useContext(AuthContext);
  const moveToCartScreen = (navigation: any) => (): void => { navigation.navigate('Cart') };
  const goBack = (navigation: any) => (): void => { navigation.goBack() };

  const getUserOptions = (navigation: Navigation): StackNavigationOptions => ({
    groupName: 'My Account',
    drawerIcon: () => (
      <Image source={require('../../assets/icon-person.png')} />
    ),
    headerMode: 'float',
    headerTitleAlign: 'center',
    headerTitleStyle: styles.headerTitle,
    headerStyle: styles.header,
    headerShadowVisible: true,
    headerLeft: (): React.ReactElement => (
      <Pressable
        style={styles.headerLeftIcon}
        onPress={goBack(navigation)}
      >
        <Image source={require('../../assets/icon-arrow.png')}/>
      </Pressable>
    ),
    headerRight: (): React.ReactElement => (
      <Pressable
        style={styles.headerRightIcon}
        onPress={moveToCartScreen(navigation)}
      >
        <Image source={require('../../assets/icon-cart.png')} />
      </Pressable>
    ),
  });

  const getMyProfileOptions = ({ navigation }: { navigation: Navigation }): StackNavigationOptions => ({
    ...getUserOptions(navigation),
    drawerLabel: 'My Profile',
    headerTitle: 'My Profile',
  });

  const getMyWishListOptions = ({ navigation }: { navigation: Navigation }): StackNavigationOptions => ({
    ...getUserOptions(navigation),
    drawerLabel: 'My Wish List',
    headerTitle: 'My Wish List',
  });

  const getMyCartOptions = ({ navigation }: { navigation: Navigation }): StackNavigationOptions => ({
    ...getUserOptions(navigation),
    drawerLabel: 'My Cart',
    headerTitle: 'My Cart',
  });

  const getMyOrdersOptions = ({ navigation }: { navigation: Navigation }): StackNavigationOptions => ({
    ...getUserOptions(navigation),
    drawerLabel: 'My Orders',
    headerTitle: 'My Orders',
  });

  const getScreen: ReactNode = (screen: ReactNode) => (state.userToken ? screen : LoginFirstScreen); 

  return (
    <Drawer.Navigator
      initialRouteName="Main"
      drawerContent={CustomDrawer}  
    >
      <Drawer.Screen
        name="Main"
        component={MainNavigator}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="MyProfile"
        component={getScreen(MyProfileScreen)}
        options={getMyProfileOptions}
      />
      <Drawer.Screen
        name="MyWishList"
        component={getScreen(MyWishListScreen)}
        options={getMyWishListOptions}
      /> 
      <Drawer.Screen
        name="MyCart"
        component={getScreen(MyCartScreen)}
        options={getMyCartOptions}
      />
      <Drawer.Screen
        name="MyOrders"
        component={getScreen(MyOrdersScreen)}
        options={getMyOrdersOptions}
      />
    </Drawer.Navigator>
  );
};
