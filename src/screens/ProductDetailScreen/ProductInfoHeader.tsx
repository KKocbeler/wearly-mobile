import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from '../../components/AppText'
import Star from '../../components/Star'
import { s, vs } from 'react-native-size-matters'

interface PriceSectionProps {
    title?: string;
    price?: number;
    rating?: {
        rate: number;
        count: number;
    }
}

const ProductInfoHeader = ({title = "No product title", price= 0, rating = {rate: 0, count: 0}}: PriceSectionProps) => {
    return (
        <View>
            <AppText variant='title' weight='bold' style={{marginTop: vs(10), }}>{title}</AppText>
            <View style={{ flexDirection: "row", alignItems: "baseline" ,gap: s(10)}}>
                <AppText weight='bold'>${price}.00</AppText>
                <AppText color='textGray'>|</AppText>
                <View style={{ flexDirection: "row", alignItems: "center", gap: s(2)}}>
                    <Star rating={rating.rate}/>
                    <AppText variant='small'>({rating.count})</AppText>
                </View>
            </View>
        </View>
    )
}

export default ProductInfoHeader

const styles = StyleSheet.create({})