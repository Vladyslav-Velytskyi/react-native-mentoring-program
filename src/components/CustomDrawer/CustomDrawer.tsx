import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
} from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';

import styles from './styles';

type Route = {
  key: string,
  name: 'MyProfile' | 'MyWishList' | 'MyCart' | 'MyOrders',
};

export const CustomDrawer: React.FC<DrawerContentComponentProps> = props => {
  const {
    state,
    descriptors,
    navigation,
  } = props;

  const onPressHeader = (): void => { navigation.navigate('Home') };

  const getTitle = (): React.ReactElement => (
    <Text
      textBreakStrategy='simple'
      style={styles.title}
    >
      Ecommerce Store
    </Text>
  );

  const getMenuItem: React.FC<Route> | null = route => {
    const {
      drawerLabel,
      groupName,
      drawerIcon,
    } = descriptors[route.key].options;

    if (groupName !== 'My Account') {
      return null;
    }

    const getLabel = (): React.ReactElement => (
      <Text
        style={{
          ...styles.menuItem,
          ...styles.menuItemLeft,
        }}
      >
        {drawerLabel}
      </Text>
    );

    const onPressRoute = (): void => { navigation.navigate(route.name) };

    return (
      <DrawerItem
        key={route.key}
        label={getLabel}
        icon={drawerIcon}
        onPress={onPressRoute}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <DrawerContentScrollView {...props}>
        <DrawerItem
          style={styles.headerContainer}
          label={getTitle}
          onPress={onPressHeader}
        />
        <Text style={styles.menuSectionLabel}>My Account</Text>
        <View style={styles.menuMargin}>
          {state.routes.map(getMenuItem)}
        </View>
        <View style={styles.menuSection}>
          <Text style={styles.menuSectionLabel}>Support</Text>
          <View style={styles.menuItem}>
            <Image source={require('../../assets/icon-envelope.png')} />
            <Text style={styles.menuItemLabel}>Email</Text>
          </View>
          <View style={styles.menuItem}>
            <Image source={require('../../assets/icon-phone.png')} />
            <Text style={styles.menuItemLabel}>Call</Text>
          </View>
        </View>
        <View style={styles.menuSection}>
          <View style={styles.menuItem}>
            <Image source={require('../../assets/icon-share.png')} />
            <Text style={styles.menuItemLabel}>Share</Text>
          </View>
        </View>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};
