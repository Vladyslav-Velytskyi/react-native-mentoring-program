import React, {
  useState,
  useRef,
  useEffect,
} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import styles from './styles';
import { colors } from '../../constants';

interface ImageCarouselPropsInterface {
  id: number,
};

export const ImageCarousel: React.FC<ImageCarouselPropsInterface> = ({ id }) => {
  const [navDot, setNavDot] = useState<number>(0);
  const flatListRef = useRef<FlatList>(null);

  const scrollToIndex = (index: number): void => {
    if (flatListRef.current !== null) {
      flatListRef.current.scrollToIndex({ index });
    }
  };

  useEffect((): void => {
    scrollToIndex(navDot);    
  }, [navDot, scrollToIndex]);

  const arrayOfImagesIds: number[] = [id, id*100, id*101, id*102];

  const onPressPrev = (): void => {
    const prev: number = (navDot === 0 ? arrayOfImagesIds.length : navDot) - 1;

    setNavDot(prev);
  };

  const onPressNext = (): void => {
    const next: number = navDot === arrayOfImagesIds.length - 1 ? 0 : navDot + 1;

    setNavDot(next);
  };

  const onClickDot = (index: number) => (): void => { setNavDot(index) };

  const onScrollEndDrag = (e: { nativeEvent: { contentOffset: { x: number } } }): void => {
    setNavDot(Math.round(e.nativeEvent.contentOffset.x/250));
  };

  const renderItem = ({ item: imageId }: { item: number }): React.ReactElement => (
    <Image
      style={styles.productImage}
      source={{ uri: `https://picsum.photos/id/${imageId}/250/250` }}
    />
  );

  return (
    <View style={styles.imageContainer}>
      <View style={styles.imageBox}>
        <TouchableOpacity onPress={onPressPrev}>
          <Image source={require('../../assets/icon-prev.png')} />
        </TouchableOpacity>

        <View style={styles.imageListContainer}>
          <FlatList
            data={arrayOfImagesIds}
            ref={flatListRef}
            pagingEnabled
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={renderItem}
            onScrollEndDrag={onScrollEndDrag}
          />
        </View>  

        <TouchableOpacity onPress={onPressNext}>
          <Image source={require('../../assets/icon-next.png')} />
        </TouchableOpacity>
      </View>

      <View style={styles.navDotContainer}>
        {arrayOfImagesIds.map((_, index): React.ReactNode => (
          <TouchableOpacity
            onPress={onClickDot(index)}
            key={index}
          >
            <View 
              style={{
                ...styles.navDot,
                backgroundColor: navDot === index ? colors.BLUE_500 : colors.NEUTRAL_300,
              }}
            />
          </TouchableOpacity> 
        ))}
      </View>
    </View>
  );
};
