import React, { useContext } from 'react';
import {
  Text,
  SafeAreaView,
  Image,
} from "react-native";

import styles from './styles';
import {
  FullScreenButton,
  Link,
} from '../../components';
import {
  AuthContexType,
  Navigation,
} from '../../interfaces';
import { AuthContext } from '../../context';

type Props = {
  navigation: Navigation,
};

export const LoginFirstScreen: React.FC<Props> = ({ navigation }) => {
  const onPressLoginButton = (): void => { navigation.navigate('LoginScreen') };
  const onPressLink = (): void => { navigation.navigate('SignUpScreen') };
  const { state } = useContext<AuthContexType>(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../../assets/avatar.png')} />
      <Text style={styles.title}>Login First!</Text>
      <Text style={styles.description}>Login first to view your cart</Text>
      <FullScreenButton
        title='LOGIN NOW'
        onPress={onPressLoginButton}
      />
      <Link
        text='New here? Sign Up'
        onPress={onPressLink}
      />
    </SafeAreaView>
  );
};
