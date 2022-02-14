import React, {
  useContext,
  useState,
} from 'react';
import {
  SafeAreaView,
  View,
  Image,
} from 'react-native';

import styles from './styles';
import {
  FullScreenButton,
  Input,
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
  fullName: string,
  mobileNumber: string,
  city: string,
  street: string,
  flat: string,
};

export const MyProfileScreen: React.FC<Props> = ({ navigation }) => {
  const { dispatch } = useContext<AuthContexType>(AuthContext);
  const [data, setData] = useState<DataTypes>({
    fullName: '',
    mobileNumber: '',
    city: '',
    street: '',
    flat: '',
  });
  
  const onPressLogout = (): void => {
    dispatch({ type: 'SIGN_OUT' });

    navigation.navigate('LogoutModal');
  };

  const onPressUpdate = (): void => {};

  return (
    <SafeAreaView style={styles.container}>
      <Input
        label="Full Name"
        onChange={(fullName: string): void => setData({ ...data, fullName })}
      />

      <View style={styles.imageContainer}>
        <Image source={require('../../assets/add-avatar.png')} />
      </View>  

      <View style={styles.inputsContainer}>
        <Input
          label="Mobile Number"
          onChange={(mobileNumber: string): void => setData({ ...data, mobileNumber })}
        />

        <Input
          label="City"
          onChange={(city: string): void => setData({ ...data, city })}
        />

        <Input
          label="Locality, area or street"
          onChange={(street: string): void => setData({ ...data, street })}
        />

        <Input
          label="Flat no., Building name"
          onChange={(flat: string): void => setData({ ...data, flat })}
        />
      </View>

      <FullScreenButton
        title='UPDATE'
        onPress={onPressUpdate}
        style={styles.fullScreenButton}
      />

      <FullScreenButton
        title='LOGOUT'
        onPress={onPressLogout}
        style={styles.fullScreenButton}
      />
    </SafeAreaView>
  );
};
