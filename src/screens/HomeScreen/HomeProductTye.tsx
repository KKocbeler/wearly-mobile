import { FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { APP_TYPOGRAPHY } from '../../themes/appTypography'
import { s, vs } from 'react-native-size-matters'
import { APP_COLORS } from '../../themes/appColors'
import AppText from '../../components/AppText'

const filterType = [
    {label: "Popular", },
    {label: "New", },
    {label: "Summer", },
]
const HomeProductType = () => {
    const [activeType, setActiveType] = useState("Popular")

    return (
        <FlatList 
            data={filterType}
            keyExtractor={(item) => item.label}
            horizontal
            style={{marginTop: vs(14)}}
            renderItem={({item}) => (
                <TouchableOpacity
                    accessibilityLabel={item.label}
                    accessibilityRole='button'
                    accessibilityHint={`Changes products to ${item.label} type`}
                    onPress={() => {setActiveType(item.label)}}
                    style={{
                        paddingVertical: vs(3),
                        paddingHorizontal: s(8),
                        borderRadius: APP_TYPOGRAPHY.sizes.lg,
                        marginRight: 10,
                        backgroundColor: item.label === activeType ? APP_COLORS.primary : APP_COLORS.light,
                    }}
                >
                    <AppText variant='small' color={item.label === activeType ? 'light' : 'textDark'}>
                        {item.label}
                    </AppText>
                </TouchableOpacity>
            )}
        />
    )
}

export default HomeProductType

const styles = StyleSheet.create({})