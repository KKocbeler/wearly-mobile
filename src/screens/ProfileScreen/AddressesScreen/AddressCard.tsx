import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppText from '../../../components/AppText'
import { Feather } from '@expo/vector-icons'
import { APP_COLORS } from '../../../themes/appColors'
import { s, vs } from 'react-native-size-matters'
import { APP_TYPOGRAPHY } from '../../../themes/appTypography'
import { useAddresses } from '../../../hooks/useAddresses'
import { AddressProps } from '../../../types/addresses'

interface AddressCardProps {
    item: AddressProps;
    handleAdressEdit: (address: AddressProps) => void; 
}

const AddressCard = ({item, handleAdressEdit}: AddressCardProps) => {
    const { deleteAddress, setDefaultAddress } = useAddresses();
    return (
        <TouchableOpacity 
            style={ [styles.addressCard, {borderColor:item.isDefault ? APP_COLORS.primary : APP_COLORS.border}] }
            onPress={() => setDefaultAddress(item.id)}
        >
            <View>
                <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: vs(4)}}>
                    <AppText variant='subtitle' weight='medium'>{item.title}</AppText>
                    <View style={{flexDirection: "row", alignItems: "center", marginRight: s(6)}}>
                        <TouchableOpacity
                            onPress={() => handleAdressEdit(item)}
                        >
                            <Feather name="edit" size={s(14)} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => deleteAddress(item.id)}
                        >
                            <Feather name="trash-2" size={s(14)} color="black" />
                        </TouchableOpacity>
                    </View> 
                </View>
                
                <AppText variant='caption' numberOfLines={3}>{item.fullAddress}</AppText>
            </View>
        </TouchableOpacity>
    )
}

export default AddressCard

const styles = StyleSheet.create({
    addressCard :{
        borderWidth: 1, 
        borderRadius: APP_TYPOGRAPHY.sizes.md, 
        paddingVertical: vs(8), 
        paddingHorizontal: s(10),
        marginBottom: vs(15)
    },
})