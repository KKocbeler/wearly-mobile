import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { moderateScale, s, vs } from 'react-native-size-matters';
import { APP_COLORS } from '../../themes/appColors';
import { APP_TYPOGRAPHY } from '../../themes/appTypography';
import { Ionicons } from '@expo/vector-icons';
import AppText from '../../components/AppText';
import AppButton from '../../components/AppButton';

interface ProductActionsProps {
    handleAddToCart: () => void;
    handleBuyNow: () => void;
}

const ProductActions = ({handleAddToCart, handleBuyNow}: ProductActionsProps) => {
    const insets = useSafeAreaInsets();

    return (
        <View style={{marginTop: "auto", position: "absolute", bottom: insets.bottom, left: 0, right: 0, zIndex: 1,
            paddingVertical: moderateScale(14),
            paddingHorizontal: moderateScale(12), backgroundColor: APP_COLORS.appBackground,
            flexDirection: "row",
            gap: s(14)
        }}>
            <View style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 1,
                backgroundColor: "rgba(236, 226, 226, 0.4)"
            }} />
            <TouchableOpacity
            onPress={handleBuyNow}
            style={{
                paddingVertical: vs(4),
                paddingHorizontal: s(12),
                borderRadius: APP_TYPOGRAPHY.sizes.xs,
                borderWidth: 1,
                borderColor: APP_COLORS.primary,
                alignItems: "center"
            }}>
                <Ionicons name="cart" size={s(16)} color={APP_COLORS.primary} />
                <AppText variant='small' color='primary'>Buy Now</AppText>
            </TouchableOpacity>
                <AppButton
                    style={{flex: 1}}
                    title='Add to Cart'
                    variant='primary'
                    textVariant='caption'
                    size='sm'
                    onPress={handleAddToCart}
                />
        </View>
    )
}

export default ProductActions

const styles = StyleSheet.create({})