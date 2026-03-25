import { Dimensions, FlatList, Image, StyleSheet } from 'react-native'
import React from 'react'
import { APP_TYPOGRAPHY } from '../../themes/appTypography'
import { s } from 'react-native-size-matters';

const images = [
  { id: '1', src: require('../../../assets/img/home.png') },
  { id: '2', src: require('../../../assets/img/home.png') },
  { id: '3', src: require('../../../assets/img/home.png') },
];

const HomeSlider = () => {
    const { width } = Dimensions.get('window');
    return (
        <FlatList 
            data={images}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            style={{borderRadius: APP_TYPOGRAPHY.sizes.sm, overflow: "hidden"}}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <Image 
                    source={ item.src }
                    style={{width: width, height: s(150)}}
                    resizeMode='cover'
                />
            )}
        />
    )
}

export default HomeSlider

const styles = StyleSheet.create({})