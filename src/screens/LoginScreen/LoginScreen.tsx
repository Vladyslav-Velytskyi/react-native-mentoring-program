import React, {
  useContext,
  useState,
} from 'react';
import {
  SafeAreaView,
  Text,
  Pressable,
  View,
  Image,
} from 'react-native';

import styles from './styles';
import {
  FullScreenButton,
  Input,
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

type DataTypes = {
  email: string,
  password: string,
};

export const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const { signIn } = useContext<AuthContexType>(AuthContext);
  const [data, setData] = useState<DataTypes>({
    email: '',
    password: '',
  });

  const onPressTitle = (): void => { navigation.navigate('Home') };

  const onPressLink = (): void => { navigation.navigate('SignUpScreen') };

  const onPressForgotPassword = (): void => { navigation.navigate('ForgotPasswordScreen') };
  
  const onPressSignIn = (): void => { signIn(data); };

  const onPressSkipLogin = (): void => { navigation.navigate('Home') };

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
          label="Email Address"
          onChange={(email: string): void => setData({ ...data, email })}
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
        onPress={onPressSignIn}
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
