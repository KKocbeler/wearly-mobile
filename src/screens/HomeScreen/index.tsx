import {  FlatList, StyleSheet } from 'react-native'
import AppSafeView from '../../components/AppSafeView'
import { vs } from 'react-native-size-matters'
import ProductCard from '../../components/ProductCard'
import HomeSearch from './HomeSearch'
import HomeCategories from './HomeCategories'
import HomeSlider from './HomeSlider'
import HomeProductType from './HomeProductTye'
import { PRODUCTS } from '../../constants/products'

const HomeScreen = () => {
    return (
        <AppSafeView fullScreen top style={{paddingBottom: 0}}>
            <HomeSearch />
            <FlatList
                data={PRODUCTS}
                numColumns={2}
                keyExtractor={(item) => item.id}
                columnWrapperStyle={{
                    justifyContent: "space-between",
                    marginVertical: vs(10)
                }}
                ListHeaderComponent={
                    <>
                        <HomeCategories />
                        <HomeSlider />
                        <HomeProductType />
                    </>
                }
                renderItem={({item}) => <ProductCard style={{width: "49%"}} product={item}/>}
                showsVerticalScrollIndicator= {false}
            />
        </AppSafeView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})