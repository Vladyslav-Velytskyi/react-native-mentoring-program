import React, { useState } from 'react';
import {
  View,
  Image,
} from 'react-native';

import {
  ModalView,
  Button,
} from '..';
import { Navigation } from '../../interfaces';

type Props = {
  navigation: Navigation,
};

export const LoginModal: React.FC<Props> = ({
  navigation,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const onPressLogin = (): void => {
    setIsVisible(false);
    navigation.navigate('LoginScreen');
  };

  const onPressSignUp = (): void => {
    setIsVisible(false);
    navigation.navigate('SignUpScreen');
  };

  return (
    <ModalView
      visible={isVisible}
      icon={<Image source={require('../../assets/icon-warning-circle.png')} />}
      title="Login To Continue"
      description="Please login to add product in your cart"
      navigation={navigation}
      buttonGroup={(
        <View>
          <Button
            title='LOGIN'
            onPress={onPressLogin}
            type='blue'
          />
          <Button
            title='SIGN UP'
            onPress={onPressSignUp}
            type='blue'
          />
        </View>
      )}
    />
  );
};
