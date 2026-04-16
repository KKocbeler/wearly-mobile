import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from '../../../../components/AppText'
import { vs } from 'react-native-size-matters'

interface OrderTitlesProps {
    title: string
}

const OrderTitles = ({title}: OrderTitlesProps) => {
  return (
    <AppText style={styles.orderTitle} variant="caption" weight="medium">{title}</AppText>
  )
}

export default OrderTitles

const styles = StyleSheet.create({
    orderTitle: {
        marginVertical: vs(10)
    }
})