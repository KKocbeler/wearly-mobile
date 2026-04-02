import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from '../../components/AppText'
import { vs } from 'react-native-size-matters'

const ProductDescription = () => {
  return (
    <View style={{ marginBottom: vs(10) }}>
        <AppText variant='caption' color='textGray'>
            Discover more about this product. Quality and styşe amd combined. Perfect for any accosion.
        </AppText>
    </View>
  )
}

export default ProductDescription

const styles = StyleSheet.create({})