import { StyleSheet, View } from 'react-native'
import React from 'react'
import AppText from '../../../components/AppText'
import { s, vs } from 'react-native-size-matters'
import { APP_TYPOGRAPHY } from '../../../themes/appTypography'
import { OrderStatusType } from '../../../types/orderstype'

interface OrderStatusProps {
    status: OrderStatusType
}

const OrderStatus = ({status}: OrderStatusProps) => {
    return (
        <View style={[
            {backgroundColor: statusStyles[status].backgroundColor},{borderRadius: APP_TYPOGRAPHY.sizes.md}
        ]
            
            }>
            <AppText 
                style={[
                    styles.orderStatus,
                    {color: statusStyles[status].color}
                ]} 
                variant='small'>
                {status}
            </AppText>
        </View>
    )
}

export default OrderStatus

const styles = StyleSheet.create({
    orderStatus: {
        paddingHorizontal: s(8),
        paddingVertical: vs(4),
        borderRadius: APP_TYPOGRAPHY.sizes.md,
    },
})

const statusStyles = StyleSheet.create({
    pending: {
        color: "#ffffff",
        backgroundColor: "#ffd725",
    },
    completed: {
        color: "#ffffff",
        backgroundColor: "#20bd1b",
    },
    cancelled: {
        color: "#ffffff",
        backgroundColor: "#ff0000",
    },
})