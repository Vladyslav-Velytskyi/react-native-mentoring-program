import React, { useContext, useState } from 'react';
import {
  View,
  Image,
} from 'react-native';

import {
  ModalView,
  Button,
} from '..';
import { AuthContext } from '../../context';
import { AuthContexType, Navigation } from '../../interfaces';

type Props = {
  navigation: Navigation,
};

export const LogoutModal: React.FC<Props> = ({
  navigation,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const { dispatch } = useContext<AuthContexType>(AuthContext);

  const onPressCancel = (): void => {
    setIsVisible(false);
    navigation.navigate('MyProfile');
  };

  const onPressLogout = (): void => {
    setIsVisible(false);

    dispatch({ type: 'SIGN_OUT' });
  };

  return (
    <ModalView
      visible={isVisible}
      icon={<Image source={require('../../assets/icon-warning-circle.png')} />}
      title="Are you sure you want to logout?"
      navigation={navigation}
      buttonGroup={(
        <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
          <Button
            title='CANCEL'
            onPress={onPressCancel}
            type='red'
          />
          <View style={{ width: 20 }}></View>
          <Button
            title='LOGOUT'
            onPress={onPressLogout}
            type='blue'
          />
        </View>
      )}
    />
  );
};
