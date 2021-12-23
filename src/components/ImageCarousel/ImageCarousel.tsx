import React, {
  useState,
  useRef,
  useEffect,
} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const ImageCarousel: React.FC<{ id: number }> = ({ id }) => {
  const [navDot, setNavDot] = useState<number>(0);
  const flatListRef = useRef<FlatList>(null);

  const scrollToIndex = (index: number) => {
    if (flatListRef.current !== null) {
      flatListRef.current.scrollToIndex({ index });
    }
  };

  useEffect(() => {
    scrollToIndex(navDot);    
  }, [navDot, scrollToIndex]);

  const arrayOfImagesIds: number[] = [id, id*100, id*101, id*102];

  const onPressPrev = () => {
    const prev: number = (navDot === 0 ? arrayOfImagesIds.length : navDot) - 1;

    setNavDot(prev);
  };

  const onPressNext = () => {
    const next: number = navDot === arrayOfImagesIds.length -1 ? 0 : navDot + 1;

    setNavDot(next);
  };

  return (
    <View style={styles.imageContainer}>
      <TouchableOpacity onPress={onPressPrev}>
        <EvilIcons
          name="chevron-left"
          size={50}
          color="#C3C3C3"
          style={{
            position: 'absolute',
            left: -20,
          }}
        />
      </TouchableOpacity>

      <View style={styles.imageBox}>
        <FlatList
          data={arrayOfImagesIds}
          style={{ flex: 1, width: 250 }}
          ref={flatListRef}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item: imageId }) => (
            <Image
              style={styles.productImage}
              source={{ uri: `https://picsum.photos/id/${imageId}/250/250` }}
            />
          )}
          onScrollEndDrag={(e) => {
            setNavDot(Math.round(e.nativeEvent.contentOffset.x/250));
          }}
        />

        <View style={styles.navDotContainer}>
          {arrayOfImagesIds.map((_, index) => (
            <TouchableOpacity
              onPress={() => setNavDot(index)}
              key={index}
            >
              <View 
                style={{
                  ...styles.navDot,
                  backgroundColor: navDot === index ? '#008ACE' : '#C3C3C3'
                }}
              />
            </TouchableOpacity> 
          ))}
        </View>
      </View>

      <TouchableOpacity onPress={onPressNext}>
        <EvilIcons
          name="chevron-right"
          size={50}
          color="#C3C3C3"
          style={{
            position: 'absolute',
            right: -20,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const imageContainerWidth: number = Dimensions.get('window').width - 40;

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 288,
    width: imageContainerWidth,
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  productImage: {
    width: 250,
    height: 250,
    marginBottom: 30,
  },
  imageBox: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  navDotContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 47,
    height: 8,
  },
  navDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#C3C3C3',
  },
});

export default ImageCarousel;
