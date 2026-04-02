import { Image, StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'
import AppText from '../AppText';
import { APP_COLORS } from '../../themes/appColors';
import { s, vs } from 'react-native-size-matters';
import { APP_TYPOGRAPHY } from '../../themes/appTypography';
import { productType } from '../../types/products';
import { useNavigation } from '@react-navigation/native';

type ProductCardProps = {
  product: productType;
  showFav?: boolean;
  style?: StyleProp<ViewStyle>;
};
const ProductCard = ({product, showFav = true, style}: ProductCardProps) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const navigation = useNavigation<any>();
    return (
        <TouchableOpacity 
            style={[styles.card, style]}
            onPress={() => navigation.navigate("MyStack", {
                screen: "ProductDetailScreen",
                params: { productId: product.id }
            })}
            accessibilityRole='button'
        >
            <View style={styles.cardHeader}>
                <TouchableOpacity
                    style={[styles.favoriteButton, !showFav && {display: 'none'}]}
                    accessibilityRole='button'
                    accessibilityLabel='Favorite button'
                    onPress={() => setIsFavorite(!isFavorite)}
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                    <FontAwesome name={isFavorite ? "heart" : "heart-o"} size={s(16)} color={APP_COLORS.primary} />
                </TouchableOpacity>
                <Image 
                    style={styles.productImage}
                    source={require("../../../assets/img/product-image.jpg")}
                />
            </View>
            <View style={styles.cardBody}>
                    <AppText variant='small'>Schylling</AppText>
                    <AppText variant='caption' weight='bold' numberOfLines={1}>{product.title} </AppText>
                    <View style={styles.priceContainer}>
                        <AppText variant='caption' weight='bold'>${product.price}.00</AppText>
                        <AppText style={{textDecorationLine: "line-through"}} variant='small' weight='regular'>$59,99</AppText>
                    </View>
            </View>
        </TouchableOpacity>
    )
}

export default ProductCard

const styles = StyleSheet.create({
    card: {
        borderRadius: APP_TYPOGRAPHY.sizes.sm,
        backgroundColor: APP_COLORS.light,
        overflow: 'hidden',
    },
    cardHeader: {
        aspectRatio: 4 / 5,
        position: "relative"
    },
    favoriteButton: {
        position: "absolute",
        zIndex: 1,
        top: s(5),
        right: s(5),
        width: s(32),
        height: s(32),
        backgroundColor: APP_COLORS.light,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: APP_TYPOGRAPHY.sizes.sm,
    },
    productImage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover"
    },
    cardBody: {
        padding: vs(5)
    },
    priceContainer: {
        flexDirection: "row",
        alignItems: 'baseline',
        gap: s(5)
    },
    price: {},
    oldPrice: {},
})