import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import styles from './styles';

interface DetailsSectionPropsInterface {
  title: string,
  content: React.ReactElement,
};

export const DetailsSection: React.FC<DetailsSectionPropsInterface> = ({
  title,
  content,
}) => {
  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.containerTitle}>{title}</Text>
      {content}
    </View>
  );
};
