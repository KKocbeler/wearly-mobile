import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { moderateScale } from 'react-native-size-matters'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { APP_COLORS } from '../../themes/appColors'
import { APP_TYPOGRAPHY } from '../../themes/appTypography'

interface ProductImageProps {
    image: any;
    title?: string;
}

const ProductImage = ({image, title = "No product title"}: ProductImageProps) => {
    const navigation = useNavigation<any>();
    const [isFavorite, setIsFavorite] = useState(false)
    return (
        <View style={styles.imageContainer}>
            <Image 
                source={image}
                style={{width: "100%", height: "100%", borderRadius: APP_TYPOGRAPHY.sizes.sm}}
                resizeMode='cover'
                accessibilityLabel={`${title}'s image`}
            />
            <TouchableOpacity
                onPress={() => setIsFavorite(!isFavorite)}
                style={{position: "absolute", top: moderateScale(15), right: moderateScale(15), }}
                accessibilityRole='button'
                accessibilityLabel='Favorite button'
                accessibilityHint='Toggle favorite button'
                hitSlop={moderateScale(5)}
            >
                <Ionicons name={isFavorite ? "heart-sharp" : "heart-outline"} size={moderateScale(24)} color={APP_COLORS.black} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{position: "absolute", top: moderateScale(15), left: moderateScale(10)}}
                accessibilityRole='button'
                accessibilityLabel='Back button'
                hitSlop={moderateScale(5)}
            >
                <Ionicons name="chevron-back-sharp" size={moderateScale(24)} color={APP_COLORS.black} />
            </TouchableOpacity>
        </View>
    )
}

export default ProductImage

const styles = StyleSheet.create({
    imageContainer: {
        position: "relative",
        width: "100%",
        aspectRatio: 4 / 5
    }
})