import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
import AppTextInput from '../../components/AppTextInput'
import { APP_COLORS } from '../../themes/appColors'
import { s, vs } from 'react-native-size-matters'
import { APP_TYPOGRAPHY } from '../../themes/appTypography'

const HomeSearch = () => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.homeSearchForm}>
                <View style={styles.searchIconWrapper}>
                    <FontAwesome5  name="search" size={s(20)} color={APP_COLORS.primary} />
                </View>
                <AppTextInput style={{paddingLeft: s(40)}} value='' onChangeText={() => {}}></AppTextInput>
            </View>
            <TouchableOpacity
                style={styles.notificationButton}
                accessibilityRole='button'
                accessibilityHint=''
                accessibilityLabel='Notice button'
                onPress={() => {}}
            >
                <FontAwesome5 name="bell" size={s(20)} color={APP_COLORS.primary} />
            </TouchableOpacity>
        </View>
    )
}

export default HomeSearch

const styles = StyleSheet.create({
        headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: s(10),
        paddingBottom: vs(10)
    },
    searchIconWrapper: {
        position: "absolute",
        zIndex: 1,
        top: 0,
        bottom: 0,
        left: s(10),
        justifyContent: "center",
    },
    homeSearchForm: {
        position: "relative",
        flex: 1
    },
    notificationButton: {
        paddingVertical: vs(10),
        paddingHorizontal: s(12),
        borderRadius: APP_TYPOGRAPHY.sizes.sm,
        backgroundColor: APP_COLORS.light
    },
})