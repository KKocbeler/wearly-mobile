import { FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppText from '../../components/AppText'
import { CATEGORIES } from '../../constants/categories'
import { s, vs } from 'react-native-size-matters'
import { APP_COLORS } from '../../themes/appColors'

const HomeCategories = () => {
    return (
        <View style={styles.categoriesContainer}>
            <FlatList 
                data={CATEGORIES}
                horizontal
                snapToInterval={s(55)}
                decelerationRate="fast"
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.categoryButton}
                        accessibilityLabel={item.label}
                        accessibilityRole='button'
                        onPress={() => {}}
                    >
                        <View style={{
                            width: s(40),
                            height: s(40),
                            borderRadius: 999,
                            backgroundColor: APP_COLORS.light,
                            justifyContent: 'center',
                            alignItems: 'center',}}
                        >
                            <Image 
                                source={item.src} 
                                resizeMode='cover' 
                                accessibilityLabel={`${item.label} icon`}
                                style={{width: s(25), height: vs(25)}}
                            />
                        </View>
                        <AppText variant='small' numberOfLines={1}>{item.label}</AppText>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default HomeCategories

const styles = StyleSheet.create({
    categoriesContainer: {
        marginVertical: vs(10)
    },
    categoryButton: {
        width: s(45),
        marginRight: s(8),
        alignItems: "center",
        gap: s(3)
    },
})