import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppText from '../../../components/AppText'
import { Feather } from '@expo/vector-icons'
import { s, vs } from 'react-native-size-matters'
import { APP_TYPOGRAPHY } from '../../../themes/appTypography'
import { APP_COLORS } from '../../../themes/appColors'
import AppButton from '../../../components/AppButton'

interface EmptyAddressProps {
    setVisible:  React.Dispatch<React.SetStateAction<boolean>>
}

const EmptyAddress = ({setVisible}: EmptyAddressProps) => {
  return (
    <View style={styles.emptyCard}>
        <Feather name="map-pin" size={s(64)} color={APP_COLORS.textGray}/>
        <AppText style={{marginTop: vs(5)}} variant='subtitle' weight='medium' color='textGray'>No addresses yet</AppText>
        <AppButton
            title='Add New Address'
            onPress={() => setVisible(true)}
            variant='primary'
            size='sm'
            style={{marginTop: vs(10)}}
            accessibilityLabel='Add new address'
        />
    </View>
  )
}

export default EmptyAddress

const styles = StyleSheet.create({
    emptyCard: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    emptyCardButton: {
        flexDirection: "row",
        alignItems: "center",
        gap: s(5),
        marginTop: vs(20),
        borderWidth: 1,
        borderColor: APP_COLORS.black,
        borderRadius: APP_TYPOGRAPHY.sizes.sm,
        paddingVertical: vs(6),
        paddingHorizontal: s(10)
    }

})