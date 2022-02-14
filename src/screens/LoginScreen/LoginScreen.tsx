import React, {
  useContext,
  useState,
} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
} from 'react-native';

import styles from './styles';
import {
  FullScreenButton,
  Input,
  Link,
  LinkTitle,
} from '../../components';
import {
  AuthContexType,
  Navigation,
} from '../../interfaces';
import { AuthContext } from '../../context';

type Props = {
  navigation: Navigation,
};

type DataTypes = {
  username: string,
  password: string,
};

export const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const { dispatch } = useContext<AuthContexType>(AuthContext);
  const [data, setData] = useState<DataTypes>({
    username: '',
    password: '',
  });

  const onPressLink = (): void => { navigation.navigate('SignUpScreen') };

  const onPressForgotPassword = (): void => { navigation.navigate('ForgotPasswordScreen') };

  const onPressSkipLogin = (): void => { navigation.navigate('Home') };

  const signIn = (): void => {
    fetch(`https://rn-mentoring.herokuapp.com/spree_oauth/token`, {
      method: 'POST',
      body: JSON.stringify({
        grand_type: 'password',
        password: data.password,
        username: data.username,
      }),
    }).then(res => res.json())
      .then(data => {
        dispatch({ type: 'SIGN_IN', userToken: data.access_token });
      })
      .catch(() => { navigation.navigate('Home');});
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinkTitle />
      <Text>{data.username} {data.password}</Text>
      <View style={styles.inputsContainer}>
        <Input
          label="Email Address"
          onChange={(username: string): void => setData({ ...data, username })}
        />

        <Input
          label="Password"
          onChange={(password: string): void => setData({ ...data, password })}
        />
      </View>

      <View style={styles.leftLink}>
        <Link
          text='Forgot Password?'
          onPress={onPressForgotPassword}
        />
      </View>

      <FullScreenButton
        title='SIGN IN'
        onPress={signIn}
        style={styles.fullScreenButton}
      />

      <Link
        text='New here? Sign Up'
        onPress={onPressLink}
      />

      <FullScreenButton
        title={(
          <>
            <Text style={styles.buttonText}>SKIP LOGIN</Text>
            <Image source={require('../../assets/icon-arrow-right.png')} />
          </>
        )}
        onPress={onPressSkipLogin}
        style={styles.greyButton}
      />
    </SafeAreaView>
  );
};
