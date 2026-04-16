import { FlatList, StyleSheet } from 'react-native'
import React from 'react'
import AppSafeView from '../../../components/AppSafeView'
import { ORDERS } from '../../../constants/orders'
import OrderCard from './OrderCard'

const OrderScreen = () => {
  return (
    <AppSafeView fullScreen>
        <FlatList 
            data={ORDERS}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={(({item}) => (
                <OrderCard order={item}/>
            ))}
        />
    </AppSafeView>
  )
}

export default OrderScreen

const styles = StyleSheet.create({})