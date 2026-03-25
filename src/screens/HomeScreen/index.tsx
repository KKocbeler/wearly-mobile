import {  FlatList, StyleSheet } from 'react-native'
import AppSafeView from '../../components/AppSafeView'
import { vs } from 'react-native-size-matters'
import ProductCard from '../../components/ProductCard'
import HomeSearch from './HomeSearch'
import HomeCategories from './HomeCategories'
import HomeSlider from './HomeSlider'
import HomeProductType from './HomeProductList'

const HomeScreen = () => {
    return (
        <AppSafeView fullScreen>
            <HomeSearch />
            <FlatList
                data={[1,2,3,4,5,6]}
                numColumns={2}
                keyExtractor={(item) => item.toString()}
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
                renderItem={() => <ProductCard style={{width: "49%"}} />}
                showsVerticalScrollIndicator= {false}
            />
        </AppSafeView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})