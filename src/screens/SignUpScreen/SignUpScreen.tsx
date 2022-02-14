import React, {
  useContext,
  useState,
} from 'react';
import {
  SafeAreaView,
  View,
} from 'react-native';

import styles from './styles';
import { AuthContext } from '../../context';
import {
  AuthContexType,
  Navigation,
  ResponseOAuthType,
} from '../../interfaces';
import {
  FullScreenButton,
  Input,
  Link,
  LinkTitle,
} from '../../components';

type Props = {
  navigation: Navigation;
};

type DataTypes = {
  public_metadata: { full_name: string },
  email: string;
  password: string;
  password_confirmation: string;
};

export const SignUpScreen: React.FC<Props> = ({ navigation }) => {
  const { dispatch } = useContext<AuthContexType>(AuthContext);

  const [data, setData] = useState<DataTypes>({
    public_metadata: { full_name: '' },
    email: '',
    password: '',
    password_confirmation: '',
  });

  const onPressLink = (): void => { navigation.navigate('LoginScreen') };

  const signIn = async (data: DataTypes): Promise<void> => {
    const response = await fetch(`https://rn-mentoring.herokuapp.com/spree_oauth/token`, {
      method: 'POST',
      body: JSON.stringify({
        grant_type: 'password',
        ...data,
      }),
    });

    const { access_token } = await response.json() as ResponseOAuthType;

    await dispatch({ type: 'SIGN_IN', userToken: access_token });
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinkTitle />

      <View style={styles.inputsContainer}>
        <Input
          label='Full Name'
          onChange={(full_name: string): void => { setData({ ...data, public_metadata: { full_name } }); }}
        />

        <Input
          label='Email Address'
          onChange={(email: string): void => { setData({ ...data, email }); }}
        />

        <Input
          label='Password'
          onChange={(password: string): void => { setData({ ...data, password }); }}
        />

        <Input
          label='Confirm Password'
          onChange={(password_confirmation: string): void => { setData({ ...data, password_confirmation }); }}
        />
      </View>

      <FullScreenButton
        title='SIGN UP'
        onPress={async (): Promise<void> => { signIn(data) }}
      />

      <Link
        text='Already have account? Sign In'
        onPress={onPressLink}
      />
    </SafeAreaView>
  );
};
