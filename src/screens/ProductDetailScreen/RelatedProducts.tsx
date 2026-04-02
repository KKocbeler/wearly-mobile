import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import AppText from '../../components/AppText'
import { PRODUCTS } from '../../constants/products'
import { s, vs } from 'react-native-size-matters'
import ProductCard from '../../components/ProductCard'

const RelatedProducts = () => {
    return (
        <View style={{marginVertical: vs(10)}}>
            <AppText variant='caption' weight='bold' style={{marginBottom: vs(10)}}>You might also like</AppText>
            <FlatList
                data={PRODUCTS}
                horizontal
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <ProductCard product={item} showFav={false} style={{ width: s(100), marginRight: s(10) }} />}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default RelatedProducts

const styles = StyleSheet.create({})