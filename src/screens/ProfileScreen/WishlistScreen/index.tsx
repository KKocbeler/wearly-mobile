import { FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppSafeView from '../../../components/AppSafeView'
import ProductCard from '../../../components/ProductCard'
import { vs } from 'react-native-size-matters'
import { ProductType } from '../../../types/products'
import { PRODUCTS } from '../../../constants/products'
import { useWishlist } from '../../../context/WishlistContext'


const WishlistScreen = () => {
    const { wishlistIds } = useWishlist()
    const [whishlist, setWishlist] = useState<ProductType[]>([]);

    useEffect(() => {
        setWishlist(PRODUCTS.filter(product => wishlistIds.includes(product.id)));
    }, [wishlistIds]);

    return (
        <AppSafeView fullScreen bottom>
            <FlatList<ProductType>
                showsVerticalScrollIndicator={false}
                data={whishlist}
                keyExtractor={(item) => item.id}
                numColumns={2}
                columnWrapperStyle={{
                    justifyContent: "space-between",
                    marginVertical: vs(10)
                }}
                renderItem={({ item }) =>
                    <ProductCard  
                        product={item} 
                        style={{width: "48%"}}
                    />
                }
            />
        </AppSafeView>
    )
}

export default WishlistScreen

const styles = StyleSheet.create({})