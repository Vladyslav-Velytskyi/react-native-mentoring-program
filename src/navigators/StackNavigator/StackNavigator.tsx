import React from 'react';
import {
  Pressable,
  Image,
} from 'react-native';
import {
  createStackNavigator,
  CardStyleInterpolators,
  StackNavigationOptions,
} from '@react-navigation/stack';

import styles from './styles';
import { CartNavigator } from '..';
import {
  LoginScreen,
  ProductsScreen,
  ProductDetailsScreen,
  SignUpScreen,
} from '../../screens';
import {
  ModalView,
  LoginModal,
} from '../../components';
import {
  Navigation,
  RootStackParamsList,
} from '../../interfaces';

const Stack = createStackNavigator<RootStackParamsList>();

export const StackNavigator: React.FC = () => {
  const moveToCartScreen = (navigation: any) => (): void => { navigation.navigate('Cart') };
  const toggleDrawer = (navigation: any) => (): void => { navigation.toggleDrawer() };
  const goBack = (navigation: any) => (): void => { navigation.goBack() };

  const homeScreenOptions = ({ navigation }: { navigation: Navigation }): StackNavigationOptions => ({
    gestureEnabled: true,
    gestureDirection: 'horizontal',
    headerMode: 'float',
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    headerTitle: 'Ecommerce Store',
    headerTitleAlign: 'center',
    headerTitleStyle: styles.headerTitle,
    headerStyle: styles.header,
    headerShadowVisible: true,
    headerLeft: (): React.ReactElement => (
      <Pressable
        style={styles.headerLeftIcon}
        onPress={toggleDrawer(navigation)}
      >
        <Image source={require('../../assets/icon-menu.png')} />
      </Pressable>
    ),
  });

  const screensWithCartIconOptions = ({ navigation }: { navigation: Navigation }): StackNavigationOptions => ({
    headerRight: (): React.ReactElement => (
      <Pressable
        style={styles.headerRightIcon}
        onPress={moveToCartScreen(navigation)}
      >
        <Image source={require('../../assets/icon-cart.png')} />
      </Pressable>
    ),
  });

  const cartOptions = ({ navigation }: { navigation: Navigation }): StackNavigationOptions => ({
    headerTitle: 'My Cart',
    headerLeft: (): React.ReactElement => (
      <Pressable
        style={styles.headerLeftIcon}
        onPress={goBack(navigation)}
      >
        <Image source={require('../../assets/icon-arrow.png')}/>
      </Pressable>
    ),
  });

  const loginOptions: StackNavigationOptions = {
    headerStyle: styles.loginHeader,
    headerShadowVisible: true,
    headerTitle: '',
    headerLeft: (): React.ReactNode => <></>,
  };

  const getAddToCartModal = ({ navigation }: { navigation: Navigation}): React.ReactElement => (
    <ModalView
      visible={true}
      title="Product added to your cart"
      icon={<Image source={require('../../assets/icon-success-circle.png')}/>}
      navigation={navigation}
    />
  );

  const getChooseColorModal = ({ navigation }: { navigation: Navigation}): React.ReactElement => (
    <ModalView
      visible={true}
      title="Select color"
      icon={<Image source={require('../../assets/icon-error-circle.png')}/>}
      description="Please select your color to add this item in your cart"
      navigation={navigation}
    />
  );

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={homeScreenOptions}
    >
      <Stack.Group>
        <Stack.Group screenOptions={screensWithCartIconOptions}>
          <Stack.Screen
            name="Home"
            component={ProductsScreen}
          />
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetailsScreen}
          />
        </Stack.Group>
        <Stack.Screen
          name="Cart"
          component={CartNavigator}
          options={cartOptions}
        />
        <Stack.Group screenOptions={loginOptions}>
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
          />
          <Stack.Screen
            name="SignUpScreen"
            component={SignUpScreen}
          />
          <Stack.Screen
            name="ForgotPasswordScreen"
            component={SignUpScreen}
          />
        </Stack.Group>
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen
          name="ProductAdded"
          component={getAddToCartModal}
        />
        <Stack.Screen
          name="LoginToContinue"
          component={LoginModal}
        />
        <Stack.Screen
          name="ChooseColor"
          component={getChooseColorModal}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
