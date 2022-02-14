import React, {
  useState,
} from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';

import styles from './styles';
import {
  FullScreenButton,
  Input,
  LinkTitle,
} from '../../components';
import {
  Navigation,
} from '../../interfaces';

type Props = {
  navigation: Navigation,
};

type DataTypes = {
  email: string,
};

export const ForgotPasswordScreen: React.FC<Props> = ({ navigation }) => {
  const [data, setData] = useState<DataTypes>({
    email: '',
  });

  const onPressSubmit = (): void => {
    // temporary empty function
    // should send an email to restore the password
    navigation.navigate('LoginScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinkTitle />

      <Text style={styles.description}>
        Enter your email id and we will send you an email to change the password
      </Text>

      <View style={styles.inputsContainer}>
        <Input
          label="Email Address"
          onChange={(email: string): void => setData({ ...data, email })}
          value={data.email}
        />
      </View>

      <FullScreenButton
        title='SUBMIT'
        onPress={onPressSubmit}
        style={styles.fullScreenButton}
      />
    </SafeAreaView>
  );
};
