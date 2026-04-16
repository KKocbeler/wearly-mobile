import { View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import AppText from '../../../../components/AppText'
import { APP_COLORS } from '../../../../themes/appColors'
import { s, vs } from 'react-native-size-matters'
import { APP_TYPOGRAPHY } from '../../../../themes/appTypography'
import { ORDERS } from '../../../../constants/orders'
import OrderStatus from '../OrderStatus'
import AppSafeView from '../../../../components/AppSafeView'
import OrderTitles from './OrderTitles'
import { Feather } from '@expo/vector-icons'

const OrderDetailScreen = () => {
    const navigation = useNavigation<any>();
    const route = useRoute()
    const { orderId } = route.params as { orderId: string }
    const order = ORDERS.find(order => order.id === orderId)
    const gstPrice = 8.99;
    if (!order) {
        return (
            <View style={styles.center}>
                <AppText>Order not found</AppText>
            </View>
        )
    }

    return (
        <AppSafeView style={{paddingTop: vs(20)}} bottom>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.orderHeader}>
                    <AppText weight="bold">
                        Order #{order.id}
                    </AppText>
                    <OrderStatus  status={order.status}/>
                </View>
                <View>
                    <OrderTitles title='Address'/>
                    <View style={styles.fullAddress}>
                        <AppText variant='small'>
                            7895 West Sunset BoulevardSuite 214, Building CLos Angeles, CA 90028-6543 United States of America
                        </AppText>
                    </View>
                </View>
                <View style={styles.section}>
                    <OrderTitles title='Products'/>
                    {order.items.map((item) => (
                        <TouchableOpacity
                            key={item.productId} 
                            style={styles.item}
                            accessibilityRole='button'
                            accessibilityLabel={`${item.title}'s detail`}
                            onPress={() => navigation.navigate("MyStack", {
                                screen: "ProductDetailScreen",
                                params: {productId: item.productId}
                            })}
                        >
                            <Image
                                source={item.image}
                                style={styles.image}
                            />

                            <View style={{ marginLeft: s(10), justifyContent: "space-between", flex: 1 }}>
                                <View style={styles.nameSection}>
                                    <AppText variant="caption" weight='medium'>{item.title}</AppText>
                                    <AppText variant="small">({item.variant.color}, {item.variant.size})</AppText>
                                </View>
                                <View style={styles.priceSection}>
                                    <AppText variant="small"> {item.quantity} x ${item.price}.00</AppText>
                                    <AppText variant="caption" weight='bold'> ${item.sum}.00</AppText>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
                <View>
                    <OrderTitles title='Payment Method'/>
                    <View style={styles.paymentMethodsBody}>
                        <Feather name="credit-card" size={24} color="black" />
                        <View>
                            <AppText variant='caption'>Debit Card</AppText>
                            <AppText variant='caption'>**** **** **** **** 1009</AppText>
                        </View>
                        <AppText variant='caption'>${order.totalPrice}.00</AppText>
                    </View>
                </View>
                <View style={styles.orderSummaryView}>
                    <View style={styles.summaryRow}>
                        <AppText variant="caption" >Subtotal</AppText>
                        <AppText variant='caption'>${order.totalPrice}.85</AppText>
                    </View>
                    <View style={styles.summaryRow}>
                        <AppText variant="caption" >GST (%15)</AppText>
                        <AppText variant='caption'>${gstPrice}</AppText>
                    </View>
                    <View style={[styles.summaryRow, {marginTop: vs(5)}]}>
                        <AppText weight="bold">Total</AppText>
                        <AppText weight='bold'>${order.totalPrice}.85</AppText>
                    </View>
                </View>
            </ScrollView>
        </AppSafeView>
    )
}

export default OrderDetailScreen

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    orderHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

        marginBottom: vs(10),
    },
    fullAddress: {
        paddingHorizontal: vs(8),
        paddingVertical: vs(12),

        backgroundColor: APP_COLORS.light,
        borderRadius: APP_TYPOGRAPHY.sizes.md,
    },
    section: {
        marginTop: vs(10),
    },
    paymentMethodsBody: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

        paddingVertical: vs(8),
        paddingHorizontal: vs(12),

        backgroundColor: APP_COLORS.light,
        borderRadius: APP_TYPOGRAPHY.sizes.md,
    },
    nameSection: {
        flexDirection: "row",
        alignItems: "baseline",

        gap: s(5),
    },
    priceSection: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    item: {
        flexDirection: "row",

        padding: vs(8),
        marginBottom: vs(10),

        backgroundColor: APP_COLORS.light,
        borderRadius: APP_TYPOGRAPHY.sizes.md,
    },
    image: {
        width: s(50),
        height: s(50),

        borderRadius: 8,
    },
    orderSummaryView: {
        marginTop: vs(20),
        padding: vs(12),

        backgroundColor: APP_COLORS.light,
        borderRadius: APP_TYPOGRAPHY.sizes.md,

        gap: vs(5),
    },
    summaryRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
})