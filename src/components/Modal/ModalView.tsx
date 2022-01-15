import React, {
  ReactElement,
  useState,
} from 'react';
import {
  Modal,
  Text,
  View,
} from 'react-native';

import styles from './styles';
import { Navigation } from '../../interfaces';
import { Button } from '..';

type Props = {
  visible: boolean,
  icon: React.ReactElement,
  title: string,
  description?: string,
  buttonGroup?: ReactElement,
  navigation: Navigation;
};

export const ModalView: React.FC<Props> = ({
  visible,
  icon,
  title,
  description,
  buttonGroup,
  navigation,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(visible);

  const onPressOK = (): void => {
    setIsVisible(false);
    navigation.goBack();
  };

  return (
    <Modal
      visible={isVisible}
      transparent={true}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalBox}>
          {icon}
          <Text style={styles.label}>{title}</Text>
          {description && <Text style={styles.description}>{description}</Text>}
          {buttonGroup
            ? buttonGroup
            : (
              <Button
                title='OK'
                onPress={onPressOK}
                type="blue"
              />
            )
          }
        </View>
      </View>
    </Modal>
  );
};
