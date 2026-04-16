import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppText from '../../components/AppText'
import { FontAwesome6 } from '@expo/vector-icons'
import { s, vs } from 'react-native-size-matters'
import { APP_COLORS } from '../../themes/appColors'
import { APP_TYPOGRAPHY } from '../../themes/appTypography'
import { useNavigation } from '@react-navigation/native'
import { CartItem } from '../../types/cartItem'
import { useDispatch } from 'react-redux'
import { addItemToCart, decraseItem, deleteFromCart } from '../../store/reducers/CartSlice'

interface productTypeProps {
    product: CartItem
}

const ProductCard = ({product}: productTypeProps) => {
    const dispatch = useDispatch();
    const navigation = useNavigation<any>();
    const handleNavigate = (itemId: string) => {
        navigation.navigate("MyStack", {
            screen: "ProductDetail",
            params:  {productId: itemId}
        })
    }

    return (
        <View style={styles.cartProduct}>
            <TouchableOpacity 
                style={styles.imageWrapper}
                onPress={() => handleNavigate(product.productId)}
                accessibilityRole='button'
            >
                <Image 
                    style={styles.productImage}
                    source={require("../../../assets/img/product-image.jpg")}
                />
            </TouchableOpacity>
            <View style={styles.cardBody}>
                <View>
                    <AppText variant='body' weight='medium' numberOfLines={2}>White Lava </AppText>
                    <View style={{flexDirection: "row", alignItems: "baseline", gap: s(5)}}>
                        <AppText variant='small' weight='regular'>Color: Black</AppText>
                        <AppText color='textDark'>|</AppText>
                        <AppText variant='small' weight='regular'>Size: XL</AppText>
                    </View>
                </View>
                <View style={styles.cartItemActions}>
                    <AppText variant='body'>$49,99 USD</AppText>
                    <View style={styles.quantityControl}>
                        <TouchableOpacity 
                        style={{padding: vs(5)}}
                        accessibilityRole='button'
                        accessibilityLabel='Decrase button'
                        onPress={() => dispatch(decraseItem(product))}
                        >
                            <AppText>
                                <FontAwesome6 name="minus" size={s(10)} color="black" />
                            </AppText>
                        </TouchableOpacity>
                        <AppText variant='caption'>{product.quantity}</AppText>
                        <TouchableOpacity
                            style={{padding: vs(5)}}
                            accessibilityRole='button'
                            accessibilityLabel='Incrase button'
                            onPress={() => dispatch(addItemToCart(product))}
                        >
                            <AppText>
                                <FontAwesome6 name="plus" size={s(10)} color="black" />
                            </AppText>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity 
                    style={{position: "absolute", top: vs(10), right: s(10)}}
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                    onPress={() => dispatch(deleteFromCart(product))}
                    accessibilityRole='button'
                    accessibilityLabel='Remove item'
                    accessibilityHint='Removes item from the basket'
                >
                    <FontAwesome6 name="trash-can" size={s(14)} color={APP_COLORS.black} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProductCard

const styles = StyleSheet.create({
    cartProduct: {
        flexDirection: "row",
        backgroundColor: APP_COLORS.light,
        marginBottom: vs(15),
        borderRadius: APP_TYPOGRAPHY.sizes.sm,
    },
    imageWrapper: {
        width: s(120),
        height: vs(90),
        borderRadius: APP_TYPOGRAPHY.sizes.sm,
        overflow: "hidden"
    },
    productImage: {
        width: "100%",
        height: "100%",
        borderTopLeftRadius: APP_TYPOGRAPHY.sizes.sm,
        borderBottomLeftRadius: APP_TYPOGRAPHY.sizes.sm,
        resizeMode: "cover"
    },
    cardBody: {
        flex: 1,
        justifyContent: "space-between",
        padding: vs(8)
    },
    cartItemActions: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    quantityControl: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: APP_COLORS.border,
        borderRadius: APP_TYPOGRAPHY.sizes.xl,
        paddingVertical: vs(1),
        paddingHorizontal: s(5),
        gap: s(5),
        shadowColor: APP_COLORS.textGray,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    }
})