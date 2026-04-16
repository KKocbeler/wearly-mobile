import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'
import AppText from '../../components/AppText'
import { s } from 'react-native-size-matters'
import { APP_COLORS } from '../../themes/appColors'

interface PriceRowProps {
    title: string;
    price: number | string;
    textColor?: keyof typeof APP_COLORS;
    style?: StyleProp<ViewStyle>;
}

const PriceRow = ({ title, price, textColor= "textDark", style }: PriceRowProps) => {
    return (
        <View style={[styles.priceRow, style]}>
            <AppText color={textColor}>{title}</AppText>
            <AppText weight='bold'>{`$${price}.00`}</AppText>
        </View>
    )
}

export default PriceRow

const styles = StyleSheet.create({
    priceRow: {
        flexDirection: "row", 
        justifyContent: "space-between", 
        alignItems: "center", 
        paddingVertical: s(10), 
        borderBottomWidth: 1, 
        borderBottomColor: APP_COLORS.textGray
    }
})