import { ScrollView, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import AppSafeView from '../../components/AppSafeView'
import { moderateScale, vs } from 'react-native-size-matters'
import { PRODUCTS } from '../../constants/products'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../../store/reducers/CartSlice'
import { ProductType } from '../../types/products'
import ProductImage from './ProductImage'
import ProductInfoHeader from './ProductInfoHeader'
import ColorSelector from './ColorSelector'
import SizeSelector from './SizeSelector'
import ProductDescription from './ProductDescription'
import ProductMeta from './ProductMeta'
import RelatedProducts from './RelatedProducts'
import ProductActions from './ProductActions'
import { createCartItem } from '../../utils/createCartItems'

const ProductDetailScreen = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation<any>();
    const route = useRoute()
    const { productId } = route.params as any
    const [selectedProduct, setSelectedProduct] = useState<ProductType>();
    const [activeColor, setActiveColor] = useState<string | null>(null)
    const [activeSize, setActiveSize] = useState<string | null>(null)

    
    useEffect(() => {
        const chosenProduct = PRODUCTS.find(product => product.id === productId)
        setSelectedProduct(chosenProduct)

        if(chosenProduct) {
            setActiveColor(chosenProduct?.colors[0].name ?? null)
            setActiveSize(chosenProduct?.sizes[0] ?? null)
        }
    }, [productId])

    const handleAddToCart = () => {
        if(!selectedProduct || !activeColor || !activeSize) return;

        dispatch(addItemToCart(createCartItem(selectedProduct, activeColor, activeSize)))
    }

    const handleBuyNow = () => {
        if(!selectedProduct || !activeColor || !activeSize) return;
        
        handleAddToCart()
        navigation.navigate("BottomTabs", {screen: "CartScreen"})
    }

    return (
        <>
            <AppSafeView fullScreen >
                <View style={{position: 'relative'}}>
                    <ScrollView contentContainerStyle={{paddingBottom: moderateScale(100)}} showsVerticalScrollIndicator={false}>
                        <ProductImage 
                            image={selectedProduct?.image} 
                            title={selectedProduct?.title} 
                        />
                        <ProductInfoHeader 
                            price={selectedProduct?.price}
                            rating={selectedProduct?.rating}
                            title={selectedProduct?.title}
                        />
                        <View style={{marginVertical: vs(10)}}>
                            <ColorSelector colors={selectedProduct?.colors} activeColor={activeColor} setActiveColor={setActiveColor}/>
                            <SizeSelector sizes={selectedProduct?.sizes} activeSize={activeSize} setActiveSize={setActiveSize}/>
                        </View>
                        <ProductDescription />
                        <ProductMeta />
                        <RelatedProducts />
                    </ScrollView>
                </View>
            </AppSafeView>
            <ProductActions handleAddToCart={handleAddToCart} handleBuyNow={handleBuyNow}/>
        </>
    )
}

export default ProductDetailScreen
