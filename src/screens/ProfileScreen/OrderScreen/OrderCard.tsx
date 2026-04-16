import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppText from '../../../components/AppText'
import { s, vs } from 'react-native-size-matters'
import { APP_TYPOGRAPHY } from '../../../themes/appTypography'
import { APP_COLORS } from '../../../themes/appColors'
import { OrderType } from '../../../types/orderstype'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import OrderStatus from './OrderStatus'

interface OrderCardProps {
    order: OrderType
}

const OrderCard = ({order}: OrderCardProps) => {
    const navigation = useNavigation<any>();
    return (
        <View style={styles.orderContainer}>
            <View style={styles.orderHeader}>
                <View>
                    <AppText variant='caption' weight='medium'>Order: #{order.id}</AppText>
                    <AppText variant='small'>{order.createdAt}</AppText>
                </View>
                <OrderStatus status={order.status}/>
            </View>
            <View style={styles.productList}>
                {
                    order.items.slice(0, 3).map(item => (
                        <View style={styles.imageContainer} key={item.productId}>
                            <Image
                                style={styles.image}
                                source={require("../../../../assets/img/wood-clock.jpg")}
                            />
                        </View>
                    ))
                }
                {
                    order.items.length > 3 && 
                    <View style={styles.extraProducts}>
                        <Feather name="plus" size={s(14)} color="black" />
                        <AppText>{order.items.length - 3}</AppText>
                    </View>
                }
            </View>
            <View style={styles.orderFooter}>
                <AppText variant='caption' weight='medium'>Total: ${order.totalPrice}.00</AppText>
                <TouchableOpacity
                    style={styles.detailButton}
                    accessibilityRole='button'
                    accessibilityLabel='Order detail'
                    onPress={() => navigation.navigate("OrderStack", {
                        screen: "OrderDetailScreen",
                        params: { orderId: order.id}
                    })}
                    hitSlop={vs(5)}
                >
                    <AppText variant='small' color='textGray'>Order Details</AppText>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default OrderCard

const styles = StyleSheet.create({
    orderContainer: {
        marginBottom: vs(10),
        padding: vs(10),
        backgroundColor: APP_COLORS.light,
        borderRadius: APP_TYPOGRAPHY.sizes.md,
        borderWidth: 1,
        borderColor: APP_COLORS.backgroundGray,
    },
    imageContainer: {
        width: s(40),
        height: s(40),
        marginRight: s(5),
        backgroundColor: APP_COLORS.backgroundGray
    },
    orderHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'flex-start'
    },
    productList: {
        flexDirection: "row",
        marginVertical: vs(10)
    },
    extraProducts: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: s(5)
    },
    image: {
        width: "100%",
        height: "100%",
    },
    orderFooter: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    detailButton: {
        backgroundColor: APP_COLORS.backgroundGray,
        paddingHorizontal: s(10),
        paddingVertical: vs(5),
        borderRadius: APP_TYPOGRAPHY.sizes.md,
    }
})