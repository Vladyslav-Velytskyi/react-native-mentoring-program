import React, {
  useContext,
  useState,
} from 'react';
import {
  SafeAreaView,
  Text,
  Pressable,
  View,
} from 'react-native';

import styles from './styles';
import { AuthContext } from '../../context';
import {
  AuthContexType,
  Navigation,
} from '../../interfaces';
import {
  FullScreenButton,
  Input,
  Link,
} from '../../components';

type Props = {
  navigation: Navigation;
};

type DataTypes = {
  fullName: string;
  email: string;
  password: string;
  password_confirmation: string;
};

export const SignUpScreen: React.FC<Props> = ({ navigation }) => {
  const { signIn } = useContext<AuthContexType>(AuthContext);

  const [data, setData] = useState<DataTypes>({
    fullName: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const onPressTitle = (): void => { navigation.navigate('Home') };

  const onPressLink = (): void => { navigation.navigate('LoginScreen') };

  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        style={styles.titleContainer}
        onPress={onPressTitle}
      >
        <Text style={styles.title}>Ecommerce Store</Text>
      </Pressable>

      <View style={styles.inputsContainer}>
        <Input
          label='Full Name'
          onChange={(fullName: string): void => { setData({ ...data, fullName }) }}
        />

        <Input
          label='Email Address'
          onChange={(email: string): void => { setData({ ...data, email }) }}
        />

        <Input
          label='Password'
          onChange={(password: string): void => { setData({ ...data, password }) }}
        />

        <Input
          label='Confirm Password'
          onChange={(password_confirmation: string): void => { setData({ ...data, password_confirmation }) }}
        />
      </View>

      <FullScreenButton
        title='SIGN UP'
        onPress={(): void => { signIn(data) }}
      />

      <Link
        text='Already have account? Sign In'
        onPress={onPressLink}
      />
    </SafeAreaView>
  );
};
