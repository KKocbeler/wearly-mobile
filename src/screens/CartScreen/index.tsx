import { ScrollView, View } from 'react-native'
import AppSafeView from '../../components/AppSafeView'
import { FlatList } from 'react-native-gesture-handler'
import { s, vs } from 'react-native-size-matters'
import AppButton from '../../components/AppButton'
import PriceRow from './PriceRow'
import Accordion from './Accordion'
import ProductCard from './ProductCard'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { CartItem } from '../../types/cartItem'
import AppText from '../../components/AppText'
import { Ionicons } from '@expo/vector-icons'
import { APP_COLORS } from '../../themes/appColors'
import { useNavigation } from '@react-navigation/native'

const CartScreen = () => {
    const items  = useSelector((state: RootState) => state.cartSlice.items)
    const navigation = useNavigation<any>();
    return (
        <AppSafeView fullScreen top={false} bottom={false}>
            <ScrollView>
            {
                items.length > 0 ? (
                    <>
                        <FlatList<CartItem>
                            data={items}
                            keyExtractor={(item) => item.productId}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => <ProductCard product={item}/>}
                        />
                        <View style={{marginTop: "auto"}}>
                            <Accordion title='Prome Code' iconName='pricetag'/>
                            <Accordion title='Loyalty Points / Earning Rewards' iconName='bag-check-outline'/>
                            <View style={{marginTop: vs(10), marginBottom: vs(14)}}>
                                <PriceRow title='Order Total' price={420} textColor='textGray'/>
                                <PriceRow title='Total Amount' price={420} style={{borderBottomWidth: 0}}/>
                            </View>
                            <AppButton 
                                title='Proceed to Payment'
                                variant='primary'
                                size='lg'
                                fullWidth
                                textVariant='caption'
                                onPress={() => {}}
                                accessibilityRole="button"
                                accessibilityLabel="Proceed to payment"
                                accessibilityHint="Navigates to the payment screen"
                            />
                        </View>
                    </>
                ) : (
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingHorizontal: s(20),
                        }}
                    >
                    <Ionicons
                        name="bag-handle-outline"
                        size={s(90)}
                        color={APP_COLORS.textDark}
                    />
                    <AppText
                        style={{
                        marginTop: vs(15),
                        fontSize: s(16),
                        textAlign: 'center',
                        }}
                    >
                        Your basket is empty
                    </AppText>
                    <AppText
                        style={{
                        marginTop: vs(6),
                        fontSize: s(13),
                        color: APP_COLORS.textDark,
                        textAlign: 'center',
                        }}
                    >
                        Start shopping and add items to your cart
                    </AppText>
                    <AppButton
                        title="Start Now!"
                        variant='outline'
                        onPress={() => navigation.navigate('HomeScreen')}
                        style={{paddingHorizontal: s(32), marginTop: vs(12)}}
                        accessibilityRole='button'
                        accessibilityLabel='Homescreen button'
                    />
                    </View>
                )
            }
            </ScrollView>
        </AppSafeView>
    )
}

export default CartScreen
